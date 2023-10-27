import React from 'react';
import { Text, TouchableOpacity, View, FlatList, StyleSheet } from 'react-native';
import ExpenseCard from '../../Card/ExpenseCard';

interface RecentExpenseProps {
  navigation:any,
}

const RecentExpenses = ({ navigation }: RecentExpenseProps) => {
  const recentExpensesData = [
    { id: '1', title: 'Expense 1', amount: '$50.00' },
    { id: '2', title: 'Expense 2', amount: '$25.00' },
    { id: '3', title: 'Expense 1', amount: '$50.00' },
    { id: '4', title: 'Expense 2', amount: '$25.00' },
    { id: '5', title: 'Expense 1', amount: '$50.00' },
    { id: '6', title: 'Expense 2', amount: '$25.00' },
    { id: '7', title: 'Expense 1', amount: '$50.00' },
    { id: '8', title: 'Expense 2', amount: '$25.00' },
  ]
  return (
    <View style={styles.recentExpenses}>
      <View style={styles.recentExpensesHeader}>
        <Text style={styles.recentExpensesHeaderText}>Recent Expenses</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("UserExpenses")}>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={recentExpensesData}
        renderItem={({ item }) => <ExpenseCard item={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recentExpenses: {
    marginTop: 24,
    flexShrink:1,
  },
  recentExpensesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recentExpensesHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})

export default RecentExpenses;
