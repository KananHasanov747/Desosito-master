/.
├── /backend
│   ├── /config
│   │   ├── allowedOrigins.js
│   │   ├── corsOptions.js
│   │   └── dbConn.js
│   ├── /controllers
│   │   ├── authController.js
│   │   ├── notesController.js
│   │   └── usersController.js
│   ├── /logs
│   │   ├── errLog.log
│   │   └── reqLog.log
│   ├── /middleware
│   │   ├── errorHandler.js
│   │   ├── logger.js
│   │   ├── loginLimiter.js
│   │   └── verifyJWT.js
│   ├── /models
│   │   ├── Note.js
│   │   └── User.js
│   ├── /node_modules
│   ├── /public
│   │   └── /css
│   │       └── style.css
│   ├── /routes
│   │   ├── root.js
│   │   ├── authRoutes.js
│   │   ├── noteRoutes.js
│   │   └── userRoutes.js
│   ├── /views
│   │   ├── 404.html
│   │   └── index.html
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
└── /frontend
    ├── /node_modules
    ├── /public
    │   ├── /img
    │   │   └── background.jpg
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── /src
    │   ├── /app
    │   │   ├── /api
    │   │       └── apiSlice.js
    │   │   └── store.js
    │   ├── /components
    │   │   ├── DashHeader.js
    │   │   ├── DashFooter.js
    │   │   ├── DashLayout.js
    │   │   ├── Layout.js
    │   │   └── Public.js
    │   ├── /config
    │   │   └── roles.js
    │   ├── /features
    │   │   ├── /auth
    │   │   │   ├── Welcome.js
    │   │   │   ├── Prefetch.js
    │   │   │   ├── Login.js
    │   │   │   ├── authSlice.js
    │   │   │   └── authApiSlice.js
    │   │   ├── /notes
    │   │   │   ├── Note.js
    │   │   │   ├── NewNote.js
    │   │   │   ├── EditNote.js
    │   │   │   ├── NewNoteForm.js
    │   │   │   ├── EditNoteForm.js
    │   │   │   ├── NotesList.js
    │   │   │   └── notesApiSlice.js
    │   │   └── /users
    │   │       ├── User.js
    │   │       ├── EditUser.js
    │   │       ├── NewUserForm.js
    │   │       ├── EditUserForm.js
    │   │       ├── UsersList.js
    │   │       └── usersApiSlice.js
    │   ├── /img
    │   │   └── background.jpg
    │   ├── App.js
    │   ├── index.css
    │   └── index.js
    ├── .gitignore
    ├── package-lock.json
    └── package.json