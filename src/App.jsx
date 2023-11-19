import { useState } from "react";
import { defaultPerson } from "./assets/defaults";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

export default function App() {
  const [person, setPerson] = useState(defaultPerson);

  return (
    <>
      <h1>CV Maker</h1>
      <Editor person={person} setPerson={setPerson} />
      <Preview person={person} />
    </>
  );
}
