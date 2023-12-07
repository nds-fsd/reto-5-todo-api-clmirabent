let { todos } = require("../data/index");
const uuid = require("uuid")

const getAll = (req, res) => {
    res.json(todos);
};

const create = (req, res) => {
    const { text, fecha, done } = req.body;
    const newTodo = {
        id: uuid.v4(),
        text,
        fecha,
        done,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
};

const getById = (req, res) => {
    const todoId = req.params.id;
    const foundTodo = todos.find((todo) => todo.id === todoId);

    if (foundTodo) {
        res.json(foundTodo);
    } else {
        res.status(404).json({ error: "Todo not found" });
    }
};

const update = (req, res) => {
    const todoId = req.params.id;
    const foundTodo = todos.find((todo) => todo.id === todoId);

    if (foundTodo) {
        const { text, fecha, done } = req.body;
        foundTodo.text = text ?? foundTodo.text;
        foundTodo.fecha = fecha ?? foundTodo.fecha;
        foundTodo.done = done ?? foundTodo.done;
        res.json(foundTodo);
    } else {
        res.status(404).json({ error: "Todo not found" });
    }
};

const removeById = (req, res) => {
    const todoId = req.params.id;
    todos = todos.filter((todo) => todo.id !== todoId);

    res.status(204).send();
};

module.exports = {
    getAll,
    create,
    getById,
    update,
    removeById,
}