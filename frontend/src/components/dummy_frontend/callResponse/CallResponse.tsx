

interface CallResponseProps {
  methodType: string;
  endpoint?: string;
  // response: string;
  onBackendCall: () => Promise<any>;
}

function CallResponse({
  methodType = "GET",
  endpoint = "/api/data",
  // response = "Default response if nothing received from backend"
  onBackendCall
}: CallResponseProps) {

    const response = onBackendCall()
 
  return (
    <>
      <h2 className="text-4xl font-bold leading-tight text-black sm:text-4xl mb-0">
        {methodType}
      </h2>
      <hr className="h-px w-full bg-black border-none mt-0" />
      <p>
        The {methodType} call was made to the C++ REST API hosted on "http://localhost:8080/{endpoint}". The service responded with the response: {response}.
      </p>
    </>
  );
}

export default CallResponse;