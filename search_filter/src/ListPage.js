import React from 'react'
import Post from './Post'

const ListPage = ({searchResults}) => {
    const results = searchResults.map(post => {
        return <Post key={post.id} post={post} />
    })
    const content = results?.length ? results : <p>No results found</p>
  return (
    <main>
        {content}
    </main>
  )
}

export default ListPage