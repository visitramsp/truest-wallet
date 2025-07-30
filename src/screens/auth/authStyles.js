import { StyleSheet } from "react-native";
import { ApplicationStyle, Colors, Fonts } from "../../theme";
import { height, verticalScale } from "../../theme/Matrics";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    goBack: {
        fontSize: 20,
        margin: 10,
        color: Colors.black100
    },
    title: {
        fontSize: Fonts.size.h2,
        fontWeight: Fonts.Weight.bold,
        marginBottom: 20,
        marginTop: verticalScale(20),
    },
    emailTitle: {
        fontSize: Fonts.size.medium,
        fontWeight: Fonts.Weight.medium,
        marginBottom: 20,
        marginTop: verticalScale(20),
        color: Colors.black100
    },
    middleContainer: {
        flex: 1,
        ...ApplicationStyle.justifyCenter,
        gap: 10,
        height: height - 120,
    },
    alreadyView: {
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%",
        marginTop: verticalScale(5),
        gap: 10,
        alignItems: "center",
    },
    alreadyText: {
        textAlign: "right",
        fontSize: Fonts.size.medium,
        fonftFamily: Fonts.type.montserratMedium,
        fontWeight: Fonts.Weight.medium,
        color: Colors.black100,
    },
    socialMediaContainer: {
        flexDirection: "column",
        ...ApplicationStyle.centerView,
        gap: 10,
        marginTop: verticalScale(70),
    },
     iconsContainer: {
        ...ApplicationStyle.rowAlignCenterJustifyBetween,
        gap: 30,
        marginTop: verticalScale(10),
    },
    iconsView: {
        ...ApplicationStyle.centerView,
        backgroundColor: Colors.white80,
        padding: 15,
        borderRadius:15,
        
    },
    socialMediaText:{
        fontSize: Fonts.size.medium,
        fontWeight: Fonts.Weight.medium,
        color: Colors.black100,
        fontFamily: Fonts.type.montserratMedium,
    }
})

export default styles