export async function fetchData (limit, offset) {
  const res = await fetch(`http://127.0.0.1:8000/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
  if (!res.ok) {
    
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return {props : {data }}
}