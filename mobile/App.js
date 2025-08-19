import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems:'center', justifyContent:'center', gap: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>AdGuard 360 📱</Text>
      <Button title="Report Billboard" onPress={() => Alert.alert("Open Camera (placeholder)")} />
    </View>
  );
}
