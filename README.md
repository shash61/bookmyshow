# Bookmyshow

#  how to create tables in local db
run command `npx sequelize-cli db:migrate`
this command will run all the migrations in the migration folder

#  filling up tables with data
run command `npx sequelize-cli db:seed:all`
this command will run all the migrations in seeders folder

#  hit the server 
run command `npx nodemon src/index.js`
