import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  ApplicationStyle,
  Colors,
  Fonts,
  horizontalScale,
  verticalScale,
} from '../../theme';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Feather';

const walletAddress = '0x5b18...441d';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(15),
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: verticalScale(5),
  },
  accountBox: {
    borderRadius: 10,
    padding: 14,
    ...ApplicationStyle.rowAlignCenterJustifyBetween,
    borderWidth: 1,
    borderColor: Colors.gray100,
  },
  accountTitle: {
    color: Colors.black100,
    fontSize: Fonts.size.regular,
    fontWeight: Fonts.Weight.medium,
  },


  container1: {
    backgroundColor: "transparent",
    height: '110%',
    flexDirection: "column",
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
    continueBtn: {
    flex: 1,
    padding: 10,
    // height:20,
    borderRadius: 10,
    marginLeft: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.btnColor,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginBottom: 24,
  },
  qrContainer: {
    borderWidth: 2,
    borderColor: Colors.gray50,
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  subText: {
    fontSize: 14,
    color: Colors.gray70,
    marginTop: 12,
    marginBottom: 24,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  addressText: {
    fontSize: 16,
    color: Colors.gray90,
    marginRight: 12,
  },
  iconButton: {
    marginLeft: 8,
  },

})