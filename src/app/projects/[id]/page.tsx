export default function Page(props: { params: { id: string } }) {
  return <div className="text-white">{props.params.id}</div>;
}