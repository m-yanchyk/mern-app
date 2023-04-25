import React, { Suspense, memo } from "react";
import Spinner from "./Spinner";
import Error from "./Error";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

const Content = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        {routes.map((route, i) => {
          return (
            route.component && (
              <Route
                key={i}
                path={route.path}
                element={<route.component title={route.title} />}
              />
            )
          );
        })}
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
};

export default memo(Content);
