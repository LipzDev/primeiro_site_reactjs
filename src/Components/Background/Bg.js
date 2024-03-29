import React from 'react';
import './Bg.css';

const Bg = () => {
  const [pos, setPos] = React.useState(0);

  React.useEffect(() => {
    function bgText() {
      setPos(window.scrollY);
    }
    window.addEventListener('scroll', bgText);

    return () => {
      window.removeEventListener('scroll', bgText);
    };
  }, []);

  return (
    <section className="background" id="section1">
      <div className="container">
        <div
          style={pos > 350 ? { opacity: '0' } : { opacity: '1' }}
          className="background__item"
        >
          <h1 style={{ transform: `translate(${pos}px, 0)` }}>REACT.JS</h1>
          <h2 style={{ transform: `translate(-${pos}px, 0)` }}>
            A Biblioteca dos sonhos
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Bg;
