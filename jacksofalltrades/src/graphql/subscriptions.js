/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoles = /* GraphQL */ `
  subscription OnCreateRoles {
    onCreateRoles {
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
export const onUpdateRoles = /* GraphQL */ `
  subscription OnUpdateRoles {
    onUpdateRoles {
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
export const onDeleteRoles = /* GraphQL */ `
  subscription OnDeleteRoles {
    onDeleteRoles {
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
export const onCreateUserRolesReference = /* GraphQL */ `
  subscription OnCreateUserRolesReference {
    onCreateUserRolesReference {
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
export const onUpdateUserRolesReference = /* GraphQL */ `
  subscription OnUpdateUserRolesReference {
    onUpdateUserRolesReference {
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
export const onDeleteUserRolesReference = /* GraphQL */ `
  subscription OnDeleteUserRolesReference {
    onDeleteUserRolesReference {
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
export const onCreateLogins = /* GraphQL */ `
  subscription OnCreateLogins {
    onCreateLogins {
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
export const onUpdateLogins = /* GraphQL */ `
  subscription OnUpdateLogins {
    onUpdateLogins {
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
export const onDeleteLogins = /* GraphQL */ `
  subscription OnDeleteLogins {
    onDeleteLogins {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
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
export const onCreateSkillProfile = /* GraphQL */ `
  subscription OnCreateSkillProfile {
    onCreateSkillProfile {
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
export const onUpdateSkillProfile = /* GraphQL */ `
  subscription OnUpdateSkillProfile {
    onUpdateSkillProfile {
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
export const onDeleteSkillProfile = /* GraphQL */ `
  subscription OnDeleteSkillProfile {
    onDeleteSkillProfile {
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
