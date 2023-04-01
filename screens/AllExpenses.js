import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function AllExpenses() {
  return (
    <View style={{ flex: 1 }}>
      <ExpensesOutput expensesPeriod={"total"} />
    </View>
  );
}

const styles = StyleSheet.create({});
