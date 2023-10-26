import AsyncStorage from '@react-native-async-storage/async-storage';
interface UserDataType {
  __v: number;
  _id: string;
  password: string;
  phoneNumber: string;
  token: string;
  username: string;
}
const storeUserData = async (userData: UserDataType): Promise<void> => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
  } catch (error) {
    console.error('Error storing user data:', error);
  }
};

const getUserData = async (): Promise<{ data: UserDataType | null; error: true|false }> => {
  try {
    const userData = await AsyncStorage.getItem('userData');
    if (userData !== null) {
      return { data: JSON.parse(userData), error: false };
    } else {
      return { data: null, error: true };
    }
  } catch (error) {
    return { data: null, error:true };
  }
};

export {storeUserData,getUserData,UserDataType};
