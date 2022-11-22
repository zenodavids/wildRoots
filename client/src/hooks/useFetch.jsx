import { useEffect, useState } from 'react'
// this will give us access to the api key in the .env file
const APIKEY = import.meta.env.VITE_GIPHY_API

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState('')

  const fetchGifs = async () => {
    try {
      // get response from the api and in the fetch paremeters, we enter the api we want to fetch from
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword
          .split(' ')
          .join('')}&limit=1`
      )
      // breaking down the above url, we use the search endpoint, input our apikey, the 'q' here means query, use the split() method to split our string or keyword and use the join()method to it back. the number of gif to search for is 1 (limit=1)

      // now have our query, lets destructure the data from the response
      const { data } = await response.json()

      // if a new gif isnt found...,
      setGifUrl(data[0]?.images?.downsized_medium.url)
    } catch (error) {
      // ... we use a demo one
      setGifUrl(
        'https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284'
      )
    }
  }

  // this will happen whenever the keyword changes
  useEffect(() => {
    // if there is a keyword, we call the fetchGif() function
    if (keyword) fetchGifs()
  }, [keyword])

  return gifUrl
}

export default useFetch
