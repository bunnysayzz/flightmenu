import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMeals } from '../redux/actions';
import MealCard from '../components/MealCard';
import PersonSelector from '../components/PersonSelector';
import TagFilter from '../components/TagFilter';
import TotalPrice from '../components/TotalPrice';
import './HomePage.css';

const HomePage = () => {
    const dispatch = useDispatch();
    const meals = useSelector(state => state.meals.allMeals);
    const tagFilter = useSelector(state => state.meals.tagFilter);
    const [currentPage, setCurrentPage] = useState(1);
    const mealsPerPage = 3;

    useEffect(() => {
        dispatch(fetchMeals());
    }, [dispatch]);

    const filteredMeals = tagFilter
        ? meals.filter(meal => meal.labels.includes(tagFilter))
        : meals;

    const indexOfLastMeal = currentPage * mealsPerPage;
    const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
    const currentMeals = filteredMeals.slice(indexOfFirstMeal, indexOfLastMeal);

    const totalPages = Math.ceil(filteredMeals.length / mealsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="homepage-container">
            <div className="main-content">
                <TagFilter />
                <div className="meal-list">
                    {currentMeals.map(meal => (
                        <MealCard key={meal.id} meal={meal} />
                    ))}
                </div>
                <div className="pagination-controls">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            Page {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <div className="sidebar">
                <div className="person-selector">
                    <PersonSelector />
                </div>
                <TotalPrice />
            </div>
        </div>
    );
};

export default HomePage;