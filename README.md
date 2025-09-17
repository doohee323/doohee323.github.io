# doohee323.github.io

Personal Portfolio Website (React-based)

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/doohee323/doohee323.github.io.git
cd doohee323.github.io
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Local Development Server
```bash
npm start
```
You can now view the site at `http://localhost:3000`.

## Development Environment Setup

### VS Code Debug Configuration
This project includes VS Code configuration files for debugging:

1. **Launch Configuration** (`.vscode/launch.json`):
   - `Launch Chrome`: Starts Chrome with debugging enabled
   - `Attach to Chrome`: Attaches to an existing Chrome instance
   - `Launch Edge`: Starts Edge with debugging enabled

2. **Tasks Configuration** (`.vscode/tasks.json`):
   - `npm: start`: Runs the development server
   - `npm: build`: Builds the production version
   - `npm: test`: Runs tests
   - `npm: install`: Installs dependencies

### How to Debug
1. Open the project in VS Code
2. Press `F5` or go to Run and Debug panel
3. Select "Launch Chrome" configuration
4. The app will open in Chrome with debugging capabilities

### Available Scripts
- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run deploy`: Builds and deploys to GitHub Pages

## Modification and Deployment Process

### 1. Edit Files
- Modify page components in the `src/pages/` directory.
- Edit reusable components in the `src/components/` directory.
- Add image files to the `public/images/` directory.

### 2. Commit Changes
```bash
git add .
git commit -m "Description: Changes made"
```

### 3. Build and Deploy to GitHub Pages
```bash
npm run deploy
```
This command performs the following:
- Builds the application (`npm run build`)
- Automatically creates or updates the `gh-pages` branch in your GitHub repository
- Deploys the built files to this branch using the gh-pages package
- After successful deployment, the site will be available at `https://doohee323.github.io/`

The deployment process works because of the following configurations in `package.json`:
- The `homepage` property is set to `https://doohee323.github.io`
- The `predeploy` and `deploy` scripts are configured for GitHub Pages

### 4. Push Changes to Remote Repository
```bash
git push origin main
```

## Note
- The source code lives in the `main` branch
- The compiled production build is automatically deployed to the `gh-pages` branch
- The website is served from `https://doohee323.github.io/` directly from the `gh-pages` branch
