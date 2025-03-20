"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
  return (<>
    <div>
      Next.js on GitHub Pages xdxdxdxdNext.js on GitHub Pages xdxdxdxdNext.js on GitHub Pages xdxdxdxdNext.js on GitHub Pages xdxdxdxdNext.js on GitHub Pages xdxdxdxdNext.js on GitHub Pages xdxdxdxdNext.js on GitHub Pages xdxdxdxdNext.js on GitHub Pages xdxdxdxd
    </div>

    <div>
      Next.js on GitHub Pages xdxdxdxdNext.js on GitHub Pages xdxdxdxdNext.js on GitHub Pages xdxdxdxdNext.js on GitHub Pages xdxdxdxdNext.js on GitHub Pages xdxdxdxdNext.js on GitHub Pages xdxdxdxdNext.js on GitHub Pages xdxdxdxdNext.js on GitHub Pages xdxdxdxd
    </div>
  </>);
};

export default function Home() {
  return (
    <MainPage title='Title' Content={CurrentContent} prevRef={'-1'} nextRef={'2'}/>
  ); 
}