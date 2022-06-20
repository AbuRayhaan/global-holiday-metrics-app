import React from 'react';
import Form from '../../components/home/Form';
import CountryList from '../../components/home/CountryList';
import GlobalHoliday from '../../components/home/GlobalHoliday'

const Home = () => {
  
  return (
    <section className="">
      <GlobalHoliday />
      <Form />
      <CountryList />
    </section>
  )
}

export default Home;