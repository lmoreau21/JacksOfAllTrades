/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoles = /* GraphQL */ `
  query GetRoles($id: ID!) {
    getRoles(id: $id) {
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
export const listRoles = /* GraphQL */ `
  query ListRoles(
    $filter: ModelRolesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncRoles = /* GraphQL */ `
  query SyncRoles(
    $filter: ModelRolesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRoles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUserRolesReference = /* GraphQL */ `
  query GetUserRolesReference($id: ID!) {
    getUserRolesReference(id: $id) {
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
export const listUserRolesReferences = /* GraphQL */ `
  query ListUserRolesReferences(
    $filter: ModelUserRolesReferenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserRolesReferences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        roleID
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
export const syncUserRolesReferences = /* GraphQL */ `
  query SyncUserRolesReferences(
    $filter: ModelUserRolesReferenceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserRolesReferences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        roleID
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
export const getLogins = /* GraphQL */ `
  query GetLogins($id: ID!) {
    getLogins(id: $id) {
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
export const listLogins = /* GraphQL */ `
  query ListLogins(
    $filter: ModelLoginsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userName
        userPassword
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        loginsUsersId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLogins = /* GraphQL */ `
  query SyncLogins(
    $filter: ModelLoginsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLogins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userName
        userPassword
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        loginsUsersId
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
        userName
        userEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usersUserRolesReferenceId
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
        userName
        userEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        usersUserRolesReferenceId
      }
      nextToken
      startedAt
    }
  }
`;
export const getSkillProfile = /* GraphQL */ `
  query GetSkillProfile($id: ID!) {
    getSkillProfile(id: $id) {
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
export const listSkillProfiles = /* GraphQL */ `
  query ListSkillProfiles(
    $filter: ModelSkillProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkillProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSkillProfiles = /* GraphQL */ `
  query SyncSkillProfiles(
    $filter: ModelSkillProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSkillProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
