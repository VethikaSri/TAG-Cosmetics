const bar = document.getElementById('bar');
const clo = document.getElementById('clo');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (clo) {
  clo.addEventListener('click', () => 
  {
    nav.classList.remove('active');
  });
}

var garbage = document.getElementById("garbage");
garbage.addEventListener("click", function() 
{
  this.children[0].style.color = "#66c144";
  this.firstElementChild.style.transition = 'color';
}, false);
  