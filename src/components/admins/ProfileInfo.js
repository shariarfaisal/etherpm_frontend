import React from 'react'

const InfoItem = ({ title, name }) => (
  <div className="d-flex px-2 border-bottom border-secondary my-2">
    <span className="w-50">{title}</span>
    <span className="w-50">{name}</span>
  </div>
)

const ProfileInfo = ({ name, email, username, contact, type }) => {
return(
  <div className="profile-info" style={{fontSize: '14px'}}>
      <InfoItem title="Name" name={name} />
      <InfoItem title="Email" name={email} />
      <InfoItem title="Username" name={username} />
      <InfoItem title="Contact" name={contact} />
      <InfoItem title="Role" name={type} />
    </div>
)
}
export default ProfileInfo
