interface QuoteParams {
    propertyValue: number;
    serviceCost: number;
    locationMultiplier: number;
    zipCodeMultiplier: number;
  }
  
  const calculateQuote = ({ propertyValue, serviceCost, locationMultiplier, zipCodeMultiplier }: QuoteParams) => {
    const quote = propertyValue * serviceCost * locationMultiplier * zipCodeMultiplier;
    return quote;
  };
  
  export default calculateQuote;
  