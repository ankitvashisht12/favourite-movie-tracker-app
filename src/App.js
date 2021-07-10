import BottomTab from "./components/BottomTab";
import Header from "./components/Header";
import Main from "./pages/Main";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import LikedMoviesContextProvider from "./context/MoviesContext";

const queryClient = new QueryClient();

function App() {
  return (
    <LikedMoviesContextProvider>
      <Router>
        <div className="flex flex-col mx-4">
          <Header />
          <QueryClientProvider client={queryClient}>
            <Main />
          </QueryClientProvider>
          <BottomTab />
        </div>
      </Router>
    </LikedMoviesContextProvider>
  );
}

export default App;
