const initialState = [];

const url = 'https://holidayapi.com/v1/countries?pretty&key=1b53bd42-1ccd-44a8-9d52-4ac475e29c0f';

export const addCountry = (country) => ({
  type: 'ADD_COUNTRY',
  country,
});

export const FetchCountry = () => (async (dispatch) => {
  const response = await fetch(url);
  const info = await response.json();
  const countryArray = [];
  info.countries.forEach((e) => {
    const country = {
      countryCode: e.code,
      countryName: e.name,
    };
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