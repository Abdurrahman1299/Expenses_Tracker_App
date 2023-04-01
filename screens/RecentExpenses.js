import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function RecentExpenses() {
  return (
    <View style={{ flex: 1 }}>
      <ExpensesOutput expensesPeriod={"last 7 days"} />
    </View>
  );
}

const styles = StyleSheet.create({});
