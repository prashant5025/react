import { getPosts } from "./api/axios";
import { useEffect,useState } from "react";
import SearchBar from "./SearchBar"
import ListPage from "./ListPage"

function App() {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      return json
    }).then(json => {
      setSearchResults(json)
    })
  },[])

  const content = ""

  return (
    <>
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </>
  )
}

export default App;
