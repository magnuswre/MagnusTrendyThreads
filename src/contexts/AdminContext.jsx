import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext()

  const AdminContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null)
   
    useEffect(() => {
        const storedAdmin = localStorage.getItem("admin-token");
        if (storedAdmin) {
          try {
            setAdmin(JSON.parse(storedAdmin));
          } catch (error) {
            console.error("Error parsing Admin data:", error);
          }
        }
      }, []);


    const value = {
        admin,
        setAdmin,
      }
    
      return (
        <AdminContext.Provider value={value}>
          {children}
        </AdminContext.Provider>
      )
}

export default AdminContextProvider