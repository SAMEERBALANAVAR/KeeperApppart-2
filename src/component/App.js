import react from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

console.log(notes);

function App() {
  return (
    <div>
      <Header />
      <Note title="This is note" content="This is content" />
      <Footer />
    </div>
  );
}
export default App;
