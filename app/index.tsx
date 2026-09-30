//rnfe crear la estructura
import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  const {
    formula,
    previousNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLastEntry,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divideOperation,
    calculateSubResult,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        {formula === previousNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{previousNumber}</ThemeText>
        )}
      </View>

      {/* filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          color={Colors.lightGray}
          blackText
          onPress={clean}
          label="C"
        />
        <CalculatorButton
          color={Colors.lightGray}
          blackText
          onPress={toggleSign}
          label="+/-"
        />
        <CalculatorButton
          color={Colors.lightGray}
          blackText
          onPress={deleteLastEntry}
          label="del"
        />
        <CalculatorButton
          color={Colors.orange}
          onPress={divideOperation}
          label="div"
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber("7")} label="7" />
        <CalculatorButton onPress={() => buildNumber("8")} label="8" />
        <CalculatorButton onPress={() => buildNumber("9")} label="9" />
        <CalculatorButton
          color={Colors.orange}
          onPress={multiplyOperation}
          label="X"
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber("4")} label="4" />
        <CalculatorButton onPress={() => buildNumber("5")} label="5" />
        <CalculatorButton onPress={() => buildNumber("6")} label="6" />
        <CalculatorButton
          color={Colors.orange}
          onPress={subtractOperation}
          label="-"
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber("1")} label="1" />
        <CalculatorButton onPress={() => buildNumber("2")} label="2" />
        <CalculatorButton onPress={() => buildNumber("3")} label="3" />
        <CalculatorButton
          color={Colors.orange}
          onPress={addOperation}
          label="+"
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          doubleSize
          onPress={() => buildNumber("0")}
          label="0"
        />
        <CalculatorButton onPress={() => buildNumber(".")} label="." />
        <CalculatorButton
          color={Colors.orange}
          onPress={calculateResult}
          label="="
        />
      </View>
    </View>
  );
};
export default CalculatorApp;
