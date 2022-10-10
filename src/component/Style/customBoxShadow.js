const customBoxShadow = (elevation) => {
    return {
      elevation,
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 0.5 * elevation },
      shadowOpacity: 0.3,
      shadowRadius: 0.8 * elevation,
    };
  };
  
  export default customBoxShadow;