import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '@/firebase';
import { login } from '@/features/userSlice';
import LoadingScreen from '@/components/ui/LoadingScreen';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

const AuthLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        dispatch(login({ uid: firebaseUser.uid, email: firebaseUser.email }));
        navigate('/');
      }
      setAuthChecked(true);
    });
    return unsubscribe;
  }, [dispatch, navigate]);

  if (!authChecked) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-netflix-black">
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
};

export default AuthLayout;
