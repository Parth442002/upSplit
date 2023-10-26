import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface ExpenseCardProps {
  navigation:any,
  item: {
    title: string;
    amount: string;
  };
}

const ExpenseCard = ({ item,navigation }: ExpenseCardProps) => {
  return (
    <TouchableOpacity style={styles.expenseCard}
    onPress={()=>navigation.navigate("IndividualExpense", { item: item })}>
      <Text>{item.title}</Text>
      <Text>{item.amount}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  expenseCard: {
    backgroundColor: 'lightgrey',
    padding: 16,
    height:160,
    borderRadius: 8,
    margin: 8,
    marginVertical:16,
    width: 250,
  },
});

export default ExpenseCard;
