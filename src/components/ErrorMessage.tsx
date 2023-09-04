import clsx from 'clsx';

interface ErrorMessageProps extends React.HTMLAttributes<HTMLDivElement> {
	error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, className, ...restProps }) => {
	return (
		<div className={clsx('w-full h-full flex-1 flex items-center justify-center', className)} {...restProps}>
			<p className="text-red-500 text-lg">{error}</p>
		</div>
	);
};

export default ErrorMessage;
