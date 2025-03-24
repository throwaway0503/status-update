"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <p>
            Bueno, les había mencionado antes que estoy buscando variar cosas aparentemente triviales como lo son el estilo de pelo, de ropa, y entre otras cosas que ya he mencionado.
        </p>
        <p>
            Si bien aparentan ser cosas sin significado mayor, para mí hacer algo así y decírselos es un paso enorme para mí.
        </p>
        <p>
            Si lo fuese a resumir de una forma es la siguiente: Cuando interactuo con gente me siento como un personaje y no como yo mismo realmente. Siento que adapto la forma de un personaje que tiene una 'personalidad' establecida, y por algún motivo siento este impulso mayor que me lleva a creer que por NINGÚN motivo en absoluto debería de romper personaje.
        </p>
        <p>
            Mi personaje establecido en general es uno que no le importa como se ve. Uno que no le importa ese tipo de cosas. Y con el paso del tiempo pues lo que realmente quiero conmigo mismo se desalinea con lo que mi personaje es.
        </p>
        <p>
            Me cuesta mucho hacer esto, pero estoy tomando un paso para romper este personaje. No solo eso, sino que estoy tomando un esfuerzo para mostrar una versión de mí que sea más honesta a lo que soy como persona. Así que si bien no estoy haciendo aun cambios tan drásticos, el hecho es que estoy tomando un paso para romper esto, y eso es un gran avance.
        </p>
        <p>
            En resumen, si bien parece ser insignificante a un alto nivel, para mí significa mucho más, y representa que seguiré avanzando y superándome como persona, con tal de ser alguien mejor que lo que soy actualmente.
        </p>
        <p>
            En cierta forma, todo este mensaje esta orientado a contarles sobre esto y sobre cómo quiero romper este personaje, y las medidas que estoy tomando para asegurarme que pueda ser mejor a futuro.
        </p>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Oré, el personaje' Content={CurrentContent} prevRef={'12'} nextRef={'14'}/>
    ); 
}