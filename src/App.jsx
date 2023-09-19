
import { BrowserRouter } from 'react-router-dom';
import { Home, Navbar, CloudsCanvas, Schedule, Results, Statistics} from "./components";



const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 '>
        <Navbar />
        <CloudsCanvas/>
        <Home />
        <Schedule />
        <Results />
        <Statistics />
      </div>
    </BrowserRouter>
  )
}

export default App
