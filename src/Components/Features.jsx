import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography, TextField, Button, MenuItem } from '@mui/material'

const dummyUsers = [
  { id: 1, name: 'Alice', age: 22, email: 'alice@email.com' },
  { id: 2, name: 'Bob', age: 17, email: 'bob@email.com' },
  { id: 3, name: 'Charlie', age: 28, email: 'charlie@email.com' },
  { id: 4, name: 'David', age: 16, email: 'david@email.com' },
  { id: 5, name: 'Eva', age: 35, email: 'eva@email.com' },
]

const touristPlaces = [
  { id: 1, name: 'Eiffel Tower', country: 'France', rating: 4.8 },
  { id: 2, name: 'Taj Mahal', country: 'India', rating: 4.7 },
  { id: 3, name: 'Great Wall', country: 'China', rating: 4.6 },
  { id: 4, name: 'Statue of Liberty', country: 'USA', rating: 4.5 },
  { id: 5, name: 'Colosseum', country: 'Italy', rating: 4.4 },
]

function Features() {
  const [users, setUsers] = useState([])
  const [showAdults, setShowAdults] = useState(false)
  const [places, setPlaces] = useState([])
  const [minRating, setMinRating] = useState(0)

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setUsers(dummyUsers)
      setPlaces(touristPlaces)
    }, 500)
  }, [])

  const filteredUsers = showAdults ? users.filter(u => u.age > 18) : users
  const filteredPlaces = places.filter(p => p.rating >= minRating)

  return (
  <div className="w-full flex flex-col md:flex-row gap-6 mt-6 items-start justify-center px-2 sm:px-4">
      {/* User Cards */}
  <Card sx={{ flex: 1, minWidth: 0, maxWidth: 720, p: 2, background: document.documentElement.classList.contains('dark') ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' : 'linear-gradient(135deg, #e0f7fa 0%, #fff 100%)' }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, color: '#1976d2', fontWeight: 700 }} className="dark:text-white">Users</Typography>
          <Button variant="contained" size="small" sx={{ mb: 2 }} onClick={() => setShowAdults(a => !a)}>
            {showAdults ? 'Show All' : 'Show Age > 18'}
          </Button>
          {filteredUsers.map(user => (
            <div key={user.id} className="mb-2 p-2 rounded bg-white/80 dark:bg-slate-800 shadow">
              <div className="font-semibold text-blue-700 dark:text-blue-300">{user.name}</div>
              <div className="text-slate-700 dark:text-slate-200 text-sm">Age: {user.age} | {user.email}</div>
            </div>
          ))}
        </CardContent>
      </Card>
      {/* Tourist Places Cards */}
  <Card sx={{ flex: 1, minWidth: 0, maxWidth: 720, p: 2, background: document.documentElement.classList.contains('dark') ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' : 'linear-gradient(135deg, #ede7f6 0%, #fff 100%)' }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, color: '#7c3aed', fontWeight: 700 }} className="dark:text-white">Tourist Places</Typography>
          <TextField
            label="Min Rating"
            type="number"
            size="small"
            value={minRating}
            onChange={e => setMinRating(Number(e.target.value))}
            inputProps={{ min: 0, max: 5, step: 0.1 }}
            sx={{ mb: 2, width: 120 }}
          />
          {filteredPlaces.map(place => (
            <div key={place.id} className="mb-2 p-2 rounded bg-white/80 dark:bg-slate-800 shadow">
              <div className="font-semibold text-purple-700 dark:text-purple-300">{place.name}</div>
              <div className="text-slate-700 dark:text-slate-200 text-sm">{place.country} | Rating: {place.rating}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export default Features
