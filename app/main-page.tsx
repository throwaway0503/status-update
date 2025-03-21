"use client";

import './main-style.css';

// Title component

interface TitleProps {
  title: String
};


const Title: React.FC<TitleProps> = ({ title }) => {
  return (<>
    <div className='title'>{title}</div>
  </>);
};

// Dividing line component

const Divider: React.FC = () => {
  return (<>
    <div className='divider'></div>
  </>);
};

// Ref Button components

interface RefButtonProps {
  href?: String
};

const PrevRefButton: React.FC<RefButtonProps> = ({ href }) => {
  if (href === undefined) {
    return <EmptyRefButton/>;
  }

  const basePathOption: string | undefined = process.env.NEXT_PUBLIC_PAGES_BASE_PATH;
  if (basePathOption === undefined) {
    return <EmptyRefButton/>;
  }
  const basePath: string = basePathOption;
  
  const handleClick = () => {
    window.location.href = basePath + '/' + href.toString();
  };

  return (<>
    <div className='ref-button' onClick={handleClick}>
      <div>
        ◀
      </div>
      <div>
        Anterior
      </div>
    </div>
  </>);
};

const NextRefButton: React.FC<RefButtonProps> = ({ href }) => {
  if (href === undefined) {
    return <EmptyRefButton/>;
  }

  const basePathOption: string | undefined = process.env.NEXT_PUBLIC_PAGES_BASE_PATH;
  if (basePathOption === undefined) {
    return <EmptyRefButton/>;
  }
  const basePath: string = basePathOption;
  
  const handleClick = () => {
    window.location.href = basePath + '/' + href.toString();
  };

  return (<>
    <div className='ref-button' onClick={handleClick}>
      <div>
        Siguiente
      </div>
      <div>
        ▶
      </div>
    </div>
  </>);
};

const EmptyRefButton: React.FC = () => {
  return (<>
    <div className='empty-ref-button'></div>
  </>);
};

// Main Page Component

interface MainPageProps {
  title: String,
  Content: React.FC,
  prevRef?: String,
  nextRef?: String
};

export const MainPage: React.FC<MainPageProps> = ({ title, Content, prevRef, nextRef }) => {
  // TODO: make it so that if button refs to -1 then it makes the respective button non-existant
  return (
    <main className='main'>

      <Title title={title}/>

      <Content/>
    
      <Divider/>

      <div className='ref-button-container'>
        <PrevRefButton href={prevRef?.toString()}/>
        <NextRefButton href={nextRef?.toString()}/>
      </div>

    </main>
  );
};