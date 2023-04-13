const search = document.getElementById('search');
search.addEventListener("click", function() {
    const input = document.getElementById('input');
    // The input should be cleared after search button is pressed
    input.value = "";
    // If the value entered in the input is not "Book", show an alert to the user
    if (input.value !== "Book") {
        alert("Please enter a valid search term");
    }

    if (input.value === "Book") {
        // Make the hidden items visible ( Remember that you added a CSS rule to make some items hidden - use classList)
        const hiddenItems = document.getElementsByClassName('box');
        hiddenItems.classList.remove('hidden');
    }

    // In a loop, create and append 4 image and span elements to the first section.
    const section1 = document.querySelector('.book');
    console.log(section1)
    // Use template literal for images' paths
    const img = document.createElement('img');
    const span = document.createElement('span');
    section1.appendChild(img);
    section1.appendChild(span);
    for(let i = 1; i <= 4; i++){
        img.src = `Images/Book${i}.png`;
        img.alt = `Book${i}`;
        span.textContent = `Book${i}`;
    }
    document.body.appendChild(section1);
    
});

const books = [];
const section1 = document.querySelector('.book');
section1.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
        books.push(e.target.alt);
        const span = e.target.nextElementSibling;
        span.style.display = 'block';
    }

    const wishList = document.querySelector('.wishlist');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    for(let i = 0; i < books.length; i++){
        li.textContent = books[i];
        const span = document.createElement('span');
        span.textContent = books[i];
        li.appendChild(span);
        const img = document.createElement('img');
        img.src = `Images/${books[i]}.png`;
        img.alt = books[i];
        img.width = 100;
        img.height = 100;
        li.appendChild(img);
    } 
    ul.appendChild(li);
    wishList.appendChild(ul);
    document.body.appendChild(wishList);
    const booklist = {
        name: books[i]
    }
    books.push(booklist);
    if(books.length > 1){
        alert('This item has already been added to your wish list');
    }
    const lastLi = ul.lastElementChild;
    lastLi.style.border = '1px solid black';
});    

