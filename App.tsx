import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ParentNavigator from './src/Navigation/parentNavigator';
import {QueryClient,QueryClientProvider,} from 'react-query'

const queryClient = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <ParentNavigator/>
        </NavigationContainer>
    </QueryClientProvider>
  );
}

