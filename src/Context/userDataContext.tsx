// UserDataContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the data structure for user data
interface UserData {
  __v: number;
  _id: string;
  password: string;
  phoneNumber: string;
  token: string;
  username: string;
}

// Create a context
const UserDataContext = createContext<{
  userData: UserData | null;
  setUserData: (data: UserData | null) => void;
} | undefined>(undefined);

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
};

interface UserDataProviderProps {
  children: ReactNode;
}

export const UserDataProvider: React.FC<UserDataProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
