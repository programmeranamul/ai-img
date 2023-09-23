import React, { useEffect, useState,useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import axios from "./axiosConfig";
import { AuthContext } from './../App';
import { api } from './../data/BaseApi';

function PrivetRoute({ children, ...rest }) {
  const [myauth, setMyAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const { auth, setAuth } = useContext(AuthContext);

console.log("from privet route")

  async function verifyToken() {
    try {
      const res = await axios.get(api + "/api/v1/verify-auth");   

      setMyAuth(true);
      setAuth(true)
      setLoading(false);
    } catch (e) {
      setMyAuth(false);
      setAuth(false)
      setLoading(false);
    }
  }

  useEffect(() => {
    verifyToken();
  }, []);

  if (loading) return <p>loading . . .</p>;

  return myauth ? <Outlet /> : <Navigate to="/admin/singin" />;
}

export default PrivetRoute;