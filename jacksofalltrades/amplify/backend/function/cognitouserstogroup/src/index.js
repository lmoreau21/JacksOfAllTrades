var AWS = require('aws-sdk');
var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });

exports.handler = (event, context, callback) => {
  
  const {userName} = event;

  var params = {
    GroupName: 'User',
    // UserPoolId: 'arn:aws:cognito-idp:us-east-1:23453453453:userpool/us-east-1_XXX',
    UserPoolId: 'us-east-1_dEYvOyCeJ',
    // Username: 'user@email.com'
    Username: userName,
  }

  console.log('before')
  cognitoidentityserviceprovider.adminAddUserToGroup(params, function (err, data) {
    console.log(params)
    if (err) console.log("Error");
    else console.log("Success");

    // when the action finished
    console.log('after');

    console.log("Executed.");

    context.succeed(event);
  });
};