import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import { fetchProperties } from '../../api';

const PropertyScreen = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      const fetchedProperties = await fetchProperties();
      setProperties(fetchedProperties);
    };

    getProperties();
  }, []);

  return (
    <View>
      <Text>Property Screen</Text>
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PropertyCard property={item} />}
      />
    </View>
  );
};

export default PropertyScreen;
