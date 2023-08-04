
import { BrowserRouter } from 'react-router-dom';
import { Home, Schedule, Results, Statistics} from "./components";



const App = () => {

  return (
    <BrowserRouter>
      <div className=''>
        <Navbar />
        <CloudsCanvas />
        <Home />
        <Schedule />
        <Results />
        <Statistics />
      </div>
    </BrowserRouter>
  )
}

export default App
