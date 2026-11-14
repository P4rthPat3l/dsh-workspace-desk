# LabSideBar

LabSideBar replaces the built-in workspace section in the DeepSeek Harness sidebar. Workspaces get project icons, session activity on their rows, three layouts, and menu actions. Two optional agent tools expose workspace and session management to the model.

## Features

- Project icons found automatically in the workspace folder, or an uploaded image, one of the built-in symbols, or the workspace initials on a color plate.
- Rolled-up session activity on workspace rows, so a workspace shows when one of its sessions is busy.
- List, icon grid, and rail layouts. The rail appears when the sidebar is collapsed.
- Workspace actions: add, rename, reorder, remove, copy path, change icon. Removing a workspace removes the sidebar entry only and leaves the folder and session logs on disk.
- Session actions from the row context menu: rename, pin, archive, and fork.
- English and Chinese interface.

## Installation

LabSideBar is a DeepSeek Harness plugin, not a standalone application.

1. Open **Plugins** in DeepSeek Harness.
2. Install the npm bundle `dsh-workspaces` with the plugin manager.
3. Enable the bundle if it is not already enabled.
4. Reload the window if the plugin manager requests it.

The bundle inserts two rows: the sidebar and **Agent tools**. Both start enabled. Switching **Agent tools** off removes the `workspace` and `session` tools from the model and leaves the sidebar, the icon store, and the workspace UI running. Disabling the whole bundle restores the built-in workspace section.

## Agent tools

The **Agent tools** row registers two tools.

`workspace` lists, creates, renames, moves, and removes workspace entries, discovers and sets workspace icons, and lists or starts sessions in a workspace.

`session` renames, pins, unpins, archives, unarchives, and forks existing sessions.

Ask the agent to list workspaces first so it can use the returned IDs in later calls. Workspace removal asks for approval.

## Development

Run these from the repository root.

```bash
npm install
npm run typecheck
npm run bundle
npm test
```

`index.js`, `tools.js`, and `client.js` are built output. DeepSeek Harness loads these files, so rebuild after changing sources under `src/`. Do not edit the built files by hand.

To check the package contents before publishing:

```bash
npm pack --dry-run -w packages/lab-sidebar
```

## Issues and source

Report bugs and request changes in the [GitHub repository](https://github.com/P4rthPat3l/dsh-workspace-desk).

## License

MIT.
