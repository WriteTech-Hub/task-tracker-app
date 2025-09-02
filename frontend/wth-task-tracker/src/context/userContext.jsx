// import React, { createContext, useState, useEffect } from "react";
// import axiosInstance from "../utils/axiosInstance";
// import { API_PATHS } from "../utils/apiPaths";

// export const UserContext = createContext();

// const UserProvider = ({ children }) => {
//      const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // New state to track loading

//   useEffect(() => {
//     if (user) return;

//     const accessToken = localStorage.getItem("token");
//     if (!accessToken) {
//       setLoading(false);
//       return;
//     }

//     const fetchUser = async () => {
//       try {
//         const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
//         setUser(response.data);
//       } catch (error) {
//         console.error("User not authenticated", error);
//         clearUser();
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   const updateUser = (userData) => {
//     setUser(userData);
//     localStorage.setItem("token", userData.token); // Save token
//     setLoading(false);
//   };

//   const clearUser = () => {
//     setUser(null);
//     localStorage.removeItem("token");
//   };

//   return (
//     <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export default UserProvider

import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Try restoring from localStorage first
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
      setLoading(false);
      return;
    }

    // Always set token for axios
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;

    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data)); // keep user in sync
      } catch (error) {
        console.error("User not authenticated", error);
        clearUser();
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const updateUser = (userData) => {
    setUser(userData);
    if (userData?.token) {
      localStorage.setItem("token", userData.token);
    }
    localStorage.setItem("user", JSON.stringify(userData));
    setLoading(false);
  };

  const clearUser = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
