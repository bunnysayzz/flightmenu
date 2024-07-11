import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTagFilter } from '../redux/actions';
import './TagFilter.css';

const TagFilter = () => {
    const dispatch = useDispatch();
    const labels = useSelector(state => state.meals.labels);
    const tagFilter = useSelector(state => state.meals.tagFilter);

    const handleTagClick = (tag) => {
        dispatch(setTagFilter(tag));
    };

    return (
        <div>
            <button
                onClick={() => handleTagClick('')}
                className={tagFilter === '' ? 'active' : ''}
            >
                All
            </button>
            {labels.map(label => (
                <button
                    key={label.id}
                    onClick={() => handleTagClick(label.id)}
                    className={tagFilter === label.id ? 'active' : ''}
                >
                    {label.label}
                </button>
            ))}
        </div>
    );
};

export default TagFilter;