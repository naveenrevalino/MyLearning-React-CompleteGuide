import { useState } from 'react';

import Section from '../Section/Section.jsx'
import TabButton from '../TabButton/TabButton.jsx';
import { EXAMPLES } from '../../testdata/data.js';


export default function () {

// New Log for test
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

        <Section title="Examples" id="examples">
        
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

        </Section>

    );
}