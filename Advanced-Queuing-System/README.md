### Manual Installation
* npm install -g ts-node
* npm i express cors
* npm i --save-dev nodemon
* npm install mysql2@latest
* npm install @types/node --save-dev
* npm i reflect-metadata --save 
* npm i typeorm --save 


### to run tsc in watch mode
* tsc -w


#### Steps to Create a User in MySQL CLI;(Ubuntu)
* sudo apt install mysql

* Start MySQL Server:
   + sudo service mysql start

* sudo su 
    + mysql -u root -p

* Create a New User and Set Password
* Let's create a new user and grant them privileges. Replace [new_user] and [password] with your desired username and password.
```bash
CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'password';
```

* Grant Necessary Priviledges to New User
```bash
GRANT ALL PRIVILEGES ON *.* TO 'queue-vue'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

* Make sure to Exit MySQL
   + EXIT;

##### Log in with New User*==(Official0mega)
* mysql -u tutorial1 -p
   + with the password (112233)


## Create a Database
* Create a new database. Replace [database_name] with your desired database name.
```bash
CREATE DATABASE queue_system;
```
##### Before, Exit; Make sure to do the below;
* To check plugin   `SELECT user, host, plugin FROM mysql.user WHERE user = 'tutorial1';`
* To Change Authentication Plugin for MySQL User:
   + `ALTER USER 'tutorial1'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY '112233';`

#### Now, you can safely exit;
* EXIT;

# Advanced Queuing System
* Create MicroServices using Node.js
* Create an Event-Driven Architecture with RabbitMQ.
![queue-system](https://github.com/Official0mega/Master-Backend/assets/122806822/106caadc-947b-47a5-84db-10aefe5e5edd)


### Features
* Two MicroServices (Admin && User)
* Two Separate Databases (MySQL && MongoDB)
* We would Explore more about Relational Databases(MySQL) && NoSQL Databases(MongoDB).

##### Backup the Database
* Use the mysqldump command to create a backup of the database. Replace [path] with the desired backup file path.
* mysqldump -u new_user -p your_database_name > /path/to/backup.sql
* in the Root command Line, type the below;
```bash
mysqldump -u tutorial1 -p queue-system > ./backup_queue-system.sql;
```

##### Restore Database from Backup
* mysql -u new_user -p your_database_name < /path/to/backup.sql
```bash
mysql -u tutorial1 -p queue-system < ./backup_queue-system.sql
```


* Log in to MySQL
* Start MySQL Server:
   + sudo service mysql start