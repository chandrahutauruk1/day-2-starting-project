import { useState } from 'react'
import Headers from './Components/Header/Header';
import CoreConcept from './Components/CoreConcepts/CoreConcepts';
import { CORE_CONCEPT_ITEM } from './Data/data';
import TabButton from './Components/TabButton/TabButton';
import Card from './Components/Cards/Cards';
import { Examples } from './Data/data';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  // let tabContent = 'Please click a button'
  function handleSelect(selectedButton) {
    // selectedButton = 'components'
    // console.log(`${selectedButton} - selected`)
    setSelectedTopic(selectedButton)
    // tabContent = selectedButton;
    console.log(selectedTopic)
  }
  return (
    <div>
      <Headers></Headers>
      <main>
        <section id='core-concepts'>
              <h2>Core Concept</h2>
              <ul>
              {
                CORE_CONCEPT_ITEM.map((allData, id) =>(
                  <CoreConcept 
                    key={id}
                    Image={allData.image} 
                    title={allData.title} 
                    description={allData.description}
                    >
                    </CoreConcept>
                ))}
              </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
             <TabButton onSelect={() => {handleSelect('components')}}>Components</TabButton>
             <TabButton onSelect={() => {handleSelect('jsx')}}>JSX</TabButton>
             <TabButton onSelect={() => {handleSelect('props')}}>Props</TabButton>
             <TabButton onSelect={() => {handleSelect('state')}}>State</TabButton>
          </menu>
          {/* {selectedTopic} */}
        </section>
        {/* {!selectedTopic ? <p>Please selected a topic.</p> : null}
        { selectedTopic ? (<div id="tab-content">
          <h3>{Examples[selectedTopic].title}</h3>
          <p>{Examples[selectedTopic].description}</p>
          <pre>
            <code>{Examples[selectedTopic].code}</code>
          </pre>
        </div>) 
        : null}  */}
        {!selectedTopic && <p>Please selected a topic.</p>}
        {selectedTopic && (<div id="tab-content">
          <h3>{Examples[selectedTopic].title}</h3>
          <p>{Examples[selectedTopic].description}</p>
          <pre>
            <code>{Examples[selectedTopic].code}</code>
          </pre>
        </div>)}

      </main>
       {/* <Card name="Maria Miller">
       <p> Maria is a professor of Computer Science at the University of Illinois.</p>
      <p>
        <a href="mailto:blake@example.com">Email Maria</a>
      </p>
       </Card>          */}
       {/* () => {handleSelect('component')} => ini adalah cara untuk mengirimkan function ke props Tab tapi ini juga digunakan untuk mengirimkan value nya apa yg dibuat */}
      
    </div>
  );
}

export default App;
