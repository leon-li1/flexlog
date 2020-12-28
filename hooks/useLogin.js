import { useState, useEffect } from "react";
import axios from 'axios';

function useLogin() {
  const [state, setState] = useState([true, null, null]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/users/me", {
          withCredentials: true,
        });
        setState([false, null, res.data]);
      } catch(err) {
        setState([false, err.toString(), null]);
      }
    };
    getUser();
  }, []);
  const setUser = (newUser) => {
    setState([true, null, newUser]);
  }
  return [...state, setUser];
}

export default useLogin;
