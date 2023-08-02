async function fetchCardsData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  
  function createCardElement(card) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
  
    const cardTitle = document.createElement('h3');
    cardTitle.textContent = card.title;
    cardDiv.appendChild(cardTitle);
  
    const cardDescription = document.createElement('p');
    cardDescription.textContent = card.body;
    cardDiv.appendChild(cardDescription);
  
    return cardDiv;
  }
  
  async function displayCards() {
    const cardsData = await fetchCardsData();
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards-container');
  
    cardsData.forEach((card) => {
      const cardElement = createCardElement(card);
      cardsContainer.appendChild(cardElement);
    });
  
    const wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(cardsContainer);
  
    // Добавить событие загрузки к контейнеру карточек
    cardsContainer.addEventListener('load', () => {
      // Удалить класс `margin-top-auto` с футера
      footer.classList.remove('margin-top-auto');
    });
  }
  
  displayCards();
//   234567
async function fetchCardsData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  
  function createCardElement(card) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    
    const cardImage = document.createElement('img');
    cardImage.src = 'data:image/jpeg;base64,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'; // URL картинки
    cardImage.alt = 'Горы'; // Замените на описание картинки, если необходимо
    cardDiv.appendChild(cardImage);
  
    const cardTitle = document.createElement('h3');
    cardTitle.textContent = card.title;
    cardDiv.appendChild(cardTitle);
    
    const cardDescription = document.createElement('p');
    cardDescription.textContent = card.body;
    cardDiv.appendChild(cardDescription);
    
    return cardDiv;
  }
  
  async function displayCards() {
    const cardsData = await fetchCardsData();
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards-container');
    
    cardsData.forEach((card) => {
      const cardElement = createCardElement(card);
      cardsContainer.appendChild(cardElement);
    });
  
    const wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(cardsContainer);
  }
  
  displayCards();
  