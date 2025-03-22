"use client";

import { MainPage, Video } from "../main-page";

const CurrentContent: React.FC = () => {
	return (<>
		<p>
			Si. Una página. ¿Por qué no? Me tome como un mini proyecto hacer esta página, y bueno pues salió bien diría yo xd
		</p>
		<p>
			El motivo por el cual decidí escribir esto mediante una página y no por sólo un mensaje de discord largo como los que suelo escribir es porque este es relativamente largo.
		</p>
		<p>
			Y también porque pense que hacerlo de esta forma me permite establecer una mejor estructura sobre el mensaje en cuestión; al igual que me ofrece la posibilidad de integrar imágenes o videos al mensaje, así como también me permite segmentar mi mensaje en 'páginas', siendo que cada página tiene su propio tema y me permite integrar mejor pacing en general.
		</p>
		<Video src="travesti.mp4"/>
		<p>
			Obviamente a mi me importa el pacing de este tipo de mensajes largos que escribo porque soy un dramático de mierda que le gusta contar cosas con estructura cohesiva porque así funciono XD 
		</p>
		<p>
			Bueno, en todo caso, por donde empiezo...
		</p>
		<img src="write-fire.gif"/>
  	</>);
};

export default function Home() {
  	return (
		<MainPage title='En serio? Una pagina???' Content={CurrentContent} prevRef={'1'} nextRef={'3'}/>
	); 
}