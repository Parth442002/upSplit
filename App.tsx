import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ParentNavigator from './src/Navigation/parentNavigator';
import {QueryClient,QueryClientProvider,} from 'react-query'
import { UserDataProvider } from './src/Context/userDataContext';
const queryClient = new QueryClient()

export default function App() {
  return (
    <UserDataProvider>
       <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <ParentNavigator/>
        </NavigationContainer>
      </QueryClientProvider>
    </UserDataProvider>

  );
}

