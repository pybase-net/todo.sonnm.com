DO
$do$
DECLARE user_admin CONSTANT varchar := 'pybase_todo';
DECLARE user_admin_pw CONSTANT varchar := 'pybase1337';

BEGIN  

      IF NOT EXISTS (
          SELECT FROM pg_catalog.pg_user p
          WHERE usename = user_admin) THEN
           EXECUTE 'CREATE USER '|| user_admin ||' WITH SUPERUSER PASSWORD '|| quote_literal(user_admin_pw);
      END IF;
END $do$;

CREATE DATABASE pybase_todo;
GRANT ALL PRIVILEGES ON DATABASE pybase_todo TO pybase_todo;

\connect pybase_todo
CREATE SCHEMA IF NOT EXISTS dbo AUTHORIZATION  pybase_todo;
\q

