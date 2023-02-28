
import { is } from "@babel/types";
import { createContext, useState } from "react";
import { ProfileDrawer } from "../components/drawer/ProfileDrawer";
import { DrawerContextType } from "../models/DrawerContextType";

const defaultSettings: DrawerContextType ={
    isProfileDrawerOpen: false,
   toggleProfileDrawer: () => {}
}

export const DrawerContext = createContext<DrawerContextType>(defaultSettings)

export const DrawerContextProvider = (props: React.PropsWithChildren) => {
    const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState<boolean>(false);

    const toggleProfileDrawer = () => {
        setIsProfileDrawerOpen(!isProfileDrawerOpen)
    }

    return <DrawerContext.Provider value={{ isProfileDrawerOpen, toggleProfileDrawer}}
    >
        {props.children}
        <ProfileDrawer isProfileDrawerOpen={isProfileDrawerOpen} 
        toggleProfileDrawer={toggleProfileDrawer}
        />
    </DrawerContext.Provider>
}