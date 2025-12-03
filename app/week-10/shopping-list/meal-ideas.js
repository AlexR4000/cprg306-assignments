"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      const results = await fetchMealIdeas(ingredient);
      setMeals(results);
    }
    if (ingredient) loadMealIdeas();
  }, [ingredient]);

  if (!ingredient) return null;

  return (
    <div className="p-4 border rounded shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">
        Meal Ideas for {ingredient}
      </h2>
      {meals.length === 0 ? (
        <p>No meals found for this ingredient.</p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="flex items-center gap-3 py-2"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-16 h-16 object-cover rounded"
              />
              <span className="font-semibold">{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
