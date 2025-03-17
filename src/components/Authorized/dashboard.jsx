import React, { useState } from 'react';

const BikeRentalDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const recentBookings = [
    { id: 1, customer: 'John Doe', bike: 'Mountain Bike', start: '2025-03-15', end: '2025-03-17', status: 'active' },
    { id: 2, customer: 'Jane Smith', bike: 'City Cruiser', start: '2025-03-16', end: '2025-03-18', status: 'active' },
    { id: 3, customer: 'Mike Johnson', bike: 'Road Bike', start: '2025-03-14', end: '2025-03-16', status: 'completed' },
    { id: 4, customer: 'Sarah Williams', bike: 'Electric Bike', start: '2025-03-17', end: '2025-03-19', status: 'upcoming' }
  ];
  
  const bikeInventory = [
    { id: 1, type: 'Mountain Bike', available: 12, total: 15, maintenance: 1 },
    { id: 2, type: 'Road Bike', available: 8, total: 10, maintenance: 0 },
    { id: 3, type: 'City Cruiser', available: 5, total: 8, maintenance: 1 },
    { id: 4, type: 'Electric Bike', available: 4, total: 7, maintenance: 2 }
  ];
  
  const revenueData = [
    { day: 'Mon', amount: 2500 },
    { day: 'Tue', amount: 3200 },
    { day: 'Wed', amount: 2800 },
    { day: 'Thu', amount: 3600 },
    { day: 'Fri', amount: 4000 },
    { day: 'Sat', amount: 5200 },
    { day: 'Sun', amount: 4800 }
  ];
  
  const totalRevenue = revenueData.reduce((sum, day) => sum + day.amount, 0);
  const activeRentals = recentBookings.filter(booking => booking.status === 'active').length;
  const availableBikes = bikeInventory.reduce((sum, bike) => sum + bike.available, 0);
  const totalBikes = bikeInventory.reduce((sum, bike) => sum + bike.total, 0);
  
  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'active': return 'badge-success';
      case 'upcoming': return 'badge-warning';
      case 'completed': return 'badge-info';
      default: return 'badge-ghost';
    }
  };
  
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Header */}
      <div className="navbar bg-base-200 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">BikeRent Admin</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/api/placeholder/40/40" alt="avatar" />
              </div>
            </div>
            <ul     className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li><a>Profile</a></li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-base-200 h-screen">
          <ul className="menu p-4 text-base-content">
            <li className={activeTab === 'dashboard' ? 'bordered' : ''}>
              <a onClick={() => setActiveTab('dashboard')} className="font-medium">
                Dashboard
              </a>
            </li>
            <li className={activeTab === 'bookings' ? 'bordered' : ''}>
              <a onClick={() => setActiveTab('bookings')} className="font-medium">
                Bookings
              </a>
            </li>
            <li className={activeTab === 'inventory' ? 'bordered' : ''}>
              <a onClick={() => setActiveTab('inventory')} className="font-medium">
                Inventory
              </a>
            </li>
            <li className={activeTab === 'customers' ? 'bordered' : ''}>
              <a onClick={() => setActiveTab('customers')} className="font-medium">
                Customers
              </a>
            </li>
            <li className={activeTab === 'reports' ? 'bordered' : ''}>
              <a onClick={() => setActiveTab('reports')} className="font-medium">
                Reports
              </a>
            </li>
            <li className={activeTab === 'settings' ? 'bordered' : ''}>
              <a onClick={() => setActiveTab('settings')} className="font-medium">
                Settings
              </a>
            </li>
          </ul>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="stats shadow bg-primary text-primary-content">
              <div className="stat">
                <div className="stat-title">Total Revenue (Weekly)</div>
                <div className="stat-value">${totalRevenue}</div>
                <div className="stat-desc">March 10-16, 2025</div>
              </div>
            </div>
            
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Active Rentals</div>
                <div className="stat-value text-secondary">{activeRentals}</div>
                <div className="stat-desc">Currently in use</div>
              </div>
            </div>
            
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Available Bikes</div>
                <div className="stat-value text-accent">{availableBikes}/{totalBikes}</div>
                <div className="stat-desc">Ready for rental</div>
              </div>
            </div>
            
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">New Customers</div>
                <div className="stat-value">23</div>
                <div className="stat-desc">Last 7 days</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Recent Bookings */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Recent Bookings</h2>
                <div className="overflow-x-auto">
                  <table className="table table-zebra">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Bike</th>
                        <th>Period</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentBookings.map(booking => (
                        <tr key={booking.id}>
                          <td>#{booking.id}</td>
                          <td>{booking.customer}</td>
                          <td>{booking.bike}</td>
                          <td>{booking.start} - {booking.end}</td>
                          <td>
                            <div className={`badge ${getStatusBadgeClass(booking.status)}`}>
                              {booking.status}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">View All Bookings</button>
                </div>
              </div>
            </div>
            
            {/* Bike Inventory */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Bike Inventory</h2>
                <div className="overflow-x-auto">
                  <table className="table table-zebra">
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Available</th>
                        <th>Total</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bikeInventory.map(bike => (
                        <tr key={bike.id}>
                          <td>{bike.type}</td>
                          <td>{bike.available}</td>
                          <td>{bike.total}</td>
                          <td>
                            <progress 
                              className="progress progress-success w-full" 
                              value={bike.available} 
                              max={bike.total}
                            ></progress>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">Manage Inventory</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Revenue Chart and Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-xl lg:col-span-2">
              <div className="card-body">
                <h2 className="card-title">Weekly Revenue</h2>
                <div className="h-64 w-full">
                  <div className="flex items-end justify-around h-48">
                    {revenueData.map((day, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="text-xs mb-1">${day.amount}</div>
                        <div 
                          className="bg-primary w-12 rounded-t-lg" 
                          style={{ height: `${(day.amount / 600) * 100}%` }}
                        ></div>
                        <div className="text-xs mt-1">{day.day}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Quick Actions</h2>
                <div className="space-y-4">
                  <button className="btn btn-primary btn-block">
                    New Booking
                  </button>
                  <button className="btn btn-secondary btn-block">
                    Add Bike
                  </button>
                  <button className="btn btn-accent btn-block">
                    Register Customer
                  </button>
                  <button className="btn btn-outline btn-block">
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeRentalDashboard;