// useAxios.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    
    fetchData();
  }, [url]);

  return { data, fetchData, loading, error };
};

export default useAxios;
/*
 const apiUrl = 'https://65be832adcfcce42a6f29918.mockapi.io/api/v1/cvData';
const { data: cvDataArray, loading, error } = useAxios(apiUrl);
if (loading) {
  return <p>Loading...</p>;
}
if (error) {
  return <p>Error: {error.message}</p>;
}
if (!cvDataArray) {
  return null;
}
// BECAUSE DUMMY MOCKAPI REQUIRE DATA FORMAT AS JSON MUST BE AN ARRAY.... SPENT 4hours cuz of that
const cvData = cvDataArray[0]; */