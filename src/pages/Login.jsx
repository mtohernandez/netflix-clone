import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import { NetflixIcon } from '@/icons';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      const errorMap = {
        'auth/wrong-password': 'Incorrect password.',
        'auth/user-not-found': 'No account found with this email.',
        'auth/invalid-credential': 'Invalid email or password.',
        'auth/email-already-in-use': 'This email is already registered.',
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/weak-password': 'Password must be at least 6 characters.',
        'auth/network-request-failed': 'No internet connection.',
      };
      setError(errorMap[err.code] || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-netflix-black">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4571-ab50-d3a3e25547fa/US-en-20240101-popsignuptwoithreecomplianttall-perspective_alpha_website_large.jpg)',
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 px-6 md:px-12 py-5">
        <Link to="/auth">
          <NetflixIcon />
        </Link>
      </nav>

      {/* Form */}
      <div className="relative z-10 flex justify-center px-4 mt-8">
        <div className="w-full max-w-md bg-black/75 backdrop-blur-sm rounded-lg p-10 md:p-12">
          <h1 className="text-3xl font-bold text-white mb-8">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              ref={emailRef}
              type="email"
              placeholder="Email address"
              autoComplete="email"
              required
              onChange={() => setError('')}
            />
            <Input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              autoComplete={isSignUp ? 'new-password' : 'current-password'}
              required
              onChange={() => setError('')}
            />

            {error && (
              <p className="text-netflix-red text-sm bg-netflix-red/10 px-3 py-2 rounded">
                {error}
              </p>
            )}

            <Button type="submit" size="full" disabled={loading} className={loading ? 'opacity-60' : ''}>
              {loading ? 'Please wait...' : isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-8 text-gray-400 text-sm">
            {isSignUp ? (
              <p>
                Already have an account?{' '}
                <button
                  onClick={() => { setIsSignUp(false); setError(''); }}
                  className="text-white hover:underline bg-transparent"
                >
                  Sign in now
                </button>
              </p>
            ) : (
              <p>
                New to Netflix?{' '}
                <button
                  onClick={() => { setIsSignUp(true); setError(''); }}
                  className="text-white hover:underline bg-transparent"
                >
                  Sign up now
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
