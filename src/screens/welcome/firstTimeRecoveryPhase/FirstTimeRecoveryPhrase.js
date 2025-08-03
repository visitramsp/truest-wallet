import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';
import { Colors, Fonts } from '../../../theme';
import CustomButton from '../../../components/CustomButton';
import { height } from '../../../theme/Matrics';
import MainLayout from '../../../components/layout/Layout';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { Formik } from 'formik';
import * as Yup from 'yup';
const { width } = Dimensions.get('window');

const fields = [
  'spring',
  'toy',
  'virus',
  'soda',
  'rule',
  'ring',
  'prefer',
  'ethics',
  'follow',
  'pudding',
  'pottery',
  'suffer',
];

const firstTimeRecoveryPhase = () => {
  const [isView, setIsView] = useState(false);
  const navigation = useNavigation();

  const initialValues = fields.reduce((acc, _, index) => {
    acc[`input_${index}`] = '';
    return acc;
  }, {});

  return (
    <MainLayout>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log('Submitted values:', values);
        }}>
        {({ handleChange, handleBlur, values, handleSubmit }) => (
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <View style={{ position: 'relative', left: -10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Entypo
                    name={'chevron-small-left'}
                    size={40}
                    color={Colors.gray80}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.stepText}>Step 2 of 3</Text>
              <Text style={styles.title}>Save your Secret Recovery Phrase</Text>
              <Text style={styles.subtitle}>
                This is your{' '}
                <Text style={styles.highlight}>Secret Recovery Phrase</Text>.
                Write it down in the correct order and keep it safe. If someone
                has your Secret Recovery Phrase, they can access your wallet.
                Don’t share it with anyone, ever.
              </Text>

              <View
                style={[
                  styles.grid,
                  !isView && { backgroundColor: Colors.gray80, zIndex: 999, borderRadius: 15 },
                ]}>
                {!isView && (
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      top: '39%',
                      left: '45%',
                      zIndex: 999,
                    }}
                    onPress={() => setIsView(true)}>
                    <Entypo
                      name={'eye-with-line'}
                      size={40}
                      color={Colors.blue80}
                    />
                  </TouchableOpacity>
                )}

                <View style={styles.container1}>
                  <View style={styles.grid1}>
                    {fields.map((item, index) => {
                      const fieldName = `input_${index}`;
                      return (
                        <View key={fieldName} style={[styles.inputContainer, !isView && { borderColor: Colors.gray70 }]}>
                          <Text
                            style={[{
                              color: Colors.gray100,
                              fontWeight: Fonts.Weight.medium,
                              fontSize: 13,
                            }, !isView && { color: Colors.gray70 }]}>
                            {index + 1}
                          </Text>
                          <TextInput
                            style={[styles.input, !isView && { color: Colors.gray70 }]}
                            value={item}
                            onChangeText={handleChange(fieldName)}
                            onBlur={handleBlur(fieldName)}
                          />
                        </View>
                      );
                    })}
                  </View>
                </View>
              </View>
            </View>

            <CustomButton
              title="Continue"
              disabled={isView}
              onPress={() =>
                navigation.navigate('confirm-first-recovery-phase')
              }
            />
          </View>
        )}
      </Formik>
    </MainLayout>
  );
};

export default firstTimeRecoveryPhase;

const styles = StyleSheet.create({
  container1: {
    paddingVertical: 16,
  },
  title1: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  grid1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: '30%',
    marginVertical: 8,
    borderWidth: 1,
    borderColor: Colors.gray60,
    borderRadius: 6,
    padding: 0,
    paddingHorizontal: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    paddingRight: 6,
    color: Colors.gray90,
    // backgroundColor: 'red',
  },
  buttonWrapper: {
    marginTop: 24,
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    paddingHorizontal: 20,
  },
  topContainer: {
    height: height - 150,
  },
  stepText: {
    color: Colors.gray100,
    fontSize: Fonts.size.semi,
    fontWeight: Fonts.Weight.low,
    marginBottom: 10,
  },
  title: {
    fontSize: Fonts.size.f24,
    color: Colors.black100,
    fontWeight: Fonts.Weight.bold,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: Fonts.size.medium,
    fontWeight: Fonts.Weight.low,
    color: Colors.black80,
    marginBottom: 25,
    lineHeight: 20,
  },
  highlight: {
    color: Colors.primarySecond,
    fontWeight: 'bold',
  },
  grid: {
    borderRadius: 12,
    marginBottom: 30,
    position: 'relative',
  },
  wordBox: {
    width: (width - 70) / 3,
    margin: 5,
    // backgroundColor: 'white',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.gray60,
    borderRadius: 5,
    paddingLeft: 8,
  },
  wordText: {
    color: Colors.gray90,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'left',
  },
});
