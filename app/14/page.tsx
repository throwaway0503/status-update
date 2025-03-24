"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <p>
            Muy bien, hagamos esto una última vez...
        </p>
        <img src={"ultima-vez.jpg"}/>
        <p>
            Me hago llamar Moon. También conocido como Jano, también conocido como Oré.
        </p>
        <p>
            NO fui mordido por una araña radioactiva o algo así, pero igual soy estúpido XD
        </p>
        <p>
            Me parece que se conocen el resto. Estudié en Innova Schools, hice amigos, al igual que no-amigos (creo??). Pasaron cosas, creé Fiestita por una cosa que dijo una vez mi mamá, me gustó Lucía (el incidente Lu menor que 3 XD), entre a UTEC, y bueno.
        </p>
        <p>
            Estoy buscando cambiar, ser mejor como persona, y por eso estoy haciendo todo esto. Pero después de todo, sigo siendo la misma persona fundamentalmente hablando. Algunas cosas cambiarán aquí y allá, pero después de todo, sigo siendo yo. Así que no importa cuántas veces me caiga, siempre encontraré una forma de levantarme.
        </p>
        <p>
            Y... aquí es donde me quede sin cosas que decir para seguir el copypasta (ojalá no haberme salido mucho de guión XD)
        </p>
        <p>
            Pero sí, fuera del chiste. Estoy buscando 'reintroducirme' a ustedes. Nada ha cambiado fundamentalmente como dije, pero me gustaría que me acepten por quien estoy eligiendo ser. Y si bien nada de esto es algo muy diferente aun, déjenme ser dramático oe XD
        </p>
        <p>
            Y bueno, ya que estamos hablando de cosas diferentes a lo que mi personaje solía hacer, voy a compartirles algo que anteriormente para mí era algo relativamente personal...
        </p>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Una última vez...' Content={CurrentContent} prevRef={'13'} nextRef={'15'}/>
    ); 
}