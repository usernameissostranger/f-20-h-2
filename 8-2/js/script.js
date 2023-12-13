const data = [
    {
        "title": "snakjgkjgkjkjgkjggkjkgjke",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Small Wooden Chair",
        "price": "9",
        "lastPrice": "9",
        "id": "1"
    },
    {
        "title": "cow",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Bespoke Soft Computer",
        "price": "5",
        "lastPrice": "5",
        "id": "2"
    },
    {
        "title": "cat",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Incredible Soft Bacon",
        "price": "8",
        "lastPrice": "6",
        "id": "3"
    },
    {
        "title": "lion",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Oriental Bronze Pants",
        "price": "4",
        "lastPrice": "8",
        "id": "4"
    },
    {
        "title": "cow",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Handmade Wooden Chair",
        "price": "2",
        "lastPrice": "4",
        "id": "5"
    },
    {
        "title": "snake",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Practical Concrete Towels",
        "price": "9",
        "lastPrice": "3",
        "id": "6"
    },
    {
        "title": "bear",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Generic Steel Bike",
        "price": "1",
        "lastPrice": "8",
        "id": "7"
    },
    {
        "title": "crocodilia",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Handcrafted Frozen Bacon",
        "price": "5",
        "lastPrice": "3",
        "id": "8"
    },
    {
        "title": "crocodilia",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Refined Rubber Gloves",
        "price": "5",
        "lastPrice": "8",
        "id": "9"
    },
    {
        "title": "rabbit",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Small Rubber Chips",
        "price": "2",
        "lastPrice": "6",
        "id": "10"
    },
    {
        "title": "bird",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Sleek Concrete Bike",
        "price": "7",
        "lastPrice": "3",
        "id": "11"
    },
    {
        "title": "snake",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Elegant Steel Pants",
        "price": "1",
        "lastPrice": "4",
        "id": "12"
    },
    {
        "title": "cow",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Modern Frozen Bike",
        "price": "2",
        "lastPrice": "9",
        "id": "13"
    },
    {
        "title": "cat",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Fantastic Fresh Chicken",
        "price": "3",
        "lastPrice": "5",
        "id": "14"
    },
    {
        "title": "bear",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Oriental Frozen Keyboard",
        "price": "6",
        "lastPrice": "9",
        "id": "15"
    },
    {
        "title": "dog",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Handmade Frozen Table",
        "price": "1",
        "lastPrice": "4",
        "id": "16"
    },
    {
        "title": "cow",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Generic Concrete Towels",
        "price": "7",
        "lastPrice": "5",
        "id": "17"
    },
    {
        "title": "horse",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Generic Metal Soap",
        "price": "5",
        "lastPrice": "6",
        "id": "18"
    },
    {
        "title": "cetacean",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Modern Soft Salad",
        "price": "6",
        "lastPrice": "4",
        "id": "19"
    },
    {
        "title": "cow",
        "image": "https://loremflickr.com/640/480/technics",
        "lastPrice": "5",
        "id": "98"
    },
    {
        "title": "bear",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Recycled Soft Tuna",
        "price": "4",
        "lastPrice": "8",
        "id": "99"
    },
    {
        "title": "cetacean",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Elegant Granite Chips",
        "price": "2",
        "lastPrice": "5",
        "id": "100"
    }
]   

const main = document.getElementById('main')

function addToCArt(item) {
    cart.push(item)
}

function renderItem(array) {
    main.innerHTML = ''
    array.forEach((item) => {
        const div = document.createElement('div')

        div.innerHTML = `
        <div class="card">
            <img src="${item.image}" alt="">
            <h3>${item.title}</h3>
            <h4>Price:${item.price}</h4>
            <h4>last-Price:${item.lastPrice}</h4>
        </div>
        `
        main.appendChild(div)
    })
}

function search() {
    const searchInput = document.getElementById('searchInput')
    const searchTerm = searchInput.value.toLowerCase();     

    const filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm)
    })
    renderItem(filteredData)
    console.log('call', searchTerm);
}


renderItem(data)



