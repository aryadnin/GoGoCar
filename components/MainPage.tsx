import React, { useState } from 'react';
import { SearchIcon } from './icons/SearchIcon';
import { PlusIcon } from './icons/PlusIcon';
import { CarIcon } from './icons/CarIcon';
import { LogoutIcon } from './icons/LogoutIcon';
import CreateTripModal from './CreateTripModal';
import TripCard from './TripCard';
import type { User } from '../App';


export interface Trip {
  id: string;
  from: string;
  to: string;
  date: string;
  time: string;
  seats: number;
  price: number;
  driver: User;
}

interface HeaderProps {
  user: User;
  onLogout: () => void;
  onCreateTrip: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout, onCreateTrip }) => (
  <header className="bg-white shadow-md sticky top-0 z-20">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="p-2 bg-blue-600 rounded-full text-white">
          <CarIcon className="w-6 h-6"/>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">GoGoCar</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          onClick={onCreateTrip}
          className="hidden sm:flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
        >
            <PlusIcon className="w-5 h-5 mr-2" />
            Створити поїздку
        </button>
         <div className="flex items-center space-x-2">
            <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full object-cover"/>
            <span className="hidden sm:inline text-gray-700 font-medium">{user.name}</span>
         </div>
         <button onClick={onLogout} className="text-gray-600 hover:text-red-600" title="Вийти">
            <LogoutIcon className="w-6 h-6" />
         </button>
      </div>
    </div>
  </header>
);

interface MainPageProps {
  user: User;
  onLogout: () => void;
}

const MainPage: React.FC<MainPageProps> = ({ user, onLogout }) => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddTrip = (tripData: Omit<Trip, 'id' | 'driver'>) => {
    const newTrip: Trip = {
      id: new Date().toISOString(),
      driver: user,
      ...tripData
    };
    setTrips(prevTrips => [newTrip, ...prevTrips]);
    handleCloseModal();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header user={user} onLogout={onLogout} onCreateTrip={handleOpenModal} />
      
      <main className="flex-grow container mx-auto p-4 md:p-6">
        {trips.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center h-full pt-16">
            <div className="flex justify-center mb-6">
                <div className="p-5 rounded-full bg-gray-200 text-gray-500">
                    <SearchIcon className="w-16 h-16" />
                </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Поїздки не знайдено</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Наразі немає доступних поїздок. Спробуйте знайти поїздку пізніше або створіть власну, щоб знайти попутників.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1">
                    <SearchIcon className="w-5 h-5 mr-2" />
                    Знайти поїздку
                </button>
                 <button 
                  onClick={handleOpenModal}
                  className="sm:hidden flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-white text-blue-600 border border-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                    <PlusIcon className="w-5 h-5 mr-2" />
                    Створити поїздку
                </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map(trip => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-white py-4 mt-auto">
          <p className="text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} GoGoCar. Всі права захищено.</p>
      </footer>

      {isModalOpen && <CreateTripModal onClose={handleCloseModal} onAddTrip={handleAddTrip} />}
    </div>
  );
};

export default MainPage;