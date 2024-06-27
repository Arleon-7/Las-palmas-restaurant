import bg from "../assets/bg.png"
import bg_2 from "../assets/bg-2.png"
import app from "../assets/app.png"
import b1 from "../assets/b1.png"
import b2 from "../assets/b2.png" 
import b3 from "../assets/b3.png"
import b4 from "../assets/b4.png"
import car from "../assets/car.svg"
import breakfast from "../assets/breakfast.png"

export function Header(params) {
    
    let loadMoreBtn = document.querySelector('#load-more')
let currentItem = 4;

function verMas () {

    let boxes = [...document.querySelectorAll('.box-container .box')];
    for(var i = currentItem; i< currentItem + 4; i++) {
        boxes[i] .style.display = 'inline-block';
    }
    currentItem += 4;
    if(currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none'
    }

}


//carrito

const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');


// cargarEventListeners(); 
function comprar() {comprarElemento()};
function eliminar() {eliminarElemento()};
function vaciar() {vaciarCarrito()};


    comprar ();
    eliminar ();
    vaciar();



function comprarElemento(e) { 
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) { 
        console.log(e.target.parentElement.parentElement);
        const elemento = e.target.closest('box-container');
        if (elemento){ leerDatosElemento(elemento);}
        else { console.log('No se encontro el elemento')}
        

        
    }

}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')

    }
    insertarCarrito(infoElemento)
}

function insertarCarrito(elemento) {

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 />
        </td>

        <td>
            ${elemento.titulo}
        </td>

        <td>
            ${elemento.precio}
        </td>

        <td>

            <a herf="#" class="borrar" data-id="${elemento.id0}" >X</a>

        </td>
    `;

    lista.appendChild(row);


}


function eliminarElemento(e) {

    e.preventDefault();
    let elemento,
        elementoId;

    if(e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }

}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}
    return(
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="style.css" />
  <header className="header">
    <img className="bg" src= {bg} alt="" />
    <div className="menu container">
      <a href="#" className="logo">
        LAS PALMAS RESTAURANT
      </a>
      <input type="checkbox" id="menu" />
      <label htmlFor="menu">
        <img src="images/menu.png" className="menu-icono" alt="" />
      </label>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
      <div>
        <ul>
          <li className="submenu">
            <img src= {car} id="img-carrito" alt="carrito" />
            <div id="carrito" onClick={eliminar}>
              <table id="lista-carrito">
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th />
                  </tr>
                </thead>
                <tbody />
              </table>
              <a href="#" id="vaciar-carrito" className="btn-3" onClick={vaciar}>
                Vaciar Carrito
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="header-content container">
      <div className="header-txt">
        <h1>
          {" "}
          <span>Bienvenido</span> disfruta de nuestros platillos{" "}
        </h1>
        <p>
          Estamos encantados de tenerle aquí. Disfrute de nuestros exquisitos
          platos, preparados con amor y dedicación por nuestros expertos chefs.
          Cada bocado le llevará en un viaje culinario inolvidable.
        </p>
        <a href="#" className="btn-1">
          Informacion
        </a>
      </div>
      <div className="header-img">
        <img src="images/pl-1.png" alt="" />
      </div>
    </div>
  </header>
  <section className="breakfast container">
    <h2>Desayunos</h2>
    <p>Horario de 8am - 9pm</p>
    <div className="breakfast-content">
      <div className="breakfast-1">
        <img src= {b1} alt="" />
        <h3>Hamburguesa</h3>
      </div>
      <div className="breakfast-1">
        <img src= {b2} alt="" />
        <h3>Pancakes</h3>
      </div>
      <div className="breakfast-1">
        <img src= {b3} alt="" />
        <h3>Sándwich</h3>
      </div>
      <div className="breakfast-1">
        <img src= {b4} alt="" />
        <h3>Ensalada de frutas</h3>
      </div>
    </div>
  </section>
  <section className="info">
    <img className="bg-2" src= {bg_2} alt="" />
    <div className="info-content container">
      <div className="info-img">
        <img src= {breakfast} alt="" />
      </div>
      <div className="info-txt">
        <h2>La mejor calidad en los productos</h2>
        <p>
          Nos enorgullece presentarle nuestros productos de la más alta calidad.
          Cada artículo en nuestro menú ha sido cuidadosamente seleccionado y
          preparado con los ingredientes más frescos y de la mejor calidad
          disponibles. Nuestro compromiso con la excelencia se refleja en el
          sabor y la presentación de cada plato que servimos.
        </p>
        <a href="#" className="btn-1">
          Informacion
        </a>
      </div>
    </div>
  </section>
  <main className="products container">
    <h2>Productos</h2>
    <div className="box-container" id="lista-1" onClick={comprar()}>
      <div className="box">
        <img src="images/pla1.png" alt="" />
        <div className="products-txt">
          <h3>Arroz Trifásico Gourmet</h3>
          <p>calidad premium</p>
          <p className="precio">$35.500</p>
          <a href="#" className="agregar-carrito btn-3" data-id={1}>
            Agregar al carrito
          </a>
        </div>
      </div>
      <div className="box">
        <img src="images/pla2.png" alt="" />
        <div className="products-txt">
          <h3>Ensalada de la Casa</h3>
          <p>calidad premium</p>
          <p className="precio">$20.000</p>
          <a href="#" className="agregar-carrito btn-3" data-id={2}>
            Agregar al carrito
          </a>
        </div>
      </div>
      <div className="box">
        <img src="images/pla3.png" alt="" />
        <div className="products-txt">
          <h3>Papas Paradisíacas</h3>
          <p>calidad premium</p>
          <p className="precio">$42.500</p>
          <a href="#" className="agregar-carrito btn-3" data-id={3}>
            Agregar al carrito
          </a>
        </div>
      </div>
      <div className="box">
        <img src="images/pla4.png" alt="" />
        <div className="products-txt">
          <h3>Res Supremo</h3>
          <p>calidad premium</p>
          <p className="precio">$32.200</p>
          <a href="#" className="agregar-carrito btn-3" data-id={4}>
            Agregar al carrito
          </a>
        </div>
      </div>
      <div className="box">
        <img src="images/pla5.png" alt="" />
        <div className="products-txt">
          <h3>Res en Salsa Verde</h3>
          <p>calidad premium</p>
          <p className="precio">$30.000</p>
          <a href="#" className="agregar-carrito btn-3" data-id={5}>
            Agregar al carrito
          </a>
        </div>
      </div>
      <div className="box">
        <img src="images/pla6.png" alt="" />
        <div className="products-txt">
          <h3>Cordero en Salsa Dorada</h3>
          <p>calidad premium</p>
          <p className="precio">$57.000</p>
          <a href="#" className="agregar-carrito btn-3" data-id={6}>
            Agregar al carrito
          </a>
        </div>
      </div>
      <div className="box">
        <img src="images/pla7.png" alt="" />
        <div className="products-txt">
          <h3>Mar y Tierra</h3>
          <p>calidad premium</p>
          <p className="precio">$31.000</p>
          <a href="#" className="agregar-carrito btn-3" data-id={7}>
            Agregar al carrito
          </a>
        </div>
      </div>
      <div className="box">
        <img src="images/pla-8.png" alt="" />
        <div className="products-txt">
          <h3>Lomo a la Jardinera</h3>
          <p>calidad premium</p>
          <p className="precio">$36.200</p>
          <a href="#" className="agregar-carrito btn-3" data-id={8}>
            Agregar al carrito
          </a>
        </div>
      </div>
    </div>
    <div className="btn-2" id="load-more" onClick={verMas}>
      Cargar Mas
    </div>
  </main>
  <section className="app container">
    <div className="app-txt">
      <h2>Descargar nuestra app descubre ofertas</h2>
      <p>
        Ahora puede descargar nuestra aplicación para tener acceso a nuestras
        increíbles ofertas. Con nuestra app, podrá descubrir descuentos
        especiales, promociones exclusivas y mucho más, todo al alcance de su
        mano. ¡No espere más, descargue nuestra aplicación hoy mismo y comience
        a disfrutar de las mejores ofertas!
      </p>
      <div className="descarga">
        <img src="images/store1.png" alt="" />
        <img src="images/store2.png" alt="" />
      </div>
    </div>
    <div className="app-img">
      <img src= {app} alt="" />
    </div>
  </section>
  <footer className="footer">
    <div className="footer-content container">
      <div className="link">
        <h3>Lorem</h3>
        <ul>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
        </ul>
      </div>
      <div className="link">
        <h3>Lorem</h3>
        <ul>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
        </ul>
      </div>
      <div className="link">
        <h3>Lorem</h3>
        <ul>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
          <li>
            <a href="#">lorem</a>
          </li>
        </ul>
      </div>
      <div className="link">
        <h3>Lorem</h3>
        <div className="descarga">
          <img src="images/store1.png" alt="" />
          <img src="images/store2.png" alt="" />
        </div>
      </div>
    </div>
  </footer>
</>
    )    
}