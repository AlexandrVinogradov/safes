import getConfig from 'next/config'
import { isObjectEmpty } from './isObjectEmpty'

type EndpointType = 'content' | 'categories' | 'products' | 'extra_value' | 'instructions' | 'news' | 'manufacturers'
type ObjectType = Record<string, string>
type ConfigType = { serverRuntimeConfig: ObjectType; publicRuntimeConfig: ObjectType }

const getRightConfig = () => {
	const { serverRuntimeConfig, publicRuntimeConfig }: ConfigType = getConfig()

	if (!isObjectEmpty(serverRuntimeConfig)) return serverRuntimeConfig
	if (!isObjectEmpty(publicRuntimeConfig)) return publicRuntimeConfig

	// TODO: error handle
	return {}
}

const getUrl = (config: ObjectType, endpoint: EndpointType, queryParams?: Record<string, string>) => {
	for (const key in config) {
		if (key.toLowerCase().includes(endpoint)) {
			let path = config[key]

			if (queryParams) {
				path = path + '?'
				for (const key in queryParams) {
					path = path + `${key}=${queryParams[key]}&`
				}
			}
			return path
		}
	}

	return ''
}

export const getClientServerUrl = (endpoint: EndpointType, queryParams?: Record<string, string>) => {
	const config = getRightConfig()
	const url = getUrl(config, endpoint, queryParams)

	return url
}
