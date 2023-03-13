import { gql } from "@apollo/client";

export const SET_PROFILE = gql`
  mutation setProfile($userId: String, $profile: ProfileInput) {
    setProfile(userId: $userId, profile: $profile) {
      username
    }
  }
`;

export const GET_PROFILE = gql`
  query getProfile($userId: String) {
    getProfile(userId: $userId) {
      username
    }
  }
`;

export const GET_PUBLIC_PROFILE = gql`
  query getPublicProfile($username: String) {
    getProfile(username: $username) {
      username
    }
    getSchedule(username: $username) {
      userId
      username
    }
  }
`;
