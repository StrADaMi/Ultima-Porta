import Router from "./components/Router";
import { withAxiosIntercepted } from "./hooks/withAxiosIntercepted";
import './styles.css';
import { AppContainer } from "./App.styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DrawerContextProvider } from "./context/DrawerContext";
import { UserContextProvider } from "./context/UserContext";
import './background.css';

function App() {

  return (
    <AppContainer>
      <UserContextProvider>
        <DrawerContextProvider>
          <Router />
          <ToastContainer />
        </DrawerContextProvider>
      </UserContextProvider>     
    </AppContainer>
     
  );
}

export default withAxiosIntercepted(App)
