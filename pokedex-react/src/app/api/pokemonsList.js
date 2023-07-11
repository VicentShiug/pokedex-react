export async function fetchData () {
  const res = await fetch('http://127.0.0.1:8000/api/v2/pokemon/?limit=20&offset=0')
  if (!res.ok) {
    
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}