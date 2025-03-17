import React, { useState } from 'react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: true,
    saveSearchHistory: true,
    rememberPreferredCars: true,
  });

  // user data
  const user = {
    name: "Jhon Cena",
    email: "Tjhon@gmail.com",
    phone: "(555) 123-4567",
    memberSince: "Jan 2023",
    loyaltyPoints: 2450,
    membershipTier: "Gold",
    profileImg: "https://via.placeholder.com/150",
  };

  //  rental history
  const rentalHistory = [
    { id: 'RNT-7845', car: 'Toyota Camry', startDate: '2025-02-15', endDate: '2025-02-18', status: 'Completed', cost: '$210.50' },
    { id: 'RNT-6723', car: 'Honda CR-V', startDate: '2025-01-05', endDate: '2025-01-10', status: 'Completed', cost: '$450.75' },
    { id: 'RNT-8912', car: 'Tesla Model Y', startDate: '2024-12-20', endDate: '2024-12-27', status: 'Completed', cost: '$980.00' },
    { id: 'RNT-9345', car: 'Ford Mustang', startDate: '2025-03-22', endDate: '2025-03-25', status: 'Upcoming', cost: '$375.25' },
  ];

  // Mock saved vehicles
  const savedVehicles = [
    { id: 1, name: 'Economy', description: 'Toyota Corolla or similar', lastRented: '2024-11-15' },
    { id: 2, name: 'SUV', description: 'Honda CR-V or similar', lastRented: '2025-01-10' },
    { id: 3, name: 'Luxury', description: 'BMW 5 Series or similar', lastRented: 'Never' },
  ];

  // Helper functions for rendering components
  const renderPersonalInfoFields = () => (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <input type="text" value={user.name} className="input input-bordered ml-4" readOnly />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" value={user.email} className="input input-bordered ml-11" readOnly />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Phone</span>
        </label>
        <input type="tel" value={user.phone} className="input input-bordered ml-9" readOnly />
      </div>
    </>
  );

  const renderPaymentMethods = () => (
    <>
      <div className="flex items-center justify-between p-3 bg-base-100 rounded-lg mb-2">
        <div className="flex items-center gap-3">
          <div className="badge badge-lg">VISA</div>
          <span>•••• 4589</span>
        </div>
        <span className="text-sm opacity-70">Expires 12/26</span>
      </div>
      <div className="flex items-center justify-between p-3 bg-base-100 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="badge badge-lg">MC</div>
          <span>•••• 8721</span>
        </div>
        <span className="text-sm opacity-70">Expires 03/27</span>
      </div>
    </>
  );

  const renderPreferenceToggles = () => (
    <>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Receive email notifications</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={preferences.emailNotifications}
            onChange={(e) => handlePreferenceChange('emailNotifications', e.target.checked)}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Receive SMS notifications</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={preferences.smsNotifications}
            onChange={(e) => handlePreferenceChange('smsNotifications', e.target.checked)}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Save search history</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={preferences.saveSearchHistory}
            onChange={(e) => handlePreferenceChange('saveSearchHistory', e.target.checked)}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Remember preferred cars</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={preferences.rememberPreferredCars}
            onChange={(e) => handlePreferenceChange('rememberPreferredCars', e.target.checked)}
          />
        </label>
      </div>
    </>
  );

  // Event handlers
  const handleEditInfo = () => {
    console.log("Edit Information clicked");
  };

  const handleAddPaymentMethod = () => {
    console.log("Add Payment Method clicked");
  };

  const handlePreferenceChange = (preferenceKey, value) => {
    setPreferences((prev) => ({
      ...prev,
      [preferenceKey]: value,
    }));
  };

  return (
    <div className="bg-base-100 p-4 rounded-lg shadow-lg">
      {/* User Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 p-4 bg-base-200 rounded-t-lg">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user.profileImg} alt={user.name} />
          </div>
        </div>

        <div className="flex-grow">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <p className="text-sm opacity-70">{user.email}</p>
            <p className="text-sm opacity-70">{user.phone}</p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="badge badge-primary">{user.membershipTier}</div>
            <span className="text-sm">Member since {user.memberSince}</span>
          </div>
        </div>

        <div className="stats bg-primary text-primary-content shadow">
          <div className="stat">
            <div className="stat-title">Loyalty Points</div>
            <div className="stat-value">{user.loyaltyPoints}</div>
            <div className="stat-desc">Next tier at 3000</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="tabs tabs-boxed mt-4">
        <a
          className={`tab ${activeTab === 'profile' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </a>
        <a
          className={`tab ${activeTab === 'rentals' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('rentals')}
        >
          Rental History
        </a>
        <a
          className={`tab ${activeTab === 'vehicles' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('vehicles')}
        >
          Saved Vehicles
        </a>
        <a
          className={`tab ${activeTab === 'settings' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </a>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information Card */}
            <div className="card bg-base-200 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Personal Information</h3>
                {renderPersonalInfoFields()}
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary" onClick={handleEditInfo}>
                    Edit Information
                  </button>
                </div>
              </div>
            </div>

            {/* Payment Methods Card */}
            <div className="card bg-base-200 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Payment Methods</h3>
                {renderPaymentMethods()}
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-outline" onClick={handleAddPaymentMethod}>
                    Add Payment Method
                  </button>
                </div>
              </div>
            </div>

            {/* Preferences Card */}
            <div className="card bg-base-200 shadow-sm md:col-span-2">
              <div className="card-body">
                <h3 className="card-title">Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {renderPreferenceToggles()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rental History Tab */}
        {activeTab === 'rentals' && (
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Rental ID</th>
                  <th>Vehicle</th>
                  <th>Dates</th>
                  <th>Status</th>
                  <th>Cost</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rentalHistory.map((rental) => (
                  <tr key={rental.id}>
                    <td>{rental.id}</td>
                    <td>{rental.car}</td>
                    <td>{rental.startDate} to {rental.endDate}</td>
                    <td>
                      <div className={`badge ${rental.status === 'Completed' ? 'badge-success' : 'badge-warning'}`}>
                        {rental.status}
                      </div>
                    </td>
                    <td>{rental.cost}</td>
                    <td>
                      <button className="btn btn-xs btn-outline mr-1">View</button>
                      {rental.status === 'Upcoming' && (
                        <button className="btn btn-xs btn-error">Cancel</button>
                      )}
                      {rental.status === 'Completed' && (
                        <button className="btn btn-xs btn-primary">Book Again</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center mt-4">
              <div className="btn-group">
                <button className="btn btn-xs">1</button>
                <button className="btn btn-xs btn-active">2</button>
                <button className="btn btn-xs">3</button>
                <button className="btn btn-xs">...</button>
                <button className="btn btn-xs">8</button>
              </div>
            </div>
          </div>
        )}

        {/* Saved Vehicles Tab */}
        {activeTab === 'vehicles' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedVehicles.map((vehicle) => (
              <div key={vehicle.id} className="card bg-base-200 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">{vehicle.name}</h3>
                  <p>{vehicle.description}</p>
                  <div className="text-sm opacity-70">
                    Last rented: {vehicle.lastRented}
                  </div>
                  <div className="card-actions justify-end mt-2">
                    <button className="btn btn-sm btn-primary">Book Now</button>
                    <button className="btn btn-sm btn-outline">Remove</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="card bg-base-200 shadow-sm border-2 border-dashed border-base-300">
              <div className="card-body items-center justify-center text-center">
                <h3 className="card-title">Add New</h3>
                <p>Save your favorite vehicle category for quick booking</p>
                <button className="btn btn-primary mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Add Vehicle
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-200 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Account Settings</h3>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Update Password</span>
                  </label>
                  <input type="password" placeholder="Current Password" className="input input-bordered mb-2" />
                  <input type="password" placeholder="New Password" className="input input-bordered mb-2" />
                  <input type="password" placeholder="Confirm New Password" className="input input-bordered" />
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary">Update Password</button>
                </div>
              </div>
            </div>

            <div className="card bg-base-200 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Privacy Settings</h3>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Share rental history with partners</span>
                    <input type="checkbox" className="toggle toggle-primary" />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Allow location tracking during rental</span>
                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Receive personalized offers</span>
                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                  </label>
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-outline btn-error">Delete Account</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;