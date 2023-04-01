import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Lorem ipsum dolor sit 1",
    amount: 34.43,
    date: new Date("2021-12-12"),
  },
  {
    id: "e2",
    description: "Lorem ipsum dolor sit 2",
    amount: 34.43,
    date: new Date("2021-10-2"),
  },
  {
    id: "e3",
    description: "Lorem ipsum dolor sit 3",
    amount: 34.43,
    date: new Date("2021-11-5"),
  },
  {
    id: "e4",
    description: "Lorem ipsum dolor sit 4",
    amount: 34.43,
    date: new Date("2021-11-5"),
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({});
