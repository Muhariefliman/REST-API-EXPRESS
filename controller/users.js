
let users = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        age: 30
    }
]

export const getUser = (req, res) => {
    res.send(users);
}

export const getUserByID = (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('The user with the given ID was not found.');
    }
    res.send(user);
}

export const addUser = (req, res) => {
    const user = {
        id: users.length + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    };
    users.push(user);
    res.send(user);
}


export const updateUser = (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    console.log(user);
    if (!user) {
        return res.status(404).send('The user with the given ID was not found.');
    }

    const { firstName, lastName, age } = req.body;

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.age = req.body.age;
    res.send(`User with ID: ${req.params.id} was updated.`);
}

export const deleteUser = (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('The user with the given ID was not found.');
    }
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.send(`User with ID: ${req.params.id} was deleted.`);
}