"use client";

import './main-style.css';

interface TitleProps {
  title: String
};

export const Title: React.FC<TitleProps> = ({ title }) => {
  return (<>
    <div className='title'>{title}</div>
  </>);
};

export const Divider: React.FC = () => {
  return (<>
    <div className='divider'></div>
  </>);
};

interface RefButtonProps {
  href: String
};

export const PrevRefButton: React.FC<RefButtonProps> = ({ href }) => {
  const HandleClick = () => {
    window.location.href = href.toString();
  };

  return (<>
    <div className='ref-button' onClick={HandleClick}>
      <div>
        ◀
      </div>
      <div>
        Anterior
      </div>
    </div>
  </>);
};

export const NextRefButton: React.FC<RefButtonProps> = ({ href }) => {
  const HandleClick = () => {
    window.location.href = href.toString();
  };

  return (<>
    <div className='ref-button' onClick={HandleClick}>
      <div>
        Siguiente
      </div>
      <div>
        ▶
      </div>
    </div>
  </>);
};

interface MainPageProps {
  title: String,
  Content: React.FC,
  prevRef: String,
  nextRef: String
};

export const MainPage: React.FC<MainPageProps> = ({ title, Content, prevRef, nextRef }) => {
  // TODO: make it so that if button refs to -1 then it makes the respective button non-existant
  return (
    <main className='main'>

      <Title title={title}/>

      <Content/>
    
      <Divider/>

      <div className='ref-button-container'>
        <PrevRefButton href={prevRef.toString()}/>
        <NextRefButton href={nextRef.toString()}/>
      </div>

    </main>
  );
};