import React, { useEffect } from "react";
import "./App.css";
import Routing from "./Routing";
import { Type } from "./Utility/action.type";
import { auth } from "./Utility/firebase";
import { useContext } from "react";
import { DataContext } from "./Components/DataProvider/DataProvider";
function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
  }, []);
  return <Routing />;
}
export default App;
