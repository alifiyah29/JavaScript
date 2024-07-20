---

# TicketHive - Ticketing App

A ticketing app built with Next.js.

## Directory Structure

```plaintext
app/
├── (components)/
│   ├── TicketCard.jsx
│   ├── TicketForm.jsx
│   ├── DeleteBlock.jsx
│   ├── Nav.jsx
│   ├── PriorityDisplay.jsx
│   ├── ProgressDisplay.jsx
│   ├── StatusDisplay.jsx
├── (models)/
│   ├── Tickets.js
├── api/
│   ├── Tickets/
│   │   ├── route.js
├── TicketPage/
│   ├── [id]/
│   │   ├── page.jsx
├── layout.js
├── globals.css
├── page.jsx
├── tailwind.config.js
```

## Getting Started

To create a new app, use the following command:

```sh
npx create-next-app
```

*Note: Ensure the app name is in lowercase letters.*

## Extensions for VS Code

- ES7 + React/Redux/React-Native Snippets
- ESLint
- Prettier
- Tailwind CSS IntelliSense

### Useful Shortcuts

- `rafce`: Generates a default React functional component.
- `Ctrl+Shift+L`: Changes all instances of the selected word on a page.

## Folder Naming

If you want to create a folder that is not included in the routing, use parentheses in the folder name. For example, `(components)`.

## Icons

We use the FontAwesome library for icons. To install it, run:

```sh
npm install @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

## Tailwind CSS

Set up default colors in `tailwind.config.js`.

Define global styles in `globals.css`.

## Components

### Nav.jsx

Added links for the home and ticket page, along with an email ID.

### TicketCard and DeleteBlock

Displayed on the dashboard. The ticket size adjusts according to the screen size.

## Basic Setup

### TicketForm Functionality

We added the basic functionalities to `TicketForm`.

### MongoDB Atlas Connection

- Allowed access from anywhere (not recommended for production, only for this project).
- Cluster is a collection of databases.

#### Database Configuration

- **Database Name**: TicketDB
- **Collection Name**: tickets

#### Connecting to MongoDB

1. Go to **Overview -> Connect -> Connect to <clustername>**.
2. Copy the connection string and paste it into `.env.local`.

### Adding Data

Created a form to add data to the tickets in `route.js`.

### Client-side JavaScript

Explicitly used client-side JavaScript in `TicketForm.js`.

*Note: `==` does not care about the datatype.*

---
