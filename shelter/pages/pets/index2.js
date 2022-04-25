console.log(`     
Если будут какие-то вопросы или недочёты по работе, прошу связаться со мной в дискорде LanaVladi#2712 
или телеграмме @lanainthesky`);


// console.log(`    
// Self-check:
// 1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/stage1/stream1/shelter/shelter-ru.md
// 2. Screenshoot:
// 3. Deploy: https://rolling-scopes-school.github.io/lanavladi-JSFE2022Q1/shelter/pages/page1/
// 4. Done 18.04.2022 / deadline 18.04.2022 
// 5. Score: 100/ 100
// `);

// Self-check:
// 1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/stage1/stream1/shelter/shelter-ru.md
// 2. Screenshoot: ![image](https://user-images.githubusercontent.com/93492668/162847183-f8d11248-88ae-44da-8ad7-c6b54608298d.png)
// 3. Deploy: https://rolling-scopes-school.github.io/lanavladi-JSFE2022Q1/shelter/pages/page1/
// 4. Done 12.04.2022 / deadline 12.04.2022 
// 5. Score: 100/ 100


/* ==================== JSON file ===============*/

const jsonPopup =
[
    {
      "name": "Jennifer",
      "img": "../../assets/img/pets/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/img/pets/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/img/pets/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/img/pets/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/img/pets/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/img/pets/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/img/pets/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/img/pets/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];

  /* ==================== JSON file end ===============*/

  /* =============== open & close MODAL WINDOW begin ====================== */

//   const CARD_CONTAINER = document.querySelector('.card-container');
  const CARDS_CONTAINER = document.querySelector('.cards-container');
  const BTN_LEARN_MORE = document.querySelector('.button-learn-more');
  const POPUP = document.querySelector('.popup');
  const BTN_CLOSE_POPUP = document.querySelector('.button-close');

  let petImage = document.querySelector('.image');
let popupTitle = document.querySelector('.popup-title');
let popupSubtitle = document.querySelector('.popup-subtitle');
let popupDescription = document.querySelector('.popup-description');
let petAge = document.querySelector('.age');
let petInoculations = document.querySelector('.inoculations');
let petDiseases = document.querySelector('.diseases');
let petParasites = document.querySelector('.parasites');
CARDS_CONTAINER.addEventListener('click', function openModalWindow(event) {
// console.log('event :', event);
// console.log('event :', event.target.closest('.card-container'));

  const clickedCard = event.target.closest('.card-container');
  // console.log('clickedCard :', clickedCard);

 jsonPopup.forEach((jsonObj) => {
//  console.log('jsonObj :', jsonObj); // весь объект JSON
   if(jsonObj.name === clickedCard.dataset.name) {
    // console.log(' (jsonObj.name === clickedCard.dataset.name) :',  (jsonObj.name === clickedCard.dataset.name));
  //  console.log(true);
   
        let petImg = jsonObj.img;
        // console.log('petImg :', petImg);
        let petName = jsonObj.name;
        // console.log('petName :', petName);
        let petType = jsonObj.type;
        let petBreed = jsonObj.breed;
        // console.log('petBreed :', petBreed);
        let description = jsonObj.description;
        let age = jsonObj.age;
        let inoculations = jsonObj.inoculations;
        let diseases = jsonObj.diseases;
        let parasites = jsonObj.parasites;
        // let ageStrong = <strong>Age:</strong>.innerHTML; 
        
   petImage.src = `${petImg}`;
   popupTitle.textContent = `${petName}`;
   popupSubtitle.textContent = `${petType} - ${petBreed}`;
   popupDescription.textContent = `${description}`;
   popupTitle.textContent = `${petName}`;
   petAge.textContent = `Age: ${age}`;
   petInoculations.textContent = `Inoculations: ${inoculations}`;
   petDiseases.textContent = `Diseases: ${diseases}`;
   petParasites.textContent = `Parasites: ${parasites}`;
        // console.log(popupTitle.textContent);
        // console.log(popupSubtitle.textContent);
        // console.log(popupDescription.textContent);
        // console.log(petAge.textContent);
        // console.log(petInoculations.textContent);
        // console.log(petDiseases.textContent);
        // console.log(petParasites.textContent);
        document.getElementsByTagName('html')[0].style.overflow = "hidden"; // удаление вертик.скролла при открытии popup
   POPUP.classList.toggle('open');
   }
 });
 });

 /* =============== open & close MODAL WINDOW ====================== */

POPUP.addEventListener('click', function closeModalWindow(e) {
    if (!e.target.closest('.modal-window')) {
        document.getElementsByTagName('html')[0].style.overflow = "auto"; // возвращение вертик.скролла при закрытии popup
        POPUP.classList.toggle('open');
}
});

/* =============== open & close MODAL WINDOW finish ====================== */