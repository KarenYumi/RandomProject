import { useEffect } from "react";
import { useNavigation } from "react-router-dom";

const ScrollToTop = () => {
  const navigation = useNavigation(); //Monitora mudanças de rota

  useEffect(() => {
    if (navigation.state === "idle") {
      window.scrollTo(0, 0); // Rola para o topo quando a navegação está completa
    }
  }, [navigation.state]);

  return null;
};

export default ScrollToTop;
