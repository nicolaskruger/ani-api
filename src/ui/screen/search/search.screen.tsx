
import { useEffect, useState } from "react"
import { useAppDispatch } from "../../../app/hooks";
import { useQuerySearch } from "../../../hooks";
import { searchAsyncAction } from "../../../reducer";
import { SearchDisplaySection, SearchHeader, SearchInputSection, SearchPaginatorSection } from "./section"

const SearchScreen = () => {

    const [search, setSearch] = useState("");

    const query = useQuerySearch();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(searchAsyncAction(query))
    }, [])

    useEffect(() => {
        dispatch(searchAsyncAction(query))
    }, [query])

    return (
        <div>
            <SearchHeader />
            <SearchInputSection value={search} onChange={setSearch} />
            <SearchDisplaySection />
            <SearchPaginatorSection />
        </div>
    )
}

export { SearchScreen }