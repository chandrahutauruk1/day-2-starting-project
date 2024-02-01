import Headers from './Components/Header/Header';
import CoreConcept from './Components/CoreConcepts/CoreConcepts';
import { CORE_CONCEPT_ITEM } from './Data/data';

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
      </main>

    </div>
  );
}

export default App;
