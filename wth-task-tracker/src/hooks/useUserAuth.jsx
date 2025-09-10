import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export const useUserAuth = () => {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (loading) return;
  //   if (user) return;

  //   if (!user) {
  //     clearUser();
  //     navigate("/login");
  //   }
  // }, [user, loading, clearUser, navigate]);
  useEffect(() => {
    if (loading) return; // don't decide until finished loading
    if (!user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);
};