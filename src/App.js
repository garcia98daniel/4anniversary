import React, { useEffect, useRef, useState} from 'react';

import imgLove1_1 from './img/loveAño1-1.jpeg';
import imgLove1_2 from './img/loveAño1-2.jpeg';
import imgLove1_3 from './img/loveAño1-3.jpeg';
import imgLove2_1 from './img/loveAño2-1.jpeg';
import imgLove2_2 from './img/loveAño2-2.jpeg';
import imgLove2_3 from './img/loveAño2-3.jpeg';
import imgLove3_1 from './img/loveAño3-1.jpeg';
import imgLove3_2 from './img/loveAño3-2.jpeg';
import imgLove3_3 from './img/loveAño3-3.jpeg';
import imgLove4_1 from './img/loveAño4-1.jpeg';
import imgLove4_2 from './img/loveAño4-2.jpeg';
import imgLove4_3 from './img/loveAño4-3.jpeg';
import imgLove1 from './img/love1.jpeg';
import imgLove2 from './img/love2.jpeg';

import heartsBg from './img/heart.png';

import fbLogo from './img/fb.png';
import igLogo from './img/ig.png';
import gitLogo from './img/git.png';



import './App.css';

function App() {
	const [timerDays, setTimerDays] = useState('00');
	const [timerHours, setTimerHours] = useState('00');
	const [timerMinutes, setTimerMinutes] = useState('00');
	const [timerSeconds, setTimerSeconds] = useState('00');
	const [ahora0, setAhora0] = useState(0);

	let interval = useRef();

	const startTimer = () =>{
		const countDownDate = new Date('Jun 23, 2020 00:00:00').getTime();

		interval = setInterval(()=>{
			const now = new Date().getTime();
			const distance = countDownDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 *24));
			const hours = Math.floor((distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60)));
			const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);
				// console.log(distance);

			if(distance < 0){
				clearInterval(interval.current);
			}else{
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
				setAhora0(distance);
			}

		},1000);

	};


	const [AñostimerDays, setAñosTimerDays] = useState('00');
	const [AñostimerHours, setAñosTimerHours] = useState('00');
	const [AñostimerMinutes, setAñosTimerMinutes] = useState('00');
	const [AñostimerSeconds, setAñosTimerSeconds] = useState('00');

	let interval2 = useRef();

	const startTimer2 = () =>{
		const initialDate = new Date('Jun 23, 2016 00:00:00').getTime();

		interval = setInterval(()=>{
			const now = new Date().getTime();
			const distance = now - initialDate;

			const days = Math.floor(distance / (1000 * 60 * 60 *24));
			const hours = Math.floor((distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60)));
			const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if(distance < 0){
				clearInterval(interval.current);
			}else{
				setAñosTimerDays(days);
				setAñosTimerHours(hours);
				setAñosTimerMinutes(minutes);
				setAñosTimerSeconds(seconds);
			}

		},1000);

	};

	useEffect(()=>{
		startTimer();
		startTimer2();
		return () => {
			clearInterval(interval.current);
			clearInterval(interval2.current);
		};
	});

  return (
    <div className="App">
			<nav>
	            <ul>
	                <li><a href="#hero">Reloj de amor</a></li>
	                <li><a href="#momentos">Nuestros momentos</a></li>
	                <li><a href="#mas">Mas Amor</a></li>
	            </ul>
	        </nav>
		    <section className="hero" id="hero">
		      <img  src={imgLove1} className="imgs" alt="love" />
		      <div className="redCube"></div>
		        <section className="clockSeccion">
			        <div className="clock">
			        	<h2 className="clockText">TE AMO</h2>
				        {ahora0 != 0 ?
					        	<div>
					        		<h1 className="clockText_2">Faltan</h1>
						        	<div className="clock_container">
						        		<div className="time_container dias">
						        			<h1>{timerDays}</h1>
						        			<strong>Días</strong>
							        	</div>
							        	<div className="time_container horas">
							        		<h1>{timerHours}</h1>
						        			<strong>Horas</strong>
							        	</div>
							        	<div className="time_container minutos">
							        		<h1>{timerMinutes}</h1>
						        			<strong>Minutos</strong>
							        	</div>
							        	<div className="time_container segundos">
							        		<h1>{timerSeconds}</h1>
						        			<strong>Segundos</strong>
							        	</div>
					        		</div>
					        		<h1 className="clockText_2">para nuestro 4to aniversario MI AMOR</h1>
					        	</div>
				        	:
				        		 <h2 className="clockText">FELIZ ANIVERSARIO N°4</h2>
				        	}
			        	
			        </div>
		        </section>
		        <div class="love"></div>
		        <div class="circule"></div>
	        </section>
	        <div className="wrapper_teAmo">
			    <h2 className="section_text" id="momentos">Momentos ♥</h2>
		     	{/*<img  src={heartsBg} className="img_hearts" alt="love" />*/}
		        <section className="teAmo">
			        	<div className="letter" >
			        	ERES
			        	<img  src={imgLove1_1} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	LA
			        	<img  src={imgLove1_2} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	MEJOR
			        	<img  src={imgLove1_3} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	NOVIA
			        	<img  src={imgLove2_1} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	DEL
			        	<img  src={imgLove2_2} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	MUNDO,
			        	<img  src={imgLove2_3} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	TE
			        	<img  src={imgLove3_1} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	AMO
			        	<img  src={imgLove3_2} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	CON
			        	<img  src={imgLove3_3} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	TODO
			        	<img  src={imgLove4_1} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	MI
			        	<img  src={imgLove4_2} className="img_teAmo" alt="love" />
			        	</div>
			        	<div className="letter" >
			        	CORAZÓN
			        	<img  src={imgLove4_3} className="img_teAmo" alt="love" />
			        	</div>
			    </section>
		    </div>
		    <footer className="footer" id="mas">
		    	<div className="años">
					<h1 className="clockText_2">Tiempo juntos</h1>
		        	<div className="clock_container">
		        		<div className="time_container dias">
		        			<h1>{AñostimerDays}</h1>
		        			<strong>Días</strong>
			        	</div>
			        	<div className="time_container horas">
			        		<h1>{AñostimerHours}</h1>
		        			<strong>Horas</strong>
			        	</div>
			        	<div className="time_container minutos">
			        		<h1>{AñostimerMinutes}</h1>
		        			<strong>Minutos</strong>
			        	</div>
			        	<div className="time_container segundos">
			        		<h1>{AñostimerSeconds}</h1>
		        			<strong>Segundos</strong>
			        	</div>
		        	</div>
		    	</div>
		    	<div className="contacto" >
		    		<h6 >De Daniel Garcia con amor para Daniela A.</h6>
		    		<h1>
		    			I<strong>♥U</strong>
		    			<a href="https://web.facebook.com/daniel98garcia">
		    				<img className="contact fb" src={fbLogo} />
		    			</a>
		    			<a href="https://www.instagram.com/daniel98garcia/">
		    				<img className="contact ig" src={igLogo} />
		    			</a>
		    			<a href="https://github.com/garcia98daniel">
		    				<img className="contact git" src={gitLogo} />
		    			</a>
		    		</h1>

				</div>
				<h5 className="message" >
				Esta pagina web está hecha con todo el amor del mundo para mi novia Daniela A, 
				es la persona que me motiva a seguir adelante todos los dias y me demuestra su amor verdadero sin importar que. LA AMO
				</h5>
				<div class="love1"></div>
		    </footer>
    </div>
  );
}

export default App;
