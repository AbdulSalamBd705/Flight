window.addEventListener("scroll", ()=>{
  const navbar = document.querySelector("#header");
  navbar.classList.toggle("active", window.scrollY > 0)
})