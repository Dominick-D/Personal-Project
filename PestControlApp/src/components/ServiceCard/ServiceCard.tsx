import React from 'react';
import { Card } from 'react-native-elements';

interface Service {
  id: number;
  name: string;
  // Add other service attributes here
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card>
      <Card.Title>{service.name}</Card.Title>
      <Card.Divider/>
      {/* Add more service details here */}
    </Card>
  );
};

export default ServiceCard;
