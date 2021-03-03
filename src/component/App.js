import react from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

function createNotes(noteItem) {
  return <Note title={noteItem.title} content={noteItem.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {/* <Note title="This is note" content="This is content" /> */}
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}
export default App;
