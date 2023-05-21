type PropsType = {
	params: { productName: string }
}

export default function ProductPage(props: PropsType) {
	const { params } = props

	return <div>{params.productName}</div>
}
