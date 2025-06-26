// app/profile/[...username]/page.js
import React from "react";

const UserProfile = ({ params }) => {
  const { username } = params;
  
  // Handle catch-all route - username is an array
  const userSlug = Array.isArray(username) ? username.join('/') : username;
  const displayName = Array.isArray(username) ? username[username.length - 1] : username;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome, {displayName}!</h1>
      <p>This is the profile page for: {userSlug}</p>
      {Array.isArray(username) && username.length > 1 && (
        <div>
          <h3>Path segments:</h3>
          <ul>
            {username.map((segment, index) => (
              <li key={index}>{segment}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
