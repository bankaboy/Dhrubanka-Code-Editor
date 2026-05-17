import './App.css'

import Heading from "../components/dummy_frontend/heading/Heading";
import CallResponse from '../components/dummy_frontend/callResponse/CallResponse';
import { 
  getDummyCppResponse, 
  postDummyCppResponse, 
  putDummyCppResponse, 
  deleteDummyCppResponse 
} from "../hooks/dummy_apis/dummy_api"

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
        <CallResponse 
          methodType='POST'
          onBackendCall={postDummyCppResponse}
        />
      </div>

      <div>
        <Heading headingText="Response from C++ put call"/> 
        <CallResponse 
          methodType='PUT'
          onBackendCall={putDummyCppResponse}
        />
      </div>

      <div>
        <Heading headingText="Response from C++ delete call"/> 
        <CallResponse 
          methodType='DEL'
          onBackendCall={deleteDummyCppResponse}
        />
      </div>
    </>
  )
}

export default App
