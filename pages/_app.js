import '../styles/globals.css'
import Layout from '../components/Layout'
import PageNotFound from './404'

function MyApp({ Component, pageProps }) {
	const is404Page = Component === PageNotFound

	if (is404Page) return <PageNotFound />

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
