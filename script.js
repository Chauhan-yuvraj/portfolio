// Toggle responsive navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('show');
});



const icons = document.querySelectorAll('.skill-icons span');

icons.forEach((icon) => {
  icon.addEventListener('mouseover', () => {
    icon.classList.add('hovered');
  });

  icon.addEventListener('mouseout', () => {
    icon.classList.remove('hovered');
  });
});


window.addEventListener('load', function() {
  var loader = document.getElementById('loading-screen');
  loader.classList.add('loaded');
});

