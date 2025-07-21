Generate a task_list.md file for my development project based on the contents of project_overview.md.

Use the information from sections like Goals, Key Features, Architecture, and Timeline to break the project down into clear, actionable tasks.
Instructions:

    Each task should have:

        A title

        A description

        A status field (e.g., Not Started, In Progress, Completed, Blocked)

        An optional list of subtasks (also with individual statuses)

    Use markdown checkboxes (- [ ], - [x]) for subtasks

    The output should be clean, readable, and ready to track development progress

Example format:

# Task List

## Backend

### Task: Set Up Authentication System

**Description:** Implement user login, registration, and JWT-based authentication.  
**Status:** In Progress  
**Subtasks:**

- [x] Design user schema
- [x] Create registration endpoint
- [ ] Implement login functionality
- [ ] Add token-based session handling

---

### Task: Create REST API for Products

**Description:** Build a full CRUD API for managing product data.  
**Status:** Not Started  
**Subtasks:**

- [ ] Design database schema
- [ ] Set up API routes
- [ ] Write validation logic
- [ ] Test endpoints

Now read the project_overview.md, extract the relevant tasks and generate a complete task_list.md in this format.

Once done, execute npm create next-app@latest to create the project and also update the .cursorignore in order to add the files to ignore.
