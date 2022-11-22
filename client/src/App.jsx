// import our navbar from the index.js in the component folder

import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
  NewsTicker,
  ScrollButton,
} from './components'

const App = () => (
  <div className='min-h-screen'>
    <NewsTicker />
    <div className='gradient-bg-welcome'>
      <Navbar />
      <Welcome />
    </div>
    <Services />

    <Transactions />
    <Footer />
    <ScrollButton />
  </div>
)

export default App
