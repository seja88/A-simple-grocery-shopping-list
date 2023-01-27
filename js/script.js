// Create a web page that will display a shopping list.

// 1.Create a simple project with HTML, CSS, and JavaScript.
// 2.In your index.js create an array of grocery items to buy such as apples, bananas, milk, bread etc. The items are just simple strings
// 3.In your HTML create a div with id and class list
// 4.Use a for each loop to go through the array of grocery items and create its HTML representation such as this.
// 5.<div class="item">Apples</div>
// 6.<div class="item">Bananas</div>
// 7.<!-- other items... -->
// 8.Set this content as innerHTML of the #list element.

//2.
const groceryItems = ['Apple', 'Oranges','Bananas', 'Milk', 'Protein_bar']
//4.
const newDiv = document.getElementById('list')

groceryItems.forEach(item => {
    const div = document.createElement('div')
    newDiv.appendChild(div)
    div.classList.add('item')
    div.innerHTML += item
});



