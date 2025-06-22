document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('recipe-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      const newRecipe = {
        name: formData.get('name'),
        description: formData.get('description'),
        ingredients: formData.get('ingredients'),
        steps: formData.get('steps'),
        category: formData.get('category'),
        image: formData.get('image') ? formData.get('image').name : null,
      };

       let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

      recipes.push(newRecipe);

      localStorage.setItem('recipes', JSON.stringify(recipes));

      console.log(` New recipe "${newRecipe.name}" added to localStorage.`);  

      alert(" Recipe added successfully!");

      form.reset();

      const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
      console.log(savedRecipes);
    });
  }
});
