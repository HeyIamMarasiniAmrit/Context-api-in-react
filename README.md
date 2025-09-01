# React + Vite
Context API in React - Login Demo

A simple React application demonstrating the use of Context API for state management, built with Vite. This project features a basic login system that updates a welcome message based on user input.

Demo

Try it live: [Insert Demo Link Here]
(Username: amrit, Password: mgh to see "Welcome amrit")

Features

Uses React Context API to manage global auth state.

Implements a basic login form with username and password inputs.
Updates a welcome message upon successful login (demo purposes).

Built with Vite for fast development and build times.

Technologies Used

React: For building the user interface.
Context API: For state management.

Vite: As the build tool and development server.

HTML/CSS/JavaScript: Core web technologies.

Installation


Navigate to the project directory:

cd context-api-login-demo



Install dependencies:

npm install



Start the development server:

npm run dev

Open your browser and visit http://localhost:5173 (or the port shown in the terminal).

Usage

Enter amrit as the username and mgh as the password.

Click "Submit" to see the welcome message update to "Welcome amrit".

Explore the code to see how Context API handles the state.

Project Structure

context-api-login-demo/
├── public/          # Static assets
├── src/             # Source code
│   ├── components/  # React components
│   ├── context/     # Context API setup
│   ├── App.jsx      # Main app component
│   └── main.jsx     # Entry point
├── package.json     # Project dependencies
└── README.md        # This file

Contributing

Feel free to fork this repository, submit issues, or create pull requests. Suggestions for enhancements (e.g., real authentication, error handling) are welcome!

License

This project is open-source under the MIT License.

Contact

For questions or feedback, reach out to amritmaraasi163@gmai.com

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
