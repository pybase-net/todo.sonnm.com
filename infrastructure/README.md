# Infrastructure

## Development

```sh
docker-compose -f docker-compose.dev.yml up -d
docker-compose -f docker-compose.dev.yml down
```

## Backup and store

### Backup

```sh
docker exec -it postgres_container sh -c 'pg_dump -v --clean --username=pybase_todo --dbname=pybase_todo > /home/backups/pybase_todo_14052023.sql'
docker exec -it postgres_container sh -c 'pg_dump --format=tar --clean --username=pybase_todo --dbname=pybase_todo > /home/backups/pybase_todo_14052023.tar'
docker exec -it postgres_container sh -c 'pg_dump -vc --username=pybase_todo --dbname=pybase_todo | gzip > /home/backups/pybase_todo_14052023.sql.gz'

# restore with dump format
docker exec -it postgres_container sh -c 'pg_restore -vc --username=pybase_todo --dbname=pybase_todo < /home/backups/pybase_todo_14052023.tar'
# restore with sql format
# postgres://pybase_todo:pybase1337@127.0.0.1:5432/pybase_todo
docker exec -it postgres_container sh -c 'psql -vcC postgres://pybase_todo:pybase1337@127.0.0.1:5432/pybase_todo < /home/backups/pybase_todo_14052023.sql -v ON_ERROR_STOP=1'
# restore with gzip format
docker exec -it postgres_container sh -c 'zcat /home/backups/pybase_todo_14052023.sql.gz | psql -vc --username=pybase_todo --dbname=pybase_todo -v ON_ERROR_STOP=1'
```

## References

- [Backup and restore pgsql](https://devilbox.readthedocs.io/en/latest/maintenance/backup-and-restore-pgsql.html)
- [My gist](https://gist.github.com/misostack/d646d2c5e564b8d0dbaad1da9d42ae41)