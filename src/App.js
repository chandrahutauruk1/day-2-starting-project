import Headers from './Components/Header/Header';
import CoreConcept from './Components/CoreConcepts/CoreConcepts';
import { CORE_CONCEPT_ITEM } from './Data/data';
import TabButton from './Components/TabButton/TabButton';
import Card from './Components/Cards/Cards';

function App() {
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
             <TabButton>Components</TabButton>
             <TabButton>JSX</TabButton>
             <TabButton>Props</TabButton>
             <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
       <Card name="Maria Miller">
       <p> Maria is a professor of Computer Science at the University of Illinois.</p>
      <p>
        <a href="mailto:blake@example.com">Email Maria</a>
      </p>
       </Card>         
    </div>
  );
}

export default App;
