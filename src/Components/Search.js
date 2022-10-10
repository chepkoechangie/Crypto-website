function Search({search, setSearch}){
    return(
        <div className='Search'>
            <input
                type={"text"}
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                className="search"
                placeholder='Search...' 
            /> 
            <button className="SearchBtn">Search</button>
        </div>
    )
}

export default Search;