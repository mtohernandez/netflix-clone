import { Outlet, useNavigate } from "react-router-dom";
import { Nav, Footer } from "./components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // The user needs to be logged in to access the app
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout());
        navigate("/login");
      }
    });

    // Cleanup function to unsubscribe from the listener
    return unsubscribe;
  }, []);

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
