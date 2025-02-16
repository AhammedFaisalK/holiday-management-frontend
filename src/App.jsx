import React, { useState, useEffect } from 'react';
import { getHolidays } from './services/api';
import HolidayFilters from './components/holidays/HolidayFilters';
import HolidayList from './components/holidays/HolidayList';
import HolidayDetailModal from './components/holidays/HolidayDetailModal';

function App() {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedHoliday, setSelectedHoliday] = useState(null);
  const [filters, setFilters] = useState({
    country_code: 'US',
    year: new Date().getFullYear(),
    month: '',
    query: '',
    holiday_type: '',
  });

  const fetchHolidays = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getHolidays(filters);
      setHolidays(response.results);
    } catch (err) {
      setError(err.message || 'Failed to fetch holidays');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHolidays();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleHolidayClick = (holiday) => {
    setSelectedHoliday(holiday);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Holiday Calendar
        </h1>

        <HolidayFilters onFilterChange={handleFilterChange} />

        <HolidayList
          holidays={holidays}
          loading={loading}
          error={error}
          onHolidayClick={handleHolidayClick}
        />

        <HolidayDetailModal
          isOpen={!!selectedHoliday}
          onClose={() => setSelectedHoliday(null)}
          holiday={selectedHoliday}
        />
      </div>
    </div>
  );
}

export default App;