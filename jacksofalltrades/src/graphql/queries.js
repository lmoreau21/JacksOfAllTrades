/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSignIn = /* GraphQL */ `
  query GetSignIn($id: ID!) {
    getSignIn(id: $id) {
      id
      userEmail
      userPassword
      userConfirmPassword
      usersSignIns {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSignIns = /* GraphQL */ `
  query ListSignIns(
    $filter: ModelSignInFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSignIns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userEmail
        userPassword
        userConfirmPassword
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSignIns = /* GraphQL */ `
  query SyncSignIns(
    $filter: ModelSignInFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSignIns(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userEmail
        userPassword
        userConfirmPassword
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getExistingUser = /* GraphQL */ `
  query GetExistingUser($id: ID!) {
    getExistingUser(id: $id) {
      id
      userName
      userEmail
      isTrue
      isCurrentUser {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listExistingUsers = /* GraphQL */ `
  query ListExistingUsers(
    $filter: ModelExistingUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExistingUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userName
        userEmail
        isTrue
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncExistingUsers = /* GraphQL */ `
  query SyncExistingUsers(
    $filter: ModelExistingUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExistingUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userName
        userEmail
        isTrue
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      firstName
      lastName
      userEmail
      existingUsers {
        nextToken
        startedAt
      }
      signins {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        userEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        userEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSignUp = /* GraphQL */ `
  query GetSignUp($id: ID!) {
    getSignUp(id: $id) {
      id
      userEmail
      userPassword
      userConfirmPassword
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSignUps = /* GraphQL */ `
  query ListSignUps(
    $filter: ModelSignUpFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSignUps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userEmail
        userPassword
        userConfirmPassword
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSignUps = /* GraphQL */ `
  query SyncSignUps(
    $filter: ModelSignUpFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSignUps(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userEmail
        userPassword
        userConfirmPassword
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSkillprofile = /* GraphQL */ `
  query GetSkillprofile($id: ID!) {
    getSkillprofile(id: $id) {
      id
      title
      description
      instructions
      instructionRights
      category
      difficultyLevel
      materialsRequired
      timeEstimate
      photo
      photoRights
      video
      videoRights
      creator
      skillId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSkillprofiles = /* GraphQL */ `
  query ListSkillprofiles(
    $filter: ModelSkillprofileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkillprofiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        instructions
        instructionRights
        category
        difficultyLevel
        materialsRequired
        timeEstimate
        photo
        photoRights
        video
        videoRights
        creator
        skillId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSkillprofiles = /* GraphQL */ `
  query SyncSkillprofiles(
    $filter: ModelSkillprofileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSkillprofiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        instructions
        instructionRights
        category
        difficultyLevel
        materialsRequired
        timeEstimate
        photo
        photoRights
        video
        videoRights
        creator
        skillId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSignInUsers = /* GraphQL */ `
  query GetSignInUsers($id: ID!) {
    getSignInUsers(id: $id) {
      id
      signInID
      usersID
      signIn {
        id
        userEmail
        userPassword
        userConfirmPassword
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      users {
        id
        firstName
        lastName
        userEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSignInUsers = /* GraphQL */ `
  query ListSignInUsers(
    $filter: ModelSignInUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSignInUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        signInID
        usersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSignInUsers = /* GraphQL */ `
  query SyncSignInUsers(
    $filter: ModelSignInUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSignInUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        signInID
        usersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUsersExistingUser = /* GraphQL */ `
  query GetUsersExistingUser($id: ID!) {
    getUsersExistingUser(id: $id) {
      id
      existingUserID
      usersID
      existingUser {
        id
        userName
        userEmail
        isTrue
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      users {
        id
        firstName
        lastName
        userEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsersExistingUsers = /* GraphQL */ `
  query ListUsersExistingUsers(
    $filter: ModelUsersExistingUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersExistingUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        existingUserID
        usersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsersExistingUsers = /* GraphQL */ `
  query SyncUsersExistingUsers(
    $filter: ModelUsersExistingUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsersExistingUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        existingUserID
        usersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
