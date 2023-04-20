import { Suspense } from "react";
import { Helmet } from "react-helmet";
import Spinner from "./components/Layout/Spinner";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Helmet>
        <title>App</title>
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
