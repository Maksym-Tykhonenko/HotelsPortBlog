import {useState, useEffect} from 'react';
import {fetchUserData} from '../utils/userData';

const useUserData = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getUserData();
  }, []);

  return {userData, loading, error, setUserData};
};

export default useUserData;
