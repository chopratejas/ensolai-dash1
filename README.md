# Welcome to EnsolAI - Build your thought leadership

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Waitlist Functionality

This project includes a waitlist feature for the Pro Plan using Netlify Forms. When users submit their information to the waitlist:

1. Their information is captured by Netlify Forms
2. Submissions can be viewed in the Netlify dashboard under the Forms section

### Setting up Netlify Forms

1. Deploy your site to Netlify
2. Netlify automatically detects and enables forms with the `netlify` attribute
3. View and manage form submissions in the Netlify dashboard

## What technologies are used for this project?

This project is built with:

- Vite
- React
- shadcn-ui
- Tailwind CSS
- Netlify Forms (for waitlist functionality)
- EmailJS (for form submissions)
