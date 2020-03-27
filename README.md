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

Afficher le nom de la compagnie de l'utilisateur 2 en plus de son nom et de son age. Le nom de la compagnie vient d'une autre table
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

Liste des utilisateurs de la compagnie 3
```
query {
  company(id: "3"){
    name,
    user{
      firstName
    }
  }
}
```

Requête avec Alias et Fragment

```
query {
  microsoftInfo : company(id: "3"){
    name,
    user{
      ...userDetails
    }
  },
  googleInfo : company(id: "2"){
    name,
    user{
      ...userDetails
    }
  }
}


fragment userDetails on User {
  firstName,
  age
}
```

Ajout d'un utilisateur

```
mutation {
  addUser(firstName:"toto",age:10,companyId:"3") {
    id,
    firstName
  }
}
```

Suppression d'un utilisateur

```
mutation {
  deleteUser(id:"BwVOgNL") {
    id
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