// script.js
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita il comportamento predefinito del form (il submit)

  const searchTerm = searchInput.value.trim(); // Ottieni il testo di ricerca e rimuovi spazi iniziali e finali

  // Simulazione dei risultati della ricerca (puoi sostituire con la tua logica di ricerca)
  const results = [
    { title: 'Gabriel Jones', url: 'http://dev-gabriel-jones.pantheonsite.io/' },
    { title: 'F18', url: 'https://f18.altervista.org/' },
    { title: 'GJD GITHUB PROFILE', url: 'https://github.com/gjd-central' }
  ];

  // Pulisci i risultati precedenti
  searchResults.innerHTML = '';

  // Mostra i risultati della ricerca
  results.forEach(result => {
    const resultItem = document.createElement('div');
    resultItem.innerHTML = `<a href="${result.url}" target="_blank">${result.title}</a>`;
    searchResults.appendChild(resultItem);
  });

  // Resetta il campo di input
  searchInput.value = '';
});
