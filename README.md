# env-lib
Node module for reading .env file in app. For the sake of simplicity, it will expect to find a file named `.env` in the original directory the process is running from. 
```bash
.
├── .env
├── index.js
└── log
```  
I.e., if `pwd` prints `/home`, read environment properties from `/home/.env`.  
```javascript
#!/usr/bin/env node
// index.js
"use strict";

require("env-lib");
// now process.env is set based on .env file

// do other stuff here….
```
