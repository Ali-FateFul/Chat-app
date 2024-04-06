import { Switch , Route } from "react-router-dom";

// Components
import Login from "./Components/Login";
import Chats from "./Components/Chats";

// Contexts
import AuthContextProvider from "./Contexts/AuthContextProvider";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Switch>
          <Route path="/chats" component={Chats} />
          <Route path="/" component={Login} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
