import tabMenu from './tabMenu.js';
import faq from './faq.js';
import hamburgerMenu from './hamburgerMenu.js';
import formValidation from './formValidation.js';

document.addEventListener('DOMContentLoaded', e =>{
  tabMenu();
  faq('data-answer','data-image');
  hamburgerMenu('.hamburgerBtn', 'hamburgerMenu', '.menu');
  formValidation();
})