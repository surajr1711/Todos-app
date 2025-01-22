# [Planner](https://todos-app-gamma-bice.vercel.app/)

Planner is a todos app **at the moment**. It's a WIP envisioned to be my opinionated approach to journal, reminders, notes and goal-setting apps.

**Links**

- [Live site](https://todos-app-gamma-bice.vercel.app/)
- [Frontend repo](https://github.com/surajr1711/Todos-app)
- [Backend repo](https://github.com/surajr1711/Todos-app-backend)

## Highlights

Planner's approach to todos is different in presentation compared to the typical todos tutorial app.

- There is no submit button to add a todo. Hitting enter submits it.
- There is no form UI to edit a todo's text. Edit it directly in the list view.

## Working features

- View all, add, toggle, edit, delete todos.
- Dark mode

## Why build this?

Planner is an effort to build features that I've wanted as an alternative to MS OneNote and Google Keep. I've not only wanted to create lists to stay organized, but also a note taking and journal space that follows a pattern/philosophy that works for me. The abstract is to be a day planner, projects/todos tracker, goal setter and note-taker, all while being very simple and obvious. It's like a self-mentor. It knows everything about me and is invested in my success.

## Instructions to run locally

- Create a MongoDB Atlas project.
- Clone the backend repo.
- Create a **.env** file with `MONGO_URI=<your_connection_string>`
- Clone the frontend repo.
- Create a **.env.development** file with `VITE_SERVER_URI=http://localhost:8000`
- Run both projects `npm run dev`

## Upcoming features

The following features are under development and listed in no particular order.

**Todos**

- Individual todo lists
- Tag lists
- Search lists and todos
- Filter and sort todos
- List completion progress
- Reorder todos
- Set due dates and reminder notifications
- Create a todo directly within a list without needing an add form

**App**

- User authentication
- Colored themes
- Offline PWA functionality

## Troubleshooting

- Set your MongoDB network access to "any IP address".

<!-- ## Credits (People and sources used for the project with their links) -->
