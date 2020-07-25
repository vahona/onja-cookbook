console.log('work')

// Grabing some element which I might need for adding new ingredient 
const ingredient = document.querySelector('.recipe_ingredient');
const form = document.querySelector('form');
const itemList = document.querySelector('#ingredient_to_cook');
const addNewIngredient = document.querySelector('.ingredient-lis');

// Add submit event 
 window.addEventListener('submit', addIngredient);


// Creating function for add ingredient 

const addIngredient = (e) => {
  e.preventDefault();
  e.stopPropagation();

  // Get input value

  let newIngredient = document.getElementsByClassName('list').value;

    // Creating html
    const myHTML = `
  <div class = "new_ingredient">
    <ul class = "step-list">
      <li class = "list">
        <input class="recipe_ingredient" type="text" id="name-of-ingredient" name="name-ingredient" placeholder="Enter ingredients name here" required />
      </li>
    </ul>
  </div>`;
  e.target = myHTML;
  const addnewIngreadient = document.querySelector('.new_ingredient');
  addnewIngreadient.insertAdjacentElement('beforeend', myHTML);

}


