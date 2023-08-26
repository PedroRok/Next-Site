export default function Page(props: {params: {id: string}}) {
	return <div className="text-white">Sexo: {props.params.id}</div>
}
