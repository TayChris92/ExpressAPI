GRANT ALL PRIVILEGES ON *.* TO 'apiadmin'@'localhost' IDENTIFIED BY 'api';

GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' IDENTIFIED BY 'password';

CREATE USER 'apiadmin'@'localhost' IDENTIFIED BY 'api';

CREATE TABLE users (
UserID varchar(20) NOT NULL,
DisplayName varchar(20) NOT NULL,
Admin boolean NOT NULL
);

INSERT INTO users VALUES(
"TayChris1","Taylor",true
);

ALTER TABLE users ADD COLUMN Password varchar(20);