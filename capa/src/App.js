import Dashboard from "./components/Dashboard";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: auto;
`;

function App() {
  return (
    <Div>
      <Dashboard />
    </Div>
  );
}

export default App;
