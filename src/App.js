import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "../src/styles.css";

export default function App() {
  const [markdown, setMarkdown] = useState("markdown");

  return (
    <div className="app">
      <h1>Markdown Previewer</h1>
      <main className="previewer-container">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <ReactMarkdown children={markdown} className="preview" />
      </main>
    </div>
  );
}
