var aws = require('aws-sdk');
var ddb = new aws.DynamoDB({apiVersion: '2012-10-08'})

exports.handler = async (event, context, callback) => {
    console.log(event);

    aws.config.update({region: 'us-east-1'});
    
    if (event.request.userAttributes.sub) {


        var ddbParams = {
            TableName: 'Users-p4kfy6ms3rbdzahagmixxr675a-dev',
            Item: {
                'id': {S: event.request.userAttributes.sub},
                '__typename': {S: 'User'},
                'email': {S: event.request.userAttributes.email},
                'group': {S: event.request.uesrAttributes.group},
            }
        };
        
    // Return to Amazon Cognito
    callback(null, event);

    // Call DynamoDB
        try {
            ddb.putItem(ddbParams).promise()
            console.log("Success");
        } catch (err) {
            console.log("Error", err);
        }
        console.log("Success: Everything executed correctly");
        context.done(null, event);
                console.log("Success: Everything executed correctly");
        context.done(null, event);

    } else {
        // Nothing to do, the user's email ID is unknown
        callback(null, event);
    }
};