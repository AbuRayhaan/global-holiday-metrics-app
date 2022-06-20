import React, { useEffect } from 'react';
import GlobalHoliday from '../../components/holiday/CountryHoliday'
import HolidayList from '../../components/holiday/HolidayList';
import { useParams } from 'react-router-dom';
import {FetchHoliday} from '../../redux/country/holiday';
import { useDispatch } from 'react-redux';

const Country = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchHoliday(params.country_code));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="">
      <GlobalHoliday />
      <HolidayList />
    </section>
  )
}

export default Country;