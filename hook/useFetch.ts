import { useEffect, useState } from "react";
import axios from "axios";

interface queryObj{
    query: string,
    page: string,
    num_pages: string
}

const useFetch = (endpoint?: string, query?: queryObj) => {    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'rvv87185@vogco.com',
    //         'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    //     },
    //     url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    //     params: {...query}
    // };

    const options = {
        method: 'GET',
        maxBodyLength: Infinity,
        headers:{
            'X-RapidAPI-Key': '8bbf69841cmsh2e8ce1787b13f59p194252jsnf469ccff3ddd',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        // url: "http://localhost:8000/data"
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    }
    const fetchData = async () => {
        setIsLoading(true);
        // console.log('here');

        // try{
        //     console.log('here');

        //     const response = await axios.request(options);            
        //     // setData(response.data.data);
        //     console.log(response);
        //     // @ts-ignore
        //     setData(response);
        //     setIsLoading(false);
        // }catch(msg: any){
        //     setError(msg);
        //     alert(msg);
        // }
        // finally{
        //     setIsLoading(false);
        // }

        axios(options)
        .then((response) => {
            // Handle the response data
            console.log('Response:', response);
        })
        .catch((error) => {
            // Handle errors
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        fetchData()
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;
