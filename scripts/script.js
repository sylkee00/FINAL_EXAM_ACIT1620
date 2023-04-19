document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search');
  const inputField = document.getElementById('input');
  const booksSection = document.querySelector('.books');
  const wishListSection = document.querySelector('.wish-list');
  const wishList = [];

  function updateWishList(name, imagePath) {
    // If the item is already in the wish list, show an alert and return
    if (wishList.some((item) => item.name === name)) {
      alert('This item has already been added to your wish list.');
      return;
    }

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('wish-list-item');

    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = name;
    img.width = 100;
    img.height = 100;

    const span = document.createElement('span');
    span.textContent = name;

    itemDiv.appendChild(img);
    itemDiv.appendChild(span);
    wishListSection.appendChild(itemDiv);
    
    // Add the item to the wish list array
    wishList.push({ name: name });

    // Remove the last-item class from the previous item
    const lastItem = wishListSection.querySelector('.last-item');
    if (lastItem) {
      lastItem.classList.remove('last-item');
      lastItem.style.border = 'none';
    }
    // Add the last-item class to the current item
    itemDiv.classList.add('last-item');
    itemDiv.style.borderBottom = '3px solid purple';
  }

// add event listener to the books section
 booksSection.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
      // Get the name and image path of the clicked item
      const name = event.target.id;
      const imagePath = event.target.src;
      // update the wish list
      updateWishList(name, imagePath);
    }
  });
// add event listener to the search button
searchButton.addEventListener('click', () => {
    const searchText = inputField.value.trim();
    // Clear the input field
    inputField.value = '';

    // If the search text is not "Book", show an alert
    if (searchText !== 'Book') {
      alert('Please search for "Book"');
      return;
    }

    // Remove the hidden class from the books section
    const hiddenItems = document.getElementsByClassName('hidden');
    for (const item of hiddenItems) {
      item.classList.remove('hidden');
    }

    // Create books
    for (let i = 1; i <= 4; i++) {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book-item');

      const img = document.createElement('img');
      img.src = `Images/Book${i}.png`;
      img.alt = `Book${i}`;
      img.id = `Book${i}`;

      const span = document.createElement('span');
      span.textContent = `Book${i}`;

      bookDiv.appendChild(img);
      bookDiv.appendChild(span);

      booksSection.appendChild(bookDiv);
    }
  });
});

