import { useState, useEffect } from 'react';
import { buildFetch } from '../utilities/fetch';

function useFetch(resource, { headers = {}, params = {} }) {
  const [data, setData] = useState(undefined);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await buildFetch({
          resource,
          headers,
          params
        });
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  return [data, isLoading, isError];
}

export default useFetch;
