import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Home({ loading, nft }) {
    if (loading) {
        return <h1>loading...</h1>
    }

    return (
        <div>{nft.map(items => <div> <img key={items.id} src={items.image_url} alt='some' /><p>{items.name}</p><Link to={`nft/${items.id}`} ><button onClick={console.log('clicked')}>More</button></Link></div>)}</div>



    )
}

export default Home