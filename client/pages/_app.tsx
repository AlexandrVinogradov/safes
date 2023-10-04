import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd'

export default function App({ Component, pageProps }: AppProps) {
	const theme = {
		token: { colorPrimary: '#40A3D2' },
	}

	return (
		<ConfigProvider theme={theme}>
			<Component {...pageProps} />
		</ConfigProvider>
	)
}
