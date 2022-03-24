const form = document.querySelector('#myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    //memory name
    const memory = document.querySelector('#formInput_memory');
    const memoryContent = document.createElement("p");
    memoryContent.id = 'memoryName';
    memoryContent.innerText = memory.value;

    //memory date
    const date = document.querySelector('#formInput_date');
    const dateContent = document.createElement("p");
    dateContent.id = 'memoryDate';
    dateContent.innerText = date.value;

    //memory decription
    const description = document.querySelector('#formInput_description');
    const descriptionContent = document.createElement("p");
    descriptionContent.id = 'memoryDescription';
    descriptionContent.innerText = description.value;

    //memory card
    const memoryBox = document.querySelector('#memorySpace')
    const card = document.createElement("div");
    card.id = 'memoryCard';

    //memory photo
    const photo = document.querySelector('#formInput_photo');
    const cardImg = document.createElement("div");
    cardImg.id = 'cardImg';
    cardImg.style.backgroundImage = 'url(' + photo.value + ')';
    
    //memory info
    const cardInfo = document.createElement("div");
    cardInfo.id = 'cardInfo';

    // add content to card
    cardInfo.append(memoryContent, dateContent, descriptionContent);
    card.append(cardImg, cardInfo)
    //add card to page
    memoryBox.appendChild(card);

    //reset form
    form.reset()
});


