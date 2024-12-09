import React, { useContext, useState } from 'react';
import "./searchFood.css"
import { assets } from './../../assets/assets';
import { StoreContext } from "../context/StoreContext"; // Import context

const FoodList = () => {
    const { searchResults, searchFoodItems, addToCart } = useContext(StoreContext); // Get values from context
    const [searchQuery, setSearchQuery] = useState('');

    // Function to handle search
    const handleSearch = async () => {
        await searchFoodItems(searchQuery); // Call search function from context
    };

    return (
        <div className="food-list-container">
            <div className="search-bar">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search food..."
                    className="search-input"
                />
                <img
                    src={assets.search_icon}
                    alt="Search"
                    onClick={handleSearch}
                    className="search-icon"
                />
            </div>

            <ul className="food-list">
                {searchResults.map((food) => (
                    <li key={food._id} className="food-item">
                        <div className="food-image">
                            <img src={`/uploads/${food.image}`} alt={food.name} />
                        </div>
                        <div className="food-details">
                            <h3>{food.name}</h3>
                            <p>{food.description}</p>
                            <p className="food-price">Price: ${food.price}</p>
                            <p className="food-category">Category: {food.category}</p>
                            <button onClick={() => addToCart(food._id)}>Add to Cart</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FoodList;
