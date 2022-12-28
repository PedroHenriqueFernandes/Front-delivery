import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { HomeClient } from "./pages/HomeClient/HomeClient";
import { HomeDeliveryman } from "./pages/HomeDeliveryman/HomeDeliveryman";
import { LoginClient } from "./pages/LoginClient/LoginClient";
import { LoginDeliveryman } from "./pages/LoginDeliveryman/Login";

export function Router() {
    return (
      <Routes>
        <Route path="/" >
          <Route path="/" element={<LoginDeliveryman />} />
          <Route path="/loginclient" element={<LoginClient />} />
          <Route path="/homedeliveryman" element={<HomeDeliveryman />} />
          <Route path="/homeclient" element={<HomeClient />} />
        </Route>
      </Routes>
    );
  }