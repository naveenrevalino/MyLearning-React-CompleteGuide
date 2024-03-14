import CoreConcept from '../CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS } from '../../testdata/data.js';

export default function() {

    return (

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

    );
}