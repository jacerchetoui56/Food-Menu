import React from 'react'


export default function Categories(props) {

    return (
        <div className='categories'>
            <button
                onClick={() => props.changeCategory('')}
                className={`category ${props.category ? '' : 'active'}`} >
                All
            </button>
            {
                props.categories.map(
                    category => <button
                        className={`category ${props.category === category ? 'active' : ''}`}
                        onClick={() => props.changeCategory(category)}>
                        {category}
                    </button>
                )
            }
        </div>
    )
}
