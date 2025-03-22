"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <p>
            Me gustaría empezar con el tema central de múltiples de los 'directs' pasados. Estoy hablando de aquella que conocían como 'jano flaca'.
        </p>
        <p>
            "Pero eso ya es agua pasada no habías dicho?". Pues sí; no vengo a decirles que volvimos a hablar ni nada. Solo vengo a actualizar de cómo voy al respecto.
        </p>
        <p>
            Empezaré haciendo un paréntesis diminuto al asunto. La vez pasada les dije que en todo caso si quisieran referirse a ella o a este arco de mi vida, pues el nombre sería "velvel".
        </p>
        <p>
            Pues luego de haberlo reconsiderado desde entonces, preferiría que cualquier cosa se le conozca como "cyan"; porque ese es el nombre de usuario que usaba cuando hablabamos constantemente y cuando la llamé mi 'mejor amiga', y me gustaría recordarla más con ese nombre, en lugar de recordarla con el nombre con el que empezamos a tener problemas, por así decirlo.
        </p>
        <img src="cyan.png"/>
        <p>
            (De hecho me parece que esta es la primera vez que muestro la foto de perfil de velvel, ojala no le doxeen o algo XD) 
        </p>
    </>);
};

export default function Home() {
    return (
        <MainPage title='velvel...' Content={CurrentContent} prevRef={'4'} nextRef={'6'}/>
    ); 
}