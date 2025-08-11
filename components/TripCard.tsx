import React from 'react';
import type { Trip } from './MainPage';
import { CalendarIcon } from './icons/CalendarIcon';
import { ClockIcon } from './icons/ClockIcon';
import { UsersIcon } from './icons/UsersIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface TripCardProps {
  trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  const formattedDate = new Date(trip.date).toLocaleDateString('uk-UA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img 
              src={trip.driver.picture} 
              alt={trip.driver.name} 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="font-semibold text-gray-800">{trip.driver.name}</p>
              <p className="text-sm text-gray-500">Водій</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">{trip.price} грн</p>
            <p className="text-sm text-gray-500">за місце</p>
          </div>
        </div>
        
        <div className="my-6">
          <div className="flex items-center text-lg font-semibold text-gray-800">
            <span className="truncate max-w-[100px] sm:max-w-[120px]">{trip.from}</span>
            <ArrowRightIcon className="w-5 h-5 mx-2 text-gray-400 flex-shrink-0" />
            <span className="truncate max-w-[100px] sm:max-w-[120px]">{trip.to}</span>
          </div>
        </div>

        <div className="space-y-3 text-gray-600">
          <div className="flex items-center">
            <CalendarIcon className="w-5 h-5 mr-3 text-gray-400" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="w-5 h-5 mr-3 text-gray-400" />
            <span>{trip.time}</span>
          </div>
           <div className="flex items-center">
            <UsersIcon className="w-5 h-5 mr-3 text-gray-400" />
            <span>Залишилось {trip.seats} місць</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-4">
        <button className="w-full text-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300">
          Забронювати
        </button>
      </div>
    </div>
  );
};

export default TripCard;
