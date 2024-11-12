let iconCart = document.querySelector('.book-icon-cart');
let closeCart =document.querySelector('.book-close')
let section = document.querySelector('section');

// Hiệu ứng click đóng mở thẻ túi đồ
iconCart.addEventListener('click', () => {
    section.classList.toggle('book-show-cart');
});
closeCart.addEventListener('click', () => {
    section.classList.toggle('book-show-cart');
})

document.addEventListener("DOMContentLoaded", function() {
    // Khai báo Json
    const books = [
        {
            "imgSrc": "../Extension/img/book-2.png",
            "discount": "-10%",
            "name": "Simple & Minialist",
            "author": "John Hawn",
            "price": "$150"
        },
        {
            "imgSrc": "../Extension/img/book-3.png",
            "discount": "- %",
            "name": "Muted color poster",
            "author": "Youtube",
            "price": "$180"
        },
        {
            "imgSrc": "../Extension/img/book-4.png",
            "discount": "-15%",
            "name": "Douting Dreams",
            "author": "Doe jaw",
            "price": "$290"
        },
        {
            "imgSrc": "../Extension/img/book-5.png",
            "discount": "-50%",
            "name": "Customer Your autumn Clothes",
            "author": "Jane Law",
            "price": "$160"
        },
        {
            "imgSrc": "../Extension/img/book-6.png",
            "discount": "-%",
            "name": "Designed for work",
            "author": "Tonny",
            "price": "$180"
        },
        {
            "imgSrc": "../Extension/img/book-7.png",
            "discount": "-5%",
            "name": "Plan tree for the future",
            "author": "Jane Dom",
            "price": "$180"
        },
        {
            "imgSrc": "../Extension/img/book-8.png",
            "discount": "-%",
            "name": "Modern Abstract",
            "author": "Jack lee",
            "price": "$180"
        },
        {
            "imgSrc": "../Extension/img/book-9.png",
            "discount": "-%",
            "name": "Bird park",
            "author": "Bro",
            "price": "$200"
        },
        {
            "imgSrc": "../Extension/img/book-10.png",
            "discount": "-12%",
            "name": "Memories of the sword",
            "author": "John Myers",
            "price": "$280"
        }
    ];

    const bookMenu = document.querySelector('.book-menu');

    books.forEach(book => {
        // Tạo thẻ div book-item mới
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
 
        // Cấu trúc HTML nội dung
        bookItem.innerHTML = `
            <div class="book-img">
                <img src="${book.imgSrc}" alt="${book.name}">
                <span>${book.discount}</span>
                <i class="ri-heart-line"></i>
            </div>
            <h4 class="book-name">${book.name}</h4>
            <p class="book-author">${book.author}</p>
            <div class="book-prices">${book.price}</div>
            <div class="book-buttons">
                <button class="book-buy">Buy Now</button>
                <button class="book-add-cart">Add to cart</button>
            </div>
        `;

        // Chèn bookItem vào bookMenu
        bookMenu.appendChild(bookItem);
    });
});

