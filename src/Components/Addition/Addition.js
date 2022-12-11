import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Addition() {
    const { token_id } = useParams();
    const [ids, setIds] = useState([])

    useEffect(() => {
        const fetchRes = async () => {
            const res = await fetch(`https://api.opensea.io/api/v1/assets/?format=json&token_ids=${token_id.toString()}`)
            const data = await res.json()
            console.log(data);
            setIds(data)
        }
        fetchRes()

    }, [])


    return (
        <div>
            <h1>Information</h1>
            {ids.map(item => (
                <>
                    <img src={item.image_url} />
                    <h1>{item.name}</h1>
                    <p>{item.assests}</p>
                </>
            ))}
        </div>
    )
}
