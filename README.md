# To Do List

A simple and interactive To Do List application that allows users to add, mark as completed, and delete tasks. The tasks are stored in the browser's localStorage, so they persist even after the page is refreshed.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Persistent storage using localStorage

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites

- A modern web browser

### Installation

1. Clone the repository or download the ZIP file.
2. Extract the files to a directory on your computer.

### Usage

1. Open the `index.html` file in your web browser.
2. Enter a task in the input field and click the "Submit" button to add it to the list.
3. Click the check icon next to a task to mark it as completed.
4. Click the trash icon next to a task to delete it from the list.

## File Structure

```
to-do_list/
│
├── favicon/
│   └── clipboard.png
├── index.html
├── script.js
├── style.css
└── README.md
```

## Code Overview

### HTML (`index.html`)

- Contains the structure of the To Do List application.
- Includes links to external fonts, icons, and the CSS stylesheet.
- Contains the input section for adding tasks and the output section for displaying tasks.

### CSS (`style.css`)

- Defines the styles for the To Do List application.
- Includes general styles, input section styles, output section styles, and responsive styles for smaller screens.

### JavaScript (`script.js`)

- Handles the functionality of the To Do List application.
- Retrieves and stores tasks in localStorage.
- Adds new tasks, marks tasks as completed, and deletes tasks.
- Updates the display of tasks based on their status.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/)
