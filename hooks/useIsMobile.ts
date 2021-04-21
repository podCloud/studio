import { useWindowDimensions } from "react-native";

export const useIsMobile = (): boolean => {
  const dimensions = useWindowDimensions();

  return dimensions.width <= 768;
};

export default useIsMobile;
