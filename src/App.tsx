import Button from "./components/common/button/Button.tsx";
import Input from "./components/common/input/Input.tsx";
import { EButtonSize } from "./components/common/button/button.props.ts";

function App() {
  return (
    <>
      <Button size={EButtonSize.medium}>Click me</Button>
      <Button size={EButtonSize.big}>Click me</Button>
      <Input placeholder={"Email"} />
    </>
  );
}

export default App;
