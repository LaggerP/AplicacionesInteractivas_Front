import endpoints from './endpoints';
const axios = require('axios');

const token = sessionStorage.getItem('token');
const authorizationConfig = {
    headers: { Authorization: `Bearer ${token}` }
};

export const getAllRankings = async () => {
    try {
        const response = await axios.get(endpoints.getAllRanking, authorizationConfig)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const getRankingByUsername = async (_username) => {
    try {
        const response = await axios.get(endpoints.getRankingByUsername, {username: _username}, authorizationConfig)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const saveLevelPoint = async (dataPoints, gameType) => {
    switch(gameType) {
        case "billetes":
            try {
                //verificar http 400
				const response = await axios.patch(endpoints.updateBilletes, {puntaje_billetes: dataPoints.gamePoint, username: dataPoints.username}, authorizationConfig)
                return response;
            } catch (error) {
                console.log(error)
            }
          break;
        case "sumas":
            try {
                const response = await axios.patch(endpoints.updateSumas, {puntaje_sumas: dataPoints.gamePoint, username: dataPoints.username}, authorizationConfig);
                return response;
            } catch (error) {
                console.log(error);
            }
          break;
        case "multiplicacion":
            try {
                const response = await axios.patch(endpoints.updateMultiplicacion, {puntaje_multiplicacion: dataPoints.gamePoint, username: dataPoints.username}, authorizationConfig)
                console.log('RESPONSE SERVICE'+response)
                return response;
            } catch (error) {
                console.log(error)
            }
          break;
        default:
              return ;
      }
}

