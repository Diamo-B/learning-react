import {useEffect, useState} from 'react'

let useFetch = (url)=>{
    let [data, setData] = useState(null);
    let [isPending, setIsPending] = useState(true);
    let [error, setError] = useState(null);
    
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then((res)=>{
                if(!res.ok)
                    throw Error("Can't Fetch The Data");
                setIsPending(false);
                setError(null);
                return res.json();

            })
            .then((data)=>{
                setData(data);
            })
            .catch((err)=>{
                setError(err.message);
                setIsPending(false);
            })
        },1000);
    },[url])
    return {data,error,isPending}
}

export default useFetch;