/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSignIn = /* GraphQL */ `
  subscription OnCreateSignIn {
    onCreateSignIn {
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
export const onUpdateSignIn = /* GraphQL */ `
  subscription OnUpdateSignIn {
    onUpdateSignIn {
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
export const onDeleteSignIn = /* GraphQL */ `
  subscription OnDeleteSignIn {
    onDeleteSignIn {
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
export const onCreateExistingUser = /* GraphQL */ `
  subscription OnCreateExistingUser {
    onCreateExistingUser {
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
export const onUpdateExistingUser = /* GraphQL */ `
  subscription OnUpdateExistingUser {
    onUpdateExistingUser {
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
export const onDeleteExistingUser = /* GraphQL */ `
  subscription OnDeleteExistingUser {
    onDeleteExistingUser {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
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
export const onCreateSignUp = /* GraphQL */ `
  subscription OnCreateSignUp {
    onCreateSignUp {
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
export const onUpdateSignUp = /* GraphQL */ `
  subscription OnUpdateSignUp {
    onUpdateSignUp {
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
export const onDeleteSignUp = /* GraphQL */ `
  subscription OnDeleteSignUp {
    onDeleteSignUp {
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
export const onCreateSkillprofile = /* GraphQL */ `
  subscription OnCreateSkillprofile {
    onCreateSkillprofile {
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
export const onUpdateSkillprofile = /* GraphQL */ `
  subscription OnUpdateSkillprofile {
    onUpdateSkillprofile {
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
export const onDeleteSkillprofile = /* GraphQL */ `
  subscription OnDeleteSkillprofile {
    onDeleteSkillprofile {
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
export const onCreateSignInUsers = /* GraphQL */ `
  subscription OnCreateSignInUsers {
    onCreateSignInUsers {
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
export const onUpdateSignInUsers = /* GraphQL */ `
  subscription OnUpdateSignInUsers {
    onUpdateSignInUsers {
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
export const onDeleteSignInUsers = /* GraphQL */ `
  subscription OnDeleteSignInUsers {
    onDeleteSignInUsers {
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
export const onCreateUsersExistingUser = /* GraphQL */ `
  subscription OnCreateUsersExistingUser {
    onCreateUsersExistingUser {
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
export const onUpdateUsersExistingUser = /* GraphQL */ `
  subscription OnUpdateUsersExistingUser {
    onUpdateUsersExistingUser {
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
export const onDeleteUsersExistingUser = /* GraphQL */ `
  subscription OnDeleteUsersExistingUser {
    onDeleteUsersExistingUser {
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
