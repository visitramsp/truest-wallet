import { StyleSheet } from "react-native";
import { horizontalScale } from "./Matrics";

const ApplicationStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: horizontalScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  dNone: {
    display: 'none'
  },
  productFieldDisable: {
    opacity: 0.3
  },
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowAlignCenterJustifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rowJustifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  centerView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  flexWrap: {
    flexWrap: 'wrap'
  },
  borderTransparent: {
    borderColor: 'transparent'
  },
  textCenter: {
    textAlign: 'center'
  },
  overFlowHidden: {
    overflow: 'hidden'
  },
  flexGrow: {
    flexGrow: 1
  },
  flexGrow0: {
    flexGrow: 0
  }
})

export default ApplicationStyle