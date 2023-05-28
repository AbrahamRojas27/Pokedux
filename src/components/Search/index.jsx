import { useRef } from "react"
import SearchIcon from "./SearchIcon"

const Search = ({search, setSearch}) =>{
    const handleInput = () =>{
        setSearch(searchRef.current.value)
    }

    const searchRef = useRef(null)

    return(
        <div className='search-container'>
            <input className='input-search' type="text" value={search} ref={searchRef} onChange={handleInput}/>
            <button className="search-button">
                <SearchIcon />
            </button>
        </div>
    )
}

export default Search