import '../styles/globals.css'
import Layout from '../components/Layout'
import PageNotFound from './404'
import { PageProvider } from '@/components/PageContext'

function MyApp({ Component, pageProps }) {
	const is404Page = Component === PageNotFound

	if (is404Page) return <PageNotFound />

	return (
		<PageProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</PageProvider>
	)
}

export default MyApp
