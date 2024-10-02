# Quicksell Frontend Assignment

## Overview

This Kanban board application, built using React JS, allows users to manage and organize tickets effectively. It interacts with a RESTful API to fetch ticket data and provides dynamic grouping and sorting options to enhance user experience. The application is designed to be responsive and visually appealing.

## API Endpoint

The application communicates with the following API to fetch data:

- **API URL**: [https://api.quicksell.co/v1/internal/frontend-assignment](https://api.quicksell.co/v1/internal/frontend-assignment)

### API Response Structure

The API response contains the following fields:

- **tickets**: An array of ticket objects.
  - Each ticket object includes:
    - `id`: Unique identifier for the ticket.
    - `title`: Title of the ticket.
    - `status`: Current status of the ticket (e.g., Backlog, Todo, In progress, Done, Canceled).
    - `priority`: Priority level of the ticket (0 - No priority, 1 - Low, 2 - Medium, 3 - High, 4 - Urgent).
    - `tag`: Array of tags associated with the ticket.
- **users**: An array of user objects.
  - Each user object includes:
    - `id`: Unique identifier for the user.
    - `name`: Name of the user.
    - `available`: Availability status of the user.

## Application Features

### Grouping Options

Users can group tickets in three distinct ways:

1. **By Status**: Tickets are organized based on their current status.
2. **By User**: Tickets are arranged according to the assigned user.
3. **By Priority**: Tickets are grouped according to their priority level.

### Sorting Options

Users can sort the displayed tickets in two ways:

1. **Priority**: Tickets are sorted in descending order of priority.
2. **Title**: Tickets are sorted in ascending order based on their title.

### User State Persistence

The application saves the user's view state (grouping and ordering preferences) even after a page reload using `localStorage`.

## Design Requirements

The Kanban board should be visually appealing and responsive. The design must not use any CSS frameworks (like Bootstrap, Tailwind, etc.) or libraries for styling. All styles must be written in pure CSS.

## Assets

The assets for the project can be downloaded from the following link:

- [Assets ZIP File](https://prod-files-secure.s3.us-west-2.amazonaws.com/867c6222-5e73-49fb-b21f-a276ba2d258b/76bcb3fe-d025-4ad4-9247-e38c2935b859/Untitled.zip)

## Project Structure

The project is structured as follows:

/kanban-board |-- /public | |-- index.html |-- /src | |-- /components | | |-- Header.js | | |-- Grid.js | | |-- Card.js | | |-- Loader.js | | |-- Dropdowns | | |-- DisplayDropdown.js | |-- /utils | | |-- helper.js | | |-- loadGrid.js | | |-- mapUsersByUserId.js | |-- App.js | |-- App.css | |-- index.js

bash
Copy code


## Setup Instructions

1. **Clone the Repository**: 
   Clone the repository to your local machine using the following command:
   ```bash
     git clone <repository-url>
   ```
2. **Navigate to the Project Directory**:
   ```bash
     cd kanban-board
   ```
3. **Install Dependencies**: If you are using any packages, ensure they are installed. Use the command:
   ```bash
     npm install
   ```
4. **Run the Application**: Start the application with:
   ```bash
     npm start
   ```
5. **Open the Application**: Open your browser and navigate to ```http://localhost:3000``` to view the application.

## Code Snippets
```javascript
useEffect(() => {
    fetch(GET_TICKETS_URL)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(`HTTP error! status: ${resp.status}`);
            }
            return resp.json();
        })
        .then(res => {
            const { tickets, users } = res;
            setTickets(tickets);
            setUserData(mapUsersByUserId(users));
        })
        .catch(err => console.error('Error fetching data:', err));
}, []);
```

Example: Grouping Tickets
```javascript
const loadGrid = (tickets, grouping, ordering) => {
    // Logic to group tickets based on the selected criteria
};

```
Example: User Preferences in Local Storage
```javascript
const saveSettings = useCallback((data) => {
    for (let key in data) localStorage.setItem(key, data[key]);
}, []);

```
## Conclusion

This README serves as a comprehensive overview of the Kanban board application developed using React JS. The application enables users to efficiently manage and organize tickets, offering dynamic grouping and sorting functionalities. It is designed to be visually appealing and responsive, adhering to the requirement of using only pure CSS for styling, without reliance on external libraries or frameworks.

For any further inquiries or clarifications, please feel free to reach out.

