// MOBILE MENU
// Variabless

const toggleIcons = document.querySelector('.main-nav__toggle-icons');
const menuList = document.querySelector('.main-nav__list');
const mainHeader = document.querySelector('.main-header__container');
const iconBars = document.querySelector('.fa-bars');
const iconTimes = document.querySelector('.fa-times');

toggleIcons.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target.classList.contains('fa-bars')) {
    iconBars.classList.toggle('hide-element');
    iconTimes.classList.toggle('hide-element');
    iconTimes.classList.toggle('on-top');
    menuList.classList.toggle('show-element');
    mainHeader.classList.add('main-header_toggle');
  } else if (e.target.classList.contains('fa-times')) {
    iconBars.classList.toggle('hide-element');
    iconTimes.classList.toggle('hide-element');
    iconTimes.classList.toggle('on-top');
    menuList.classList.toggle('show-element');
    mainHeader.classList.add('main-header_toggle');
  }
});

// Work Section

// Data for work Section

const projectData = [
  {
    id: 1,
    name: 'PROJECT 1',
    detail: ['CANOPY', '.', 'Back end Dev', '.', 2015],
    img: './asset/images/portfolio-1.jpg',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    tech: ['html', 'css', 'javaScript'],
    site: 'https://kolakolade.me/project1',
    repo: 'https://github.com/kolakolade/project1',
  },
  {
    id: 2,
    name: 'PROJECT 2',
    detail: ['CANOPY', 'Back end Dev', 2015],
    img: './asset/images/portfolio-2.jpg',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    tech: ['html', 'css', 'javaScript'],
    site: 'https://kolakolade.me/project2',
    repo: 'https://github.com/kolakolade/project2',
  },
  {
    id: 3,
    name: 'PROJECT 3',
    detail: ['CANOPY', '.', 'Back end Dev', '.', 2015],
    img: './asset/images/portfolio-3.jpg',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    tech: ['html', 'css', 'javaScript'],
    site: 'https://kolakolade.me/project3',
    repo: 'https://github.com/kolakolade/project3',
  },
  {
    id: 4,
    name: 'PROJECT 4',
    detail: ['CANOPY', '.', 'Back end Dev', '.', 2015],
    img: './asset/images/portfolio-4.jpg',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    tech: ['html', 'css', 'javaScript'],
    site: 'https://kolakolade.me/project4',
    repo: 'https://github.com/kolakolade/project4',
  },
];

// Dynamically generating the work section
const work = document.querySelector('#work');

// Create a function to build a project card

const buildProjectCard = (project) => {
  // Create required html elements for the project card
  const containerDiv = document.createElement('div');
  const cardContainer = document.createElement('div');
  const cardImage = document.createElement('img');
  const projectDetailContainer = document.createElement('div');
  const cardHead = document.createElement('div');
  const cardTitle = document.createElement('h3');
  const summary = document.createElement('div');
  const summaryMarker = document.createElement('div');
  const cardDescription = document.createElement('p');
  const techList = document.createElement('ul');
  const cardButton = document.createElement('button');

  // Add content and attributes to the created elements
  containerDiv.className = 'container work__container';
  cardContainer.className = 'work__card';
  cardImage.className = 'work__card-image card-item';
  projectDetailContainer.className = 'work__card-text-content card-item';
  cardTitle.className = 'work__card-title';
  summary.className = 'work__card-info';
  summaryMarker.className = 'marker';
  cardDescription.className = 'work__card-description';

  // cardBodyDiv.className = "work__card-text-content card-item"; //what is this
  techList.className = 'work__card-technology-list';
  cardButton.className = 'work__cta btn-primary';
  cardButton.id = project.id;
  cardButton.textContent = 'See Project';

  cardHead.appendChild(cardTitle);
  cardHead.appendChild(summary);
  projectDetailContainer.appendChild(cardHead);
  projectDetailContainer.appendChild(cardDescription);
  projectDetailContainer.appendChild(techList);
  projectDetailContainer.appendChild(cardButton);
  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(projectDetailContainer);
  containerDiv.appendChild(cardContainer);

  // Add content dynamically to the html document
  cardImage.setAttribute('src', `${project.img}`);
  cardTitle.textContent = project.name;
  cardDescription.textContent = project.desc;

  for (let i = 0; i < project.detail.length; i += 1) {
    const detail = document.createElement('p');
    detail.textContent = project.detail[i];
    summary.appendChild(detail);
  }

  for (let j = 0; j < project.tech.length; j += 1) {
    const listItem = document.createElement('li');
    listItem.className = 'work__card-technology-item';
    listItem.textContent = project.tech[j];
    techList.appendChild(listItem);
  }

  // Append the card to the DOM
  return work.appendChild(containerDiv);
};

projectData.forEach((project) => {
  buildProjectCard(project);
});

// Create a function to build a modal card
const buildModalCard = (project) => {
  // Create required html elements for the project card
  const modalContainerDiv = document.createElement('div');
  const modalCardContainer = document.createElement('div');
  const cardImage = document.createElement('img');
  const projectDetailContainer = document.createElement('div');
  const cardHead = document.createElement('div');
  const cardTitle = document.createElement('h3');
  const summary = document.createElement('div');
  const summaryMarker = document.createElement('div');
  const cardDescription = document.createElement('p');
  const techList = document.createElement('ul');

  // Elements needed for pop up
  const genericContainer = document.createElement('div');
  const btnContainer = document.createElement('div');
  const seeLive = document.createElement('a');
  const seeSource = document.createElement('a');
  const imgLive = document.createElement('img');
  const imgSource = document.createElement('img');

  // Add content and attributes to the created elements
  modalContainerDiv.className = 'modal__container';
  modalCardContainer.className = 'modal__card';
  cardImage.className = 'modal__card-image card-item';
  projectDetailContainer.className = 'modal__card-text-content card-item';
  cardTitle.className = 'work__card-title';
  summary.className = 'work__card-info';
  summaryMarker.className = 'marker';
  cardDescription.className = 'modal__card-description';
  btnContainer.className = 'btn-container';
  techList.className = 'work__card-technology-list';
  imgLive.setAttribute('src', ('./asset/images/liveIcon.png'));
  imgSource.setAttribute('src', ('./asset/images/sourceIcon.png'));

  seeLive.className = 'modal__cta btn-primary';
  seeLive.setAttribute('href', `${project.site}`);
  seeSource.className = 'modal__cta btn-primary';
  seeSource.setAttribute('href', `${project.repo}`);
  seeLive.textContent = 'See Live';
  seeSource.textContent = 'See Source';
  imgLive.className = 'popup-btn-img';
  imgSource.className = 'popup-btn-img';
  cardHead.appendChild(cardTitle);
  cardHead.appendChild(summary);
  seeLive.appendChild(imgLive);
  seeSource.appendChild(imgSource);
  genericContainer.appendChild(techList);
  genericContainer.appendChild(btnContainer);
  btnContainer.appendChild(seeLive);
  btnContainer.appendChild(seeSource);
  projectDetailContainer.appendChild(cardDescription);
  projectDetailContainer.appendChild(genericContainer);
  modalCardContainer.appendChild(cardHead);
  modalCardContainer.appendChild(cardImage);
  modalCardContainer.appendChild(projectDetailContainer);
  modalContainerDiv.appendChild(modalCardContainer);

  // Add content dynamically to the html document
  cardImage.setAttribute('src', `${project.img}`);
  cardTitle.textContent = project.name;
  cardDescription.textContent = project.desc;

  for (let i = 0; i < project.detail.length; i += 1) {
    const detail = document.createElement('p');
    detail.textContent = project.detail[i];
    summary.appendChild(detail);
  }

  for (let j = 0; j < project.tech.length; j += 1) {
    const listItem = document.createElement('li');
    listItem.className = 'work__card-technology-item';
    listItem.textContent = project.tech[j];
    techList.appendChild(listItem);
  }

  // Append the card to the DOM
  return modalContainerDiv;
};

// Append card to Modal
const modal = document.querySelector('.modal');
const popup = document.querySelector('.popup');

work.addEventListener('click', (e) => {
  const popupCard = buildModalCard(projectData[e.target.id - 1]);
  e.preventDefault();
  if (e.target.classList.contains('work__cta')) {
    modal.style.display = 'block';
    popup.appendChild(popupCard);
    popupCard.display = 'block';
  }
});

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-modal')) {
    modal.firstElementChild.firstElementChild.nextSibling.remove();
    modal.style.display = 'none';
  }
});

// Form Validation and LocalStorage
const contactForm = document.querySelector('.contact__form');
const contactName = document.querySelector('.contact__name');
const contactEmail = document.querySelector('.contact__email');
const contactText = document.querySelector('.contact__text');
const regEx = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
const err = document.querySelector('.submit-error');
let formData;

// Function to add form data to localStorage
const addDataToLS = () => {
  formData = {
    name: contactName.value,
    email: contactEmail.value,
    text: contactText.value,
  };
  localStorage.setItem('form-data', JSON.stringify(formData));
};

// function to get data from localStorage
const getDataFromLS = () => {
  if (localStorage.getItem('form-data') === null) {
    formData = {};
  } else {
    formData = JSON.parse(localStorage.getItem('form-data'));
  }
  contactName.value = formData.name;
  contactEmail.value = formData.email;
  contactText.value = formData.text;
};

// function to validate email field
function validateEmail(e) {
  if (contactEmail.value.match(regEx)) {
    err.style.display = 'none';
    contactEmail.style.border = '1px solid #d0d9d4';
    addDataToLS();
    return true;
  }
  e.preventDefault();
  err.style.display = 'block';
  err.innerHTML = 'Email feild should only contain lowercase letters';
  contactEmail.style.border = '2px solid rgb(204, 11, 11)';
  return false;
}
document.addEventListener('DOMContentLoaded', getDataFromLS);
contactForm.addEventListener('submit', validateEmail);
