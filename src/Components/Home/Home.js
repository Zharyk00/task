import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"


function Home({ loading, nft }) {
    if (loading) {
        return <h1>loading...</h1>
    }

    return (
        <div className='container'>
            {nft.map(items => {
                return (
                    <div key={items.id}>
                        <img key={items.id} src={items.image_url} alt='some' />
                        <p>{items.name}</p>
                        <Link to={`nft/${items.token_id}`} >Подробнее</Link>
                    </div>

                )
            })}

        </div>
    )
}

export default Home