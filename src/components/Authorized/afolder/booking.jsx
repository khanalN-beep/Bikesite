import React, { useState } from "react";

const Booking = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showNewBookingForm, setShowNewBookingForm] = useState(false);

  // Bike lists
  const bikelists = [
    { id: 1, name: "Mountain Bike", hourlyRate: "12", available: 12, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Road Bike", hourlyRate: "16", available: 12, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Electric Bike", hourlyRate: "22", available: 12, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Folding Bike", hourlyRate: "12", available: 12, image: "https://via.placeholder.com/150" },
  ];

  const bookings = [
    {
      id: 1,
      customer: "John Doe",
      bikeType: "Honda",
      startDate: "2025-03-15",
      endDate: "2025-03-17",
      status: "active",
      totalCost: "72",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      customer: "Jashuu",
      bikeType: "TVS",
      startDate: "2025-03-15",
      endDate: "2025-03-17",
      status: "active",
      totalCost: "72",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      customer: "Kumar",
      bikeType: "Royal Enfield Classic",
      startDate: "2025-03-21",
      endDate: "2025-03-28",
      status: "upcoming",
      totalCost: "72",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      customer: "Sheetal",
      bikeType: "Pulsar",
      startDate: "2025-03-15",
      endDate: "2025-03-17",
      status: "completed",
      totalCost: "72",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      customer: "Sita",
      bikeType: "Bajaj",
      startDate: "2025-03-11",
      endDate: "2025-03-16",
      status: "canceled",
      totalCost: "72",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      customer: "Roman",
      bikeType: "KTM DUKE",
      startDate: "2025-03-15",
      endDate: "2025-03-17",
      status: "completed",
      totalCost: "72",
      image: "https://via.placeholder.com/150",
    },
  ];

  const filteredBookings = bookings.filter((booking) => {
    const searchMatch =
      booking.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.bikeType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.id.toString().includes(searchQuery);

    const statusMatch =
      filterStatus === "all" || booking.status === filterStatus;

    return searchMatch && statusMatch;
  });

  const handleNewBooking = () => {
    setShowNewBookingForm(true);
    setSelectedBooking(null);
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "active":
        return "badge-success";
      case "upcoming":
        return "badge-info";
      case "canceled":
        return "badge-error";
      case "completed":
        return "badge-neutral";
      default:
        return "badge-neutral";
    }
  };

  const handleBookingSelect = (booking) => {
    setSelectedBooking(booking);
  };

  return (
    <div className="bg-base-100 min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Booking</h1>
        <button className="btn btn-primary" onClick={handleNewBooking}>
          New Booking
        </button>
      </div>
      <div className="flex flex-col mb-6 gap-4">
        <div className="form-control w-full md:w-1/2 flex">
          <input
            type="text"
            placeholder="Bike Name or Booking ID"
            className="input input-bordered w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="form-control w-full md:w-1/2">
          <select
            className="select select-bordered w-full"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="upcoming">Upcoming</option>
            <option value="canceled">Canceled</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Booking Lists</h2>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>I.D</th>
                      <th>Customer</th>
                      <th>Bike type</th>
                      <th>Period</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBookings.map((booking) => (
                      <tr
                        key={booking.id}
                        className={
                          selectedBooking?.id === booking.id
                            ? "bg-base-200"
                            : ""
                        }
                      >
                        <td>#{booking.id}</td>
                        <td>{booking.customer}</td>
                        <td>{booking.bikeType}</td>
                        <td>
                          {booking.startDate} to {booking.endDate}
                        </td>
                        <td>${booking.totalCost}</td>
                        <td>
                          <div
                            className={`badge ${getStatusBadgeClass(
                              booking.status
                            )}`}
                          >
                            {booking.status}
                          </div>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-ghost"
                            onClick={() => handleBookingSelect(booking)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-actions justify-end mt-4">
                <div className="join">
                  <button className="join-item btn btn-sm">1</button>
                  <button className="join-item btn btn-sm btn-active">2</button>
                  <button className="join-item btn btn-sm">3</button>
                  <button className="join-item btn btn-sm">4</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Booking Detail */}
        <div className="lg:col-span-1">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              {showNewBookingForm ? (
                <>
                  <h2 className="card-title">New Booking</h2>
                  <form>
                    <div className="form-control w-full mb-4">
                      <label className="label">
                        <span className="label-text">Customer</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Customer Name"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div className="form-control w-full mb-4">
                      <label className="label">
                        <span className="label-text">Bike Type</span>
                      </label>
                      <select className="select select-bordered w-full">
                        <option disabled selected>
                          Select Bike
                        </option>
                        {bikelists.map((bike) => (
                          <option key={bike.id} value={bike.id}>
                            {bike.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-control w-full mb-4">
                      <label className="label">
                        <span className="label-text">Start Date</span>
                      </label>
                      <input
                        type="date"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div className="form-control w-full mb-4">
                      <label className="label">
                        <span className="label-text">End Date</span>
                      </label>
                      <input
                        type="date"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div className="form-control w-full mb-4">
                      <button className="btn btn-primary">
                        Create Booking
                      </button>
                    </div>
                  </form>
                </>
              ) : selectedBooking ? (
                <>
                  <h2 className="card-title">Booking Details</h2>
                  <div className="flex flex-col items-center">
                    <img
                      src={selectedBooking.image}
                      alt={selectedBooking.bikeType}
                      className="w-48 h-48 object-cover rounded-lg mb-4"
                    />
                    <p><strong>Customer:</strong> {selectedBooking.customer}</p>
                    <p><strong>Bike Type:</strong> {selectedBooking.bikeType}</p>
                    <p><strong>Period:</strong> {selectedBooking.startDate} to {selectedBooking.endDate}</p>
                    <p><strong>Total Cost:</strong> ${selectedBooking.totalCost}</p>
                    <div className={`badge ${getStatusBadgeClass(selectedBooking.status)}`}>
                      {selectedBooking.status}
                    </div>
                  </div>
                </>
              ) : (
                <p>Select a booking to view details or click "New Booking" to create a new booking.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;