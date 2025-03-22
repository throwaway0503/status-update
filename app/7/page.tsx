"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <p>
            Con eso fuera del camino, ahora puedo continuar con lo demás.
        </p>
        <p>
            Había mencionado previamente que por toda la situación, me alejé de mi grupo de amigos anterior y empecé un ciclo básicamente solo. Y bueno, si bien no fue mi mejor ciclo emocionalmente hablando (irónicamente, académicamente hablando si lo fue XD), ese tiempo que pasé solo realmente lo necesité.
        </p>
        <p>
            Ese tiempo sólo me sirvio para enfocarme en mí mismo y reflexionar qué soy y qué quiero ser. Pase por varios momentos de crisis existencial / emocional, pero bueno, una vez tocas fondo no hay nada que no sea subir, o algo así XD
        </p>
        <p>
            Si bien aun no tengo un grupo de amigos establecido en la universidad, estoy seguro que haré un avance al respecto este ciclo. El ciclo pasado como dije fue un ciclo que me lo tomé para mi solo, pero esta vez vuelvo a darle con fuerzas. Estoy buscando pasarme por clubs universitarios y cosas así, a ver si algo sale de esto. Sigue siendo bastante experimental, pero eh, lo que importa es que se está intentando y que se hace con ánimo!!1!
        </p>
        <p>
            En el ciclo pasado he tenido mucho tiempo para reflexionar sobre qué quiero ser y como quiero llegar a ello. Es gracias a ello que estoy tomando nuevas decisiones que previamente no había ni considerado hasta ahora, y la verdad siento que estoy encamindado a sentirme mejor conmigo mismo en general.
        </p>
        <p>
            Es por ello que...
        </p>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Y ahora...?' Content={CurrentContent} prevRef={'6'} nextRef={'8'}/>
    ); 
}