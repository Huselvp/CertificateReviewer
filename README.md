# File Serving Express App

This is a simple Node.js application built with Express.js. It allows users to retrieve files based on their ID using an HTTP GET request.

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 12.x or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Project Setup

1. Clone the repository or download the project files.
2. Install the required dependencies by running:

   ```bash
   npm install
   
### Notes:
- Ensure that you have a folder named `dom` containing the files specified in `mockedDocData` (`Image.png`, `Image1.png`, `hind-aarab.txt`, etc.).
- You can customize the `README.md` based on your project requirements or add further details if necessary.


how to run : node app.js
exemple request : GET http://localhost:5050/file/1
API Endpoints
GET /file/
Retrieves a file based on its ID.

Parameters:
id (path parameter): The ID of the file you want to retrieve.
GET /file/1
