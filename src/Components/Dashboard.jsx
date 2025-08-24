import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto'
import { Card, CardContent, Typography } from '@mui/material'
import { gsap } from 'gsap'

function Dashboard() {
  const barRef = useRef(null)
  const pieRef = useRef(null)
  const lineRef = useRef(null)
  const dashRef = useRef(null)
  const [kpis] = useState([
    { label: 'Total Sales', value: '₹1,640K', color: 'bg-blue-100 text-blue-700' },
    { label: 'Active Users', value: '2,340', color: 'bg-green-100 text-green-700' },
    { label: 'Revenue', value: '₹980K', color: 'bg-purple-100 text-purple-700' },
    { label: 'Orders', value: '1,120', color: 'bg-yellow-100 text-yellow-700' },
  ])
  const [activities] = useState([
    { id: 1, text: 'New order placed by Alice', time: '2 min ago' },
    { id: 2, text: 'Bob signed up', time: '10 min ago' },
    { id: 3, text: 'Payment received from Charlie', time: '30 min ago' },
    { id: 4, text: 'Eva left a review', time: '1 hr ago' },
  ])

  useEffect(() => {
    
    gsap.fromTo(
      dashRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )

    // Bar Chart
    const barChart = new Chart(barRef.current, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Sales',
            data: [120, 190, 300, 500, 200, 300],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderRadius: 12,
            borderSkipped: false,
            hoverBackgroundColor: 'rgba(54, 162, 235, 1)'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Monthly Sales', color: '#1976d2', font: { size: 20, weight: 'bold' } }
        },
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#1976d2', font: { weight: 'bold' } }
          },
          y: {
            grid: { color: '#e3e3e3' },
            ticks: { color: '#1976d2', font: { weight: 'bold' } }
          }
        }
      }
    })

    // Pie Chart
    const pieChart = new Chart(pieRef.current, {
      type: 'pie',
      data: {
        labels: ['Electronics', 'Clothing', 'Grocery', 'Books'],
        datasets: [
          {
            label: 'Categories',
            data: [300, 50, 100, 80],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)'
            ],
            borderWidth: 2,
            borderColor: '#fff',
            hoverOffset: 10
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { color: '#333', font: { size: 14 } } },
          title: { display: true, text: 'Sales by Category', color: '#1976d2', font: { size: 20, weight: 'bold' } }
        },
        maintainAspectRatio: false
      }
    })

    // Line Chart (Revenue Trend)
    const lineChart = new Chart(lineRef.current, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Revenue',
            data: [200, 300, 400, 600, 500, 700],
            borderColor: '#7c3aed',
            backgroundColor: 'rgba(124, 58, 237, 0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: '#7c3aed',
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Revenue Trend', color: '#7c3aed', font: { size: 18, weight: 'bold' } }
        },
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#7c3aed', font: { weight: 'bold' } }
          },
          y: {
            grid: { color: '#ede7f6' },
            ticks: { color: '#7c3aed', font: { weight: 'bold' } }
          }
        }
      }
    })

    return () => {
      barChart.destroy()
      pieChart.destroy()
      lineChart.destroy()
    }
  }, [])

  return (
    <div
      ref={dashRef}
      className="inset-0 w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 overflow-auto"
      style={{ minHeight: '100vh', minWidth: '100vw' }}
    >
  <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center gap-8 px-2 pb-8">
        <Typography
          variant="h3"
          component="h2"
          sx={{ color: '#1976d2', fontWeight: 700, mt: 4, mb: 2, letterSpacing: 1 }}
          className="dark:text-white"
        >
          Dashboard
        </Typography>
        {/* KPI Cards */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((kpi, i) => (
            <div key={i} className={`rounded-xl shadow-md p-4 flex flex-col items-center ${kpi.color} dark:bg-slate-800 dark:text-white`}>
              <div className="text-2xl font-bold mb-1">{kpi.value}</div>
              <div className="text-base font-medium opacity-80">{kpi.label}</div>
            </div>
          ))}
        </div>
    {/* Charts */}
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-center">
          <Card
            sx={{
              borderRadius: 5,
              boxShadow: 6,
              flex: 1,
              minWidth: 0,
              maxWidth: '100%',
              width: '100%',
              height: { xs: 200, sm: 260, md: 320 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 1.5,
              background: 'linear-gradient(135deg, #e3f2fd 0%, #fff 100%)',
              ...(document.documentElement.classList.contains('dark') && { background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' })
            }}
          >
            <CardContent
              sx={{
                width: '100%',
                height: '100%',
                p: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <canvas ref={barRef} className="w-full h-full" style={{ maxHeight: 320 }}></canvas>
            </CardContent>
          </Card>
          <Card
            sx={{
              borderRadius: 5,
              boxShadow: 6,
              flex: 1,
              minWidth: 0,
              maxWidth: '100%',
              width: '100%',
              height: { xs: 200, sm: 260, md: 320 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 1.5,
              background: 'linear-gradient(135deg, #ede7f6 0%, #fff 100%)',
              ...(document.documentElement.classList.contains('dark') && { background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' })
            }}
          >
            <CardContent
              sx={{
                width: '100%',
                height: '100%',
                p: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <canvas ref={pieRef} className="w-full h-full" style={{ maxHeight: 320 }}></canvas>
            </CardContent>
          </Card>
          <Card
            sx={{
              borderRadius: 5,
              boxShadow: 6,
              flex: 1,
              minWidth: 0,
              maxWidth: '100%',
              width: '100%',
              height: { xs: 200, sm: 260, md: 320 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 1.5,
              background: 'linear-gradient(135deg, #f3e8ff 0%, #fff 100%)',
              ...(document.documentElement.classList.contains('dark') && { background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' })
            }}
          >
            <CardContent
              sx={{
                width: '100%',
                height: '100%',
                p: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <canvas ref={lineRef} className="w-full h-full" style={{ maxHeight: 320 }}></canvas>
            </CardContent>
          </Card>
        </div>
        {/* Recent Activity */}
        <div className="w-full max-w-2xl mt-6">
          <Card sx={{ borderRadius: 4, boxShadow: 3, background: document.documentElement.classList.contains('dark') ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' : 'linear-gradient(135deg, #f1f5f9 0%, #fff 100%)' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 700, mb: 2 }}>Recent Activity</Typography>
              <ul className="divide-y divide-slate-200">
                {activities.map(a => (
                  <li key={a.id} className="py-2 flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-200">{a.text}</span>
                    <span className="text-xs text-slate-400 dark:text-slate-400">{a.time}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard