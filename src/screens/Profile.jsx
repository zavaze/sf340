import React from 'react';
import '../styles/profile.css';
const Profile = () => {
  return (
    <div className="profile-con">
      <div className="profile-left">
        <h1>MEMBERSHIP</h1>
        <ul>
          <li>
            <h3>Membership</h3>
          </li>
          <li className="active">profile</li>
          <li>
            <h3>Profile setting</h3>
          </li>
          <li>Edit profile</li>
          <li>Change my password</li>
        </ul>
      </div>
      <div className="profile-right">
        <h1>PROFILE</h1>
        <div className="profile">
          <div>
            <h2>NAME</h2>
            Mr.XXX YYY
          </div>
          <div>
            <h2>PHONE</h2>
            089xxxxxxx
          </div>
          <div>
            <h2>ADDRESS</h2>
            xxx/xx m.___ Thailand
          </div>
          <div>
            <h2>EMAIL ADDRESS</h2>
            xxxxxxx@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
