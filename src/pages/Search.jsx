import { useEffect } from 'react'

export default function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `Search about ${routeParams.query}`

    // Once you have this routeParams.query
    // you could use it for other things, for example:
    // you could use it for fetching data and then
    // keep it in a state for many things
    // fetch(`https://api.ejemplo.com/search/${routeParams.query}`)
  }, [])
  return <h1>Search about {routeParams.query}</h1>
}
