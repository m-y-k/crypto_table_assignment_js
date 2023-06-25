let data = [];

// fetch data by .then
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
.then(response => response.json())
.then(dataResponse => {
    data = dataResponse;
    console.log(data); // write logic here
    displayTable(data);
})
.catch(error => console.log("Error: ", error));

// fetch data by async / await
// async function fetchData() {
//     try {
//         const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
//         const responseData = await response.json();
//         data = responseData;
//         displayTable(data);
//     }catch(error) {
//         console.log("Error: ", error);
//     }
// }

// display the table
function displayTable(data) {
    console.log("display table func called")
    const tableBody = document.getElementById("cryptoTableBody");
    tableBody.innerHTML="";

    data.forEach(element => {
        const row = document.createElement("tr");
        const percentageChange = element.price_change_percentage_24h;
        const percentageChangeClass = percentageChange < 0 ? 'neg_class' : 'pos_class';
        const percentage_mkt_cap_limit = element.price_change_percentage_24h.toFixed(2);
        

        row.innerHTML=`
            <td><img src="${element.image}" alt="${element.name}" width="20"/></td>
            <td>${element.name}</td>
            <td>${element.symbol.toUpperCase()}</td>
            <td>${element.id}</td>
            <td>${'$'+element.current_price}</td>
            <td class="${percentageChangeClass}">${percentage_mkt_cap_limit}</td>
            <td>${"Mkt Cap: "+element.total_volume}</td>
            `;

        tableBody.appendChild(row);
    });
}

// search bar results filtering
document.getElementById('searchInput').addEventListener('keyup', event => {
    const searchedTerm = event.target.value.trim().toLowerCase();

    if (searchedTerm === "") {
        displayTable(data);
        return;
    }

    const filteredData = data.filter((item) => {
        const itemName = item.name.toLowerCase();
        const itemSymbol = item.symbol.toLowerCase();

        return itemName.includes(searchedTerm) || itemSymbol.includes(searchedTerm);
    });
    displayTable(filteredData);
});

// sort function - mkt_cap
document.getElementById("sortButton_mkt_cap").addEventListener('click', event => {
    console.log("sort by mkt cap called");
    // filter data
    data.sort((a, b) => b.total_volume - a.total_volume);
    displayTable(data);
});

//sort function - percentage
document.getElementById("sortButton_percentage").addEventListener("click", () => {
    console.log("sort by percentage called");
    // filter data
    data.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    displayTable(data);
})