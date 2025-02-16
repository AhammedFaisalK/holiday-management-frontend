import React from 'react';
import dayjs from 'dayjs';

const HolidayCard = ({ holiday, onClick }) => {
  return (
    <div 
      onClick={() => onClick(holiday)}
      className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
    >
      <h3 className="text-lg font-semibold text-gray-800">{holiday.name}</h3>
      <p className="text-gray-600">
        {dayjs(holiday.date.iso).format('MMMM D, YYYY')}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {holiday.type.map((type, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HolidayCard;