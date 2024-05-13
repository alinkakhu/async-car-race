**(Total score: <ins>315 points</ins>)**
**Front-end deployment URL**: https://main--sage-hamster-169e5a.netlify.app/#garage

## Checklist

### Basic Structure (80 points out of 85 points)
#### 1. View Configuration (30 out of 30 points)
- [x] **Two views (10 points)**: Implement two primary views: "Garage" and "Winners".
- [x] **Garage View Content (5 points)**: The "Garage" view must display its name, the current page number, and the total number of cars in the database (how many car user has in his garage).
- [x] **Winners View Content (5 points)**: The "Winners" view should similarly display its name, the current page number, and the total count of records in the database (how many records the winners table contains).
- [x] **Persistent state (10 out of 10 points)**: Ensure the view state remains consistent when navigating between views. This includes preserving page numbers and input states. For example, page number shouldn't be reset, input controls should contain that they contained before switching, etc.

#### 2. Garage View Functionality (55 out of 55 points)
##### Car Management (45 out of 45 points)
- [x] **CRUD Operations (20 points)**: Enable users to create, update, and delete cars, and display the list of cars. A car has two attributes: "name" and "color". For "delete"-operation car should be deleted from "garage" table as well as from "winners".
- [x] **Color Selection (10 points)**: Allow color selection from an RGB palette (like here), displaying the selected color on the car's image along with its name.
- [x] **Management Buttons (5 points)**: Provide buttons near each car's image for updating its attributes or deleting it.
- [x] **Pagination (10 points)**: Implement pagination for the "Garage" view, displaying 7 cars per page.
##### Car Generation (10 out of 10 points)
- [x] **Random Car Creation (10 points)**: There should be a button to create random cars (100 cars per click). Name should be assembled from two random parts, for example "Tesla" + "Model S", or "Ford" + "Mustang" (At least 10 different names for each part). Color should be also generated randomly.

### Car Animation (50 points out of 50 points)
- [x] **Engine Control Buttons (10 points)**: All of the engine buttons near each car's image.
- [x] **Start Engine Animation (20 points out of 20 points)**: User clicks to the engine start button -> UI is waiting for car's velocity answer -> animate the car and makes another request to drive. In case api returned 500 error car animation should be stopped.
- [x] **Stop Engine Animation (10 points)**: User clicks to the engine stop button -> UI is waiting for answer for stopping engine -> car returned to it's initial place.
- [x] **Button States (5 points)**: Start engine button should be disabled in case car is already in driving mode. As well as stop engine button should be disabled when car is on it's initial place.
- [x] **Responsive Animation (5 points)**: Ensure car animations are fluid and responsive on screens as small as 500px.

### Race Animation (35 points out of 35 points)
- [x] **Start Race Button (15 points)**: Implement a button to start the race for all cars on the current page.
- [x] **Reset Race Button (10 points)**: Create a button to reset the race, returning all cars to their starting positions.
- [x] **Winner Announcement (10 points)**: After some car finishes first user should see the message contains car's name that shows which one has won.

### Winners View (35 points out of 45 points)
- [x] **Display Winners (15 points)**:After some car wins it should be displayed at the "Winners view" table.
- [x] **Pagination for Winners (10 points)**: Implement pagination for the "Winners" view, with 10 winners per page.
- [x] **Winners Table (10 points)**:The table should include columns for the car's №, image, name, number of wins, and best time in seconds. If the same car wins more than once the number of wins should be incremented while best time should be saved only if it's better than the stored one.
- [ ] **Sorting Functionality (10 points)**: Not implemented.

### Application Architecture (20 out of 40 points)
- [x] **Modular Design (20 out of 40 points)**: The application should be clearly divided into logical modules or layers, such as API interaction, UI rendering, and state management. Consultation with a mentor on the architecture before implementation is advised.

### Dynamic Content Generation (30 out of 30 points)
- [x] **JavaScript-Generated HTML Content (30 points)**: All HTML content is dynamically generated using JavaScript, with the `<body>` tag containing only a single `<script>` tag.

### Single Page Application (25 out of 25 points)
- [x] **SPA Implementation (25 points)**: The application is a Single Page Application (SPA) using React v18+. All content is generated using TypeScript with `strict` and `noImplicityAny` settings enabled in `tsconfig.json`, ensuring seamless user experience without page reloads during navigation.

### Bundling and Tooling (20 out of 20 points)
- [x] **Use of Webpack or Similar (20 points)**: Due to the usage of React framework, Webpack usage is automatically set up, generating minimal set of files.

### Code Quality and Standards (7 out of 15 points)
- [x] **Eslint with Airbnb Style Guide (7 out of 15 points)**: Code is adhered to the ESLint configuration. However, there are some warnings about unused variables.

### Code Organization and Efficiency (8 out of 15 points)
  - [x] **Function Modularization (4 out of 10 points)**:Code must adhere to the Airbnb ESLint configuration to maintain code quality, as outlined in the Airbnb style guide. Specific rules may be adjusted only with mentor approval, and there should be no ESLint errors or warnings.
  - [x] **Code Duplication and Magic Numbers (3 out of 5 points)**: Code duplication is not often, however, there are some parts, which are duplicated.

### Prettier and ESLint Configuration (2 out of 10 points)
- [ ] **Prettier Setup (5 points)**: Prettier is not set up.
- [x] **ESLint Configuration (2 out of 5 points)**: ESLint is configured to check TypeScript in a strict mode.