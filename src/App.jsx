import { useState } from "react";
import { defaultPerson } from "./assets/defaults";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import "./styles/App.css";

export default function App() {
  const [person, setPerson] = useState(defaultPerson);

  return (
    <>
      <h1>CV Maker</h1>
      <Editor className="editor" person={person} setPerson={setPerson} />
      <Preview className="preview" person={person} />
    </>
  );
}
