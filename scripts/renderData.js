const highlightsProjectsContainer = document.querySelector('.highlights .cards-projects');
const allProjectsContainer = document.querySelector('.allprojects .qq-projects');
const HIGHTLIGHT_TYPE = 2;
const ALL_TYPE = 1;

const getProjectsByTypeOrAll = (typeId) => {
  const dataProjects = [
    {
      id: 1,
      type: 2,
      imgSrc: 'assets/projects/projeto1.svg',
      link: 'https://www.figma.com/file/vsDuCoMFbIkMeSIxMlHcHT/Untitled?type=design&node-id=0%3A1&mode=design&t=ip51k2r6NcoQ8PNB-1',
    },
    {
        id: 2,
        type: 2,
        imgSrc: 'assets/projects/projeto3.svg',
        link: 'https://github.com/djuniordev/semana10Alura',
    },
    {
        id: 3,
        type: 2,
        imgSrc: 'assets/projects/projeto2.svg',
        link: 'https://github.com/djuniordev/semana11Alura',
    },
    
  ];

  return typeId ? dataProjects.filter(({ type }) => type === typeId) : dataProjects;
}

const allProjects = getProjectsByTypeOrAll(ALL_TYPE);
const hightLightProjects = getProjectsByTypeOrAll(HIGHTLIGHT_TYPE);

const renderProjects = (container, data) => {
  container.innerHTML = data.map(({ id, imgSrc, link }) => {
    return `
        <div class="box" id="${id}">
          <div class="cover">
            <a href=${link}>
              <img src=${imgSrc}>
            </a>
            <div class="details">
            </div>
          </div>
        </div>
      `
  }).join('');
}

const renderSkillsSection = () => {
  const cardsContainer = document.querySelector('.cards');

  const skills = [
    {
      name: 'Python',
      src: 'fa-brands fa-python'
    },
    {
      name: 'CSS3',
      src: 'fa-brands fa-css3-alt'
    },
    {
      name: 'JavaScript',
      src: 'fa-brands fa-js'
    },
    {
      name: 'HTML',
      src: 'fa-brands fa-html5'
    },
    {
      name: 'Figma',
      src: 'fa-brands fa-figma'
    },
    {
      name: 'Java',
      src: 'fa-brands fa-java'
    },
  ]
  cardsContainer.innerHTML = skills.map(({ name, src }, index) => `
    <div class="box" key="${index}">
      <p>${name}</p>
      <i class="${src}"></i>
    </div>
  `).join('')
}

const initOpenMenu = () => {
  const menuBtn = document.querySelector('header .menu i')
  const closeBtn = document.querySelector('header .menu i:nth-child(2)')
  const menu = document.querySelector('.menuOpen');
  const header = document.querySelector('header')

  const close = () => {
    menu.classList.add('hidden')
    menuBtn.classList.remove('hidden')
    closeBtn.classList.add('hidden')
    document.body.style.overflow = 'visible';
    header.classList.remove('open')

  }

  const open = () => {
    menu.classList.remove('hidden')
    menuBtn.classList.add('hidden')
    closeBtn.classList.remove('hidden')
    document.body.style.overflow = 'hidden';
    header.classList.add('open')
  }

  menuBtn.addEventListener('click', open)

  closeBtn.addEventListener('click', close)

  document.addEventListener('keydown', ({ key }) => key === "Escape" && close());

  const links = document.querySelectorAll('nav a')

  links.forEach(link => {
    link.addEventListener('click', close)
  })

}

initOpenMenu();
renderSkillsSection();
renderProjects(highlightsProjectsContainer, hightLightProjects);
renderProjects(allProjectsContainer, allProjects);
const projectsBox = document.querySelectorAll('.box');
insertProjectAction();
