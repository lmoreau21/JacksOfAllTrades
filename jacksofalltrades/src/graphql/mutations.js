/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSignIn = /* GraphQL */ `
  mutation CreateSignIn(
    $input: CreateSignInInput!
    $condition: ModelSignInConditionInput
  ) {
    createSignIn(input: $input, condition: $condition) {
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
export const updateSignIn = /* GraphQL */ `
  mutation UpdateSignIn(
    $input: UpdateSignInInput!
    $condition: ModelSignInConditionInput
  ) {
    updateSignIn(input: $input, condition: $condition) {
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
export const deleteSignIn = /* GraphQL */ `
  mutation DeleteSignIn(
    $input: DeleteSignInInput!
    $condition: ModelSignInConditionInput
  ) {
    deleteSignIn(input: $input, condition: $condition) {
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
export const createExistingUser = /* GraphQL */ `
  mutation CreateExistingUser(
    $input: CreateExistingUserInput!
    $condition: ModelExistingUserConditionInput
  ) {
    createExistingUser(input: $input, condition: $condition) {
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
export const updateExistingUser = /* GraphQL */ `
  mutation UpdateExistingUser(
    $input: UpdateExistingUserInput!
    $condition: ModelExistingUserConditionInput
  ) {
    updateExistingUser(input: $input, condition: $condition) {
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
export const deleteExistingUser = /* GraphQL */ `
  mutation DeleteExistingUser(
    $input: DeleteExistingUserInput!
    $condition: ModelExistingUserConditionInput
  ) {
    deleteExistingUser(input: $input, condition: $condition) {
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
export const createSignUp = /* GraphQL */ `
  mutation CreateSignUp(
    $input: CreateSignUpInput!
    $condition: ModelSignUpConditionInput
  ) {
    createSignUp(input: $input, condition: $condition) {
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
export const updateSignUp = /* GraphQL */ `
  mutation UpdateSignUp(
    $input: UpdateSignUpInput!
    $condition: ModelSignUpConditionInput
  ) {
    updateSignUp(input: $input, condition: $condition) {
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
export const deleteSignUp = /* GraphQL */ `
  mutation DeleteSignUp(
    $input: DeleteSignUpInput!
    $condition: ModelSignUpConditionInput
  ) {
    deleteSignUp(input: $input, condition: $condition) {
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
export const createSkillprofile = /* GraphQL */ `
  mutation CreateSkillprofile(
    $input: CreateSkillprofileInput!
    $condition: ModelSkillprofileConditionInput
  ) {
    createSkillprofile(input: $input, condition: $condition) {
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
export const updateSkillprofile = /* GraphQL */ `
  mutation UpdateSkillprofile(
    $input: UpdateSkillprofileInput!
    $condition: ModelSkillprofileConditionInput
  ) {
    updateSkillprofile(input: $input, condition: $condition) {
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
export const deleteSkillprofile = /* GraphQL */ `
  mutation DeleteSkillprofile(
    $input: DeleteSkillprofileInput!
    $condition: ModelSkillprofileConditionInput
  ) {
    deleteSkillprofile(input: $input, condition: $condition) {
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
export const createSignInUsers = /* GraphQL */ `
  mutation CreateSignInUsers(
    $input: CreateSignInUsersInput!
    $condition: ModelSignInUsersConditionInput
  ) {
    createSignInUsers(input: $input, condition: $condition) {
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
export const updateSignInUsers = /* GraphQL */ `
  mutation UpdateSignInUsers(
    $input: UpdateSignInUsersInput!
    $condition: ModelSignInUsersConditionInput
  ) {
    updateSignInUsers(input: $input, condition: $condition) {
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
export const deleteSignInUsers = /* GraphQL */ `
  mutation DeleteSignInUsers(
    $input: DeleteSignInUsersInput!
    $condition: ModelSignInUsersConditionInput
  ) {
    deleteSignInUsers(input: $input, condition: $condition) {
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
export const createUsersExistingUser = /* GraphQL */ `
  mutation CreateUsersExistingUser(
    $input: CreateUsersExistingUserInput!
    $condition: ModelUsersExistingUserConditionInput
  ) {
    createUsersExistingUser(input: $input, condition: $condition) {
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
export const updateUsersExistingUser = /* GraphQL */ `
  mutation UpdateUsersExistingUser(
    $input: UpdateUsersExistingUserInput!
    $condition: ModelUsersExistingUserConditionInput
  ) {
    updateUsersExistingUser(input: $input, condition: $condition) {
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
export const deleteUsersExistingUser = /* GraphQL */ `
  mutation DeleteUsersExistingUser(
    $input: DeleteUsersExistingUserInput!
    $condition: ModelUsersExistingUserConditionInput
  ) {
    deleteUsersExistingUser(input: $input, condition: $condition) {
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
