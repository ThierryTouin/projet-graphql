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

```
query {
  user(id: "2"){
    firstName,
    age,
    company {
      name
    }
  }
}
```


## Partie server

### Installation
```
npm install -g json-server
```

### Start
```
json-server --watch db.json
```

You can see the server home at **http://localhost:3000/**

Sample request **http://localhost:3000/users?companyId=1**