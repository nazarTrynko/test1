import React from "react";

import FormBuilder from "./components/FormBuilder";
import { config } from "./config";
import { Container } from "./styled";

function App(): JSX.Element {
  return (
    <Container>
      <FormBuilder config={config} />
    </Container>
  );
}

export default App;
