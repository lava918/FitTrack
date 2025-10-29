# FitTrack

A manual fitness tracker app designed to help users log and monitor their workouts and progress.

## Features

* Manual entry of workouts and fitness activities
* Track different exercise types and durations
* View detailed workout history
* Responsive UI built with modern web technologies

## Tech Stack

* Frontend: TypeScript, HTML, Tailwind CSS, Vite
* Backend: (Details in `server` folder)
* Shared utilities/config: (in `shared` folder)
* Database config: Drizzle ORM (`drizzle.config.ts`)
* Project configuration: `tsconfig.json`, `vite.config.ts`, `package.json`, etc.

## Project Structure

```
/client        → Frontend application  
/server        → Backend API and logic  
/shared        → Shared modules and types  
.gitignore  
drizzle.config.ts  
package.json  
postcss.config.js  
tailwind.config.ts  
tsconfig.json  
vite.config.ts  
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/lava918/FitTrack.git
   ```
2. Navigate into the project directory and install dependencies:

   ```bash
   cd FitTrack
   npm install
   ```
3. Start both backend and frontend (depending on how scripts are configured):

   ```bash
   npm run dev
   ```
4. Open the application in your browser (usually at `http://localhost:3000` or as defined).

## Usage

* Use the UI to add a workout: select type, duration, date, notes.
* View the dashboard to see your workouts and progress over time.
* Use filters or history view to review past workouts.

## Testing

* (Add instructions for running tests here if available)
* Example: `npm run test`

## Contributing

* Fork the repository
* Create a new branch for your feature: `git checkout -b feature/YourFeature`
* Commit your changes: `git commit -m "Add YourFeature"`
* Push to your branch: `git push origin feature/YourFeature`
* Open a Pull Request and describe the changes made.

## License

This project is licensed under the [MIT License](LICENSE).

