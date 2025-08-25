import './App.css';
import reactCoreConcepts from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];


function genRandomInt(max) {
  let wordIndex =  Math.floor(Math.random() * (max + 1))
  return reactDescriptions[wordIndex];
}

function Header() {
  return (
    <header>
      <img src={reactCoreConcepts} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {genRandomInt(reactDescriptions.length)} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcept({image, title, description}) {
  return ( 
      <li>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
   );
}


function App() {
  return (
    <div>
      <Header />
      <main>
         <section id="core-concepts">
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
         </section>
    
      </main>
    </div>
  );
}

export default App;