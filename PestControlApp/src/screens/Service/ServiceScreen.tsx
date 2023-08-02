import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { fetchServices } from '../../api';

const ServiceScreen = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const fetchedServices = await fetchServices();
      setServices(fetchedServices);
    };

    getServices();
  }, []);

  return (
    <View>
      <Text>Service Screen</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ServiceCard service={item} />}
      />
    </View>
  );
};

export default ServiceScreen;
