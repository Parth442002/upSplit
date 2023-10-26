import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface FriendItemProps {
  navigation:any,
  friend: {
    id: string;
    name: string;
  };
  isLast: boolean;
}

const FriendCard = ({ navigation,friend, isLast }: FriendItemProps) => {
  return (
    <TouchableOpacity
    style={styles.friendItem}
    onPress={()=>
      navigation.navigate("FriendsStack", {
        screen: "IndividualFriend",
        params: {...friend
        }
      })
    }
    >
      <Text style={styles.friendText}>{friend.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  friendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  lastFriendItem: {
    borderBottomWidth: 0, // Remove border for the last item
  },
  friendText: {
    fontSize: 18,
  },
  friendButton: {
    backgroundColor: 'lightgrey',
    padding: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FriendCard;
