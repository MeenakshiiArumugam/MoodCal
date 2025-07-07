
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import "./App.css";

const moodEmojis = ["😄", "😢", "😠", "😴", "🤩", "😐"];

function App() {
  const [date, setDate] = useState(new Date());
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedColor, setSelectedColor] = useState("#fce1ff");
  const [moods, setMoods] = useState({});

  const formattedDate = (d) => d.toISOString().split("T")[0];

  useEffect(() => {
    axios.get("http://localhost:5000/api/moods")
      .then((res) => setMoods(res.data));
  }, []);

  const handleSaveMood = async () => {
    const dateStr = formattedDate(date);
    const combined = `${selectedMood}|${selectedColor}`;
    await axios.post("http://localhost:5000/api/moods", {
      date: dateStr,
      mood: combined
    });
    setMoods({ ...moods, [dateStr]: combined });
    setSelectedMood("");
    setSelectedColor("#fce1ff");
  };
  
  const handleDeleteMood = async (dateStr) => {
  const confirm = window.confirm(`Delete mood for ${dateStr}?`);
  if (!confirm) return;

  await axios.delete(`http://localhost:5000/api/moods/${dateStr}`);
  const updated = { ...moods };
  delete updated[dateStr];
  setMoods(updated);
};


  const renderTileContent = ({ date }) => {
  const dateStr = formattedDate(date);
  if (moods[dateStr]) {
    const [emoji, color] = moods[dateStr].split("|");

    return (
      <div
        title="Click to delete mood"
        onClick={() => handleDeleteMood(dateStr)}
        style={{
          backgroundColor: color,
          borderRadius: "50%",
          width: "2rem",
          height: "2rem",
          margin: "auto",
          textAlign: "center",
          lineHeight: "2rem",
          cursor: "pointer",
        }}
      >
        {emoji}
      </div>
    );
  }
  return null;
};


  return (
    <div className="container">
      <h2>🌈 My Mood Calendar</h2>

      <Calendar
        onChange={setDate}
        value={date}
        tileContent={renderTileContent}
      />

      <div className="mood-controls">
        <h4>Select Mood Emoji</h4>
        <div className="emoji-buttons">
          {moodEmojis.map((emoji) => (
            <button
              key={emoji}
              onClick={() => setSelectedMood(emoji)}
              className={selectedMood === emoji ? "selected" : ""}
            >
              {emoji}
            </button>
          ))}
        </div>

        <h4>Pick Background Color</h4>
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        /><br></br>

        <button className="save-btn" onClick={handleSaveMood}>Save Mood</button>
      </div>
    </div>
  );
}

export default App;
