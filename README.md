# HackDavis Repo Template
Next.js 14.0.0 (App Router) with TypeScript, TailwindCSS and ESLint.

Follow the steps in [Setting Up Your Dev Environment](#setting-up-your-dev-environment) before working with the codebase.

Additionally, there are resources linked under the [Contribution Guide](#contribution-guide) for the tools used in this repo.

## Setting up your Dev Environment

### 1. Node.js
Node.js is a runtime environment that is used to run Javascript code. It comes with the Node Package Manager (npm) that helps us manage the Javascript packages used in our project. To set up node.js:

Download and run the installer for your OS from https://nodejs.org/en/download/current. After the installation, open a terminal and run `node --version` to verify your node installation and `npm --v` to verify your npm installation. You may need to update your Environment Variables and restart your IDE or computer for those commands to work.

**If you already have node:**
Try to update your node version to roughly *v21.1.0* so you don't get random warnings.

### 2. VSCode Extension
Download the ESLint Extension by Microsoft for linting support. The configuration in `.vscode` folder of this repo enables auto-formatting on save and tab sizes.

**(Optional)** Auto Rename Tag - useful for JSX.

< ### 3. Database Setup as needed >

### 4. Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Install all dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Run a linting test:
```bash
npm run lint
```

## Contribution Guide
- [TypeScript documentation](https://www.typescriptlang.org/docs/)
- [React documentation](https://react.dev/)
- [Next.js (App Router) documentation](https://nextjs.org/docs/app)
- [TailwindCSS documentation](https://v2.tailwindcss.com/docs)

## File Structure
To keep this codebase organized and clean, please follow this structure. The template has a bunch of placeholder files to ensure the otherwise empty folders appear on GitHub.

#### `app` directory 
Holds all the source code and is organized into 
- `(api)`: backend
    - `_actions`: for server actions
    - `_data`: for JSON files
    - `_utils`: for utility functions
    - `api`: for api endpoints
- `(pages)`: frontend
    - `_components`: for components shared across route, organized into sub-directories for each component
    - `_contexts`: for react contexts
    - `_data`: for JSON files
    - `_globals`: for global configuration files
    - `_hooks`: for react hooks

**Notes:** 
- If your app only has a frontend, feel free to delete the `(api)` folder.
- This template has both Sass and Tailwind configured. Feel free to remove the configuration that your app doesn't use.

#### `scripts` directory
Can be used for migration, seeding and other scripts for external components of the app.

#### `public` directory
Holds assets like images, videos, etc. To keep it organized, create a new folder for each route the assets are related to.