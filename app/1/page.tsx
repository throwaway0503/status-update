"use client";

import { MainPage, Video } from "../main-page";

const CurrentContent: React.FC = () => {
  // TODO: add jano direct intro video
  return (<>
    <Video src="direct.mp4"/>
  </>);
};

export default function Home() {
  return (
    <MainPage title='Intro' Content={CurrentContent} nextRef={'2'}/>
  ); 
}