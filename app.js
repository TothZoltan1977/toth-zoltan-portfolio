const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

//NAV-MENU
const NavigationTemplate = `
<a href="portfolio.html"> Portfolio</a>
<a href="contact.html"> Contact</a>
<a href="skills.html"> Skill</a>
`;

document.querySelector(".nav-menu").innerHTML = NavigationTemplate;

//FOOTER
const FooterTemplate = `

 <div class="footer_main">




<div class ="footer_icons">
   <ul>
     <li>
        <a href="https://www.linkedin.com/in/zoltan-toth-070072277/"><img src="./img/linkedin(1).png" alt="linkedin"></a>
      </li>
      <li>
        <a href="https://github.com/TothZoltan1977"><img src="./img/github.png" alt="linkedin"></a>
      </li>
      <li>
        <a href="https://www.youtube.com/@webdeveloper-frontend"><img src="./img/youtube.png" alt="linkedin"></a>
      </li>

 </ul>


</div>
  


  <div class="footer_text">

      
<p>Clean responsive user-friendly website. With verified codes, inviting design. WordPress, Php, Blogs, implemented for you to reach the most clients.</p>
<h2> &reg;</h2>
      
   

  </div


`;

document.querySelector(".footer_main").innerHTML = FooterTemplate;
