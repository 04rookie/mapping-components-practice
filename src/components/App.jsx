import React from "react";
import emojipedia from "./../emojipedia";
import Emoji from "./Emoji";
function pushContent(content) {
  return (
    <Emoji
      key={content.id}
      emoji={content.emoji}
      name={content.name}
      meaning={content.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(pushContent)}</dl>
    </div>
  );
}

export default App;
