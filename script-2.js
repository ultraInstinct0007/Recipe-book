function searchRecipe() {
  const searchValue = document.getElementById('searchInput').value.trim().toLowerCase();
  const recipes = JSON.parse(localStorage.getItem('recipes')) || [];

  const matchedRecipe = recipes.find(recipe => recipe.name.toLowerCase() === searchValue);

  if (matchedRecipe) {
    localStorage.setItem('matchedRecipe', JSON.stringify(matchedRecipe));
    window.location.href = 'Recipe.html';
  } else {
    alert('Recipe not found!');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const matchedRecipe = JSON.parse(localStorage.getItem('matchedRecipe'));

  if (matchedRecipe) {
    const title = document.getElementById('dish-title');
    const featuredDishes = document.getElementById('featuredDishes');
    if (title) title.style.display = 'none';
    if (featuredDishes) featuredDishes.style.display = 'none';

    const resultContainer = document.getElementById('searchResult');

    resultContainer.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; margin-top: 30px; padding: 20px;">
        <div style="border: 1px solid #ccc; border-radius: 16px; box-shadow: 0 6px 12px rgba(0,0,0,0.1); padding: 20px; max-width: 500px; width: 100%; background-color: #fff;">
          <h2 style="color: #e76f51; text-align: center;">${matchedRecipe.name}</h2>
          <p><strong>Description:</strong> ${matchedRecipe.description}</p>
          <p><strong>Ingredients:</strong> ${matchedRecipe.ingredients}</p>
          <p><strong>Preparation Steps:</strong> ${matchedRecipe.steps}</p>
          ${matchedRecipe.image ? `<img src="${matchedRecipe.image}" alt="${matchedRecipe.name}" style="width: 100%; border-radius: 12px; margin-top: 12px;" />` : ''}
        </div>
      </div>
    `;

    localStorage.removeItem('matchedRecipe');
  }

  // Set up show all recipes button
  const showAllBtn = document.getElementById('showAllBtn');
  if (showAllBtn) {
    showAllBtn.addEventListener('click', function () {
      const featuredDishes = document.getElementById('featuredDishes');
      const dishTitle = document.getElementById('dish-title');
      const allRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

      featuredDishes.innerHTML = '';
      dishTitle.textContent = "ALL RECIPES";

      if (allRecipes.length === 0) {
        featuredDishes.innerHTML = '<p>No recipes found in storage.</p>';
        return;
      }

      const cardContainer = document.createElement('div');
      cardContainer.className = 'card-container2';

      allRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');

        card.innerHTML = `
          ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.name}" />` : ''}
          <h3 class="recipe-card-title">${recipe.name}</h3>
          <p class="recipe-card-description">${recipe.description}</p>
          <button class="view-button" onclick="viewRecipe('${recipe.name}')">View Recipe</button>
        `;

        cardContainer.appendChild(card);
      });

      // Remove old container if any
      const oldContainer = featuredDishes.querySelector('.card-container2');
      if (oldContainer) oldContainer.remove();

      featuredDishes.appendChild(cardContainer);
    });
  }
});

function viewRecipe(recipeName) {
  const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  const matchedRecipe = recipes.find(recipe => recipe.name === recipeName);
  if (matchedRecipe) {
    localStorage.setItem('matchedRecipe', JSON.stringify(matchedRecipe));
    window.location.href = 'Recipe.html';
  } else {
    alert('Recipe not found!');
  }
}

//featured view 
function viewRecipe(recipeName) {
  const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  const matchedRecipe = recipes.find(recipe => recipe.name === recipeName);
  if (matchedRecipe) {
    localStorage.setItem('matchedRecipe', JSON.stringify(matchedRecipe));
    window.location.href = 'Recipe.html';
  } else {
    alert('Recipe not found!');
  }
}
