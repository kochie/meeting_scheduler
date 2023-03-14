/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `AWSDate` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 Date](https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates) string. In other words, this scalar type accepts date strings of the form `YYYY-MM-DD`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-05-01**" and "**-9999-01-01**" are both valid dates.  This scalar type can also accept an optional [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators). For example, "**1970-01-01**", "**1970-01-01Z**", "**1970-01-01-07:00**" and "**1970-01-01+05:30**" are all valid dates. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDate: any;
  /** The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 DateTime](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) string. In other words, this scalar type accepts datetime strings of the form `YYYY-MM-DDThh:mm:ss.SSSZ`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-01-01T00:00Z**" and "**-9999-01-01T00:00Z**" are both valid datetime strings.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**1970-01-01T12:00:00.2Z**", "**1970-01-01T12:00:00.277Z**" and "**1970-01-01T12:00:00.123456789Z**" are all valid datetime strings.  The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  The [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) is compulsory for this scalar. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDateTime: any;
  /** The `AWSTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 Time](https://en.wikipedia.org/wiki/ISO_8601#Times) string. In other words, this scalar type accepts time strings of the form `hh:mm:ss.SSS`.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**12:00:00.2**", "**12:00:00.277**" and "**12:00:00.123456789**" are all valid time strings. The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  This scalar type can also accept an optional [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators). For example, "**12:30**", "**12:30Z**", "**12:30:24-07:00**" and "**12:30:24.500+05:30**" are all valid time strings. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSTime: any;
  /** The `AWSURL` scalar type provided by AWS AppSync, represents a valid URL string (Ex: <https://www.amazon.com/>). The URL may use any scheme and may also be a local URL (Ex: <http://localhost/>).  URLs without schemes like "**amazon.com**" or "**www.amazon.com**" are considered invalid. URLs which contain double slashes (two consecutive forward slashes) in their path are also considered invalid. */
  AWSURL: any;
};

export type Appointment = {
  __typename?: 'Appointment';
  endTime?: Maybe<Scalars['AWSDateTime']>;
  startTime?: Maybe<Scalars['AWSDateTime']>;
};

export type Days = {
  __typename?: 'Days';
  friday?: Maybe<Array<Maybe<TimeSlot>>>;
  monday?: Maybe<Array<Maybe<TimeSlot>>>;
  saturday?: Maybe<Array<Maybe<TimeSlot>>>;
  sunday?: Maybe<Array<Maybe<TimeSlot>>>;
  thursday?: Maybe<Array<Maybe<TimeSlot>>>;
  tuesday?: Maybe<Array<Maybe<TimeSlot>>>;
  wednesday?: Maybe<Array<Maybe<TimeSlot>>>;
};

export type DaysInput = {
  friday?: InputMaybe<Array<InputMaybe<TimeSlotInput>>>;
  monday?: InputMaybe<Array<InputMaybe<TimeSlotInput>>>;
  saturday?: InputMaybe<Array<InputMaybe<TimeSlotInput>>>;
  sunday?: InputMaybe<Array<InputMaybe<TimeSlotInput>>>;
  thursday?: InputMaybe<Array<InputMaybe<TimeSlotInput>>>;
  tuesday?: InputMaybe<Array<InputMaybe<TimeSlotInput>>>;
  wednesday?: InputMaybe<Array<InputMaybe<TimeSlotInput>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  makeAppointment?: Maybe<Appointment>;
  setFastmailToken?: Maybe<Scalars['Boolean']>;
  setProfile?: Maybe<Profile>;
  setSchedule?: Maybe<Schedule>;
};


export type MutationMakeAppointmentArgs = {
  endTime: Scalars['AWSDateTime'];
  startTime: Scalars['AWSDateTime'];
  userId: Scalars['String'];
};


export type MutationSetFastmailTokenArgs = {
  token: Scalars['String'];
};


export type MutationSetProfileArgs = {
  profile: ProfileInput;
  userId: Scalars['String'];
};


export type MutationSetScheduleArgs = {
  schedule?: InputMaybe<ScheduleInput>;
  userId?: InputMaybe<Scalars['String']>;
};

export type Profile = {
  __typename?: 'Profile';
  about?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ProfileInput = {
  about?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAvailableAppointments?: Maybe<Array<Maybe<Appointment>>>;
  getPresignDownloadUrl?: Maybe<Scalars['AWSURL']>;
  getPresignUploadUrl?: Maybe<Scalars['AWSURL']>;
  getProfile?: Maybe<Profile>;
  getPublicProfile?: Maybe<Profile>;
  getSchedule?: Maybe<Schedule>;
};


export type QueryGetAvailableAppointmentsArgs = {
  date: Scalars['AWSDate'];
  tz?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};


export type QueryGetPresignDownloadUrlArgs = {
  key: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type QueryGetPresignUploadUrlArgs = {
  key: Scalars['String'];
  userId: Scalars['String'];
};


export type QueryGetProfileArgs = {
  userId: Scalars['String'];
};


export type QueryGetPublicProfileArgs = {
  username: Scalars['String'];
};


export type QueryGetScheduleArgs = {
  userId?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Schedule = {
  __typename?: 'Schedule';
  days?: Maybe<Days>;
  userId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ScheduleInput = {
  days?: InputMaybe<DaysInput>;
};

export type TimeSlot = {
  __typename?: 'TimeSlot';
  endTime?: Maybe<Scalars['AWSTime']>;
  startTime?: Maybe<Scalars['AWSTime']>;
};

export type TimeSlotInput = {
  endTime?: InputMaybe<Scalars['AWSTime']>;
  startTime?: InputMaybe<Scalars['AWSTime']>;
};

export type SetProfileMutationVariables = Exact<{
  userId: Scalars['String'];
  profile: ProfileInput;
}>;


export type SetProfileMutation = { __typename?: 'Mutation', setProfile?: { __typename?: 'Profile', username?: string | null, about?: string | null } | null };

export type GetProfileQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetProfileQuery = { __typename?: 'Query', getProfile?: { __typename?: 'Profile', username?: string | null, about?: string | null } | null };

export type GetPublicProfileQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetPublicProfileQuery = { __typename?: 'Query', getPublicProfile?: { __typename?: 'Profile', username?: string | null, about?: string | null } | null, getSchedule?: { __typename?: 'Schedule', userId?: string | null, username?: string | null } | null };


export const SetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profile"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"profile"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profile"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"about"}}]}}]}}]} as unknown as DocumentNode<SetProfileMutation, SetProfileMutationVariables>;
export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"about"}}]}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
export const GetPublicProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPublicProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPublicProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"about"}}]}},{"kind":"Field","name":{"kind":"Name","value":"getSchedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<GetPublicProfileQuery, GetPublicProfileQueryVariables>;