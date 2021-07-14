import React, { useState } from "react"

import Yelp from "../../util/Yelp"
import BusinessList from "../BusinessList/BusinessList"
import SearchBar from "../SearchBar/SearchBar"

import "./App.css"

function App() {
    const [businesses, setBusinesses] = useState([])
    const searchYelp = async (term, location, sortBy) => {
        setBusinesses(await Yelp.search(term, location, sortBy))
    }
    return (
        <div className="App">
            <h1>ravenous</h1>
            <SearchBar searchYelp={searchYelp} />
            <BusinessList businesses={businesses} />
        </div>
    )
}

export default App
