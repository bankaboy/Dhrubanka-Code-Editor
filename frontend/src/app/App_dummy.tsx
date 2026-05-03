import './App.css'

import Heading from "../components/dummy_frontend/heading/Heading";
import CallResponse from '../components/dummy_frontend/callResponse/CallResponse';
import {getDummyCppResponse} from "../hooks/dummy_apis/dummy_api"

function App() {

  return (
    <>
      <div>
        <Heading headingText="Response from C++ get call"/> 
        <CallResponse 
          methodType='GET'
          onBackendCall={getDummyCppResponse}
        />
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
