import axios from "axios";

interface queryObj1{
    query: string,
    page: string,
    num_pages: string
}

interface queryObj2{
    job_id: string,
    extended_publisher_details: string | boolean
}

interface queryObj3{
    job_title: string,
    location: string,
    radius: string | boolean
}


export const getContentFromAPI = async (endpoint: string, query: queryObj1 | queryObj2 | queryObj3) => {
    const options = {
        method: 'GET',
        maxBodyLength: Infinity,
        headers:{
            'X-RapidAPI-Key': '8bbf69841cmsh2e8ce1787b13f59p194252jsnf469ccff3ddd',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query}
    }
    const response = await axios.request(options);
    return response;
}

export const getContentFromJsonServer = async () => {
    const options = {
        method: 'GET',
        maxBodyLength: Infinity,
        url: "http://localhost:8000/data"
    }
    const response = await axios.request(options);
    return response;
}

