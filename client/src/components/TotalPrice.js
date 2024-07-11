import React from 'react';
import { useSelector } from 'react-redux';
import './TotalPrice.css';

const TotalPrice = () => {
    const selectedMeals = useSelector(state => state.meals.selectedMeals);

    const totalPrice = selectedMeals.reduce((total, meal) => {
        const mealPrice = meal.price;
        const drinkPrice = meal.selectedDrink ? meal.selectedDrink.price : 0;
        return total + mealPrice + drinkPrice;
    }, 0);

    const gst = totalPrice * 0.18;
    const totalWithGst = totalPrice + gst;

    return (
        <div className="total-price-slip">
            <h2>Receipt</h2>
            <div className="items">
                {selectedMeals.map((meal, index) => (
                    <div key={index} className="item">
                        <div className="item-details">
                            <span>{meal.title} (Person {meal.person})</span>
                            <span>${meal.price.toFixed(2)}</span>
                        </div>
                        {meal.selectedDrink && (
                            <div className="item-details">
                                <span>{meal.selectedDrink.title}</span>
                                <span>${meal.selectedDrink.price.toFixed(2)}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="summary">
                <div className="summary-item">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                    <span>GST (18%)</span>
                    <span>${gst.toFixed(2)}</span>
                </div>
                <div className="summary-item total">
                    <span>Total</span>
                    <span>${totalWithGst.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default TotalPrice;