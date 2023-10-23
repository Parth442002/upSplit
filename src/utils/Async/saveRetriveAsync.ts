import AsyncStorage from '@react-native-async-storage/async-storage';
interface UserData {
  __v: number;
  _id: string;
  password: string;
  phoneNumber: string;
  token: string;
  username: string;
}
const storeUserData = async (userData: UserData): Promise<void> => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
  } catch (error) {
    console.error('Error storing user data:', error);
  }
};

const getUserData = async (): Promise<UserData | null> => {
  try {
    const userData = await AsyncStorage.getItem('userData');
    if (userData !== null) {
      return JSON.parse(userData) as UserData;
    } else {
      console.log('No user data found in AsyncStorage.');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return null;
  }
};

export {storeUserData,getUserData};
