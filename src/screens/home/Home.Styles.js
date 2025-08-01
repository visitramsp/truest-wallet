import {StyleSheet} from 'react-native';
import {
  Colors,
  Fonts,
  horizontalScale,
  verticalScale,
  width,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    paddingTop: 30,
  },
  scrollContent: {
    paddingBottom: verticalScale(100),
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: verticalScale(20),
    marginBottom: verticalScale(30),
  },
  mainWalletText: {
    fontSize: Fonts.size.regularLarge,
    fontFamily: Fonts.type.montserratRegular,
    fontWeight: Fonts.Weight.bold,
    color: Colors.black100,
  },

  containerMiddle: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  balanceContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  balance: {
    fontSize: Fonts.size.h1,
    fontWeight: '700',
    color: Colors.blue100,
  },
  subBalance: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '40%',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  label: {
    color: Colors.gray100,
    fontSize: 12,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    paddingBottom: verticalScale(5),
    borderColor: Colors.gray50,
    position: 'relative',
    marginBottom: verticalScale(20),
  },
  tabView: {
    paddingBottom: verticalScale(5),

    position: 'relative',
    top: 5,
    width: width - horizontalScale(220),
  },
  activeTab: {
    borderBottomWidth: 1,
    borderColor: Colors.blue100,
  },
  tabText: {
    fontSize: Fonts.size.uprSemi,
    fontFamily: Fonts.type.montserratRegular,
    fontWeight: Fonts.Weight.bold,
    color: Colors.gray90,
    textAlign: 'center',
  },
  activeText: {
    color: Colors.blue100,
  },
});

export default styles;
