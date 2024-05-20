export async function FetchData() {
	const res = await fetch(`http://localhost:4000/memes`)

	return res.json()
}