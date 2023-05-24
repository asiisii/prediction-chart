import { createContext, useContext, useState } from 'react'

const PageContext = createContext()

export const PageProvider = ({ children }) => {
	const [pageTitle, setPageTitle] = useState('')

	return (
		<PageContext.Provider value={[pageTitle, setPageTitle]}>
			{children}
		</PageContext.Provider>
	)
}

export const usePageProviderContext = () => useContext(PageContext)
