import React from 'react'
import "../styles/card.css"
const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
            <h1>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
        </div>
    )
}

export default Card
