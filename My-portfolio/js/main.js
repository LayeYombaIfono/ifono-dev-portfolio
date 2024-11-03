//Menu mobile display none
const menuMobileNone = () => {
  const links = document.querySelectorAll(".navbar > ul > li > a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("show-nav");
    });
  });
};

// Menu mobile
const menuMobile = () => {
  const menuBerger = document.querySelector(".header .berger");
  const header = document.querySelector(".header");

  menuBerger.addEventListener("click", () => {
    header.classList.toggle("show-nav");
  });

  menuMobileNone();
};
// Appel de la fonction
menuMobile();

// Remove classe active navbar
const activeNavlink = (links) => {
    const navlinkHeader = document.querySelectorAll(".navbar .menu a");
    // Fonction pour supprimer la classe
    const removeClassActive = () => {
      const navlinkHeader = document.querySelectorAll(".navbar .menu a");
      navlinkHeader.forEach((link) => {
        link.classList.remove("active");
      });
    };
    navlinkHeader.forEach((navlink) => {
      navlink.addEventListener("click", (event) => {
        removeClassActive();
        // event.target.classList.add("active");
        event.target.classList.add("active");
        // Appel de la fonction pour supprimer la classe active
      });
    });
  // console.log(navlinkHeader);
};

activeNavlink();

// Portfolio
const portfolioFilters = () => {
  const tabs = document.querySelectorAll(".portfolio-filters a");
  const projets = document.querySelectorAll(".portfolio .card");
  // console.log(tabs)

  // Fonction supprimer la classe active de tous les filtres
  const removeFilter = () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
  };

  // Fonction pour selection tous les card portfolio
  const showProjets = (element) => {
    projets.forEach((projet) => {
      let filter = projet.getAttribute("data-category");
      // console.log(fliter);

      // Condition pour afficher tous les projets
      if (element === "all") {
        projet.parentNode.classList.remove("hide");
        return;
      }

      // Condition pour afficher tous les projets correspondant au filtre
      filter === element
        ? projet.parentNode.classList.remove("hide")
        : projet.parentNode.classList.add("hide");
    });
  };

  // Fonction pour selectionner tous les filtres
  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      let filter = event.target.getAttribute("data-filter");
      console.log(filter);

      // Selectionner tous les filtres
      showProjets(filter);

      // Supprimer la classe active de tous les filtres
      removeFilter();

      event.target.classList.add("active");
    });
  });
};
// Appel de la fonction
portfolioFilters();

// Fonction pour afficher le modal detail de chaque projet
const projetModalDetail = () => {
  const cardLinks = document.querySelectorAll(".card__link");
  const modals = document.querySelectorAll(".modal");
  const btnCloseModal = document.querySelectorAll(".btn_close")
  
  console.log(btnCloseModal)

  // Fonction pour masquer le modal
  const hideModal = ()=>{
    modals.forEach((modal)=>{
      modal.classList.remove('show-modal')
    })
  }

  // Fonction pour afficher le modal detail de chaque projet
  cardLinks.forEach((cardLink) => {
    cardLink.addEventListener("click", (event) => {
      event.preventDefault();

      // Selectionner le modal correspondant au projet
      document
        .querySelector(`[id=${cardLink.dataset.id}]`)
        .classList.add("show-modal");

    });

  });

  // Fonction pour fermer le modal
  btnCloseModal.forEach((btnclose)=>{
    btnclose.addEventListener('click', (event)=>{
      hideModal()
    })
  })
};

projetModalDetail();
