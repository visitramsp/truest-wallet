import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import styles from './authStyles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Colors, verticalScale } from '../../theme';
import TextInputFieldPaper from '../../components/textInputFieldPaper/TextInputFieldPaper';
import { useFormik } from 'formik';
import { ForgetPasswordSchema } from '../../schemas/AuthSchema';
import CustomButton from '../../components/CustomButton';
import MainLayout from '../../components/layout/Layout';
export default function ForgetPassword() {
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
        },
        validationSchema: ForgetPasswordSchema,
        onSubmit: values => {
            console.log(values, "values");
            navigation.navigate("home")
        },
    });
    return (
        <MainLayout >
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" size={25} color={Colors.black100} />
            </TouchableOpacity>
            <Text style={styles.title}>Forget Password</Text>

            <Text style={styles.emailTitle}>
                Please, enter your email address. You will receive a link to create a new password via email.
            </Text>
            <TextInputFieldPaper
                label="Email"
                value={values.email}
                errors={errors?.email}
                touched={touched.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
            />
            <CustomButton style={{ marginTop: verticalScale(28) }} onPress={() => handleSubmit()} title='SEND' />


        </MainLayout>
    )
}

// https://www.figma.com/design/63KIQdBzo10nDdasHmpM8C/E-Commerce-App-Design--Community-?node-id=0-1&p=f&t=rKJh9nk7egfYjlvA-0