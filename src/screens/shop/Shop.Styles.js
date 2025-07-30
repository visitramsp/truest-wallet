import { StyleSheet } from "react-native";
import { ApplicationStyle, Colors, Fonts, horizontalScale, verticalScale } from "../../theme";

const styles = StyleSheet.create({
    headerText: {
        color: Colors.black100,
        fontSize: Fonts.size.regularLarge,
        fontFamily: Fonts.type.montserratSemiBold,
        fontWeight: Fonts.Weight.semi,
    },
    salesContainer: {
        ...ApplicationStyle.centerView,
        backgroundColor: Colors.red100,
        marginTop: verticalScale(30),
        padding: verticalScale(50),
        borderRadius: 20,
        color: Colors.white80,
    },
    salesTitle: {
        color: Colors.white80,
        fontSize: Fonts.size.f24,
        fontFamily: Fonts.type.montserratSemiBold,
        fontWeight: Fonts.Weight.semi,
    },
    salesSubTitle: {
        color: Colors.white80,
        fontSize: Fonts.size.medium,
        fontFamily: Fonts.type.montserratMedium,
        fontWeight: Fonts.Weight.medium,
    },
    contentContainerStyle: {
        // gap: verticalScale(1),
    },
    listContainer: {

    },
    boxContainer: {
        marginTop: verticalScale(20),
        marginBottom: verticalScale(80),
    },
    cardListContainer: {
        backgroundColor: Colors.white80,
        height: verticalScale(100),
        shadowColor: Colors.white80,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
        borderRadius: 10,
        ...ApplicationStyle.rowAlignCenterJustifyBetween,
        overflow: "hidden",

    },
    img: {
        width: "45%",
        height: "100%",


    },
    categoryTitle: {
        color: Colors.black100,
        paddingLeft:horizontalScale(10),
        fontSize: Fonts.size.regularLarge,
        fontFamily: Fonts.type.montserratSemiBold,
        fontWeight: Fonts.Weight.seven,
    }
})
export default styles;