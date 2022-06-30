import React, { useState } from 'react'
import Categories from './Categories'
import Card from './Card'
import data from './data.js'

export default function Main() {

    const categories = [...new Set(data.map(item => item.category))]

    const [category, setCategory] = useState('')

    function changeCategory(categoryName) {
        setCategory(categoryName)
    }

    return (
        <main className='main'>
            <Categories category={category} changeCategory={changeCategory} categories={categories} />
            <div className='menu'>
                {
                    category ?
                        data.filter(card => card.category === category).map(card => <Card key={card.id} {...card} />)
                        :
                        data.map(food => <Card {...food} />)
                }
            </div>
        </main>
    )
}
