import React, { Suspense, memo } from "react";
import Spinner from "./Spinner";
import routes from "./routes";
import { Route, Routes } from "react-router-dom";
import Error from "./Error";

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
