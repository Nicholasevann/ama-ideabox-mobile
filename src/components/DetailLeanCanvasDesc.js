import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const DetailLeanCanvasDesc = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.h2}>
          CUSTOMER, siapa yang ingin kamu solusikan?*
        </Text>
        <Text style={styles.textnoedit}>Semua Telkom Grup</Text>
        <Text style={styles.h2}>
          PROBLEM, apa problem mereka yang ingin disolusikan?*
        </Text>
        <Text style={styles.textnoedit}>
          laporan keuangan yang berintegritas untuk kuartal 3 2021
        </Text>
        <Text style={styles.h2}>
          EARLY ADOPTER, siapa saja dari target di atas yg bisa kamu gapai
          duluan dalam 3 bln ke depan?*
        </Text>
        <Text style={styles.textnoedit}>
          laporan keuangan yang berintegritas untuk kuartal 3 2021
        </Text>
        <Text style={styles.h2}>
          EXISTING SOLUTION, per hari ini, bagaimana biasanya mereka
          mensolusikan probem-problem itu?*
        </Text>
        <Text style={styles.textnoedit}>
          Integritas Sistem Keuangan hanya formalitas
        </Text>
        <Text style={styles.h2}>
          UNIQUE VALUE, apa yang bikin kamu berbeda dan keren, jadi mereka mau
          pindah ke kamu?*
        </Text>
        <Text style={styles.textnoedit}>
          Perlunya contoh Integritas Sistem Keuangan
        </Text>
        <Text style={styles.h2}>
          PROPOSED SOLUTION, so, jadi apa yang akan/sedang kamu buat agar mereka
          bisa cinta banget sama kamu?*
        </Text>
        <Text style={styles.textnoedit}>
          Perlunya contoh Integritas Sistem Keuangan
        </Text>
      </View>
    </ScrollView>
  );
};

export default DetailLeanCanvasDesc;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  text: {
    color: 'black',
    fontSize: 12,
    marginBottom: 10,
  },
  textnoedit: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#DBDBDB',
    borderColor: '#085D7A',
    marginBottom: 10,
    marginTop: 10,
    color: 'black',
    height: 20,
    fontSize: 12,
    paddingLeft: 7,
    paddingTop: 2,
  },
  h2: {
    fontSize: 14,
    color: '#085D7A',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
});
