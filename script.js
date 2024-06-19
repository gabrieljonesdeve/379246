// Array di esempio con i risultati della ricerca
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

// Otteniamo i riferimenti agli elementi HTML che ci interessano
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Aggiungiamo l'evento di ascolto sul form per la ricerca
searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitiamo il comportamento predefinito del form (submit)

  const searchTerm = searchInput.value.trim().toLowerCase(); // Ottieni il termine di ricerca, rimuovi spazi iniziali/finali e converti in minuscolo

  // Filtriamo i risultati in base al termine di ricerca
  const filteredResults = results.filter(result => {
    return result.title.toLowerCase().includes(searchTerm);
  });

  // Puliamo i risultati precedenti
  searchResults.innerHTML = '';

  // Mostrare i risultati filtrati
  if (filteredResults.length > 0) {
    filteredResults.forEach(result => {
      const resultItem = document.createElement('div');
      const link = document.createElement('a');
      link.href = result.url;
      link.textContent = result.title;
      link.style.display = "block"; // Mostra ogni link su una nuova riga
      resultItem.appendChild(link);
      searchResults.appendChild(resultItem);
    });
  } else {
    const noResults = document.createElement('div');
    noResults.textContent = 'Nessun risultato trovato.';
    searchResults.appendChild(noResults);
  }

  // Resetta il campo di input
  searchInput.value = '';
});
