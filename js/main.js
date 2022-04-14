//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//event listener once enter button clicked 
document.querySelector('button').addEventListener('click', MatchWeekStandings);

//standings function 
function MatchWeekStandings (){
//set parameters for the selected league value and your API Key
    let leagueID = document.querySelector('#leagues').value;
    console.log(leagueID);
    const apiKey = 'b92d196605de488f95dd6dfb7196421e'
    let leagueInt = '2021';
// returned value to be included in the Fetch api for each league  - Note: La Liga, Ligue 1, Bundesliga, Serie A missing - followed up with develop for league IDs 

    if(leagueID === 'eredivisie'){
        leagueInt = '2003';
        console.log(leagueInt)
    }else if(leagueID === 'premierLeague'){
        leagueInt = '2021';
        console.log(leagueInt)
    }else if(leagueID === 'laLiga'){
        leagueInt = '2021';
        console.log(leagueInt)
    }else if(leagueID === 'SerieA'){
        leagueInt = '2021';
        console.log(leagueInt)
    }else if(leagueID === 'bundesliga'){
        leagueInt = '2088';
        console.log(leagueInt)
    }else if(leagueID === 'ligueUn'){
        leagueInt = '2021';
        console.log(leagueInt)
    }else{
        console.log('competition')
    }

    // Fetch request 

    fetch(`http://api.football-data.org/v2/competitions/${leagueInt}/standings`,{
        headers: {'X-Auth-Token': `${apiKey}`},
        dataType: 'json',
        type: 'GET',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let standingTable = data.standings[0].table[0];
        console.log(standingTable)

        // for loop for to populate each line variable 
        
        for(i=0; i<data.standings[0].table.length; i++){
            document.querySelector(`.rank${i+1}Position`).innerHTML = data.standings[0].table[i].position
            document.querySelector(`.rank${i+1}Name`).innerHTML = data.standings[0].table[i].team.name
            document.querySelector(`.rank${i+1}Played`).innerHTML = data.standings[0].table[i].playedGames
            document.querySelector(`.rank${i+1}Won`).innerHTML = data.standings[0].table[i].won
            document.querySelector(`.rank${i+1}Drew`).innerHTML = data.standings[0].table[i].draw
            document.querySelector(`.rank${i+1}Lost`).innerHTML = data.standings[0].table[i].lost
            document.querySelector(`.rank${i+1}For`).innerHTML = data.standings[0].table[i].goalsFor
            document.querySelector(`.rank${i+1}Against`).innerHTML = data.standings[0].table[i].goalsAgainst
            document.querySelector(`.rank${i+1}Points`).innerHTML = data.standings[0].table[i].points      
       
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

