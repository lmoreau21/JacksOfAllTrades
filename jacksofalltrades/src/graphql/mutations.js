/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoles = /* GraphQL */ `
  mutation CreateRoles(
    $input: CreateRolesInput!
    $condition: ModelRolesConditionInput
  ) {
    createRoles(input: $input, condition: $condition) {
      id
      roleName
      description
      isEnabled
      displayName
      visable
      userRolesReferenceID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateRoles = /* GraphQL */ `
  mutation UpdateRoles(
    $input: UpdateRolesInput!
    $condition: ModelRolesConditionInput
  ) {
    updateRoles(input: $input, condition: $condition) {
      id
      roleName
      description
      isEnabled
      displayName
      visable
      userRolesReferenceID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteRoles = /* GraphQL */ `
  mutation DeleteRoles(
    $input: DeleteRolesInput!
    $condition: ModelRolesConditionInput
  ) {
    deleteRoles(input: $input, condition: $condition) {
      id
      roleName
      description
      isEnabled
      displayName
      visable
      userRolesReferenceID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUserRolesReference = /* GraphQL */ `
  mutation CreateUserRolesReference(
    $input: CreateUserRolesReferenceInput!
    $condition: ModelUserRolesReferenceConditionInput
  ) {
    createUserRolesReference(input: $input, condition: $condition) {
      id
      userID
      roleID
      userRoles {
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
export const updateUserRolesReference = /* GraphQL */ `
  mutation UpdateUserRolesReference(
    $input: UpdateUserRolesReferenceInput!
    $condition: ModelUserRolesReferenceConditionInput
  ) {
    updateUserRolesReference(input: $input, condition: $condition) {
      id
      userID
      roleID
      userRoles {
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
export const deleteUserRolesReference = /* GraphQL */ `
  mutation DeleteUserRolesReference(
    $input: DeleteUserRolesReferenceInput!
    $condition: ModelUserRolesReferenceConditionInput
  ) {
    deleteUserRolesReference(input: $input, condition: $condition) {
      id
      userID
      roleID
      userRoles {
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
export const createLogins = /* GraphQL */ `
  mutation CreateLogins(
    $input: CreateLoginsInput!
    $condition: ModelLoginsConditionInput
  ) {
    createLogins(input: $input, condition: $condition) {
      id
      userName
      userPassword
      Users {
        id
        firstName
        lastName
        userName
        userEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usersUserRolesReferenceId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      loginsUsersId
    }
  }
`;
export const updateLogins = /* GraphQL */ `
  mutation UpdateLogins(
    $input: UpdateLoginsInput!
    $condition: ModelLoginsConditionInput
  ) {
    updateLogins(input: $input, condition: $condition) {
      id
      userName
      userPassword
      Users {
        id
        firstName
        lastName
        userName
        userEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usersUserRolesReferenceId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      loginsUsersId
    }
  }
`;
export const deleteLogins = /* GraphQL */ `
  mutation DeleteLogins(
    $input: DeleteLoginsInput!
    $condition: ModelLoginsConditionInput
  ) {
    deleteLogins(input: $input, condition: $condition) {
      id
      userName
      userPassword
      Users {
        id
        firstName
        lastName
        userName
        userEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usersUserRolesReferenceId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      loginsUsersId
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
      userName
      userEmail
      UserRolesReference {
        id
        userID
        roleID
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
      usersUserRolesReferenceId
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
      userName
      userEmail
      UserRolesReference {
        id
        userID
        roleID
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
      usersUserRolesReferenceId
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
      userName
      userEmail
      UserRolesReference {
        id
        userID
        roleID
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
      usersUserRolesReferenceId
    }
  }
`;
export const createSkillProfile = /* GraphQL */ `
  mutation CreateSkillProfile(
    $input: CreateSkillProfileInput!
    $condition: ModelSkillProfileConditionInput
  ) {
    createSkillProfile(input: $input, condition: $condition) {
      id
      title
      description
      time
      photo
      difficulty
      category
      userInteraction
      videoRights
      authorAccountID
      video
      instructions
      materialsList
      requiresMaterials
      photoRights
      instructionRights
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSkillProfile = /* GraphQL */ `
  mutation UpdateSkillProfile(
    $input: UpdateSkillProfileInput!
    $condition: ModelSkillProfileConditionInput
  ) {
    updateSkillProfile(input: $input, condition: $condition) {
      id
      title
      description
      time
      photo
      difficulty
      category
      userInteraction
      videoRights
      authorAccountID
      video
      instructions
      materialsList
      requiresMaterials
      photoRights
      instructionRights
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSkillProfile = /* GraphQL */ `
  mutation DeleteSkillProfile(
    $input: DeleteSkillProfileInput!
    $condition: ModelSkillProfileConditionInput
  ) {
    deleteSkillProfile(input: $input, condition: $condition) {
      id
      title
      description
      time
      photo
      difficulty
      category
      userInteraction
      videoRights
      authorAccountID
      video
      instructions
      materialsList
      requiresMaterials
      photoRights
      instructionRights
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
