import React, { useState } from "react";

import Map from "./Map.js";
import logo from "./assets/logo_skyview.svg";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
import agenda from "./assets/agenda.png";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-mont text-general">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen &&
        <MobileMenu>
          <a className="no-underline text-menu" href="#home">HOME</a>
          <a className="no-underline text-menu" href="#mundo_as">MUNDO AS</a>
          <a className="no-underline text-menu" href="#agenda">AGENDA</a>
        </MobileMenu>}
      <main>
        <div className="absolute left-0 w-full h-4/5 bg-gradient-to-b from-home-1 to-home-2 -z-10"></div>
        <div id="home" className="container mx-auto">
          <div className="text-center mx-auto mt-2 max-w-7xl px-4 sm:mt-2">
            <h1 className="text-xl font-bold md:text-2xl text-title pt-8">
              EXPERIENCIA SKYVIEW
            </h1>
            <p className="text-base">
              Skyview virtual es un espacio abierto para conocer en profundidad Agrosuper.
            </p>
            <p className="text-base">
              Porque somos la empresa productora de proteína más grande de Chile y tenemos mucho que contar.
            </p>
            <p className="text-base my-2">
              Agenda tu visita guiada con nuestras coordinadoras para conocer con más detalle todo lo que hacemos.
            </p>
            <p className="text-base">
              Te invitamos a este viaje para que conozcas lo que somos, cómo trabajamos, y qué nos mueve.
            </p>
            <p className="text-base">
              Porque “Alimentar lo bueno de la vida todos los días” está en nuestro ADN y queremos compartirlo contigo.
            </p>
          </div>
          <Map />
        </div>
        <div className="container text-center mx-auto" id="mundo_as">
          <h1 className="text-lg font-bold md:text-xl py-4">
            Descubre nuestros procesos navegando en nuestro mundo
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center gap-10 px-20 mb-16">
            <div>
              <img className="rounded-2xl" src={img1} alt="Historia" />
              <h1 className="text-sm font-bold mt-6 px-10">Historia</h1>
            </div>
            <div>
              <img className="rounded-2xl" src={img2} alt="Oficina Central" />
              <h1 className="text-sm font-bold mt-6 px-10">Oficina Central</h1>
            </div>
            <div>
              <img className="rounded-2xl" src={img3} alt="Nuestros Planteles" />
              <h1 className="text-sm font-bold mt-6 px-10">Nuestros Planteles</h1>
            </div>
            <div>
              <img className="rounded-2xl" src={img4} alt="Plantas Industriales" />
              <h1 className="text-sm font-bold mt-6 px-10">Plantas Industriales</h1>
            </div>
            <div>
              <img className="rounded-2xl" src={img5} alt="Producción Responsable" />
              <h1 className="text-sm font-bold mt-6 px-10">Producción Responsable</h1>
            </div>
            <div>
              <img className="rounded-2xl" src={img6} alt="Comunidades" />
              <h1 className="text-sm font-bold mt-6 px-10">Comunidades</h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 mb-2" id="agenda">
          <div className="text-left px-16">
            <h1 className="text-xl font-bold md:text-2xl text-title">
              AGENDA UNA VISITA
            </h1>
            <h1 className="text-lg font-bold md:text-xl text-general">
              GUIADA A NUESTRO MUNDO AGROSUPER
            </h1>
            <p className="text-sm text-general">
              Disfruta la experiencia Skyview virtual.
            </p>
            <p className="text-sm text-general">
              Agenda aquí tu visita y una coordinadora guía te conducirá en un recorrido personalizado, donde te acompañará y responderá todas tus preguntas.
            </p>
            <div className="calendly-inline-widget min-w-xs h-[400px]" data-url="https://calendly.com/agrosuper-skyview?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=ff9200" ></div>
          </div>
          <div>
            <img src={agenda} className="w-5/6 h-auto mx-auto items-center" alt="agenda" />
          </div>
        </div>
      </main>
    </div>
  );
};

const Navbar = ({ menuOpen, setMenuOpen }) => (
  <div className="xs:flex xs:items-center xs:justify-between px-16 pt-4 container mx-auto">
    <div className="justify-center flex items-center">
      <img className='h-12 w-48' src={logo} alt='logo' />
    </div>
    <nav className="hidden md:block space-x-8 pb-4">
      <a className="no-underline text-menu text-sm" href="#home">HOME</a>
      <a className="no-underline text-menu text-sm" href="#mundo_as">MUNDO AS</a>
      <a className="no-underline text-menu text-sm" href="#agenda">AGENDA</a>
    </nav>
    <button type="button" aria-label="Toggle mobile menu" onClick={() => setMenuOpen(!menuOpen)} className="flex mx-auto xs:mx-0 rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"><MenuAlt4Svg menuOpen={menuOpen} /></button>
  </div>
);

const MobileMenu = ({ children }) => (
  <nav className="p-4 flex flex-col space-y-3 md:hidden">
    {children}
  </nav>
);

const MenuAlt4Svg = ({ menuOpen }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`transition duration-100 ease h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);