# Clock by mynth

Status: Work in progress

## Setup

Install dependencies

```bash
pnpm i
```

Run dev server

```bash
pnpm dev
```

## Adding new clock faces

Add entry in `src/clock-faces.ts` based on the type. Provide a name and slug (url) for the clock face. You can also provide author name and links to socials.

Add a component in `src/clock-faces` with the same name as the clock face slug defined in step above. For example, if the clock face slug is `mynth`, the component should be named `mynth.astro`.

Create a pull request and wait for it to be merged. Everything else is done automatically 🔥
