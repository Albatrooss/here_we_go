# WOW! So exiting!

---

## Messing around with docker and Vultr

---

This is my basic nextjs app setup to test using docker and deploying to Vultr!

If for some weird reason you want to clone it create a docker-compose.override.yml in the root folder and fill it with something like this:

```
version: '3'
services:
    server:
        command: npm run start
        environment:
            SERVER_HOSTNAME: here_we_go_server_1
            SERVER_PORT: 3001
            POSTGRES_PASSWORD: password
            POSTGRES_USER: postgres
            POSTGRES_DB: ohohoh
            POSTGRES_HOST: here_we_go_db_1,
    app:
        volumes: 
            - ./app:/usr/src/app
    db:
        volumes:
            - /your/local/path:/var/lib/postgresql/data
        environment:
            POSTGRES_PASSWORD: same_as_above
        
```

start docker-compose in the background with
>`docker-compose up --build -d`

then create the database by bashing into the db container:
>`docker exec -it here_we_go_db_1 bash`

and running
>`createdb ohohoh -U postgres`

then you have to create the todo table (im sure theres a way to do this all together but now this is what i got)
> `psql ohohoh -U postgres`

```
CREATE TABLE message(
    message_id SERIAL PRIMARY KEY,
    text VARCHAR(140),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

---

[Checkout my website](timrobillard.ca)
