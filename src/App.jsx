import { BrowserRouter } from "react-router-dom"
//Removed feedbacks below will add later on.
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech,
 Works, StarsCanvas,} from './components'
import Footer from "./components/Footer"


const App = () => {
  return (
<BrowserRouter>
  <div className="relative z-0 bg-primary">

<div className="bbg-hero-pattern bg-cover bg-no-repeat bg-center">
<Navbar />
<Hero />

</div>
<About />
<Experience />
 <Tech />
 <Works />
 <Feedbacks />
 <div className="relative z-0">
  <Contact />
  <StarsCanvas />
 </div>
 <Footer />
</div>
</BrowserRouter>
  )
}

export default App
