import "./App.css";
import { UserStorage } from "./context/GlobalContext";
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <UserStorage>
        <Router />
      </UserStorage>
    </div>
  );
}

export default App;
