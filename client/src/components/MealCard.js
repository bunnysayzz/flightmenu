import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMeal, removeMeal } from '../redux/actions';
import DrinkSelector from './DrinkSelector';
import './MealCard.css';

const MealCard = ({ meal }) => {
    const dispatch = useDispatch();
    const selectedPerson = useSelector(state => state.meals.selectedPerson);
    const [selectedDrink, setSelectedDrink] = useState(null);

    const handleAddMeal = () => {
        dispatch(addMeal(meal, selectedDrink, selectedPerson));
    };

    const handleRemoveMeal = () => {
        dispatch(removeMeal(meal.id, selectedPerson));
    };

    const handleSelectDrink = (drink) => {
        setSelectedDrink(drink);
    };

    return (
        <div className="meal-card">
            <div className="meal-card-image">
                <img src={meal.img} alt={meal.title} />
            </div>
            <div className="meal-card-content">
                <h3>{meal.title}</h3>
                <p>Starter: {meal.starter}</p>
                <p>Desert: {meal.desert}</p>
                <p>Price: ${meal.price}</p>
                <DrinkSelector mealId={meal.id} drinks={meal.drinks} onSelectDrink={handleSelectDrink} />
                <div className="meal-card-buttons">
                    <button onClick={handleAddMeal}>Add Meal</button>
                    <button onClick={handleRemoveMeal}>Remove Meal</button>
                </div>
            </div>
        </div>
    );
};

export default MealCard;