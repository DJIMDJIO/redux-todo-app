import PageTitle from "./components/PageTitle";
import styles from "./styles/modules/app.module.scss";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="container">
      <PageTitle>Todo list</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
        <AppContent></AppContent>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      ></Toaster>
    </div>
  );
}

export default App;
