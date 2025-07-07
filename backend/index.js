const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const DATA_FILE = path.join(__dirname, 'moods.json');

app.use(cors());
app.use(express.json());

let moods = {};

try {
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  moods = JSON.parse(data);
  console.log('✅ Moods loaded from file');
} catch (err) {
  console.log('⚠️ No saved moods found. Starting fresh.');
  moods = {};
}

// GET all moods
app.get('/api/moods', (req, res) => {
  res.json(moods);
});

app.post('/api/moods', (req, res) => {
  const { date, mood } = req.body;
  if (!date || !mood) return res.status(400).send("Date & mood required");

  moods[date] = mood;


  fs.writeFile(DATA_FILE, JSON.stringify(moods, null, 2), (err) => {
    if (err) {
      console.error('Error saving moods:', err);
      return res.status(500).send("Could not save mood");
    }
    res.status(201).send("Mood saved");
  });
});


app.delete('/api/moods/:date', (req, res) => {
  const date = req.params.date;
  console.log("🔥 Trying to delete:", date);
  console.log("📦 Current keys in moods:", Object.keys(moods));

  if (moods[date]) {
    delete moods[date];
    fs.writeFile(DATA_FILE, JSON.stringify(moods, null, 2), (err) => {
      if (err) {
        console.error(' Error deleting mood:', err);
        return res.status(500).send("Failed to delete");
      }
      res.send("Mood deleted");
    });
  } else {
    res.status(404).send("No mood for this date");
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
