// Fetch data from the API using .then
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  .then(response => response.json())
  .then(data => renderTable(data))
  .catch(error => console.error('Error:', error));

// Fetch data from the API using async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    const data = await response.json();
    renderTable(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Render the table
function renderTable(data) {
  const tableBody = document.getElementById('cryptoTableBody');

  // Clear previous table data
  tableBody.innerHTML = '';

  // Iterate over the data and create table rows
  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${item.image}" alt="${item.name}"></td>
      <td>${item.name}</td>
      <td>${item.id}</td>
      <td>${item.symbol.toUpperCase()}</td>
      <td>$${item.current_price}</td>
      <td>$${item.total_volume}</td>
      <td style="color: green">${item.market_cap_change_percentage_24h.toFixed(2)}%</td>
      <td>Mkt Cap: $${item.market_cap}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Search functionality
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () => {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase();

  // Filter the data based on the search term
  const filteredData = responseData.filter(item =>
    item.name.toLowerCase().includes(searchTerm) ||
    item.id.toLowerCase().includes(searchTerm) ||
    item.symbol.toLowerCase().includes(searchTerm)
  );

  renderTable(filteredData);
});

// Sort functionality
const sortButton = document.getElementById('sortButton-mkt-cap');
sortButton.addEventListener('click', () => {
  // Sort the data by market cap in descending order
  const sortedData = responseData.sort((a, b) => b.market_cap - a.market_cap);

  renderTable(sortedData);
});

// Sort functionality
const sortButton_percentage = document.getElementById('sortButton-percentage');
sortButton_percentage.addEventListener('click', () => {
  // Sort the data by percentage in descending order
  const sortedData = responseData.sort((a, b) => b.market_cap_change_percentage_24h - a.market_cap_change_percentage_24h);

  renderTable(sortedData);
});