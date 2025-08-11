import React, { useState } from 'react';
import type { Trip } from './MainPage';
import { XIcon } from './icons/XIcon';
import { CarIcon } from './icons/CarIcon';

interface CreateTripModalProps {
    onClose: () => void;
    onAddTrip: (tripData: Omit<Trip, 'id' | 'driver'>) => void;
}

const CreateTripModal: React.FC<CreateTripModalProps> = ({ onClose, onAddTrip }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [seats, setSeats] = useState(1);
    const [price, setPrice] = useState(50);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!from || !to || !date || !time) {
            alert('Будь ласка, заповніть усі поля');
            return;
        }
        onAddTrip({ from, to, date, time, seats, price });
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg mx-auto"
                onClick={(e) => e.stopPropagation()}
            >
                 <div className="p-6 sm:p-8">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-600 text-white rounded-full">
                                <CarIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Створити поїздку</h2>
                                <p className="text-gray-500">Заповніть деталі вашого маршруту</p>
                            </div>
                        </div>
                        <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-100">
                            <XIcon className="w-6 h-6" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">Звідки</label>
                                <input type="text" id="from" value={from} onChange={e => setFrom(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Наприклад, Київ" />
                            </div>
                            <div>
                                <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">Куди</label>
                                <input type="text" id="to" value={to} onChange={e => setTo(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Наприклад, Львів" />
                            </div>
                        </div>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Дата</label>
                                <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                             <div>
                                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Час відправлення</label>
                                <input type="time" id="time" value={time} onChange={e => setTime(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                           <div>
                                <label htmlFor="seats" className="block text-sm font-medium text-gray-700 mb-1">Вільні місця</label>
                                <input type="number" id="seats" value={seats} min="1" max="8" onChange={e => setSeats(Number(e.target.value))} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                             <div>
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Ціна за місце (грн)</label>
                                <input type="number" id="price" value={price} min="0" step="10" onChange={e => setPrice(Number(e.target.value))} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>
                        <div className="pt-2 flex flex-col sm:flex-row-reverse gap-3">
                            <button type="submit" className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Створити поїздку
                            </button>
                            <button type="button" onClick={onClose} className="w-full sm:w-auto inline-flex justify-center rounded-lg border bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Скасувати
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTripModal;
