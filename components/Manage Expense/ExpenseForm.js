import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";

export default function ExpenseForm() {
  function amountChangedHandler() {}

  return (
    <View>
      <Input
        label="amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label="date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          keyboardType: "decimal-pad",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          autoCapitalize: "words",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
