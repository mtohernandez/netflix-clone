import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '@/firebase';
import { login, logout, selectUser } from '@/features/userSlice';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import LoadingScreen from '@/components/ui/LoadingScreen';

const AppLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        dispatch(login({ uid: firebaseUser.uid, email: firebaseUser.email }));
      } else {
        dispatch(logout());
        navigate('/auth/login');
      }
      setAuthChecked(true);
    });
    return unsubscribe;
  }, [dispatch, navigate]);

  if (!authChecked) return <LoadingScreen />;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-netflix-black">
      <Navbar />
      <main>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
