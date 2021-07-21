const axios = require('axios');

const urlOdesa = 'https://goweather.herokuapp.com/weather/Odesa';
const urlKyiv = 'https://goweather.herokuapp.com/weather/Kyiv';

exports.getCurrentTempareture = async (req, res, next) => {
  try {
    const OdesaTemperatureData = await axios.get(urlOdesa);
    const KyivTemperatureData = await axios.get(urlKyiv);

    const responseData = {
      Odesa: OdesaTemperatureData.data.temperature,
      Kyiv: KyivTemperatureData.data.temperature,
    };

    res.send(responseData);
  } catch (error) {
    return next(error);
  }
};
