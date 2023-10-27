// GroupCard.tsx
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface GroupCardProps {
  navigation:any,
  group: {
    id: string;
    groupName: string;
    createdDate: string;
    description: string;
    members: number;
  };
}

const GroupCard: React.FC<GroupCardProps> = ({ navigation,group }) => {
  return (
    <TouchableOpacity
    style={styles.groupItem}
    onPress={()=>navigation.navigate(
      "GroupsStack",{screen:"IndividualGroup",params:{group}})}
    >
      <Text style={styles.groupName}>{group.groupName}</Text>
      <Text style={styles.description}>Description: {group.description}</Text>
      <Text style={styles.createdDate}>Created on: {group.createdDate}</Text>
      <Text style={styles.members}>Members: {group.members}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  groupItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width:"100%",
    marginVertical:8
  },
  groupName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
  },
  createdDate: {
    color: 'gray',
  },
  members: {
    color: 'gray',
  },
});

export default GroupCard;
