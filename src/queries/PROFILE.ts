import { graphql } from "@/gql/gql";

export const SET_PROFILE = graphql(/* GraphQL */ `
  mutation setProfile($userId: String!, $profile: ProfileInput!) {
    setProfile(userId: $userId, profile: $profile) {
      username
      about
    }
  }
`);

export const GET_PROFILE = graphql(/* GraphQL */ `
  query getProfile($userId: String!) {
    getProfile(userId: $userId) {
      username
      about
    }
  }
`);

export const GET_PUBLIC_PROFILE = graphql(/* GraphQL */ `
  query getPublicProfile($username: String!) {
    getPublicProfile(username: $username) {
      username
      about
    }
    getSchedule(username: $username) {
      userId
      username
    }
  }
`);
