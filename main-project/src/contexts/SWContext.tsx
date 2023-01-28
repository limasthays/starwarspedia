import React, { createContext, useEffect, useState } from 'react'
import { People, IPeople } from 'swapi-ts'

type valuesSchemaFav = {
	characters?: IPeople[] | []
	pagination?: number
	previous?: string | null
	next?: string | null
	setPagination?: any
}

type ProviderProps = {
	children: React.ReactNode
}

export const SWContext = createContext<valuesSchemaFav>({})

export const SWContextProvider = ({ children }: ProviderProps) => {
	const [characters, setCharacters] = useState<IPeople[] | []>([])
	const [pagination, setPagination] = useState(1)
	const [next, setNext] = useState<string | null>('')
	const [previous, setPrevious] = useState<string | null>('')

	useEffect(() => {
		async function loadData() {
			const getPeople = await People.getPage(pagination)
			setCharacters(getPeople.results)
			console.log('primeiro get ', getPeople)
			setPrevious(getPeople.previous)
			setNext(getPeople.next)
		}

		loadData()
	}, [pagination])

	const valoresParaPassar = {
		characters,
		pagination,
		next,
		previous,
		setPagination,
	}

	return (
		<SWContext.Provider value={valoresParaPassar}>
			{children}
		</SWContext.Provider>
	)
}