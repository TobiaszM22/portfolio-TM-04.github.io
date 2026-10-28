const toggle = document.getElementById('languageToggle');
let language = 'pl';
toggle.addEventListener('click', () => {
  language = language === 'pl' ? 'en' : 'pl';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-pl][data-en]').forEach(element => {
    element.innerHTML = element.dataset[language];
  });
  toggle.textContent = language === 'pl' ? 'EN' : 'PL';
});
