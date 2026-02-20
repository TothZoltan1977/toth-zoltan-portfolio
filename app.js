const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


//NAV-MENU
const NavigationTemplate = `
<a href="contact.html"> Contact</a>
<a href="skills.html"> Skill</a>
`;

document.querySelector('.nav-menu').innerHTML = NavigationTemplate;


//FOOTER
const FooterTemplate = `
<li>
Owner: Toth Zoltan
 </li>
   <li>
    Design: Toth Zoltan
     </li>
       <li>
        Storage: HitHub
         </li>
`;

document.querySelector('.footer').innerHTML = FooterTemplate;