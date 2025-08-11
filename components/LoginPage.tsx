import React from 'react';
import { GoogleIcon } from './icons/GoogleIcon';
import { CarIcon } from './icons/CarIcon';
import type { User } from '../App';

interface LoginPageProps {
  onLoginSuccess: (user: User) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  
  // Simulate Google login
  const handleGoogleLogin = () => {
    // In a real app, this would involve the Google Auth SDK
    const mockUser: User = {
      name: 'Олексій Попутник',
      email: 'oleksiy.p@example.com',
      picture: `https://i.pravatar.cc/150?u=oleksiy`
    };
    onLoginSuccess(mockUser);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?image=1074')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-xl text-center">
        <div className="flex flex-col items-center">
          <div className="p-3 bg-blue-600 rounded-full mb-4 text-white">
             <CarIcon className="w-8 h-8"/>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">GoGoCar</h1>
          <p className="mt-2 text-gray-600">Подорожуйте разом, заощаджуйте більше.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">Ласкаво просимо!</h2>
          <p className="text-gray-500 mt-1">Увійдіть, щоб продовжити</p>
        </div>

        <div className="w-full">
            <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-700 shadow-sm transition-all duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <GoogleIcon className="h-6 w-6" />
                <span>Увійти за допомогою Google</span>
            </button>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Продовжуючи, ви погоджуєтесь з нашими <a href="#" className="font-medium text-blue-600 hover:underline">Умовами використання</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;