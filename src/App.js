import "./App.scss";
import { lazy, Suspense } from "react";
const Example = lazy(() => import("./components/ReduxExample/Example"));

function App() {
  const renderLoader = () => <div>Loading ...</div>;

  return (
    <Suspense fallback={renderLoader()}>
      <Example heading="Redux Example" />
    </Suspense>
  );
}

export default App;
