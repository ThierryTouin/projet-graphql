const graphQL = require("graphql");
const lodash = require("lodash");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphQL;


const users = [
    { id: '1', firstName: 'Thierry', age: 7},
    { id: '2', firstName: 'Pauline', age: 10},
]

const UserType = new GraphQLObjectType({
    name : 'User',
    fields : {
        id : { type : GraphQLString},
        firstName : { type : GraphQLString},
        age : { type : GraphQLInt}
    }
});

const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields : {
        user : { 
            type: UserType,
            args: {id: { type: GraphQLString}},
            resolve(parentValue, args) {
                return lodash.find(users, { id: args.id})
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query : RootQuery
});