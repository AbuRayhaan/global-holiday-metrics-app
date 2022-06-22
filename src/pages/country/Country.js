import React, { useEffect } from 'react';
// import GlobalHoliday from '../../components/holiday/CountryHoliday'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HolidayList from '../../components/holiday/HolidayList';
import { FetchHoliday } from '../../redux/country/holiday';

const Country = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchHoliday(params.country_code));
  }, []);

  return (
    <section className="">
      {/* <GlobalHoliday /> */}
      <HolidayList />
    </section>
  );
};

export default Country;
