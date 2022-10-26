var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()

exports.handler = async (event, context) => {
    let date = new Date()

    if (event.request.userAttributes.sub) {
        let Params = {
            Item: {
                'id': {S: event.request.userAttributes.sub},
                '__typename': {S: 'User'},
                'name': {S: event.request.userAttributes.name},
                'group': {S: event.request.userAttributes.group},
                'userEmail': {S: event.request.userAttributes.userEmail},
                'createdAt': {S: date.toISOString()},
                'updatedAt': {S: date.toISOString()},
                '_lastChangedAt': {S: date.toISOString()},
            },
            TableName: process.env.userList
        }
        try {
            await ddb.putItem(Params).promise()
            console.log("Success")
        } catch (err) {
            console.log("Error", err)
        }
        context.done(null, event)
    } else {
        console.log("Error: Nothing was written to DynamoDB")
        console.done(null, event)
    }
}