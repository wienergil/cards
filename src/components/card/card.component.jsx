import React from 'react'
import './card.styles.css'

const Card = (props) => (
    <div className="card-container">
        <img alt="monsterImage" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
        <h1>{props.monster.name}</h1>
        <h3>{props.monster.email}</h3>
    </div>
)

export default Card;