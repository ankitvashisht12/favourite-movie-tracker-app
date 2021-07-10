import BottomTab from "./components/BottomTab";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div className="flex flex-col mx-4">
      <Header />
      <Main />
      <BottomTab />
    </div>
  );
}

export default App;
