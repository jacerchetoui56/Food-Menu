import React from 'react'

export default function Card(props) {
    return (
        <div className='food-card'>
            <div className='food-image'>
                <img src={props.img} alt="" />
            </div>
            <div className="food-info">
                <div className="food-title">
                    <h3 className='food-name'>
                        {props.title}
                    </h3>
                    <h3 className="food-price">
                        ${props.price}
                    </h3>
                </div>
                <div className="food-desc">
                    {props.desc}
                </div>
            </div>
        </div>
    )
}
