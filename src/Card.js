import React from 'react'

export default function Card({ img, title, price, desc }) {
    return (
        <div className='food-card'>
            <div className='food-image'>
                <img src={img} alt="" />
            </div>
            <div className="food-info">
                <div className="food-title">
                    <h3 className='food-name'>
                        {title}
                    </h3>
                    <h3 className="food-price">
                        ${price}
                    </h3>
                </div>
                <div className="food-desc">
                    {desc}
                </div>
            </div>
        </div>
    )
}
