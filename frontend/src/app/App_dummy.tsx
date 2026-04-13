import './App.css'

import Heading from "../components/dummy_frontend/heading/Heading";

function App() {

  return (
    <>
      <div>
        <Heading headingText="Response from C++ get call"/> 
      </div>

      <div>
        <Heading headingText="Response from C++ post call"/> 
      </div>

      <div>
        <Heading headingText="Response from C++ put call"/> 
      </div>

      <div>
        <Heading headingText="Response from C++ delete call"/> 
      </div>
    </>
  )
}

export default App
