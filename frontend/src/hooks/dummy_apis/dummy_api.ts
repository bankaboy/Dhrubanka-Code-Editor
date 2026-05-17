export async function getDummyCppResponse() {

    const response = await fetch("http://localhost:8080/api/data");
    const data = await response.json();
    console.log(data)
    return data;
}


export async function postDummyCppResponse() {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    const response = await fetch('http://localhost:8080/api/data', requestOptions);
    const data = await response.json();
    console.log(data)
    return data;
}



export async function putDummyCppResponse() {

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React Hooks PUT Request Example' })
    };
    const response = await fetch('http://localhost:8080/api/data', requestOptions);
    const data = await response.json();
    console.log(data)
    return data;
}



export async function deleteDummyCppResponse() {

    const response = await fetch('http://localhost:8080/api/data', { method: 'DELETE' });
    const data = await response.json();
    console.log(data)
    return data;
}