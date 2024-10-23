const express = require("express");
const path = require("path");

const app = express();

app.get("/file/:id", (req, res) => {
  const docId = req.params.id;

  const mockedDocData = [
    { id: 1, path: "Image.png" },
    { id: 2, path: "Image1.png" },
    { id: 3, path: "hind-aarab.txt" },
    { id: 4, path: "houda-mesbahi.txt" },
    { id: 5, path: "youssef-zaz.txt" },
  ];

  // Find the document by id
  const user = mockedDocData.filter((f) => f.id == docId);

  // Check if the document exists
  if (user.length === 0) {
    return res.status(404).send({ error: "File not found" });
  }

  // Get the file path and serve the file
  const filePath = path.join(__dirname, "dom", user[0].path); // Adjust the folder name 'dom'

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).send({ error: "File could not be served" });
    }
  });
});

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
