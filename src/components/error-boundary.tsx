/**
 * Error Boundary Component
 * Requirements: 7.1 - Render initial view within 2 seconds (graceful error handling)
 * 
 * Catches JavaScript errors in child components and displays a fallback UI
 */

import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
	children: ReactNode;
	fallback?: ReactNode;
	sectionName?: string;
}

interface State {
	hasError: boolean;
	error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		// Log error details for debugging
		console.error("ErrorBoundary caught an error:", error, errorInfo);
	}

	handleRetry = (): void => {
		this.setState({ hasError: false, error: null });
	};

	render(): ReactNode {
		if (this.state.hasError) {
			// Custom fallback if provided
			if (this.props.fallback) {
				return this.props.fallback;
			}

			// Default fallback UI
			return (
				<div 
					className="py-16 lg:py-24 flex items-center justify-center"
					role="alert"
					aria-live="assertive"
				>
					<div className="max-w-md mx-auto px-4 text-center">
						<div className="bg-red-50 border border-red-200 rounded-xl p-8">
							<h2 className="text-xl font-semibold text-red-800 mb-2">
								{this.props.sectionName 
									? `Unable to load ${this.props.sectionName}`
									: "Something went wrong"
								}
							</h2>
							<p className="text-red-600 mb-4">
								We encountered an error while loading this section.
							</p>
							<button
								onClick={this.handleRetry}
								className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
								aria-label="Try loading this section again"
							>
								Try Again
							</button>
						</div>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
