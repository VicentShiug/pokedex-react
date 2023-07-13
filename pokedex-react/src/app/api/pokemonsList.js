export async function fetchData (pageNumber) {
  const res = await fetch(`http://127.0.0.1:8000/api/v2/pokemon/?limit=20&offset=${pageNumber}`)
  if (!res.ok) {
    
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}