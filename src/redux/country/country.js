const initialState = [];

const countryAPI = 'https://holidayapi.com/v1/countries?pretty&key=1b53bd42-1ccd-44a8-9d52-4ac475e29c0f';

export const addCountry = (country) => ({
  type: 'ADD_COUNTRY',
  country,
});

export const FetchCountry = () => (async (dispatch) => {
  const response = await fetch(countryAPI);
  const info = await response.json();
  const countryArray = [];
  info.countries.forEach((e) => {
    const country = {
      countryCode: e.code,
      countryName: e.name,
    };

    // const code = country.countryCode;
    // const holidayAPI = `https://holidayapi.com/v1/holidays?pretty&key=1b53bd42-1ccd-44a8-9d52-4ac475e29c0f&country=`&{code}`&year=2021`;

    // const addHoliday = (holiday) => ({
    //   type: 'ADD_HOLIDAY',
    //   holiday,
    // });
    
    // const FetchHoliday = () => (async (dispatch) => {
    //   const response = await fetch(holidayAPI);
    //   const info = await response.json();
    //   const holidayArray = [];
    //   info.holidays.forEach((e) => {
    //     const holiday = {
    //       holidayName: e.name,
    //       holidayDate: e.date,
    //     };
    //     holidayArray.push(holiday);
    //     console.log(holidayArray);
    //   });
    //     dispatch(addHoliday(holidayArray));
    // });

    // FetchHoliday();
    // console.log(code);
    countryArray.push(country);
  });
    dispatch(addCountry(countryArray));
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNTRY':
      return action.country;
  
    default:
      return state;
  }
};
  
export default reducer;