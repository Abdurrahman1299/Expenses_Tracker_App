import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <View style={{ flex: 1 }}>
      <ExpensesOutput
        expensesPeriod={"last 7 days"}
        expenses={recentExpenses}
        fallbackText={"No expenses added in the last 7 days."}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
