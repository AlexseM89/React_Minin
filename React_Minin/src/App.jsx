import Header from "./components/Header"
import {ways} from './data'
import WayToTeach from "./components/WayToTeach"


function App() {

  return (
      <div>
        <Header/>
        <main> 
           <section>
            <h3> Наш подход к обучению</h3>
            <ul>
            <WayToTeach title={ways[0].title} description={ways[0].description}/>
            <WayToTeach {...ways[1]}/>
            <WayToTeach {...ways[2]}/>
            <WayToTeach {...ways[3]}/>
              {/* <li>
                <p>
                  <strong>Формат обучения.</strong> Пока другие предлогают 50 страниц текста и вебинары по 2 часа, мы даем вам тот же объем знаний в одном тщательно подготовленном видео за 15 минут.
                </p>
              </li> */}
            </ul>
           </section>
        </main>
      </div>
  )
}

export default App
