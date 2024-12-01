# Codora MVP Checklist

## Phase 1: Initial Setup 
- [x] Create the project with Electron and React.
- [x] Configure TypeScript and Webpack.
- [-] Setup ESLint, Prettier, and Husky.
- [x] Integrate Tailwind CSS.
- [x] Setup Electron's main and renderer processes.
- [x] Implement IPC communication between main and renderer.
- [x] Handle basic app lifecycle events (window creation, close, minimize).
- [ ] Create a responsive layout:
  - [ ] Sidebar for file navigation.
  - [ ] Editor workspace.
  - [ ] Status bar.
- [x] Setup GitHub repository.
- [x] Create a `README` with project goals.

## Phase 2: Basic Features 
- [ ] Implement file/folder explorer in the sidebar.
- [ ] Add CRUD operations for files (create, open, save, delete).
- [ ] Integrate Monaco Editor.
- [ ] Add syntax highlighting and basic editing capabilities.
- [ ] Add support for multiple open files with tabbed navigation.
- [ ] Allow font size and theme customization (light/dark mode).
- [ ] Persist settings using local storage or Electron's `appData`.

## Phase 3: Intermediate Features 
- [ ] Implement common editor keyboard shortcuts (save, open, switch tabs).
- [ ] Add file search within the workspace.
- [ ] Implement text search within files.
- [ ] Add basic linting (e.g., ESLint) and formatting (e.g., Prettier).
- [ ] Display inline errors and warnings.
- [ ] Allow loading simple plugins/extensions.

## Phase 4: Advanced Features 
- [ ] Add Git integration for file diff, commit, and pull/push operations.
- [ ] Embed a terminal within the app for running commands.
- [ ] Add a markdown preview panel.
- [ ] Support live preview for HTML/CSS/JS files.
- [ ] Optimize startup and render times.
- [ ] Efficiently manage memory and CPU usage.

## Phase 5: Polishing and Release 
- [ ] Write unit and integration tests.
- [ ] Manually test for edge cases in file system, editor, and UI.
- [ ] Create user documentation.
- [ ] Document API for extensions (if applicable).
- [ ] Use `electron-builder` or `electron-packager` to create installers for Windows, macOS, and Linux.
- [ ] Share on GitHub and gather feedback.
- [ ] Add contribution guidelines for community support.
