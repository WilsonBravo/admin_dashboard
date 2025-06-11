import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { Bounce, ToastContainer } from "react-toastify";

import { RouterOutlet } from "@/common/components/components";
import { store } from "@/modules/store/store";

import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <RouterOutlet />
      <ToastContainer
        className="toast-notification"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </StoreProvider>
  );
};

export { App };
