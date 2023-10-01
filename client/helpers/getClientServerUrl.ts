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

const getUrl = (config: ObjectType, endpoint: EndpointType) => {
	for (const key in config) {
		if (key.toLowerCase().includes(endpoint)) return config[key]
	}

	return ''
}

export const getClientServerUrl = (endpoint: EndpointType) => {
	const config = getRightConfig()
	const url = getUrl(config, endpoint)

	return url
}