import { getTitleByUrl } from '../../utils/getTitleByUrl'
import { ContentSchema } from '../../contexts/SWContext'
import { nanoid } from 'nanoid'

type GroupInfoProps = {
	sectionTitle: string
	charContentArray: string[]
	rawDataArray: ContentSchema[]
}

export function GroupInfo({
	sectionTitle,
	charContentArray,
	rawDataArray,
}: GroupInfoProps) {
	return (
		<div>
			<h3>{sectionTitle}</h3>
			<ul>
				{charContentArray.map((item) => {
					const filmTitle = getTitleByUrl(item, rawDataArray)

					return (
						<li key={nanoid()} className="text-sm">
							{filmTitle}
						</li>
					)
				})}
			</ul>
		</div>
	)
}