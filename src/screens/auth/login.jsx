import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import MainLayout from '../../components/layout/Layout';
import CustomButton from '../../components/CustomButton';
import TextInputFieldPaper from '../../components/textInputFieldPaper/TextInputFieldPaper';
import { verticalScale } from '../../theme/Matrics';
import { useFormik } from 'formik';
import { LoginSchema } from '../../schemas/AuthSchema';
import styles from './authStyles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import SocialMediaScreen from './SocialMediaScreen';
import { Colors } from '../../theme';


export default function Login() {
  const navigation = useNavigation();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // validationSchema: LoginSchema,
    onSubmit: values => {
      console.log(values, "values");
      navigation.navigate("bottom-navigation")
    },
  });


  return (
    <MainLayout scrollable>
      
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-left"    size={25} color={Colors.black100}/>
        </TouchableOpacity>
        <Text style={styles.title}>Login</Text>
        <View style={styles.middleContainer}>
          <TextInputFieldPaper
            label="Email"
            value={values.email}
            errors={errors?.email}
            touched={touched.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')} />
          <TextInputFieldPaper
            label="Password"
            value={values.password}
            errors={errors?.password}
            touched={touched.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')} />
          
            <Pressable style={styles.alreadyView} onPress={() => navigation.navigate("forget-password")}>
              <Text style={styles.alreadyText}>Forget your password?</Text>
              <Icon name="arrow-right-long" size={15} color={Colors.red100} />
            </Pressable>
          
          <CustomButton style={{ marginTop: verticalScale(28) }} onPress={() => handleSubmit()} title='LOGIN' />
          <SocialMediaScreen/>
        </View>


      </View>
    </MainLayout>
  )
}


