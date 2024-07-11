import React, { useState, useEffect } from 'react';

const DrinkSelector = ({ mealId, drinks, onSelectDrink, reset }) => {
    const [selectedDrinkId, setSelectedDrinkId] = useState(null);

    useEffect(() => {
        if (reset) {
            setSelectedDrinkId(null);
        }
    }, [reset]);

    const handleDrinkClick = (drink) => {
        setSelectedDrinkId(drink.id);
        onSelectDrink(drink);
    };

    return (
        <div className="drink-selector">
            {drinks.map(drink => (
                <div
                    key={drink.id}
                    onClick={() => handleDrinkClick(drink)}
                    className={`drink-item ${selectedDrinkId === drink.id ? 'selected' : ''}`}
                >
                    <img src={drink.img} alt={drink.title} className="drink-image" />
                    <span>{drink.title}</span>
                    <span className="drink-price">${drink.price}</span>
                </div>
            ))}
        </div>
    );
};

export default DrinkSelector;