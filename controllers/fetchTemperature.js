const axios = require('axios');

const url = 'https://goweather.herokuapp.com/weather';
const urlOdesa = 'https://goweather.herokuapp.com/weather/Odesa';
const urlKyiv = 'https://goweather.herokuapp.com/weather/Kyiv';

exports.getCurrentTemperature = async (req, res, next) => {
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

exports.getCurrentTemperatureByParams = async (req, res, next) => {
  if (!req.params?.city?.trim()) {
    return res.status(400).json({ message: 'Params has not to be empty' });
  }

  const { city } = req.params;

  try {
    const cityTemperature = await axios.get(`${url}/${city}`);

    const responseData = {
      [city]: cityTemperature.data.temperature,
    };

    res.send(responseData);
  } catch (error) {
    return next(error);
  }
};
