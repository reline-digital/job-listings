# Job Board

The Job Board is a powerful and versatile application designed to streamline the process of job searching and hiring. It provides a user-friendly interface for both job seekers and employers, offering a comprehensive platform to connect talent with opportunities.

## Features

- **Job Listings**: Browse through a wide range of job listings from various industries and locations.
- **Advanced Search**: Utilize advanced search filters to find specific job positions based on criteria such as job title, location, salary, and more.
- **Application Management**: Easily manage job applications, track their status, and communicate with applicants.

## Setup Environment Variables

Create a `.env` file at the root of the project with contents from `.env.example` and update env values accordingly

## Setting up the app

Install all the dependencies

```
npm install
```

## Running up the app

Starting development server

```
npm run dev
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `frontend`: a [Next.js](https://nextjs.org/) app
- `@repo/logger`: isomorphic logger (a small wrapper around console.log)
- `@repo/ui`: a dummy React UI library (which contains a single `<CounterButton>` component)
- `scripts`: Jest and ESLint configurations
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

Some additional tools:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
