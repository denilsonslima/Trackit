import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RequiredAuth = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      return navigate('/');
    }
  }, [token, navigate]);

  return children;
};
