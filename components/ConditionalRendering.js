/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import AdminTabBottomNavigation from './Admin/AdminTabBottomNavigation';
import MemberTabBottomNavigation from './Member/MemberTabBottomNavigation';
import {useSelector} from 'react-redux';

const ConditionalRendering = () => {
  // useHook
  const {userstatus} = useSelector(state => state.statusUser);
  const {role} = userstatus;

  // component
  return (
    <View>
      {userstatus === null ? (
        <Text>Pastikan Anda memilih Role Anda</Text>
      ) : role === 'admin' ? (
        <AdminTabBottomNavigation />
      ) : role === 'anggota' ? (
        <MemberTabBottomNavigation />
      ) : (
        <Text>Kesalahan</Text>
      )}
    </View>
  );
};

export default ConditionalRendering;
