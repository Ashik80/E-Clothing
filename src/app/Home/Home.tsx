import React from 'react'
import DisplayItem from './DisplayItems'
import Products from './Products'

const Home = () => {
    return (
        <div className="home" style={{padding: "1rem 6rem"}}>
            <DisplayItem />
            <Products />
        </div>
    )
}

export default Home
