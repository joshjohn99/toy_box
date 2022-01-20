import axios from 'axios';

const getPlaceData = async (bounds) => {
  const URL =
    'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
  var options = {
    params: {
      bl_latitude: bounds.sw.lat,
      tr_latitude: bounds.ne.lat,
      bl_longitude: bounds.sw.lng,
      tr_longitude: bounds.ne.lng,
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '4282753571mshe7ca6ba707b0337p143878jsn85aa0874f3ab',
    },
  };
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getPlaceData;
