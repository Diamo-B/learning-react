import {useEffect, useState} from 'react'

let useFetch = (url)=>{
    let [data, setData] = useState(null);
    let [isPending, setIsPending] = useState(true);
    let [error, setError] = useState(null);
    
    useEffect(()=>{
        const abortController = new AbortController();

        setTimeout(()=>{
            fetch(url,{ signal: abortController.signal})
            .then((res)=>{
                if(!res.ok)
                    throw Error("Can't Fetch The Data");
                
                return res.json();

            })
            .then((data)=>{
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err)=>{
                if (!err.name === "AbortError") 
                {
                    setError(err.message);
                    setIsPending(false);
                }
            })
        },1000);
        return ()=>abortController.abort();
    },[url]);
    return {data,error,isPending}
}

export default useFetch;