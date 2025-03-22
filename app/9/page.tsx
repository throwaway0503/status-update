"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <p>
            ¿Qué significa esto? ¿Qué es un 'nuevo inicio'? De momento no es nada aparentemente fuera de lo común. Para una persona promedio quizás no lo sea, pero para mí es bastante.
        </p>
        <p>
            He empezado a hacer varias cosas por primera vez. Algo tan aparentemente trivial como lo es ir a comprar ropa por mí mismo, y decidir que quiero. He hecho cosas como reorganizar mi cuarto luego de como 4 años de tenerlo en la misma configuracaión. Y también he decidido cortarme el pelo de una manera diferente a la que usualmente hago.
        </p>
        <p>
            Como dije, son cosas aparentemente simples, pero para mí realmente cada una de estas cosas que estoy haciendo tiene un significado mayor. Me gustaría contarles más al respecto, pero no nos apresuremos sobre los detalles aún.
        </p>
        <p>
            Y cómo parte de este nuevo inicio, haré algo que nunca he hecho. Voy a decirle adiós a mi cuenta actual de discord. Quiero dejar atrás esto que representa parte de mi pasado. Esto no significa que voy a cortar contacto con ustedes ni nada, no soy TAN dramático XD.
        </p>
        <p>
            Y bueno, esto no es solo un cambio de cuenta de discord y ya. Es también un cambio de identidad online. En efecto me estoy despidiendo de D4rkMn, y le estoy cambiando por una identidad que me gusta más.
        </p>
        <p>
            Denle la bienvenida a... <b style={{ fontWeight: '1000' }}> moonliit</b>!
        </p>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Un nuevo inicio' Content={CurrentContent} prevRef={'8'} nextRef={'10'}/>
    ); 
}