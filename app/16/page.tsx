"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <p>
            Bueno, ya me estoy quedando sin cosas que decir finalmente. En todo caso, si llegaste hasta aquí y no me odias (fuck homofobia o lo q sea) entonces gracias por quedarte aquí y por ser amigos XD
        </p>
        <p>
            Si bien esta página no es la más detallada ni más compleja del mundo, le puse bastante cariño y el resultado me gustó. No esta mál para ser un mini proyecto de unos 3 días o por allí XD
        </p>
        <p>
            Una vez dicho todo esto, creo que de momento no tengo nada más que contar de momento. Si cualquier cosa fuese a surgir, voy a confiar en ustedes. Gracias por los jajas, por las mierdas, y sobretodo por estar aquí conmigo. Se que no es la primera vez que digo esto así que quizas ya no tenga tanto valor como antes, pero igual, los quiero gente XD
        </p>
        <p>
            Así que bueno, eso es todo. Gracias.
        </p>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Finale' Content={CurrentContent} prevRef={'15'} nextRef={'17'}/>
    ); 
}