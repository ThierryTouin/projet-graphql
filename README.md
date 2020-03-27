# Projet GraphQL

## recompilation automatique

``` 
npm install nodemon

nodemon server.js
```

## Request sample for **graphiql**

```
query {
  user(id: "1"){
    firstName
  }
}
```

```
query {
  user(id: "1"){
    firstName,
    age
  }
}
```

