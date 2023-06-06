import {useState, useEffect} from "react";
import { getAllCategories } from "../api";
import {CategoryList} from "../components/categorylist";
import {Preloader} from "../components/preloader";
import { Search } from "../components/search";

function Home () {
    const [catalog, setCatalog] = useState([])
    const[filteredCatalog, setFilteredCatalog] = useState([]);

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) => 
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(data.categories);
        });
    },[]);

    return (
        <>
        <Search cb={handleSearch}/>
        {!catalog.length ? <Preloader/> : <CategoryList catalog={filteredCatalog}/>}
        </>
    );
}

export {Home};