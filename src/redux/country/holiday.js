const initialState = [];

// const holidayAPI = 'https://holidayapi.com/v1/holidays?pretty&key=1b53bd42-1ccd-44a8-9d52-4ac475e29c0f&country=AG&year=2021';

export const addHoliday = (holiday) => ({
  type: 'ADD_HOLIDAY',
  holiday,
});

export const FetchHoliday = (code) => (async (dispatch) => {
  // console.log(code);
  const holidayAPI = `https://holidayapi.com/v1/holidays?pretty&key=a40c81de-d524-4e4c-9d4e-85df3a49632d&country=${code}&year=2021`;
  const response = await fetch(holidayAPI);
  const info = await response.json();
  const holidayArray = [];
  info.holidays.forEach((e) => {
    const holiday = {
      holidayName: e.name,
      holidayDate: e.date,
    };
    holidayArray.push(holiday);
  });
  // const holidayLength= holidayArray.length;
  // console.log(holidayLength);
  dispatch(addHoliday(holidayArray));
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HOLIDAY':
      return action.holiday;

    default:
      return state;
  }
};

export default reducer;
