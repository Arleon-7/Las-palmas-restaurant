import React, { useState, useEffect } from 'react';
import bg from "../assets/bg.png";
import bg_2 from "../assets/bg-2.png";
import app from "../assets/app.png";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png"; 
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";
import car from "../assets/car.svg";
import breakfast from "../assets/breakfast.png";
import pl_1 from "../assets/pl-1.png";
import menu from "../assets/menu.png";
import pla1 from "../assets/pla1.png";
import pla2 from "../assets/pla2.png";
import pla3 from "../assets/pla3.png";
import pla4 from "../assets/pla4.png";
import pla5 from "../assets/pla5.png";
import pla6 from "../assets/pla6.png";
import pla7 from "../assets/pla7.png";
import pla_8 from "../assets/pla-8.png";
import store1 from "../assets/store1.png";
import store2 from "../assets/store2.png";


export function Header() {
  const [currentItem, setCurrentItem] = useState(4);
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([
    { id: 1, img: pla1, titulo: 'Arroz Trifásico Gourmet', precio: '$35.500' },
    { id: 2, img: pla2, titulo: 'Ensalada de la Casa', precio: '$20.000' },
    { id: 3, img: pla3, titulo: 'Papas Paradisíacas', precio: '$42.500' },
    { id: 4, img: pla4, titulo: 'Res Supremo', precio: '$32.200' },
    { id: 5, img: pla5, titulo: 'Res en Salsa Verde', precio: '$30.000' },
    { id: 6, img: pla6, titulo: 'Cordero en Salsa Dorada', precio: '$57.000' },
    { id: 7, img: pla7, titulo: 'Mar y Tierra', precio: '$31.000' },
    { id: 8, img: pla_8, titulo: 'Lomo a la Jardinera', precio: '$36.200' }
  ]);
  const verMas = () => {
    setCurrentItem(currentItem + 4);
  };
  const comprarElemento = (e, elemento) => {
    e.preventDefault();
    const infoElemento = {
      imagen: elemento.img,
      titulo: elemento.titulo,
      precio: elemento.precio,
      id: elemento.id
    };
    setCarrito([...carrito, infoElemento]);
  };
  const eliminarElemento = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };
  const vaciarCarrito = () => {
    setCarrito([]);
  };
  return (
    <>
      <header className="header">
        <img className="bg" src={bg} alt="" />
        <div className="menu container">
          <a href="#" className="logo">LAS PALMAS RESTAURANT</a>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <img src= {menu} className="menu-icono" alt="" />
          </label>
          <nav className="navbar">
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Productos</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </nav>
          <div>
            <ul>
              <li className="submenu">
                <img src={car} id="img-carrito" alt="carrito" />
                <div id="carrito">
                  <table id="lista-carrito">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {carrito.map(item => (
                        <tr key={item.id}>
                          <td><img src={item.imagen} width="100" alt={item.titulo} /></td>
                          <td>{item.titulo}</td>
                          <td>{item.precio}</td>
                          <td>
                            <a href="#" className="borrar" data-id={item.id} onClick={() => eliminarElemento(item.id)}>X</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <a href="#" id="vaciar-carrito" className="btn-3" onClick={vaciarCarrito}>Vaciar Carrito</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-content container">
          <div className="header-txt">
            <h1><span>Bienvenido</span> disfruta de nuestros platillos</h1>
            <p>Estamos encantados de tenerle aquí. Disfrute de nuestros exquisitos platos, preparados con amor y dedicación por nuestros expertos chefs. Cada bocado le llevará en un viaje culinario inolvidable.</p>
            <a href="#" className="btn-1">Informacion</a>
          </div>
          <div className="header-img">
            <img src= {pl_1} alt="" />
          </div>
        </div>
      </header>
      <section className="breakfast container">
        <h2>Desayunos</h2>
        <p>Horario de 8am - 9pm</p>
        <div className="breakfast-content">
          <div className="breakfast-1"><img src={b1} alt="" /><h3>Hamburguesa</h3></div>
          <div className="breakfast-1"><img src={b2} alt="" /><h3>Pancakes</h3></div>
          <div className="breakfast-1"><img src={b3} alt="" /><h3>Sándwich</h3></div>
          <div className="breakfast-1"><img src={b4} alt="" /><h3>Ensalada de frutas</h3></div>
        </div>
      </section>
      <section className="info">
        <img className="bg-2" src={bg_2} alt="" />
        <div className="info-content container">
          <div className="info-img"><img src={breakfast} alt="" /></div>
          <div className="info-txt">
            <h2>La mejor calidad en los productos</h2>
            <p>Nos enorgullece presentarle nuestros productos de la más alta calidad. Cada artículo en nuestro menú ha sido cuidadosamente seleccionado y preparado con los ingredientes más frescos y de la mejor calidad disponibles. Nuestro compromiso con la excelencia se refleja en el sabor y la presentación de cada plato que servimos.</p>
            <a href="#" className="btn-1">Informacion</a>
          </div>
        </div>
      </section>
      <main className="products container">
        <h2>Productos</h2>
        <div className="box-container" id="lista-1">
          {productos.slice(0, currentItem).map(producto => (
            <div className="box" key={producto.id}>
              <img src={producto.img} alt={producto.titulo} />
              <div className="products-txt">
                <h3>{producto.titulo}</h3>
                <p>calidad premium</p>
                <p className="precio">{producto.precio}</p>
                <a href="#" className="agregar-carrito btn-3" data-id={producto.id} onClick={(e) => comprarElemento(e, producto)}>Agregar al carrito</a>
              </div>
            </div>
          ))}
        </div>
        {currentItem < productos.length && (
          <div className="btn-2" id="load-more" onClick={verMas}>Cargar Mas</div>
        )}
      </main>
      <section className="app container">
        <div className="app-txt">
          <h2>Descargar nuestra app descubre ofertas</h2>
          <p>Ahora puede descargar nuestra aplicación para tener acceso a nuestras increíbles ofertas. Con nuestra app, podrá descubrir descuentos especiales, promociones exclusivas y mucho más, todo al alcance de su mano. ¡No espere más, descargue nuestra aplicación hoy mismo y comience a disfrutar de las mejores ofertas!</p>
          <div className="descarga">
            <img src= {store1} alt="" />
            <img src= {store2} alt="" />
          </div>
        </div>
        <div className="app-img">
          <img src={app} alt="" />
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content container">
          <div className="link">
            <h3>Lorem</h3>
            <ul>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
            </ul>
          </div>
          <div className="link">
            <h3>Lorem</h3>
            <ul>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
            </ul>
          </div>
          <div className="link">
            <h3>Lorem</h3>
            <ul>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
            </ul>
          </div>
          <div className="link">
            <h3>Lorem</h3>
            <div className="descarga">
              <img src={store1} alt="" />
              <img src= {store2} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}