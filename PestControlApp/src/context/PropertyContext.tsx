import React, { createContext, useState } from 'react';

interface Property {
  id: number;
  locationNumber: string;
  type: 'Residential' | 'Commercial';
  squareFootage: number;
  lotSize: number;
  estimatedSalePrice: number;
  zipCode: string;
}

interface PropertyContextProps {
  property: Property | null;
  setProperty: React.Dispatch<React.SetStateAction<Property | null>>;
}

export const PropertyContext = createContext<PropertyContextProps | undefined>(undefined);

export const PropertyProvider: React.FC = ({ children }) => {
  const [property, setProperty] = useState<Property | null>(null);

  return (
    <PropertyContext.Provider value={{ property, setProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};
