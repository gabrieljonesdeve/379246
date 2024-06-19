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
  { title: 'tecknotecait', url: 'https://www.roblox.com/users/2257791245/profile?friendshipSourceType=PlayerSearch' },
  { title: 'fordev19', url: 'https://www.roblox.com/users/234037904/profile?friendshipSourceType=PlayerSearch' },
  { title: 'f18', url: 'https://f18.altervista.org/' },
  { title: 'accessibilità', url: 'accessibilita.altervista.org' },
  { title: 'connesso1', url: 'connesso1.altervista.org' },
  { title: 'connesso2', url: 'connesso2.altervista.org' },
  { title: 'desiners', url: 'desiners.altervista.org' },
  { title: 'digitalcloud', url: 'digitalcloud.altervista.org' },
  { title: 'gabbycentral', url: 'gabbycentral.altervista.org' },
  { title: 'gabbygreen', url: 'gabbygreen.altervista.org' },
  { title: 'gabbyphptests', url: 'gabbyphptests.altervista.org' },
  { title: 'gjd-central', url: 'https://github.com/gjd-central' },
  { title: 'interno ufficiale', url: 'http://interno.gjdev.it/' },
  { title: 'x profile', url: 'https://x.com/GabJD4' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
  //{ title: '2662', url: 'https://www.example.com/lorem-ipsum' },
];

  // Pulisci i risultati precedenti
  searchResults.innerHTML = '';

  // Mostra i risultati della ricerca
  results.forEach(result => {
    const resultItem = document.createElement('div');
    const link = document.createElement('a');
    link.href = result.url;
    link.textContent = result.title;
    link.target = '_blank'; // Apri il link in una nuova finestra o scheda
    resultItem.appendChild(link);
    searchResults.appendChild(resultItem);
  });

  // Resetta il campo di input
  searchInput.value = '';
});
