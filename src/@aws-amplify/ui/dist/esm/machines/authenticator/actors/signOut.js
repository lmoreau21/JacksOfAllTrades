import{createMachine as e}from"xstate";import{Auth as t}from"aws-amplify";var n=e({initial:"pending",id:"signOutActor",predictableActionArguments:!0,states:{pending:{tags:["pending"],invoke:{src:"signOut",onDone:"resolved",onError:"rejected"}},resolved:{type:"final"},rejected:{type:"final"}}},{services:{signOut:function(){return t.signOut()}}});export{n as signOutActor};
