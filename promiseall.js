async function  fetchAll(){

    const fetchData = await fetch('./data.json');
    fetchData.json().then(resp =>{
        console.log('fetch data :', resp)
    })

    //OR

    const fetchDataV1 = fetch('./data2.json')
    const fetchDataV1Resp = await fetchDataV1;
    console.log('fetchDataV1Resp :', fetchDataV1Resp.json());

    //OR

    const req1= fetch('./data.json')
    const req2= fetch('./data.json')
    const req3= fetch('./data.json')    

    const promises = Promise.all([req1,req2,req3])

    const responses = await promises

    const json = await Promise.all(responses.map(t=> t.json()))

    console.log('Promise All :', json);
    

}

fetchAll();