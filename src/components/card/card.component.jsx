import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className={'card-container'}>
        <img 
            alt={"monster"} 
            src={`https://robohash.org/set_set2/bgset_bg1/${props.monster.id}?size=180x180`}/>
        <h1>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>
)