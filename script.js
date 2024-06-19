// Array di esempio con i risultati della ricerca
const results = [
  { title: 'Lorem Ipsum', url: 'https://www.example.com/lorem-ipsum' },
  { title: 'Dolor Sit Amet', url: 'https://www.example.com/dolor-sit-amet' },
  { title: 'Consectetur Adipiscing', url: 'https://www.example.com/consectetur-adipiscing' },
  { title: 'Sed Do Eiusmod', url: 'https://www.example.com/sed-do-eiusmod' },
  { title: 'Tempor Incididunt', url: 'https://www.example.com/tempor-incididunt' },
  { title: 'Labore Et Dolore', url: 'https://www.example.com/labore-et-dolore' },
  { title: 'Magna Aliqua', url: 'https://www.example.com/magna-aliqua' },
  { title: 'Ut Enim Ad Minim', url: 'https://www.example.com/ut-enim-ad-minim' },
  { title: 'Veniam Quis Nostrud', url: 'https://www.example.com/veniam-quis-nostrud' },
  { title: 'Exercitation Ullamco', url: 'https://www.example.com/exercitation-ullamco' },
  { title: 'Laboris Nisi Ut', url: 'https://www.example.com/laboris-nisi-ut' },
  { title: 'Aliquip Ex Ea', url: 'https://www.example.com/aliquip-ex-ea' },
  { title: 'Commodo Consequat', url: 'https://www.example.com/commodo-consequat' },
  { title: 'Duis Aute Irure', url: 'https://www.example.com/duis-aute-irure' },
  { title: 'Reprehenderit In Voluptate', url: 'https://www.example.com/reprehenderit-in-voluptate' },
  { title: 'Velit Esse Cillum', url: 'https://www.example.com/velit-esse-cillum' },
  { title: 'Fugiat Nulla Pariatur', url: 'https://www.example.com/fugiat-nulla-pariatur' },
  { title: 'Excepteur Sint Occaecat', url: 'https://www.example.com/excepteur-sint-occaecat' },
  { title: 'Cupidatat Non Proident', url: 'https://www.example.com/cupidatat-non-proident' },
  { title: 'Sunt In Culpa', url: 'https://www.example.com/sunt-in-culpa' },
  { title: 'Qui Officia Deserunt', url: 'https://www.example.com/qui-officia-deserunt' },
  { title: 'Mollit Anim Id Est', url: 'https://www.example.com/mollit-anim-id-est' },
  { title: 'Laborum Et Dolorum', url: 'https://www.example.com/laborum-et-dolorum' },
  { title: 'Facilis Est Etiam', url: 'https://www.example.com/facilis-est-etiam' },
  { title: 'Accusantium Doloremque', url: 'https://www.example.com/accusantium-doloremque' },
  { title: 'Iste Natus Error', url: 'https://www.example.com/iste-natus-error' },
  { title: 'Sit Voluptatem', url: 'https://www.example.com/sit-voluptatem' },
  { title: 'Totam Rem Aperiam', url: 'https://www.example.com/totam-rem-aperiam' },
  { title: 'Eaque Ipsa Quae', url: 'https://www.example.com/eaque-ipsa-quae' },
  { title: 'Ab Illo Inventore', url: 'https://www.example.com/ab-illo-inventore' }
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
