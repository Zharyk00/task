import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Pagination from './Components/Pagination/Pagination';
import { Route, Routes } from 'react-router-dom';
import Addition from './Components/Addition/Addition';


function App() {
    const [nft, setNft] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(8)
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
    console.log(nft);
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = nft.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home loading={loading} nft={currentPosts} />} />
                <Route path='nft/:token_id/' element={<Addition />} />
            </Routes>
            <Pagination postsPerPage={postPerPage} totalPosts={nft.length} paginate={paginate} />
        </div>
    );
}

export default App;
