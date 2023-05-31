import "../styles/Global.css";
import Layout from "./Layout";
import Signup from "./pages/Signup";
//import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="App">
        <Layout>
          {/* <Home /> */}
          <Signup />
        </Layout>
      </div>
    </>
  );
}

export default App;
