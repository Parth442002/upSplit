import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import FriendItem from '../../Card/FriendCard';

interface FriendsSectionProps {
  navigation:any,
}

const FriendsSection = ({ navigation }: FriendsSectionProps) => {
  const friendsData = [
    { id: '1', name: 'Friend 1' },
    { id: '2', name: 'Friend 2' },
    { id: '3', name: 'Friend 3' },
    { id: '4', name: 'Friend 4' },
    { id: '5', name: 'Friend 5' },
  ];

  return (
    <View style={styles.friendsSection}>
      <View style={styles.friendsHeader}>
        <Text style={styles.friendsHeaderText}>Friends</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("FriendsStack")}>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
      {friendsData.map((friend, index) => (
        <FriendItem
          navigation={navigation}
          key={friend.id}
          friend={friend}
          isLast={index === friendsData.length - 1}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  friendsSection: {
    marginTop: 24,
    width:"100%",
  },
  friendsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  friendsHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default FriendsSection;
