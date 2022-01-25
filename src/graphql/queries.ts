/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
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
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        post {
          id
          content
          image
          createdAt
          updatedAt
          userPostsId
        }
        createdAt
        updatedAt
        userLikesId
        postLikesId
      }
      nextToken
    }
  }
`;
