/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
