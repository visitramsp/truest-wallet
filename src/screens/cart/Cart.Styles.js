import { StyleSheet } from "react-native";
import { ApplicationStyle, Colors, Fonts, horizontalScale, verticalScale } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(16),
    backgroundColor: Colors.bgColor
  },
  header: {
    ...ApplicationStyle.rowAlignCenterJustifyBetween,
    marginBottom: verticalScale(30),
  },
  headerText: {
    color: Colors.black100,
    fontSize: Fonts.size.h3,
    fontFamily: Fonts.type.montserratBold,
    fontWeight: Fonts.Weight.bold,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    elevation: 0,
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: horizontalScale(70),
    height: verticalScale(70),
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  topRow: {
    ...ApplicationStyle.rowJustifyBetween
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  details: {
    color: '#555',
    fontSize: 12,
    marginTop: 2,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  qtyButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyButtonText: {
    fontSize: 18,
    color:Colors.gray100
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  promoContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginVertical: 16,
  },
  promoInput: {
    flex: 1,
    padding: 12,
  },
  arrowButton: {
    backgroundColor: '#000',
    padding: 12,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  totalText: {
    fontSize: 16,
    color: '#333',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default styles;