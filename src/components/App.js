import "../styles/Global.css";
import Layout from "./Layout";
import Result from "./pages/Result";
//import Quiz from "./pages/Quiz";
//import Login from "./pages/Login";
//import Signup from "./pages/Signup";
//import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="App">
        <Layout>
          {/* <Home /> */}
          {/* <Signup /> */}
          {/* <Login /> */}
          {/* <Quiz /> */}
          <Result />
        </Layout>
      </div>
    </>
  );
}

export default App;
