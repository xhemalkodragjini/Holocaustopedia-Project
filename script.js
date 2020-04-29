ScrollReveal().reveal(".navbar", {
  duration: 2000,
  origin: "top",
  distance: "200px"
});

ScrollReveal().reveal("#welcome-section .text-center", {
  duration: 2000,
  origin: "top",
  distance: "200px"
});

ScrollReveal().reveal("#about-section .lead, #about-section .btn", {
  duration: 2000,
  origin: "left",
  distance: "200px"
});

ScrollReveal().reveal("#articles", {
  duration: 2000,
  origin: "bottom",
  distance: "200px"
});

ScrollReveal().reveal("#articles .row", {
  delay: 500,
  duration: 2000,
  origin: "bottom",
  distance: "200px"
});

ScrollReveal().reveal("#intro-section .image-1", {
  duration: 2000,
  origin: "top",
  distance: "200px"
});

ScrollReveal().reveal("#intro-section .image-2", {
  duration: 2000,
  origin: "bottom",
  distance: "50px"
});

ScrollReveal().reveal("#title-article h1", {
  duration: 2000,
  origin: "left",
  distance: "50px"
});

ScrollReveal().reveal("#extra-articles .card", {
  duration: 2000,
  origin: "left",
  distance: "50px"
});



(function(){
  const buttons = document.querySelectorAll('.articles-btn')
  const articles = document.querySelectorAll('.article-card')

  buttons.forEach((button)=> {
      button.addEventListener('click', (e) => {
          e.preventDefault()
          const filter = e.target.dataset.filter
          
          articles.forEach((article)=> {
              if (filter === 'all'){
                  article.style.display = 'block'
              } else {
                  if (article.classList.contains(filter)){
                      article.style.display = 'block'
                  } else {
                      article.style.display = 'none'
                  }
              }
          })
      })
  })

})();

//wire up filter search box
(function(){

  const searchBox = document.querySelector('#search-item')
  const storeItems = document.querySelectorAll('.article-card')

  searchBox.addEventListener('keyup', (e) => {
  
      const searchFilter = e.target.value.toLowerCase().trim()

      storeItems.forEach((item) => {
          if (item.textContent.includes(searchFilter)){
              item.style.display = 'block'
          } else {
              item.style.display = 'none'
          }
      })
  })

})();