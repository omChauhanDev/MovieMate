import { getUserDetails } from "@/actions/userActions";
import { isLoggedInAtom, userAtom } from "@/store/atoms";
import { createContext, useContext, useState, useEffect } from "react";
import { useAtom } from "jotai";
// Create context for auth
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useAtom(userAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserDetails(setUser);
        if (userData.success) {
          setIsLoggedIn(true);
        } else {
          setUser(null);
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.log("inside catch");
        setUser(null);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ loading, user, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
