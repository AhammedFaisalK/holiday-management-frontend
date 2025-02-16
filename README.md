# Holiday Management Application

A full-stack application built with React, Tailwind CSS, and Django REST Framework to manage and display holiday information using the Calendarific API.

## Overview

This project consists of two main parts:
- Frontend: Reactwith Tailwind CSS
- Backend: Django REST Framework with Calendarific API integration

## Features

- 🌍 Country-specific holiday viewing
- 📅 Year and month-based filtering
- 🔍 Search functionality for holidays
- 🏷️ Filter holidays by type (National, Religious, etc.)
- 💾 Caching system for optimized performance
- 📱 Responsive design for all devices
- 🎨 Modern UI with Tailwind CSS
- 🔄 Real-time updates with efficient API integration

## Tech Stack

### Frontend
- React
- Tailwind CSS
- Headless UI
- Day.js for date handling
- Axios for API requests

### Backend
- Django 
- Django REST Framework
- SQLite Database
- Django Caching Framework
- Calendarific API Integration

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- Python 3.11 or later
- Calendarific API key

### Frontend Setup
```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to frontend directory
cd holiday-frontend

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Update environment variables in .env.local
# Add your backend API URL and other configurations

# Run development server
npm run dev
```

### Environment Variables
Create a `.env.local` file in your frontend root:
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

## Project Structure

```
holiday-frontend/
├── app/
│   ├── layout.js
│   └── page.js
├── components/
│   ├── holidays/
│   │   ├── HolidayCard.jsx
│   │   ├── HolidayList.jsx
│   │   ├── HolidayDetailModal.jsx
│   │   └── HolidayFilters.jsx
│   └── common/
│       ├── Loader.jsx
│       └── ErrorMessage.jsx
├── services/
│   └── api.js
└── utils/
    └── constants.js
```

## Key Features Implementation

### Holiday Filtering
- Country selection using ISO country codes
- Year and month-based filtering
- Search functionality for holiday names
- Type-based filtering (National, Religious, etc.)

### Caching
- Backend implements a 24-hour cache for holiday data
- Reduces API calls to Calendarific
- Improves application performance

### Responsive Design
- Mobile-first approach using Tailwind CSS
- Adaptive layout for different screen sizes
- Interactive components optimized for touch devices

## Challenges and Solutions

1. **API Rate Limiting**
   - Challenge: Calendarific API has rate limits
   - Solution: Implemented caching system in Django backend to store holiday data

2. **Data Synchronization**
   - Challenge: Keeping frontend in sync with backend cache
   - Solution: Implemented efficient state management and API polling

3. **Performance Optimization**
   - Challenge: Large holiday datasets causing performance issues
   - Solution: Implemented pagination and lazy loading

4. **Modal Implementation**
   - Challenge: Smooth transitions and accessibility in holiday detail modal
   - Solution: Used Headless UI for accessible and performant modals

5. **Search Performance**
   - Challenge: Real-time search affecting performance
   - Solution: Implemented debouncing for search inputs

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Calendarific API for providing holiday data
- Tailwind CSS for the styling framework
- Next.js team for the amazing framework
- Django REST Framework for the robust backend framework