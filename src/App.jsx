import { Outlet } from "react-router";
import Layout from "./layouts/layout";


const App = () => {
  return (
    <Layout>

      <Outlet />  

    </Layout>
  );
};

export default App;