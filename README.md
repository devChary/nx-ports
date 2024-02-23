# Workspace - NxPorts

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **For Documentation - (https://nx.dev)** ✨

## Node Version

v18.19.1

## Nx Setup

Installing Nx Into an Existing Repository - `npx nx@latest init`

Installing Nx Globally - `npm add --global nx@latest`

This helps you use nx commands

## Run locally

Clone the repo
`git clone https://github.com/devChary/nx-ports`

## Change directory into the cloned repo to run future commands

`cd nx-ports`

## Install dependencies

`npm install`

## Start the app

To start the development server run `nx serve ocean-freight` or `nx serve air-freight`. Open your browser and navigate to http://localhost:[4200|4201]/. Happy coding!

## Troubleshooting

Sometimes dependencies can get into an outdated or bad state. As a general fix, deleting all existing 3rd party dependencies and installing clean may fix many issues. There is a helper script available to do this:
`npm cache clean --force`

Another issue that may arise due to Symlinks
Use `nvm` - node version manager to install and switch to v18.19.1 version and then re-install dependencies

## How to Install Guide - https://github.com/nvm-sh/nvm

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Example:
New React Application
`nx g @nx/react:application [app_name]`

Create Component
`nx g @nx/react:component [component-name] --project=[project_name] --directory="[path]`

Learn more about [Nx generators on the docs](https://nx.dev/features/generate-code).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the Project Graph

Run `nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Commit Convention

feat: Commits, that adds or remove a new feature
fix: Commits, that fixes a bug
refactor: Commits, that rewrite/restructure your code, however does not change any API behaviour
perf: Commits are special refactor commits, that improve performance
style: Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
test: Commits, that add missing tests or correcting existing tests
docs: Commits, that affect documentation only
build: Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
