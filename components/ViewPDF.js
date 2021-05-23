/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import PDFView from 'react-native-view-pdf/lib/index';
const ViewPDF = () => {
  const resources = {
    file:
      Platform.OS === 'ios'
        ? 'downloadedDocument.pdf'
        : '/sdcard/Download/downloadedDocument.pdf',
  };
  const resourceType = 'file';
  return (
    <View style={styles.containerInti}>
      {/* Some Controls to change PDF resource */}
      <PDFView
        fadeInDuration={250.0}
        style={styles.container}
        resource={resources[resourceType]}
        resourceType={resourceType}
        onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
        onError={error => console.log('Cannot render PDF', error)}
      />
    </View>
  );
};

export default ViewPDF;

const styles = StyleSheet.create({
  containerInti: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
