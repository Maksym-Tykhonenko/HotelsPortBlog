import {useState, useEffect, useCallback} from 'react';
import {fetchHotelsData} from '../utils/hotelsData';

const useHotelsData = () => {
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getHotelsData = useCallback(async () => {
    try {
      const data = await fetchHotelsData();
      setHotelData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getHotelsData();
    // const intervalId = setInterval(getHotelsData, 200);
    // return () => clearInterval(intervalId);
  }, [getHotelsData]);

  // useEffect(() => {
  //   const getHotelsData = async () => {
  //     try {
  //       const data = await fetchHotelsData();
  //       setHotelData(data);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getHotelsData();
  //   const intervalId = setInterval(getHotelsData, 200);
  //   return () => clearInterval(intervalId);
  // }, []);

  return {hotelData, loading, error, getHotelsData};
};

export default useHotelsData;
