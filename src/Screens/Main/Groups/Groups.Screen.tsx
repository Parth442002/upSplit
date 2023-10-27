// GroupsScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import BaseScreen from '../../../HOC/base.Screen';
import GroupCard from "../../../Components/Card/GroupCard";

const groupData = [
  { id: '1', groupName: 'Group 1', createdDate: '2023-10-25', description: 'First group', members: 10 },
  { id: '2', groupName: 'Group 2', createdDate: '2023-10-26', description: 'Second group', members: 15 },
  { id: '3', groupName: 'Group 3', createdDate: '2023-10-27', description: 'Third group', members: 8 },
  { id: '4', groupName: 'Group 4', createdDate: '2023-10-28', description: 'Fourth group', members: 20 },
];

interface GroupsScreenProps{
  navigation:any
}

export default function GroupsScreen({navigation}:GroupsScreenProps) {
  return (
    <BaseScreen>
      <Text>Groups Screen</Text>
      {groupData.map((group) => (
        <GroupCard navigation={navigation}key={group.id} group={group} />
      ))}
    </BaseScreen>
  );
}
