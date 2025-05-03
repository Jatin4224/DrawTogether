1. initlized an empty turborepo
2. deleted the docs app
3. added http-server and ws-server
4. added package.json in both the places
5. added tsconfig.json in both the places nd improted it from @repo/typescript-config as a dependency in both ws-server nd http-server
6. Added build, dev nd start script to both the projects
7. update the turbo config in both the projects
8. iniiatlize a http nd websocket server
9. write a signup , signin , create-room endpoint
10. write the middlewares that decode the token nd gate the create-room endpoint
11. decode the token in the websocket serverr as well .Send the token to the websocket server in a query param for now
12. initilize a new db package where you write the scheema of the project
13. import the db package in http layer nd start putting things in th Db
