import React from 'react';
import imgLove1 from './img/love1.jpeg';
import imgLove2 from './img/love2.jpeg';
// import imgLove3 from './img/love3.jpeg';
// import imgLove4 from './img/love4.jpeg';
// import imgLove5 from './img/love5.jpeg';
// import imgLove6 from './img/love6.jpeg';
// import imgLove7 from './img/love7.jpeg';
// import imgLove8 from './img/love8.jpeg';
// import imgLove9 from './img/love9.jpeg';
// import imgLove10 from './img/love10.jpeg';
// import imgLove11 from './img/love11.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
			<nav>
	            <ul>
	                <li><a href="#">Reloj de amor</a></li>
	                <li><a href="#">Nuestros momentos</a></li>
	                <li><a href="#">Mas Amor</a></li>
	            </ul>
	        </nav>
		    <section className="hero">
		      <img  src={imgLove1} className="imgs" alt="love" />
		      <div className="redCube"></div>
		        <section className="clockSeccion">
			        <div className="clock">
			        	<h2 className="clockText">TE AMO</h2>
			        	<h1 className="clockText_2">Faltan</h1>
			        	<h1 className="crono">00:00:00</h1>
			        	<h1 className="clockText_2">para nuestro 4 aniversario</h1>
			        </div>
		        </section>
		        <div class="love"></div>
		        <div class="circule"></div>
	        </section>
	        <div className="wrapper_teAmo">
			    <h2 className="section_text">Momentos</h2>
		        <section className="teAmo">
			        	<div className="letter" >
			        	ERES
			        	<img  src={imgLove1} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	LA
			        	<img  src={imgLove2} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	MEJOR
			        	<img  src={imgLove2} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	NOVIA
			        	<img  src={imgLove2} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	DEL
			        	<img  src={imgLove2} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	MUNDO,
			        	<img  src={imgLove2} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	TE
			        	<img  src={imgLove2} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	AMO
			        	<img  src={imgLove2} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	CON
			        	<img  src={imgLove2} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	TODO
			        	<img  src={imgLove2} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	MI
			        	<img  src={imgLove2} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	CORAZÓN
			        	<img  src={imgLove2} className="img_teAmo" alt="love" />
			        	</div>
			    </section>
		    </div>
		    <footer className="footer">
		    	<div className="años">
					<h1 className="clockText_2">Tiempo juntos</h1>
		        	<h1 className="crono">00:00:00 Años</h1>
		    	</div>
				<h5 className="message" >
				Esta pagina web está hecha con todo el amor del mundo para mi novia Daniela A, 
				es la persona que me motiva a seguir adelante todos los dias y me demuestra su amor verdadero sin importar que. LA AMO
				</h5>
				<div class="love1"></div>
		        <div class="love2"></div>
		    </footer>
    </div>
  );
}

export default App;
