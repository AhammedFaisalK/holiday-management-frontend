import React, { useState } from 'react';

const HolidayFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    country_code: 'US',
    year: new Date().getFullYear(),
    month: '',
    query: '',
    holiday_type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          name="country_code"
          value={filters.country_code}
          onChange={handleChange}
          className="border rounded-md p-2"
        >
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
          <option value="IN">India</option>
          {/* Add more countries as needed */}
        </select>

        <select
          name="year"
          value={filters.year}
          onChange={handleChange}
          className="border rounded-md p-2"
        >
          {Array.from({ length: 5 }, (_, i) => (
            <option key={i} value={new Date().getFullYear() - 2 + i}>
              {new Date().getFullYear() - 2 + i}
            </option>
          ))}
        </select>

        <select
          name="month"
          value={filters.month}
          onChange={handleChange}
          className="border rounded-md p-2"
        >
          <option value="">All Months</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(2000, i).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="query"
          placeholder="Search holidays..."
          value={filters.query}
          onChange={handleChange}
          className="border rounded-md p-2"
        />

        <select
          name="holiday_type"
          value={filters.holiday_type}
          onChange={handleChange}
          className="border rounded-md p-2"
        >
          <option value="">All Types</option>
          <option value="national">National</option>
          <option value="religious">Religious</option>
          <option value="observance">Observance</option>
        </select>
      </div>
    </div>
  );
};

export default HolidayFilters;