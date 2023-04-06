

// // ================Toggle Navbar icon======================

const icons = document.querySelector('.icons');
const nav_header = document.querySelector('.header');


icons.addEventListener("click", () => {
   toggleNavbar();
});

const toggleNavbar = () => {
   nav_header.classList.toggle("active");
};




// ===========javascript for active nav color=============

function activeClass(eve) {
   id = eve.target.id
   if (id === 'navHome') {
      document.getElementById('navHome').classList.add('active_nav');
      document.getElementById('navAbout').classList.remove('active_nav');
      document.getElementById('navService').classList.remove('active_nav');
      document.getElementById('navContact').classList.remove('active_nav');
      toggleNavbar();

   }
   else if (id === 'navAbout') {
      document.getElementById('navHome').classList.remove('active_nav');
      document.getElementById('navAbout').classList.add('active_nav');
      document.getElementById('navService').classList.remove('active_nav');
      document.getElementById('navContact').classList.remove('active_nav');
      toggleNavbar();

   }
   else if (id === 'navService') {
      document.getElementById('navHome').classList.remove('active_nav');
      document.getElementById('navAbout').classList.remove('active_nav');
      document.getElementById('navService').classList.add('active_nav');
      document.getElementById('navContact').classList.remove('active_nav');
      toggleNavbar();

   }
   else if (id === 'navContact') {
      document.getElementById('navHome').classList.remove('active_nav');
      document.getElementById('navAbout').classList.remove('active_nav');
      document.getElementById('navService').classList.remove('active_nav');
      document.getElementById('navContact').classList.add('active_nav');
      toggleNavbar();

   }
   else if (id === 'changeColor') {
      toggleNavbar();

   }
}



// ====================javascript for  model ==========================

// let popup = document.getElementById('popup');

// function openPopup() {
//    popup.classList.add('open_popup');
// }

// function closePopup() {
//    popup.classList.remove('open_popup');
// }


// ===========javascript for scrollReveal=============


ScrollReveal({
   // reset: true ,
   distance: '80px',
   duration: 2000,
   delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .service-box, .input-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.about-content,.home-content p', { origin: 'right' });

// document.getElementById('body').addEventListener('wheel' , function(evt){

//    document.getElementById('body').scrollLeft += evt.deltaY;

// })

// ===========javascript for typed words=============

const typed = new Typed('.multipleText', {
   String: ['Frontend Developer', 'Web Developer', 'Web Analysts'],
   typeSpeed: 100,
   backSpeed: 100,
   backdelay: 1000,
   loop: true,
});



// ===========javascript for typed words=============


function changeColor() {
   var color = document.getElementById('changeColor').style.color;
   var rootColor = document.documentElement.style;
   var symbol = document.getElementById('symbol');
   event.preventDefault();

   switch (color) {

      case 'white':
         rootColor.setProperty('--bg-color', 'white');
         rootColor.setProperty('--text-color', 'black');
         document.getElementById('navbar').style.backgroundColor = 'white'

         symbol.classList.remove('bx-sun')
         symbol.classList.add('bxs-moon')

         document.getElementById('changeColor').style.color = 'black';
         break;

      case 'black':
         rootColor.setProperty('--bg-color', 'black');
         rootColor.setProperty('--text-color', 'white');
         document.getElementById('navbar').style.backgroundColor = 'black'


         symbol.classList.remove('bxs-moon')
         symbol.classList.add('bx-sun')

         document.getElementById('changeColor').style.color = 'white';
         break;

      default:
         console.log("khshdhgdhjx")

   }


   // }
   // if(color=='white')
   // {
   //    console.log('check');
   //    color='black';
   //    document.documentElement.style.setProperty('--bg-color', 'white');
   //    document.documentElement.style.setProperty('--text-color', 'black');
   //    console.log(color);
   // }
   // else if(color=='black'){
   // document.documentElement.style.setProperty('--bg-color', 'black');
   // document.documentElement.style.setProperty('--text-color', 'white');
   // }

}





















