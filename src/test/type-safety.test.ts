import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

describe('TypeScript Type Safety', () => {
  // Feature: portfolio-redesign, Property 13: TypeScript type safety - no explicit any types
  // Validates: Requirements 11.1
  it('should have no explicit any types in the codebase', () => {
    // This test verifies that ESLint rule @typescript-eslint/no-explicit-any is enforced
    // by running ESLint and checking for errors
    
    try {
      // Run ESLint on all TypeScript files
      execSync('pnpm lint', { 
        encoding: 'utf-8',
        stdio: 'pipe'
      });
      
      // If ESLint passes, there are no explicit any types
      expect(true).toBe(true);
    } catch (error) {
      // If ESLint fails, check if it's due to explicit any types
      const errorOutput = (error as { stdout?: string; stderr?: string }).stdout || '';
      
      if (errorOutput.includes('no-explicit-any')) {
        throw new Error('Found explicit any types in the codebase. ESLint output:\n' + errorOutput);
      }
      
      // If it's a different error, still fail but with the actual error
      throw error;
    }
  });

  // Additional verification: scan source files for any type annotations
  it('should not contain explicit any type annotations in source files', () => {
    const srcDir = path.join(process.cwd(), 'src');
    const anyTypePattern = /:\s*any\b/;
    const filesWithAny: string[] = [];

    function scanDirectory(dir: string): void {
      const entries = fs.readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          scanDirectory(fullPath);
        } else if (entry.isFile() && (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx'))) {
          const content = fs.readFileSync(fullPath, 'utf-8');
          
          // Check for explicit any types (excluding comments)
          const lines = content.split('\n');
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            // Skip lines that are comments
            if (line.trim().startsWith('//') || line.trim().startsWith('*')) {
              continue;
            }
            
            if (anyTypePattern.test(line)) {
              filesWithAny.push(`${fullPath}:${i + 1}`);
            }
          }
        }
      }
    }

    scanDirectory(srcDir);

    expect(filesWithAny).toEqual([]);
  });
});

describe('TypeScript Strict Mode Compliance', () => {
  // Feature: portfolio-redesign, Property 14: TypeScript strict mode compliance
  // Validates: Requirements 11.2
  it('should compile successfully with strict mode enabled', () => {
    // This test verifies that TypeScript compilation succeeds with strict mode
    // by running tsc --noEmit
    
    try {
      // Run TypeScript compiler in check mode (no emit)
      execSync('pnpm tsc --noEmit', { 
        encoding: 'utf-8',
        stdio: 'pipe'
      });
      
      // If tsc passes, strict mode compliance is verified
      expect(true).toBe(true);
    } catch (error) {
      // If tsc fails, there are type errors
      const errorOutput = (error as { stdout?: string; stderr?: string }).stdout || 
                         (error as { stdout?: string; stderr?: string }).stderr || '';
      
      throw new Error('TypeScript compilation failed with strict mode. Errors:\n' + errorOutput);
    }
  });

  // Verify that strict mode is actually enabled in tsconfig
  it('should have strict mode enabled in tsconfig.app.json', () => {
    const tsconfigPath = path.join(process.cwd(), 'tsconfig.app.json');
    const tsconfigContent = fs.readFileSync(tsconfigPath, 'utf-8');
    
    // Remove comments from JSONC (JSON with Comments)
    const jsonContent = tsconfigContent
      .split('\n')
      .map((line: string) => {
        // Remove single-line comments
        const commentIndex = line.indexOf('//');
        if (commentIndex !== -1) {
          return line.substring(0, commentIndex);
        }
        return line;
      })
      .join('\n')
      // Remove multi-line comments
      .replace(/\/\*[\s\S]*?\*\//g, '');
    
    const tsconfig = JSON.parse(jsonContent);

    expect(tsconfig.compilerOptions.strict).toBe(true);
  });
});
