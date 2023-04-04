import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <View style={{ flex: 1 }}>
      <ExpensesOutput
        expensesPeriod={"total"}
        expenses={expensesCtx.expenses}
        fallbackText={"No expenses to show!"}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
