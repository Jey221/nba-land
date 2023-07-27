import axios from 'axios';

// Call API axios pour les données des équipes
export const getDataTeams = async () => {
  const options = {
    method: 'GET',
    url: 'https://free-nba.p.rapidapi.com/teams',
    params: { page: '0' },
    headers: {
      'X-RapidAPI-Key': '3339d009a1mshbf92b48a34c61d6p17be4djsnb7ebebd1f53f',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

// Call API axios pour les données des joueurs
export const getDataPlayers = async (page, searchPlayer) => {
  const options = {
    method: 'GET',
    url: 'https://free-nba.p.rapidapi.com/players',
    params: {
      page: page.toString(),
      per_page: '50',
      search: searchPlayer.toString(),
    },
    headers: {
      'X-RapidAPI-Key': '3339d009a1mshbf92b48a34c61d6p17be4djsnb7ebebd1f53f',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

// Call API axios pour les données des match https://www.balldontlie.io/api/v1/games

export const getDetail = async () => {
  // param>>> page, date, season ***page.toString()***date.toString()***season.toString()
  const options = {
    method: 'GET',
    url: `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams`, // http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${team}
  };
  try {
    const response = await axios.request(options);
    // console.log(response.data.sports[0].leagues[0].teams);
    return response.data.sports[0].leagues[0].teams;
  } catch (error) {
    console.error(error);
  }
};

/* export const getGames = async (playerFNameSearch, playerLNameSearch) => {
  // param>>> page, date, season ***page.toString()***date.toString()***season.toString()
  const options = {
    method: 'GET',
    url: `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${playerFNameSearch}%20${playerLNameSearch}`,
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};*/

/* // Call API axios pour les données des match https://www.balldontlie.io/api/v1/games
export const getDataGames = async () => {
  // param>>> page, date, season ***page.toString()***date.toString()***season.toString()
  const options = {
    method: 'GET',
    url: 'https://free-nba.p.rapidapi.com/games',
    params: {
      page: '9',
      per_page: '25',
      team_ids: '',
      date: '',
      Seasons: '',

      
      //page: page.toString(),
      //team_ids: '1',
      //date: date.toString(),
      //Seasons: season.toString(),
    },
    headers: {
      'X-RapidAPI-Key': '3339d009a1mshbf92b48a34c61d6p17be4djsnb7ebebd1f53f',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// Call API axios pour les données des stats
export const getDataStat = async (page) => {
  const options = {
    method: 'GET',
    url: 'https://free-nba.p.rapidapi.com/stats',
    params: {
      page: page.toString(),
      per_page: '25',
    },
    headers: {
      'X-RapidAPI-Key': '3339d009a1mshbf92b48a34c61d6p17be4djsnb7ebebd1f53f',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
 */
