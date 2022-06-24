import React from 'react';
import '../scss/Footer.scss';
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <section className="footer">
      Copyright ©️
      <AiFillGithub />
      <a href="https://github.com/aburayhaan">Hammed Adisa</a>
    </section>
  );
}

export default Footer;
