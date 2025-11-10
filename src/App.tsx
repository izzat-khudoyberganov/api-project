import "./App.css";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Button variant={"default"} size={"lg"}>
        hii
      </Button>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </>
  );
}

export default App;
