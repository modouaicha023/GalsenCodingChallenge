

# Galsen Coding Challenge

Welcome to the Galsen Coding Challenge project! This is an open-source project built with Next.js, TypeScript, MongoDB, and Tailwind CSS. The goal of this project is to provide a platform for coding challenges and collaboration within the Galsen (Senegal) coding community.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/modouaicha023/galsen-coding-challenge.git
   ```

2. Navigate to the project directory:

   ```bash
   cd galsen-coding-challenge
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

4. Create a `.env` file in the root directory and configure the environment variables:

   ```env
    MONGO_URL = "YOUR_MONGO_URL" 

    NEXTAUTH_URL = "http://localhost:3000"
    NEXTAUTH_SECRET = "YOUR_NEXTAUTH_SECRET"

    GITHUB_SECRET = "YOUR_GITHUB_SECRET" 
    GITHUB_ID = "YOUR_GITHUB_ID" 
   ```


5. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000).

## Features

- **Coding Challenges:** Explore a variety of coding challenges posted by the community.
- **Submission:** Submit your solutions to challenges and see how others approach the problems.
<!-- - **Community Collaboration:** Discuss coding techniques, share insights, and collaborate with fellow developers. -->

## Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS, Shadcn UI
- **Backend:** Node.js,  MongoDB
- **Authentication:** NextAUth

## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
