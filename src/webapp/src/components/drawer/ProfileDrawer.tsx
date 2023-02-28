import React, { useContext } from 'react'
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css"
import { useNavigate } from 'react-router-dom';

import UserContext from '../../context/UserContext';
import { ProfileDrawerContainer } from './ProfileDrawer.styles';

type ProfileDrawerProps = {
    isProfileDrawerOpen: boolean;
    toggleProfileDrawer: () => void;
}

export const ProfileDrawer = (props: ProfileDrawerProps) => {
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <Drawer open={props.isProfileDrawerOpen} onClose={props.toggleProfileDrawer} direction={'right'}>
        <ProfileDrawerContainer>
            {currentUser ? (
              <>
              <span>{currentUser.username}</span>
              <span>{currentUser.email}</span>
              <button>Twoje Konto</button>
              <button>Wyloguj się</button>
              </>
            ) : (
              <>
              <h2>Nie jesteś zalogowany</h2>
            <p>Aby uzyskać dostęp zaloguj się</p>
            <button onClick={() => {
              navigate('/client')
            }}>Zaloguj się</button>
            </>
            )}
        </ProfileDrawerContainer>
    </Drawer>
  )
}
