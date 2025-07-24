type Props = {
	children: React.ReactNode;
	className?: string;
};

export default function Container({ children, className = "" }: Props) {
	return <div className={`max-w-4xl mx-auto p-4 ${className}`}>{children}</div>;
}
