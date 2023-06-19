# Take-home Test: SaaS Platform Login & Dashboard

This is a take-home test project for building a simple login and dashboard screen for a SaaS platform targeting small FMCG (Fast-Moving Consumer Goods) brands. The project utilizes React, Vite, Vitest, React Router DOM, Tailwind, and Jotai technologies. The application is built with TypeScript to ensure type safety and reliability.

## Requirements

- The application should be responsive and optimized for both desktop and mobile devices.
- It should be built using React and TypeScript.
- Implement error handling for incorrect login details.
- The login details to access the dashboard are hard-coded in an environment variables.

## Project Structure

The project follows a common directory structure for a React application. Here is a brief overview:

- `/public`: Contains the public assets and the HTML template file.
- `/src`: Contains the source code of the application.
  - `/atoms`: Contains the Jotai atoms for state management.
  - `/components`: Contains reusable components used throughout the application.
  - `/pages`: Contains the login and dashboard screens.
  - `/assets`: Contains the static assets, like images.
  - `/hooks`: Contains the custom hooks of the application.
  - `/config`: Contains the configuration files for the application.
  - `/utils`: Contains utility functions.
  - `App.tsx`: The main entry point of the application.
- `vite.config.ts`: Configuration file for the Vite build tool.
- `tsconfig.json`: TypeScript configuration file.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/sammarxz/friendly-octo-carnival/tree/main`
2. Navigate to the project directory: `cd friendly-octo-carnival`
3. Install dependencies: `npm install` ou `yarn`
4. Start the development server: `npm run dev` or `yarn dev`
5. Open your browser and access the application at [http://localhost:5173](http://localhost:5173/)

## Assumptions and Decisions

1. **React**: React is chosen as the main framework for building the application due to its component-based architecture and large community support.
2. **Vite**: Vite is chosen as the build tool for its fast development server and optimized build process, which helps in improving productivity.
3. **Vitest**: Vitest is used for unit testing the components to ensure their functionality and behavior.
4. **React Router DOM**: React Router DOM is used for handling routing in the application, allowing navigation between the login and dashboard screens.
5. **Tailwind**: Tailwind CSS is used as the utility-first CSS framework to quickly style the components and create a responsive layout.
6. **Jotai**: Jotai is used for state management, providing a simple and efficient way to manage and share application state.
6. **Rome**: As a replacement for eslint + prettier

## Improvements and Next Steps

This project is a basic implementation of the login and dashboard screens for the SaaS platform. Here are some potential improvements and next steps to consider:

- [ ] style the application using tailwind
- [ ] Add more unit tests to cover all the login page.
- [ ] Implement atomic design system
- [ ] Meybe, improve the architecture

## Conclusion

In this project I had the privilege of getting to know and testing new technologies such as Jotai itself and its atomic state management style and the use of Rome as a replacement written in Rust for Eslint + prettier.


Enjoy coding!
