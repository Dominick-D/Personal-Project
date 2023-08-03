const calculateQuote = ({ propertyValue, serviceCost, locationMultiplier, zipCodeMultiplier }) => {
    const quote = propertyValue * serviceCost * locationMultiplier * zipCodeMultiplier;
    return quote;
  };
  
  export default calculateQuote;
  