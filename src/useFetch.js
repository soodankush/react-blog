import {useState, useEffect} from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if(!res.ok) {
            throw Error('Could not fetch the data')
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setError(null);
          setData(data);
        })
        .catch((error) => {
          setError(error.message);
          setIsPending(false);
        })
    }, 1000);

  },[url]);

  return { data, isPending, error }
}

 export default useFetch;

