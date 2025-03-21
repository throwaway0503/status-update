"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <p>
            Desde que ocurrió todo esto, me dije a mí mismo que empezaría desde cero. Pero realmente ese no fue el caso. Fue mas un episodio de relleno o algo así. Pero relleno del bueno como dije antes, aprendí mucho gracias a ese periodo de tiempo XD
        </p>
        <p>
            Pero no me comprometí a ello. No empecé desde cero realmente. Seguía pegado al pasado en múltiples formas. Pero ahora? No podría decir con 100% de certeza que ahora sí es el caso, pero si una cosa he aprendido, es que nunca se sabe si estarás listo... Solo es un salto de fe (aguante spiderverse XD).
        </p>
        <p>
            Es por ello que decidí realmente dedicarme a ello en múltiples formas. Pero ahora no lo hago por un motivo externo, sino porque busco darle una clase de soft-reboot a mi vida. Se podría decir que es una clase de 
            <b style={{ fontWeight: '1000' }}> nuevo inicio...</b>
        </p>
        <img src="leap-of-faith.jpg"/>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Un salto de fe...' Content={CurrentContent} prevRef={'7'} nextRef={'9'}/>
    ); 
}