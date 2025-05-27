const app = require('./routes/ai.js'); // ✅ BENAR

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running — use https://your-app-name.onrender.com`);
});
