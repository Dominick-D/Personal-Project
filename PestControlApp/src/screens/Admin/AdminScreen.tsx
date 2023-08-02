import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import UserCard from '../../components/UserCard/UserCard';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import { fetchUsers, fetchProperties } from '../../api';

const AdminScreen = () => {
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    };

    const getProperties = async () => {
      const fetchedProperties = await fetchProperties();
      setProperties(fetchedProperties);
    };

    getUsers();
    getProperties();
  }, []);

  return (
    <View>
      <Text>Admin Screen</Text>
      <Text>Users:</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <UserCard user={item} />}
      />
      <Text>Properties:</Text>
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PropertyCard property={item} />}
      />
    </View>
  );
};

export default AdminScreen;
