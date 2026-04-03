const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(bodyParser.json());

// check-in
app.post("/check-in", (req, res) => {
  const { employee_id } = req.body;

  db.query(
    "SELECT * FROM attendance WHERE employee_id=? AND check_out IS NULL",
    [employee_id],
    (err, result) => {
      if (result.length > 0) {
        return res.send("You are already checked in");
      }

      db.query(
        "INSERT INTO attendance (employee_id, check_in) VALUES (?, NOW())",
        [employee_id],
        () => res.send("Check-in successful")
      );
    }
  );
});

// check-out
app.post("/check-out", (req, res) => {
  const { employee_id } = req.body;

  db.query(
    "UPDATE attendance SET check_out=NOW() WHERE employee_id=? AND check_out IS NULL",
    [employee_id],
    (err, result) => {
      if (result.affectedRows === 0) {
        return res.send("No active check-in found");
      }
      res.send("Check-out successful");
    }
  );
});

// Apply leave
app.post("/leave/apply", (req, res) => {
  const { employee_id, start_date, end_date } = req.body;

  db.query(
    `SELECT * FROM leaves WHERE employee_id=? 
     AND (start_date <= ? AND end_date >= ?)`,
    [employee_id, end_date, start_date],
    (err, result) => {
      if (result.length > 0) {
        return res.send("You already have leave in this period");
      }

      db.query(
        "INSERT INTO leaves (employee_id, start_date, end_date) VALUES (?,?,?)",
        [employee_id, start_date, end_date],
        () => res.send("Leave request submitted ")
      );
    }
  );
});

// Approve / Reject leave
app.post("/leave/approve", (req, res) => {
  const { leave_id, status } = req.body;

  db.query(
    "UPDATE leaves SET status=? WHERE id=?",
    [status, leave_id],
    () => res.send(Leave ${status} )
  );
});

// Get attendance
app.get("/attendance/:employee_id", (req, res) => {
  db.query(
    "SELECT * FROM attendance WHERE employee_id=?",
    [req.params.employee_id],
    (err, result) => res.json(result)
  );
});

// Get leaves
app.get("/leaves/:employee_id", (req, res) => {
  db.query(
    "SELECT * FROM leaves WHERE employee_id=?",
    [req.params.employee_id],
    (err, result) => res.json(result)
  );
});

app.listen(3000, () => console.log("Server running on port 3000"));