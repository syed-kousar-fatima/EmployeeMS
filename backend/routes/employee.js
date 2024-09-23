const express = require('express');
const db = require('../db');
const router = express.Router();

// List of employees
router.get('/', (req, res) => {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Add employee
router.post('/', (req, res) => {
    const { name, salary, designation, date_of_joining, role_id } = req.body;
    db.query('INSERT INTO employees (name, salary, designation, date_of_joining, role_id) VALUES (?, ?, ?, ?, ?)', 
    [name, salary, designation, date_of_joining, role_id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true });
    });
});

// Update employee
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, salary, designation, date_of_joining } = req.body;

    db.query('UPDATE employees SET name=?, salary=?, designation=?, date_of_joining=? WHERE employeeid=?', 
    [name, salary, designation, date_of_joining, id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true });
    });
});

// Delete employee
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM employees WHERE employeeid=?', [id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true });
    });
});

module.exports = router;