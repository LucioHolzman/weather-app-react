import React, {useState, useEffect} from 'react';
import {Form, Response} from '../index.js'
import './main.scss';
const Main = () => {

    const[search, setSearch] = useState({
        city: '',
        state: ''
    })

    const [request, setRequest] = useState(false);
    const [result, setResult] = useState({});


    const {city, state} = search;
    
    useEffect(() => {
        const reqAPI = async () => {

            if(request) {
            const APIID = 'e4db11d48880761b3b3c637ecaf7210e';
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${APIID}&units=metric`;
            const res = await fetch(url);
            const result = await res.json();
            setResult(result);
            setRequest(false)
            }
        }
        reqAPI();
    }, [request])
    
    return ( 
        <>
        <div className="container-main">
            <div className="container container-form">
                <Form
                search={search}
                setSearch={setSearch}
                setRequest={setRequest}
                />
            </div>
            <div className="container container-response">
                <Response
                result={result}
                />
            </div>
        </div>
        </>
     );
}
    
export default Main;