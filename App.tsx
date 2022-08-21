/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, Image, Platform} from 'react-native';
import {CalcButton, CalcWindow, TextContent} from './src/components';
import {calcButttons} from './src/constants';
import pkjson from './package.json';
import logo from './src/assets/logo.png';
import {evaluate} from './src/helpers';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

interface Calculator {
  input: string[] | number[];
  arg1: string[] | number[];
  operator: string | undefined;
  calculatorButtons: {}[];
  row1: {}[];
  row2: {}[];
  row3: {}[];
  row4: {}[];
  row5: {}[];
}

const App = () => {
  const [calcState, setCalcState] = useState<Calculator>({
    input: [],
    arg1: [],
    operator: '',
  });
  const [buttons, setButtons] = useState<Calculator>({
    calculatorButtons: calcButttons,
    row1: [],
    row2: [],
    row3: [],
    row4: [],
    row5: [],
  });

  const handlePress = (button: {type: string; value: string}) => {
    let currentInput = calcState.input;
    let currentArg = calcState.arg1;
    let operator = calcState.operator;
    let opposite = calcState.input
      ? parseFloat(currentInput?.join('')) * -1
      : -1;

    switch (true) {
      case button.type === 'number' && calcState.input.length < 9:
        return setCalcState({
          input: [...currentInput, button.value],
          arg1: currentArg,
          operator: operator,
        });
      case button.value === '+/-':
        return setCalcState({
          input: [opposite],
          arg1: currentArg,
          operator: operator,
        });
      case button.value === 'AC':
        return setCalcState({
          input: '',
          arg1: '',
          operator: '',
        });
      case button.type === 'function' &&
        button.value !== '=' &&
        button.value !== '+/-':
        return setCalcState({
          input: '',
          arg1: currentInput,
          operator: button.value,
        });

      case calcState.arg1 && button.type === 'number':
        return setCalcState({
          input: [...currentInput, button.value],
          arg1: currentArg,
          operator: operator,
        });

      case button.value === '=':
        return setCalcState({
          input: [
            evaluate(calcState.arg1, calcState.input, calcState.operator),
          ],
          arg1: ['0'],
          operator: '',
        });
    }
  };

  useEffect(() => {
    setCalcState({
      input: [],
    });
    setButtons({
      row1: calcButttons.filter((button, idx) => idx >= 0 && idx < 4),
      row2: calcButttons.filter((button, idx) => idx >= 4 && idx < 8),
      row3: calcButttons.filter((button, idx) => idx >= 8 && idx < 12),
      row4: calcButttons.filter((button, idx) => idx >= 12 && idx < 16),
      row5: calcButttons.filter(
        (button, idx) => idx >= 16 && idx <= calcButttons.length - 1,
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View
          style={{
            backgroundColor: '#fff',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: Platform.OS === 'android' ? 0 : 23,
            padding: 20,
            borderTopEndRadius: 40,
            borderTopLeftRadius: 40,
          }}>
          <View style={styles.label} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Image style={styles.image} source={logo} />
            <TextContent
              value="Texas Instruments"
              fontSize={16}
              marginRight={10}
            />
            <TextContent value="TI-12XIIS" fontWeight="900" />
          </View>
        </View>
        <CalcWindow
          arg={calcState.arg1}
          value={calcState.input.length ? calcState.input : '0'}
          height={Platform.OS === 'android' ? height * 0.12 : height * 0.15}
          borderBottomEndRadius={5}
          borderBottomStartRadius={5}
          width="100%"
          fontSize={Platform.OS === 'android' ? 32 : 55}
          justifyContent="center"
          textAlign="right"
          padding={10}
          backgroundColor="#B3BCB2"
          marginBottom={30}
          borderWidth={20}
          borderColor="#fff"
        />
        <View style={styles.buttonRow}>
          {buttons.row1?.map((button, idx) => (
            <CalcButton
              key={idx}
              onPress={() => handlePress(button)}
              borderRadius={15}
              color={button.type === 'function' ? '#fff' : '#03020A'}
              backgroundColor={button.type === 'function' ? '#03020A' : '#fff'}
              fontWeight="900"
              fontSize={20}
              title={button.value}
              width={60}
              height={60}
              justifyContent="center"
              textAlign="center"
              alignItems="center"
              padding={10}
              type={''}
              value={''}
              borderWidth={undefined}
              marginBottom={undefined}
            />
          ))}
        </View>
        <View style={styles.buttonRow}>
          {buttons.row2?.map((button, idx) => (
            <CalcButton
              key={idx}
              onPress={() => handlePress(button)}
              borderRadius={15}
              color={button.type === 'function' ? '#fff' : '#03020A'}
              backgroundColor={button.type === 'function' ? '#03020A' : '#fff'}
              fontWeight="900"
              fontSize={20}
              title={button.value}
              width={60}
              height={60}
              justifyContent="center"
              textAlign="center"
              alignItems="center"
              padding={10}
              type={''}
              value={''}
              borderWidth={undefined}
              marginBottom={undefined}
            />
          ))}
        </View>
        <View style={styles.buttonRow}>
          {buttons.row3?.map((button, idx) => (
            <CalcButton
              key={idx}
              onPress={() => handlePress(button)}
              borderRadius={15}
              color={button.type === 'function' ? '#fff' : '#03020A'}
              backgroundColor={button.type === 'function' ? '#03020A' : '#fff'}
              fontWeight="900"
              fontSize={20}
              title={button.value}
              width={60}
              height={60}
              justifyContent="center"
              textAlign="center"
              alignItems="center"
              padding={10}
              type={''}
              value={''}
              borderWidth={undefined}
              marginBottom={undefined}
            />
          ))}
        </View>
        <View style={styles.buttonRow}>
          {buttons.row4?.map((button, idx) => (
            <CalcButton
              key={idx}
              onPress={() => handlePress(button)}
              borderRadius={15}
              color={button.type === 'function' ? '#fff' : '#03020A'}
              backgroundColor={button.type === 'function' ? '#03020A' : '#fff'}
              fontWeight="900"
              fontSize={20}
              title={button.value}
              width={60}
              height={60}
              justifyContent="center"
              textAlign="center"
              alignItems="center"
              padding={10}
              type={''}
              value={''}
              borderWidth={undefined}
              marginBottom={undefined}
            />
          ))}
        </View>
        <View style={styles.buttonRowLast}>
          {buttons.row5?.map((button, idx) => (
            <CalcButton
              key={idx}
              onPress={() => handlePress(button)}
              borderRadius={15}
              color={button.type === 'function' ? '#fff' : '#03020A'}
              backgroundColor={button.type === 'function' ? '#03020A' : '#fff'}
              fontWeight="900"
              fontSize={20}
              title={button.value}
              width={button.value === 0 ? 163 : 60}
              height={60}
              justifyContent="center"
              textAlign="center"
              alignItems="center"
              padding={10}
              type={''}
              value={''}
              borderWidth={undefined}
              marginBottom={undefined}
            />
          ))}
        </View>
        <TextContent
          value={
            'App Version : ' +
            pkjson.version +
            `(${process.env.NODE_ENV === 'production' ? 'prod' : 'dev'})`
          }
          fontSize={14}
          color="#fff"
          fontWeight="bold"
          marginTop={25}
          textAlign="center"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2986CC',
  },
  image: {
    height: 35,
    width: 35,
    marginRight: 5,
  },
  buttonContainer: {
    width: width * 0.9,
    margin: width * 0.05,
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    marginRight: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonRowLast: {
    flexDirection: 'row',
    width: '100%',
    marginRight: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  label: {
    width: '50%',
    backgroundColor: '#000',
    height: 40,
    padding: 10,
  },
});

export default App;
