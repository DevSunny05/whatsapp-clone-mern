import React from 'react'
import '../components/SidebarChat.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const SidebarChat = () => {
  return (
    <div className='sidebarChat'>
      <AccountCircleIcon/>
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>this is chat message</p>
      </div>
    </div>
  )
}

export default SidebarChat
