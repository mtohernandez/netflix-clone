import { Outlet, useNavigate } from "react-router-dom";
import { Nav, Footer } from "./components";
import { useEffect } from "react";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

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
        navigate("/welcome/login");
      }
    });

    // Cleanup function to unsubscribe from the listener
    return unsubscribe;
  }, []);

  return (
    <>
      <Nav user={user}/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
