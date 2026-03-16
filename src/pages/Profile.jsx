import { useSelector } from 'react-redux';
import { selectUser } from '@/features/userSlice';
import { auth } from '@/firebase';
import Button from '@/components/ui/Button';

const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <div className="pt-24 px-4 md:px-12 min-h-screen flex items-start justify-center">
      <div className="max-w-lg w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Account</h1>

        <div className="bg-netflix-dark rounded-lg p-6 space-y-6">
          <div className="flex items-center gap-4">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
              alt="Profile"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold text-white">Welcome back!</h2>
              <p className="text-gray-400 text-sm">{user?.email}</p>
            </div>
          </div>

          <hr className="border-gray-700" />

          <div>
            <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-2">Membership</h3>
            <p className="text-white text-sm">{user?.email}</p>
            <p className="text-gray-400 text-xs mt-1">Member since {new Date().getFullYear()}</p>
          </div>

          <hr className="border-gray-700" />

          <Button
            variant="primary"
            size="full"
            onClick={() => auth.signOut()}
          >
            Sign Out
          </Button>
        </div>

        <p className="text-gray-500 text-xs text-center mt-6">
          This is a Netflix clone for educational purposes only.
        </p>
      </div>
    </div>
  );
};

export default Profile;
