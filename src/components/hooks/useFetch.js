import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const[data, setData] = useState(null);

    useEffect(() => {
        const fetchDta = async () => {
            const response = await fetch(url);
            const result = await response.json();
            setData(  result)

            console.log(result); //logs the data to the console for
        }
        fetchDta();
    }, [url] );
                      
  return {data}
}

export default useFetch
