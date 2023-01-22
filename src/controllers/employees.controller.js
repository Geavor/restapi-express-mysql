import { pool } from '../db.js';

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM employee');
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [
      req.params.id,
    ]);
    rows.length > 0
      ? res.json(rows[0])
      : res.status(404).json({ message: 'Employee not found' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  try {
    const [rows] = await pool.query(
      'INSERT INTO employee (name, salary) VALUES (?, ?)',
      [name, salary]
    );
    res.send({ id: rows.insertId, name, salary });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({ message: 'Employee not found' });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

export const updateEmployee = async (req, res) => {
  const { name, salary } = req.body;
  const { id } = req.params;
  try {
    const [result] = await pool.query(
      'UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?',
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Employee not found' });

    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', id);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};
