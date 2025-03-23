"use client";

import { MainPage, Video, Audio } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <p>
            Parece chiste, pero es verdad.
        </p>
        <img src={"enby.png"}/>
        <p>
            Para ser mas preciso, actualmente me identifico como semi - no binarie / semi - masculino. Técnicamente los pronombres 'they/him' en español sería algo tipo 'elle/él', pero esto de los pronombres son por preferencia personal, así que por preferencia personal en español de preferencia usen 'él', aunque no me molestaría si haces lo otro supongo? XD
        </p>
        <p>
            El hecho es que pese a ser hombre de nacimiento, no me identifico con el género masculino, o al menos no al completo. Pese a ser hombre de nacimiento, no me siento cómodo realmente pensando que comparto género de nacimiento con los "machos alfa sigma mewing mamados barbudos" o una mierda así. Estoy al tanto sin embargo de que no tienes que ser 'masculino' para ser 'hombre', pero de todas formas elegí identificarme con esto porque siento que representa mejor mi identidad actual.
        </p>
        <p>
            La identidad y el género son un tema fluctuante y no estático, por lo que puede que en 'x' cantidad de tiempo decida retractarme de esto, así como puede que no.
        </p>
        <p>
            Con el tiempo he adoptado una perspectiva más positiva con respecto a lo que es este tipo de cosas. Empecé pensando que apoyo a la libertad de expresión y que la gente sea libre de elegir que quieren ser. Luego acabé sintiendome identificado con estas personas por lo que es la búsqueda de identidad y sentir que no encajamos en un mundo que no ha sido diseñado con nosotros en cuenta. Y finalmente estoy aquí.
        </p>
        <p>
            Para aquellos que se lo pregunten, el Blåhaj me lo compré no solo de paso y por el chiste, sino también porque pensé que sería gracioso usarlo para simbolizar esta decisión que estoy tomando con respecto a mi identidad en general.
        </p>
        <img src={"blahaj.jpg"}/>
        <p>
            Por cierto, se pronuncia Blåhaj:
        </p>
        <Audio src={"blahaj.mp3"}/>
        <p>
            También, clips que envejecieron cuestionablemente XD:
        </p>
        <Video src={"gaturro.mp4"}/>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Pronombres...?' Content={CurrentContent} prevRef={'10'} nextRef={'12'}/>
    ); 
}