import React from 'react';

export const Search = ({ value, searchChangeHandler, children }) => {
    return (
        <div className="search">
            <label htmlFor="search" style={{ paddingRight: '5px' }}>
                {children}
            </label>
            <input
                placeholder="Search for..."
                type="text"
                value={value}
                onChange={(e) => searchChangeHandler(e)}
            />
        </div>
    );
};
