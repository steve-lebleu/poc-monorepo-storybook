# POC React / Next.js monorepo with Turbo & Storybook

## Context

- We want to share components between applications
- We want to manage dependencies efficiently
- (We want to develop components in isolation)

## Environment / stack

- Node.js 20.18.0
- npm 10.8.2
- Typescript 5
- Next.js 15
- React 19
- Joy UI 5.0.0-beta.51
- Turbo 2.3.3
- Storybook 8.4.7

## Project architecture

```bash
poc-monorepo-storybook
├── apps
│   └── my-app
│       ├── package.json
│       ├── tsconfig.json
│       └── src
│           └── app
│               └── page.tsx
├── packages
│   ├── tools                     # Shared utilities and tools
│   │   ├── package.json
│   │   └── src
│   │       └── index.ts
│   └── ui
│       ├── components
│       │   ├── package.json
│       │   ├── .storybook       # Storybook configuration
│       │   │   ├── main.ts
│       │   │   └── preview.ts
│       │   └── src
│       │       ├── stories      # Component stories
│       │       │   ├── Button.stories.tsx
│       │       │   └── Introduction.mdx
│       │       └── button.component.tsx
│       └── hooks                # Shared React hooks
│           ├── package.json
│           └── src
│               └── index.ts
├── turbo.json
├── package.json
├── tsconfig.json
```

## Quick start

Put in place `turbo.json` file at the root of the project:

```json
{
  "tasks": {
    "dev": {
      "cache": false
    },
    "build": {
      "outputs": [
        ".next/**",
        "!.next/cache/**"
      ]
    },
    "lint": {},
    "test": {}
  }
}
```

For each package or application you want to create, just create a new folder in the `packages` or `apps` directory and add it to the `workspaces` array in the global `package.json` file.

In example, to create a new package, just run the following command:

```bash
npm create package@latest packages/[my-package-name]
```

To create a new application, run the following command:

```bash
npm create app@latest apps/[my-app-name]
```

To add a new package to the global `package.json` file, run the following command:

```bash
npm add [@monorepo/path]
```

Shared dependencies are managed by `npm workspaces`.

At the root of the project, you can use the following `Turbo` commands:

- `npm run dev` to run the development server
- `npm run build` to build the application
- `npm run lint` to lint the application

To build and run the application, run the following commands:

```bash
npm run build
cd apps/my-app
npm run start
```

## Feedbacks

### Monorepo

- Current implementation is using `npm workspaces`.
- Ideally use `pnpm` which is faster and more efficient to manage dependencies.

#### Pros

- Simple to setup and to use
- Efficient to manage dependencies
  - Workspaces allow to share components between applications
  - Workspaces allow to manage dependencies
- Efficient to scale on the same stack using the same tools
  - Add new applications
  - Add new packages
  - Add new development tools

#### Cons

- A little bit more of work at CI/CD level

### Storybook

#### Pros

- Efficient to develop components in isolation
- Facilitates testing components

#### Cons

- Feeling of rewriting `Joy UI`, except for the components that will be customized
- Additional work to setup and maintain`Storybook`

### Conclusion

`turbo` and `npm/pnpm workspaces` look like the right tools for the job considering the context.

- If you plan to **scale** and to **develop many applications on the same stack**, you should **consider this monorepo approach**.
- If you plan to **develop a single application**, you should **not use this monorepo approach** and just refer to a well organized project in a single repository.

`Storybook` is a good tool to develop components in isolation.

The pain / gain balance to use `Storybook` in the context of a project using `Joy UI` is less interesting, except if you plan to **extends more strongly** the `Joy UI` library.
