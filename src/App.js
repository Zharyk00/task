import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './Components/Home';
import Pagination from './Components/Pagination';
import { Route, Routes } from 'react-router-dom';
import Addition from './Components/Addition';

function App() {
  const [nft, setNft] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostsPerPage] = useState(5)
  useEffect(() => {
    const fetchNft = async () => {
      setLoading(true)
      const res = await fetch('https://api.opensea.io/api/v1/assets?format=json')
      const data = await res.json()
      setNft(data.assets)
      setLoading(false)
    }

    fetchNft()


  }, [])

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = nft.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <Home loading={loading} nft={currentPosts} />
      <Pagination postsPerPage={postPerPage} totalPosts={nft.length} paginate={paginate} />
      <Routes>
        <Route path={`nft/:id`} element={<Addition />} />
      </Routes>
    </div>
  );
}

export default App;
