import React from 'react';
import { Card } from 'react-native-elements';

interface Property {
  id: number;
  name: string;
  // Add other property attributes here
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Card>
      <Card.Title>{property.name}</Card.Title>
      <Card.Divider/>
      {/* Add more property details here */}
    </Card>
  );
};

export default PropertyCard;
