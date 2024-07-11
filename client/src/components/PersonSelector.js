import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPerson } from '../redux/actions';

const PersonSelector = () => {
    const dispatch = useDispatch();
    const selectedPerson = useSelector(state => state.meals.selectedPerson);

    const handlePersonChange = (event) => {
        dispatch(setPerson(event.target.value));
    };

    return (
        <div>
            <label htmlFor="person-select">Select a person:</label>
            <select id="person-select" value={selectedPerson} onChange={handlePersonChange}>
                <option value="1">Person 1</option>
                <option value="2">Person 2</option>
            </select>
        </div>
    );
};

export default PersonSelector;