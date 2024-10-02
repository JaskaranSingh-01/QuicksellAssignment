// Ticket constructor function
function Ticket(id, title, tag, userId, status, priority) {
    this.id = id;
    this.title = title;
    this.tag = tag; // This should be an array of strings
    this.userId = userId;
    this.status = status;
    this.priority = priority; // This should be a number
}

// User constructor function
function User(id, name, available) {
    this.id = id;
    this.name = name;
    this.available = available; // This should be a boolean
}

// Example usage
const ticket1 = new Ticket("1", "Fix Bug", ["bug", "urgent"], "user1", "open", 1);
const user1 = new User("user1", "Alice", true);

// Utility functions or objects can be used for UserIdToData representation
const UserIdToData = {
    userData: {
        user1: user1, // Example of how to store user data by user ID
        user2: new User("user2", "Bob", false),
    },
};

// Example of how to create an array of Tickets for a column
const Col = {
    col: [ticket1, new Ticket("2", "Add Feature", ["feature"], "user2", "in progress", 2)],
};

// Exporting the functions if you are using a module system
export { Ticket, User, Col, UserIdToData };
