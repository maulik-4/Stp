import React, { useState } from 'react'
import { Card, CardContent, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-2">
  <Card sx={{ maxWidth: 420, width: '100%', borderRadius: 4, boxShadow: 6, p: 2, background: document.documentElement.classList.contains('dark') ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' : 'linear-gradient(135deg, #ede9fe 0%, #fff 100%)' }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#7c3aed', mb: 2 }} align="center" className="dark:text-white">Sign Up</Typography>
          <form className="flex flex-col gap-4">
            <TextField label="Name" type="text" fullWidth required variant="outlined" />
            <TextField label="Email" type="email" fullWidth required variant="outlined" />
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              required
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(v => !v)} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <TextField
              label="Confirm Password"
              type={showConfirm ? 'text' : 'password'}
              fullWidth
              required
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowConfirm(v => !v)} edge="end">
                      {showConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button variant="contained" color="secondary" size="large" sx={{ mt: 1, borderRadius: 2, fontWeight: 600 }} fullWidth>Sign Up</Button>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Already have an account? <a href="/login" className="text-purple-700 hover:underline">Login</a>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Signup
