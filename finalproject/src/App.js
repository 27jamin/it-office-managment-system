import UserContext from "./component/AccountContext";
import ToggleColorMode from "./component/ToggleColorMode";
import Views from "./component/views";

function App() {
  return (
      <UserContext>
        <Views />
        <ToggleColorMode />
      </UserContext>
  );
}

export default App;
