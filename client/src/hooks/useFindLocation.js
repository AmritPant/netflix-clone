import { useEffect, useState } from 'react';

function useFindLocation() {
  const [curCountry, setCountry] = useState(null);
  const [curCountryCode, setCountryCode] = useState(null);
  const [isError, setError] = useState(null);

  useEffect(() => {
    // Creating a function that will fetch
    const fetchUrl = async url => {
      try {
        setError(null);
        const res = await fetch(url);
        if (!res.ok) throw new Error('Something Went Wrong Please try Again!');
        return await res.json();
      } catch (err) {
        setError(err.message);
      }
    };

    // Fetching Ip Address of User
    const getLocation = async () => {
      const { ip } = await fetchUrl('https://api.ipify.org?format=json');
      const location = await fetchUrl(`https://ipapi.co/${ip}/json/`);
      if (location) {
        setCountry(location?.country_name);
        setCountryCode(location?.country_code);
      }
    };

    getLocation();
  }, []);

  return [curCountry, curCountryCode, isError];
}

export default useFindLocation;
