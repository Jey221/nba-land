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
