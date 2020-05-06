exports.typeDefs = `

type Recipe {
    name: String!
    category: String!
    description: String!
    instruction: String!
    createDate: String
    likes: Int
    username: String
}

type User {
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorite: [Recipe]
}
`;