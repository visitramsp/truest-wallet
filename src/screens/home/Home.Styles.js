import { StyleSheet } from "react-native";
import { Colors, Fonts, verticalScale } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
  },
  scrollContent: {
    paddingBottom: verticalScale(100),
  },
  imageBackground: {
    width: '100%',
    height: 500,
    justifyContent: 'flex-end',
  },
  content: {
    padding: 10,
    paddingBottom: verticalScale(25),
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Optional dark overlay
  },
  text: {
    fontSize: Fonts.size.h4,
    // width: '40%',
    fontWeight: 'bold',
    color: Colors.white80,
  },
  checkButton:{
    backgroundColor:Colors.red100,
    padding: 10,
    borderRadius: 20,
    width: '40%',
    marginTop:verticalScale(10)
  },
  checkText: {
    fontSize: Fonts.size.tiny, 
    textAlign: 'center',
    fontFamily: Fonts.type.montserratRegular,
    fontWeight: Fonts.Weight.low,
    color: Colors.white80,   
  },
  boxContainer: {
    paddingHorizontal: 16,
    paddingTop: verticalScale(16),
  },
  box: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  boxText: {
    fontSize: 16,
    color: '#333',
  },
  newText: {
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.type.montserratBold,
    fontWeight: Fonts.Weight.bold,
    color: Colors.black100,
  },
  newSubText: {
    fontSize: Fonts.size.tiny,
    fontFamily: Fonts.type.montserratRegular,
    fontWeight: Fonts.Weight.low,
    color: Colors.gray100,
  },
  viewAllText: {
    fontSize: Fonts.size.tiny,
    fontFamily: Fonts.type.montserratRegular,
    fontWeight: Fonts.Weight.low,
    color: Colors.black100,
  }
});

export default styles;
