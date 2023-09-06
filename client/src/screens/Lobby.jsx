import React, { useState, useCallback } from "react";
import "./lobby.css"; // Import your CSS file for styling

function LobbyScreen() {
  // State for email and selected room
  const [email, setEmail] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle room selection change
  const handleRoomChange = (e) => {
    setSelectedRoom(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic for handling the form submission here
    console.log("Email:", email);
    console.log("Selected Room:", selectedRoom);
  };

  return (
    <div className="form-container">
      <h2>Video Call</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="room">Select a Room:</label>
          <select
            id="room"
            value={selectedRoom}
            onChange={handleRoomChange}
            required
          >
            <option value="">Select</option>
            <option value="room1">Room 1</option>
            <option value="room2">Room 2</option>
            <option value="room3">Room 3</option>
          </select>
        </div>
        <button type="submit">Join</button>
      </form>
    </div>
    
  );
}

export default LobbyScreen;
