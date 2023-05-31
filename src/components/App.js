import "../styles/Global.css";
import Layout from "./Layout";
import Login from "./pages/Login";
//import Signup from "./pages/Signup";
//import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="App">
        <Layout>
          {/* <Home /> */}
          {/* <Signup /> */}
          <Login />
        </Layout>
      </div>
    </>
  );
}

export default App;
