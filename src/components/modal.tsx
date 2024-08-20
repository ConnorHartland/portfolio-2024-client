import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Import the syntax highlighting style

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	markdownFile: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, markdownFile }) => {
	const [markdownContent, setMarkdownContent] = useState<string>("");

	useEffect(() => {
		if (isOpen && markdownFile) {
			fetch(markdownFile)
				.then((response) => response.text())
				.then((text) => setMarkdownContent(text));
		}
	}, [isOpen, markdownFile]);

	const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
		// If the target of the click is the background div, close the modal
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const components = {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		code({ inline, className, children, ...props }: any) {
			const match = /language-(\w+)/.exec(className || "");
			return !inline && match ? (
				<SyntaxHighlighter
					style={darcula} // Apply the syntax highlighting style
					language={match[1]}
					PreTag="div"
					{...props}
				>
					{String(children).replace(/\n$/, "")}
				</SyntaxHighlighter>
			) : (
				<code className={className} {...props}>
					{children}
				</code>
			);
		},
	};

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
			onClick={handleBackgroundClick} // Close when background is clicked
		>
			<div className="p-8 rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
				<button
					onClick={onClose}
					className="absolute top-2 right-4 text-gray-500 hover:text-gray-800"
				>
					Close
				</button>
				<ReactMarkdown
					className="prose bg-slate-800 p-4 rounded-lg"
					components={{ ...ChakraUIRenderer(), ...components }}
				>
					{markdownContent}
				</ReactMarkdown>
			</div>
		</div>
	);
};

export default Modal;
