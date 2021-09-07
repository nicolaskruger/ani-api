
import { useEffect, useState } from "react"
import { useAppDispatch } from "../../../app/hooks";
import { useQuerySearch } from "../../../hooks";
import { searchAsyncAction } from "../../../reducer";
import { SearchDisplaySection, SearchHeader, SearchInputSection, SearchPaginatorSection } from "./section"

const SearchScreen = () => {

    const query = useQuerySearch();

    const { name, page } = query;

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(searchAsyncAction(query))
    }, [])

    useEffect(() => {
        dispatch(searchAsyncAction(query))
    }, [name, page])

    return (
        <div>
            <SearchHeader />
            <SearchInputSection />
            <SearchDisplaySection />
            <SearchPaginatorSection />
        </div>
    )
}

export { SearchScreen }