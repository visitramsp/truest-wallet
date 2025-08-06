import {StyleSheet} from 'react-native';
import {
  ApplicationStyle,
  Colors,
  Fonts,
  horizontalScale,
  verticalScale,
  width,
} from '../../theme';
import {height} from '../../theme/Matrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: verticalScale(50),
    zIndex: 99,
    backgroundColor: Colors.bgColor,
  },
  stepText: {
    color: Colors.gray40,
    fontSize: Fonts.size.semi,
    fontWeight: Fonts.Weight.low,
    marginBottom: 10,
  },
  gifView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    width: width + 80,
    height: height - 500,
    opacity: 0.9,
  },
  mainTitle: {
    textAlign: 'center',
    marginTop: verticalScale(12),
    fontSize: Fonts.size.small,
    fontWeight: Fonts.Weight.medium,
    color: Colors.gray100,
    paddingHorizontal: horizontalScale(10),
    fontFamily: Fonts.type.montserratMedium,
    textAlign: 'center',
  },

  termsText: {
    color: Colors.btnColor,
  },
  privacyText: {
    color: Colors.btnColor,
  },
  outerContainer: {
    flexDirection: 'column',
    gap: verticalScale(20),
  },
  buttonContainer: {
    backgroundColor: Colors.gray50,
    padding: 16,
    borderRadius: 10,
    ...ApplicationStyle.rowAlignCenter,
    gap: 15,
  },
  topIcons: {
    height: 400,
    width: 400,
  },
  iconsView: {
    backgroundColor: Colors.blue10,
    height: 30,
    width: 30,
    borderRadius: 15,
    ...ApplicationStyle.rowAlignCenter,
    justifyContent: 'center',
  },
  iconsText: {
    fontSize: Fonts.size.medium,
    fontWeight: Fonts.Weight.medium,
    color: Colors.blue100,
  },
  btnName: {
    color: Colors.black800,
    fontSize: Fonts.size.regular,
    fontWeight: Fonts.Weight.medium,
  },
  iconsDesc: {
    color: Colors.gray90,
    fontSize: Fonts.size.small,
    fontWeight: Fonts.Weight.low,
  },
  mainTitleDesc: {
    color: Colors.black80,
    fontSize: Fonts.size.f20,
    fontWeight: Fonts.Weight.medium,
    textAlign: 'center',
    paddingBottom: verticalScale(20),
  },
  otpView: {marginTop: verticalScale(30)},
  resendView: {
    paddingVertical: verticalScale(30),
    justifyContent: 'center',
  },

  inputOTP: {
    fontSize: Fonts.size.semi,
    fontWeight: Fonts.Weight.medium,
    fontFamily: Fonts.type.montserratMedium,
    color: Colors.btnColor,
    borderRadius: 8,
    borderWidth: 1,
    borderBottomWidth: 1,
    width: horizontalScale(42),
    height: verticalScale(52),
    textAlign: 'center',
    marginHorizontal: horizontalScale(6),
  },
  errorText: {
    color: Colors.red100,
    paddingLeft: horizontalScale(5),
    fontSize: Fonts.size.medium,
    textAlign: 'center',
    paddingTop: verticalScale(5),
  },
  otpTextError: {
    color: Colors.red,
    paddingTop: horizontalScale(10),
    fontSize: Fonts.size.sminy,
    alignSelf: 'center',
  },
  passcodeText: {
    color: Colors.btnColor,
    fontSize: Fonts.size.f20,
    fontWeight: Fonts.Weight.low,
    paddingBottom: verticalScale(20),
    fontFamily: Fonts.type.montserratMedium,
  },
});

export default styles;
