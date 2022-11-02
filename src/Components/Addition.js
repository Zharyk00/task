import React from 'react'
import { useParams } from 'react-router-dom'


function Addition() {

    let { id } = useParams()
    console.log(id)
    fetch(`https://api.opensea.io/api/v1/assets?format=json?id=${id}`)
        .then(res => res.json()).then(data => console.log(data))

    return (
        <div>Addition</div>
    )
}

export default Addition