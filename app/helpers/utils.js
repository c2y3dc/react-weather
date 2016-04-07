const daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
};

const monthsMap = {
  "0":"Jan",
  "1":"Feb",
  "2":"Mar",
  "3":"Apr",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"Aug",
  "8":"Sept",
  "9":"Oct",
  "10":"Nov",
  "11":"Dec"
};

export function convertToF(kelvin){
  return ((kelvin - 273.15) * 1.8000 + 32).toPrecision(3)
}

export function convertToC(kelvin){
  return (kelvin - 273.15).toPrecision(3)
}

export function getDate(unixTimestamp){
  const date = new Date(unixTimestamp * 1000);
  const day = daysMap[date.getDay()];
  const month = monthsMap[date.getMonth()] + " " + date.getDate();
  return day + ", " + month;
}

