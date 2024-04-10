import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import noteRoute from "./routes/notes.route.js";
configDotenv.apply();
const app = express();
app.use(
  cors({
    origin: ["localhost"],
  })
);
const PORT = process.env.PORT || 4321;
app.use(express.json());
app.use("/api/", noteRoute);
app.get("/api", (req, res) => {
  res.send(`
  <html>
      <head>
          <title>Users</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
              }
              table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-bottom: 15px;
              }
              th, td {
                  border: 1px solid #ddd;
                  padding: 8px;
                  text-align: left;
              }
              th {
                  background-color: #f2f2f2;
              }
              a {
                  text-decoration: none;
                  color: #0a16f7;
                  margin: 15px;
              }
          </style>
      </head>
      <body>
          <h1>Users</h1>
          <table>
              <thead>
                  <tr>
                      <th>User ID</th>
                      <th>Name</th>
                      <th>Email</th>
                  </tr>
              </thead>
              <tbody>
                 
              </tbody>
          </table>
          <div>
              <a href="/">Home</a>
              <a href="/uploadUser">Add User</a>
          </div>
      </body>
  </html>`);
});
app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
