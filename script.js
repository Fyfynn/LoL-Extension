var input = document.getElementById("searchBar");
var btn = document.getElementById("send")

input.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        btn.click(fetchData());
    }
});


async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0a47a89c65msh63d59ca92c2a055p181957jsn8cf17c21a7ac',
            'X-RapidAPI-Host': 'lol_stats.p.rapidapi.com'
        }
    };
    var search = document.getElementById("searchBar").value
    // console.log(search)
    result = search.replaceAll(' ', '%20')
    // console.log(result)

    const res = await fetch(`https://lol_stats.p.rapidapi.com/euw1/${result}`, options)
    const stat = await res.json()
    console.log('stat', stat);

    document.getElementById("stats").innerHTML = stat.mostPlayedChamps.map(item => `<li id="testjs">${item.champName} : ${item.winrate} avec un total de ${item.totalGames}</li>`).join('');
}