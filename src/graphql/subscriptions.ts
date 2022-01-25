/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      name
      email
      image
      posts {
        items {
          id
          content
          image
          createdAt
          updatedAt
          userPostsId
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          userLikesId
          postLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      name
      email
      image
      posts {
        items {
          id
          content
          image
          createdAt
          updatedAt
          userPostsId
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          userLikesId
          postLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      name
      email
      image
      posts {
        items {
          id
          content
          image
          createdAt
          updatedAt
          userPostsId
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          userLikesId
          postLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      content
      image
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          userLikesId
          postLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      content
      image
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          userLikesId
          postLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      content
      image
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          createdAt
          updatedAt
          userLikesId
          postLikesId
        }
        nextToken
      }
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        content
        image
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      createdAt
      updatedAt
      userLikesId
      postLikesId
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
      id
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        content
        image
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      createdAt
      updatedAt
      userLikesId
      postLikesId
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
      id
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        content
        image
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userPostsId
      }
      createdAt
      updatedAt
      userLikesId
      postLikesId
    }
  }
`;
