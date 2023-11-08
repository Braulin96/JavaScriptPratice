import React from 'react';

const Contexts = () => {
    const drink= 'wine'

    const foo = {
        drink: 'beer',
        getDrink: function() {
            return this.drink;
        }
    };

    return (
        <>
            <p>Drink from foo object: {foo.getDrink()}</p>
            <p>Drink from component state: {drink}</p>
        </>
    );
};

export default Contexts;
