import homePageImage from '../../assets/react-core-concepts.png';

import './Header.css'


const reactDescription = ['Fundamental', 'Crucial', 'Core'];


function generateRamdonInt( max ) {
  return Math.floor( Math.random() * ( max + 1 ) );
}

export default function Header() {

    const dynamicDescription = reactDescription [generateRamdonInt(2)];
  
    return (
      <header>
          <img src={homePageImage} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
  
            { dynamicDescription } React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  
  }