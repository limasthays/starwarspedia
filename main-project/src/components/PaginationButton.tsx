import clsx from 'clsx'

type PaginationButtonProps = {
	title: string
	callback: Function
	disabled: boolean
	isButtonVisible?: boolean
}

export function PaginationButton({
	title,
	callback,
	disabled,
	isButtonVisible,
}: PaginationButtonProps) {
	return (
		<button
			onClick={() => {
				callback()
			}}
			disabled={disabled}
			className={clsx(
				'border border-white hover:border-primary bg-transparent text-xs py-1 px-2 rounded-md hover:text-primary',
				{ hidden: isButtonVisible === false }
			)}
		>
			{title}
		</button>
	)
}
