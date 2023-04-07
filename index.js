function loadData() {
    fetch('http://localhost:3000/Cats')
      .then(response => response.json())
      .then(data => {
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = '';
  
        data.forEach(item => {
          const card = document.createElement('div');
          card.classList.add('card');
  
          const image = document.createElement('img');
          image.src = item.image_url;
          image.alt = item.name;
          card.appendChild(image);
  
          const name = document.createElement('h2');
          name.textContent = item.name;
          card.appendChild(name);
  
          const description = document.createElement('p');
          description.textContent = item.description;
          card.appendChild(description);
  
          const temperament = document.createElement('p');
          temperament.textContent = item.temperament;
          card.appendChild(temperament);

          const likeButton = document.createElement('button');
          likeButton.textContent = 'Like';
          likeButton.addEventListener('click', () => {
            item.likes += 1;
            updateLikes(item.id, item.likes);
          });
          card.appendChild(likeButton);
  
          const likeCount = document.createElement('p');
          likeCount.textContent = `Likes: ${item.likes}`;
          card.appendChild(likeCount);
  
          cardContainer.appendChild(card);
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  loadData();