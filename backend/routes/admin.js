const express = require('express');
const db = require('../db');
const router = express.Router();

// List of admins
router.get('/', (req, res) => {
    db.query('SELECT * FROM admins', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Add admin
router.post('/', (req, res) => {
    const { name, salary, designation, date_of_joining, role_id } = req.body;
    db.query('INSERT INTO admins (name, salary, designation, date_of_joining, role_id) VALUES (?, ?, ?, ?, ?)', 
    [name, salary, designation, date_of_joining, role_id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true });
    });
});

// Update admin
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, salary, designation, date_of_joining } = req.body;

    db.query('UPDATE admins SET name=?, salary=?, designation=?, date_of_joining=? WHERE adminid=?', 
    [name, salary, designation, date_of_joining, id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true });
    });
});

// Delete admin
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM admins WHERE adminid=?', [id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true });
    });
});

module.exports = router;