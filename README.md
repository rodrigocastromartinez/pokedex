# Development

1. clone repository
2. run

```
yarn install
```

3. install nest cli

```
npm i -g @nestjs/cli
```

4. run database

```
docker-compose up -d
```

5. clone **.env.template** file and rename the copy to **.env**

6. fill environment variables defined in **.env**

7. start app

```
yarn start:dev
```

8. populate database for testing

```
http://localhost:3000/api/v2/seed
```

## Stack

- MongoDB
- Nest
