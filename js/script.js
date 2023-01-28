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
// const groceryItems = ['Apple', 'Oranges','Bananas', 'Milk', 'Protein_bar']
//4.
// const newDiv = document.getElementById('list')

// groceryItems.forEach(item => {
//     const div = document.createElement('div')
//     newDiv.appendChild(div)
//     div.classList.add('item')
//     div.innerHTML += item
// });
//STAGE 2

// const newDiv = document.getElementById('list')
// const groceryItems = {
//     name: ['Apple', 'Oranges','Bananas', 'Milk', 'Protein_bar'],
//     amount: [4,6,2,1,1]
// }

// for(let i = 0; i < groceryItems.name.length; i++) {
//     const divName = document.createElement('div')
//     const divAmount = document.createElement('div')
//     newDiv.appendChild(divName)
//     newDiv.appendChild(divAmount)
//     divName.classList.add(groceryItems.name[i])
//     divName.innerHTML += groceryItems.name[i]
//     divAmount.innerHTML += groceryItems.amount[i]
// }

//STAGE 3

const newDiv = document.getElementById('list')
const select = document.createElement('select')
newDiv.appendChild(select)
select.id = 'selectProduct'

const option1 = document.createElement('option')
select.appendChild(option1)
option1.textContent = 'Apple'
option1.value = 'apple'

const option2 = document.createElement('option')
select.appendChild(option2)
option2.textContent = 'Banana'
option1.value = 'banana'

const option3 = document.createElement('option')
select.appendChild(option3)
option3.textContent = 'Mango'
option1.value = 'mango'

const option4 = document.createElement('option')
select.appendChild(option4)
option4.textContent = 'Pineapple'
option1.value = 'pineapple'

// const userProduct = document.createElement('input')
// newDiv.appendChild(userProduct)
// userProduct.placeholder = 'Product Name'
const userAmount = document.createElement('input')
newDiv.appendChild(userAmount)
userAmount.placeholder = 'How many?'
userAmount.type = 'number'
userAmount.id = 'userAmount'
const button = document.createElement('button')
newDiv.appendChild(button)
button.textContent = 'ADD PRODUCT'
button.id = 'btn'
const wrap = document.createElement('div')
document.body.appendChild(wrap)
wrap.style.display = 'flex'
wrap.style.flexDirection = 'column'
const listDiv = document.createElement('div')
wrap.appendChild(listDiv)
listDiv.style.display = 'flex'
listDiv.classList.add('product')
listDiv.style.flexDirection = 'column'

const deleteButton = document.createElement('button')
//button event
button.addEventListener('click', () => {
    let userAmount = document.getElementById('userAmount').value
    let userProduct = document.getElementById('selectProduct').value
    const product = document.createElement('div')
    listDiv.appendChild(product)
    product.innerHTML = userProduct
    const amount = document.createElement('div')
    listDiv.appendChild(amount)
    amount.innerHTML = userAmount
    const deleteButton = document.createElement('button')
    listDiv.appendChild(deleteButton)
    deleteButton.textContent = 'X'
    deleteButton.style.width = '5em'
    deleteButton.addEventListener('click', () => {
        product.style.display = 'none'
        amount.style.display = 'none'
        deleteButton.style.display = 'none'
    })
})


