import { useState } from 'react';

import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import TabButton from './components/TabButton/TabButton.jsx';

import { CORE_CONCEPTS } from './testdata/data.js';
import { EXAMPLES } from './testdata/data.js';

function App() {

  // Calling the react hook function : STATE HOOK ** most important hook in react.
  // const stateArray = useState( 'Please click a button Naveen.' );

  // selectedTopic : will be the current data snapshot, for this component execution cycle.
  // initially or the first time when this component is executed, selectedTopic will be = 'Please click a button Naveen.'
  // when the component is executed again then it will have the updated value.
  // the setSelectedTopic is a function that will be used to update the value of selectedTopic. also calling this setSelectedTopic function
  // will tell react that this component should be executed again as its value changed.
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleTabButtonClick ( selectedTabButtonId ) {
    setSelectedTopic ( selectedTabButtonId );
}


  return (
    <div>

      <Header/>
      <main>

        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept image={ CORE_CONCEPTS[0].image } title={ CORE_CONCEPTS[0].title } description={ CORE_CONCEPTS[0].description }/>
            <CoreConcept { ...CORE_CONCEPTS[1] }/>
            <CoreConcept { ...CORE_CONCEPTS[2] }/>
            <CoreConcept { ...CORE_CONCEPTS[3] }/> */}

            {/* Dynamically create the core concept data from the array of data. */}

            {
              CORE_CONCEPTS.map( (eachCoreConceptItem)=> <CoreConcept key={eachCoreConceptItem.title} { ...eachCoreConceptItem } ></CoreConcept>)
            }
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
        
          <menu>
            <TabButton isSelected = {selectedTopic==='components'} onTabButtonClick = {()=>handleTabButtonClick('components')} >Components</TabButton>
            <TabButton isSelected = {selectedTopic==='jsx'} onTabButtonClick = {()=>handleTabButtonClick('jsx')} >JSX</TabButton>
            <TabButton isSelected = {selectedTopic==='props'} onTabButtonClick = {()=>handleTabButtonClick('props')} >Props</TabButton>
            <TabButton isSelected = {selectedTopic==='state'} onTabButtonClick = {()=>handleTabButtonClick('state')} >State</TabButton>
          </menu>

          { selectedTopic === undefined ? <p>Please select a stopic of your choice.</p> :

          <div id="tab-content">
            <h3> { EXAMPLES[selectedTopic].title } </h3>
            <p> { EXAMPLES[selectedTopic].description } </p>
            <pre>
              <code>
              { EXAMPLES[selectedTopic].code } 
              </code>
            </pre>
          </div> 

          }

        </section>

      </main>

    </div>
  );
}

export default App;
