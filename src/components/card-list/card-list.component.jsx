import React from 'react';
import './card-list.styles.css';

import { Card } from '../card/card.component';

const CardList = ({ monsters }) => {
    console.log()
    return (
        <div className='card-list'>
            
            {(monsters.length > 0) ? monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            )) : <h1>No Record found</h1>}
        </div>
    );
};

export default CardList;