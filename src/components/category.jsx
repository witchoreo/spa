import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";

import { Preloader } from "./preloader";
import {MealList} from "./mealList";

function Category () {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect (() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
        <br></br>
        <br></br>
            <button className="btn brown" onClick={goBack}>
                Go Back
            </button>
            <br></br>
            <br></br>
            {!meals.length ? <Preloader/> : <MealList meals={meals}/>}

        
        </>
    );
}

export {Category};