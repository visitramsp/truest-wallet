import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import {Colors, Fonts} from '../../../theme';
import CustomButton from '../../../components/CustomButton';
import {height} from '../../../theme/Matrics';
import MainLayout from '../../../components/layout/Layout';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
const {width} = Dimensions.get('window');

const fields = [
  {key: 1, value: 'spring', isActive: false},
  {key: 2, value: 'toy', isActive: true},
  {key: 3, value: 'virus', isActive: true},
  {key: 4, value: 'soda', isActive: true},
  {key: 5, value: 'rule', isActive: false},
  {key: 6, value: 'ring', isActive: true},
  {key: 7, value: 'prefer', isActive: true},
  {key: 8, value: 'ethics', isActive: true},
  {key: 9, value: 'follow', isActive: true},
  {key: 10, value: 'pudding', isActive: false},
  {key: 11, value: 'pottery', isActive: true},
  {key: 12, value: 'suffer', isActive: true},
];

const confirmationArr = [
  {key: 1, value: 'spring', isActive: false},
  {key: 5, value: 'rule', isActive: false},
  {key: 10, value: 'pudding', isActive: false},
];

const FirstTimeConfirmPhrase = () => {
  const [fieldData, setFieldData] = useState(fields);
  const [confirmData, setConfirmData] = useState(confirmationArr);
  const [isView, setIsView] = useState(false);
  const navigation = useNavigation();

  const initialValues = fields.reduce((acc, _, index) => {
    acc[`input_${index}`] = '';
    return acc;
  }, {});

  const handleWordClick = item => {
    setFieldData(prev =>
      prev.map(f => (f.key === item.key ? {...f, isActive: true} : f)),
    );

    setConfirmData(prev =>
      prev.map(f => (f.key === item.key ? {...f, isActive: true} : f)),
    );
  };
  const allActive = fieldData.every(f => f.isActive);

  console.log(allActive, 'allActive');

  return (
    <MainLayout>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log('Submitted values:', values);
        }}>
        {({handleChange, handleBlur, values, handleSubmit}) => (
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <View style={{position: 'relative', left: -10}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Entypo
                    name={'chevron-small-left'}
                    size={40}
                    color={Colors.gray80}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.stepText}>Step 3 of 3</Text>
              <Text style={styles.title}>
                Confirm your Secret Recovery Phrase
              </Text>
              <Text style={styles.subtitle}>
                Please select each phrase in order to make sure it is correct
              </Text>

              <View style={[styles.gridContainer]}>
                <View style={styles.container1}>
                  <View style={styles.grid1}>
                    {fieldData.map((item, index) => {
                      const fieldName = `input_${index}`;
                      return (
                        <View
                          key={fieldName}
                          style={[
                            styles.inputContainer,
                            !item.isActive && {
                              borderColor: Colors.primarySecond,
                            },
                          ]}>
                          <Text
                            style={{
                              color: Colors.gray70,
                              fontWeight: Fonts.Weight.medium,
                              fontSize: 13,
                            }}>
                            {index + 1}.
                          </Text>
                          <TextInput
                            style={styles.input}
                            value={item.value}
                            editable={true}
                            onChangeText={handleChange(fieldName)}
                            onBlur={handleBlur(fieldName)}
                            onKeyPress={({nativeEvent}) => {
                              if (nativeEvent.key === 'Enter') {
                                nativeEvent.preventDefault?.();
                              }
                            }}
                          />
                        </View>
                      );
                    })}
                  </View>
                </View>
                <View
                  style={{
                    borderTopWidth: 1,
                    borderColor: Colors.gray40,
                    marginBottom: 10,
                  }}
                />
                <View style={styles.grid1}>
                  {confirmData.map((item, index) => {
                    const fieldName = `input_${index}`;
                    return (
                      <TouchableOpacity
                        key={fieldName}
                        disabled={item.isActive}
                        onPress={() => handleWordClick(item)}
                        style={[
                          styles.inputContainer,
                          {
                            height: 42,
                            cursor: 'pointer',
                          },
                          !item.isActive && {
                            borderColor: Colors.primarySecond,
                          },
                        ]}>
                        <Text
                          style={[
                            styles.input,
                            {
                              color: Colors.primarySecond,
                              fontWeight: Fonts.Weight.medium,
                              fontSize: 13,
                            },
                            item.isActive && {
                              color: Colors.gray60,
                            },
                          ]}>
                          {item.key}. {item.value}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </View>

            <CustomButton
              title="Confirm"
              disabled={allActive}
              onPress={() => navigation.navigate('bottom-navigation')}
            />
          </View>
        )}
      </Formik>
    </MainLayout>
  );
};

export default FirstTimeConfirmPhrase;

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
    color: Colors.gray70,
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
    marginBottom: 0,
    lineHeight: 20,
  },
  highlight: {
    color: Colors.primarySecond,
    fontWeight: 'bold',
  },
  gridContainer: {
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
