# SocialVibe

SocialVibe is a simple social media web application built with Express.js to demonstrate how users can create, edit, delete, and view posts in detail. This project showcases basic CRUD (Create, Read, Update, Delete) operations with a clean, minimal design.

## Features

- **Create Posts**: Add new posts with a username and content.
- **Read Posts**: View a list of all posts or the details of a specific post.
- **Update Posts**: Edit existing posts, updating the username or content.
- **Delete Posts**: Remove posts you no longer need.

## Tech Stack

- **Backend**: [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/)
- **Frontend**: [EJS](https://ejs.co/) for templating
- **Styling**: Basic CSS
- **UUID**: For generating unique post IDs
- **Middleware**: `method-override` for handling PUT and DELETE requests in forms

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/socialvibe.git
   cd socialvibe
2. **Install Dependencies Make sure you have Node.js installed. Then, run:**
    ```bash
    npm install
3. **Run the Application Start the server:**
    ```bash
    node index.js
By default, the application runs on `http://localhost:5001`.

4. **Access the App Open your browser and navigate to `http://localhost:5001/posts`.**

## File Structure
    ```arduino
    socialvibe/
    ├── public/
    │   ├── css/
    │   └── js/
    ├── views/
    │   ├── index.ejs
    │   ├── new.ejs
    │   ├── edit.ejs
    │   ├── show.ejs
    ├── index.js
    └── package.json

## Routes

GET /posts: Display all posts
GET /posts/new: Form to create a new post
POST /posts: Add a new post
GET /posts/:id: View details of a single post
GET /posts/:id/edit: Form to edit a post
PATCH /posts/:id: Update a post
DELETE /posts/:id: Delete a post

## Known Issues

None currently. Please open an issue if you find any bugs.

## Contributing
- Fork the repository
- Create a new branch (`git checkout -b feature-name`)
- Commit your changes (`git commit -m 'Add feature'`)
- Push to the branch (`git push origin feature-name`)
- Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by CRUD operations learning projects
- Thanks to the creators of Node.js, Express.js, and EJS for awesome tools!
