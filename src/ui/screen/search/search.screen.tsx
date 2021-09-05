
import { useState } from "react"
import { SearchHeader, SearchInputSection } from "./section"

const SearchScreen = () => {

    const [search, setSearch] = useState("");

    return (
        <div>
            <SearchHeader />
            <SearchInputSection value={search} onChange={setSearch} />
        </div>
    )
}

export { SearchScreen }