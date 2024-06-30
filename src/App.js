import { useState } from "react";
import { TextInput } from "./components/TextInput.jsx";
import { Preview } from "./components/Preview.jsx";
import "../src/styles.css";

export default function App() {
  const [markdown, setMarkdown] = useState("");

  const handleInputChange = (e) => {
    //
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Markdown Previewer</h1>
      </header>
      <main>
        <section className="input-section">
          <TextInput
            markdown={markdown}
            handleInputChange={handleInputChange}
          />
        </section>
        <section className="preview-section">
          <Preview />
        </section>
      </main>
    </div>
  );
}
