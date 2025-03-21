"use client";

import { MainPage, Video } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <p>
            <b style={{ fontWeight: '1000' }}> moonliit...</b>
        </p>
        <img src={"moonliit.png"}/>
        <p>
            D4rkMn fue inicialmente concebido como D4rkMoon. No recuerdo exactamente en qué momento cambié el Moon por Mn, pero nunca dejó de ser ello. 'Luna Oscura'?? Qué quize decir con eso? Pues la verdad, no sé XD, solo lo elegí y pues quedó.
        </p>
        <p>
            Y bueno, tras pensar por buen rato en un nuevo nombre de usuario que sentí que me quedaría bien, acabé llegando a este. Quiero que se sienta familiar, pero distinto; como lo que estoy haciendo con este 'nuevo inicio' en general.
        </p>
        <p>
            La inspiración claramente es lo contrario. Anteriormente era 'Luna Oscura'. Ahora decidí que sea similar. No descartemos la luna (my thought process: 'moon'? Me gusta ese nombre...). ¿Entonces cómo representaría algo distinto? Pues muy simple. En lugar de que sea oscura, pues que sea brillante, ¿no? Algo así, pero no exactamente.
        </p>
        <p>
            Busqué algo que represente algo distinto. En lugar de algo edgy como la 'Luna Oscura', no nos olvidemos que es gracias a la luz de la luna que podemos ver de noche. Esa era la principal idea: 'Luz de luna'. Simboliza esperanza, una luz guía, y que se puede encontrar incluso en el medio de la noche.
        </p>
        <p>
            Pense en variaciones de 'moonlight'. No estaba muy seguro de cómo enfocar el nombre, pero sabía que iría por allí. Luego de pensar en múltiples opciones, acabe en lo que ven: 'moonliit', y la verdad que me acabó gustando.
        </p>
        <p>
            Entonces lo que quiero decir con esto es que, quiero empezar de nuevo, no como 'D4rkMn', sino como 'moonliit'.
        </p>
        <p>
            Espera, un momento... ¿Qué es eso?...
        </p>
        <Video src={"pronouns.mp4"}/>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Luz de luna' Content={CurrentContent} prevRef={'9'} nextRef={'11'}/> // jaja 9/11
    ); 
}