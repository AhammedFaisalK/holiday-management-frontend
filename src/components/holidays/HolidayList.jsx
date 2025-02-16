import React from 'react';
import HolidayCard from './HolidayCard';

const HolidayList = ({ holidays, onHolidayClick, loading, error }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-lg">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!holidays?.length) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-lg">
        <p className="text-gray-600">No holidays found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {holidays.map((holiday) => (
        <HolidayCard
          key={`${holiday.name}-${holiday.date.iso}`}
          holiday={holiday}
          onClick={onHolidayClick}
        />
      ))}
    </div>
  );
};

export default HolidayList;