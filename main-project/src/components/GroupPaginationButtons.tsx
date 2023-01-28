import { useContext } from 'react'
import { SWContext } from '../contexts/SWContext'
import { PaginationButton } from './PaginationButton'

export const GroupPaginationButtons = () => {
	const { pagination, next, previous, setPagination } = useContext(SWContext)
	return (
		<div className="flex justify-evenly">
			<PaginationButton
				title="previous"
				callback={() => {
					if (previous) {
						setPagination(pagination! - 1)
					}
				}}
			/>

			<PaginationButton
				title="next"
				callback={() => {
					if (next) {
						setPagination(pagination! + 1)
					}
				}}
			/>
		</div>
	)
}