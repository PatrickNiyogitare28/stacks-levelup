import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "tasks" */
  delete_tasks?: Maybe<Tasks_Mutation_Response>;
  /** delete single row from the table: "tasks" */
  delete_tasks_by_pk?: Maybe<Tasks>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "tasks" */
  insert_tasks?: Maybe<Tasks_Mutation_Response>;
  /** insert a single row into the table: "tasks" */
  insert_tasks_one?: Maybe<Tasks>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "tasks" */
  update_tasks?: Maybe<Tasks_Mutation_Response>;
  /** update single row of the table: "tasks" */
  update_tasks_by_pk?: Maybe<Tasks>;
  /** update multiples rows of table: "tasks" */
  update_tasks_many?: Maybe<Array<Maybe<Tasks_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_TasksArgs = {
  where: Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tasks_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_TasksArgs = {
  objects: Array<Tasks_Insert_Input>;
  on_conflict?: InputMaybe<Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tasks_OneArgs = {
  object: Tasks_Insert_Input;
  on_conflict?: InputMaybe<Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TasksArgs = {
  _inc?: InputMaybe<Tasks_Inc_Input>;
  _set?: InputMaybe<Tasks_Set_Input>;
  where: Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tasks_By_PkArgs = {
  _inc?: InputMaybe<Tasks_Inc_Input>;
  _set?: InputMaybe<Tasks_Set_Input>;
  pk_columns: Tasks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tasks_ManyArgs = {
  updates: Array<Tasks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** fetch aggregated fields from the table: "tasks" */
  tasks_aggregate: Tasks_Aggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootTasksArgs = {
  distinct_on?: InputMaybe<Array<Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tasks_Order_By>>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};


export type Query_RootTasks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tasks_Order_By>>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};


export type Query_RootTasks_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** fetch aggregated fields from the table: "tasks" */
  tasks_aggregate: Tasks_Aggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
  /** fetch data from the table in a streaming manner: "tasks" */
  tasks_stream: Array<Tasks>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootTasksArgs = {
  distinct_on?: InputMaybe<Array<Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tasks_Order_By>>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};


export type Subscription_RootTasks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tasks_Order_By>>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};


export type Subscription_RootTasks_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTasks_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tasks_Stream_Cursor_Input>>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "tasks" */
export type Tasks = {
  __typename?: 'tasks';
  completed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['timestamptz'];
  end_time: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  start_time: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['Int'];
};

/** aggregated selection of "tasks" */
export type Tasks_Aggregate = {
  __typename?: 'tasks_aggregate';
  aggregate?: Maybe<Tasks_Aggregate_Fields>;
  nodes: Array<Tasks>;
};

/** aggregate fields of "tasks" */
export type Tasks_Aggregate_Fields = {
  __typename?: 'tasks_aggregate_fields';
  avg?: Maybe<Tasks_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tasks_Max_Fields>;
  min?: Maybe<Tasks_Min_Fields>;
  stddev?: Maybe<Tasks_Stddev_Fields>;
  stddev_pop?: Maybe<Tasks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tasks_Stddev_Samp_Fields>;
  sum?: Maybe<Tasks_Sum_Fields>;
  var_pop?: Maybe<Tasks_Var_Pop_Fields>;
  var_samp?: Maybe<Tasks_Var_Samp_Fields>;
  variance?: Maybe<Tasks_Variance_Fields>;
};


/** aggregate fields of "tasks" */
export type Tasks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tasks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Tasks_Avg_Fields = {
  __typename?: 'tasks_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "tasks". All fields are combined with a logical 'AND'. */
export type Tasks_Bool_Exp = {
  _and?: InputMaybe<Array<Tasks_Bool_Exp>>;
  _not?: InputMaybe<Tasks_Bool_Exp>;
  _or?: InputMaybe<Array<Tasks_Bool_Exp>>;
  completed?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_time?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  start_time?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "tasks" */
export enum Tasks_Constraint {
  /** unique or primary key constraint on columns "id" */
  TasksPkey = 'tasks_pkey'
}

/** input type for incrementing numeric columns in table "tasks" */
export type Tasks_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "tasks" */
export type Tasks_Insert_Input = {
  completed?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  end_time?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  start_time?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Tasks_Max_Fields = {
  __typename?: 'tasks_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end_time?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Tasks_Min_Fields = {
  __typename?: 'tasks_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end_time?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "tasks" */
export type Tasks_Mutation_Response = {
  __typename?: 'tasks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tasks>;
};

/** on_conflict condition type for table "tasks" */
export type Tasks_On_Conflict = {
  constraint: Tasks_Constraint;
  update_columns?: Array<Tasks_Update_Column>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};

/** Ordering options when selecting data from "tasks". */
export type Tasks_Order_By = {
  completed?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tasks */
export type Tasks_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "tasks" */
export enum Tasks_Select_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "tasks" */
export type Tasks_Set_Input = {
  completed?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  end_time?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  start_time?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Tasks_Stddev_Fields = {
  __typename?: 'tasks_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Tasks_Stddev_Pop_Fields = {
  __typename?: 'tasks_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Tasks_Stddev_Samp_Fields = {
  __typename?: 'tasks_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "tasks" */
export type Tasks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tasks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tasks_Stream_Cursor_Value_Input = {
  completed?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  end_time?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  start_time?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Tasks_Sum_Fields = {
  __typename?: 'tasks_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "tasks" */
export enum Tasks_Update_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Tasks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Tasks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tasks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tasks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tasks_Var_Pop_Fields = {
  __typename?: 'tasks_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Tasks_Var_Samp_Fields = {
  __typename?: 'tasks_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Tasks_Variance_Fields = {
  __typename?: 'tasks_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at?: Maybe<Scalars['timestamptz']>;
  email: Scalars['String'];
  full_name: Scalars['String'];
  id: Scalars['Int'];
  password: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  full_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type SignupMutationVariables = Exact<{
  full_name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignupMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: number, full_name: string } | null };

export type LoginQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type LoginQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: number, email: string, full_name: string, password: string }> };

export type AddTaskMutationVariables = Exact<{
  name: Scalars['String'];
  start_time: Scalars['String'];
  end_time: Scalars['String'];
  user_id: Scalars['Int'];
}>;


export type AddTaskMutation = { __typename?: 'mutation_root', insert_tasks_one?: { __typename?: 'tasks', id: number, name: string, start_time: string, end_time: string, created_at: any, updated_at: any } | null };

export type FetchTasksQueryVariables = Exact<{
  user_id: Scalars['Int'];
}>;


export type FetchTasksQuery = { __typename?: 'query_root', tasks: Array<{ __typename?: 'tasks', id: number, name: string, start_time: string, end_time: string, completed?: boolean | null, created_at: any, updated_at: any }> };

export type GetTaskByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetTaskByIdQuery = { __typename?: 'query_root', tasks_by_pk?: { __typename?: 'tasks', id: number, name: string, completed?: boolean | null, user_id: number } | null };

export type UpdateTaskMutationVariables = Exact<{
  id: Scalars['Int'];
  completed: Scalars['Boolean'];
}>;


export type UpdateTaskMutation = { __typename?: 'mutation_root', update_tasks_by_pk?: { __typename?: 'tasks', id: number, name: string, completed?: boolean | null } | null };

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTaskMutation = { __typename?: 'mutation_root', delete_tasks_by_pk?: { __typename?: 'tasks', id: number, name: string, completed?: boolean | null } | null };


export const SignupDocument = /*#__PURE__*/ `
    mutation Signup($full_name: String!, $email: String!, $password: String!) {
  insert_users_one(
    object: {full_name: $full_name, email: $email, password: $password}
  ) {
    id
    full_name
  }
}
    `;
export const useSignupMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<SignupMutation, TError, SignupMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<SignupMutation, TError, SignupMutationVariables, TContext>(
      ['Signup'],
      (variables?: SignupMutationVariables) => fetcher<SignupMutation, SignupMutationVariables>(client, SignupDocument, variables, headers)(),
      options
    );
export const LoginDocument = /*#__PURE__*/ `
    query Login($email: String!) {
  users(where: {email: {_eq: $email}}) {
    id
    email
    full_name
    password
  }
}
    `;
export const useLoginQuery = <
      TData = LoginQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: LoginQueryVariables,
      options?: UseQueryOptions<LoginQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<LoginQuery, TError, TData>(
      ['Login', variables],
      fetcher<LoginQuery, LoginQueryVariables>(client, LoginDocument, variables, headers),
      options
    );

useLoginQuery.getKey = (variables: LoginQueryVariables) => ['Login', variables];
;

export const AddTaskDocument = /*#__PURE__*/ `
    mutation addTask($name: String!, $start_time: String!, $end_time: String!, $user_id: Int!) {
  insert_tasks_one(
    object: {name: $name, start_time: $start_time, end_time: $end_time, user_id: $user_id}
  ) {
    id
    name
    start_time
    end_time
    created_at
    updated_at
  }
}
    `;
export const useAddTaskMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddTaskMutation, TError, AddTaskMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddTaskMutation, TError, AddTaskMutationVariables, TContext>(
      ['addTask'],
      (variables?: AddTaskMutationVariables) => fetcher<AddTaskMutation, AddTaskMutationVariables>(client, AddTaskDocument, variables, headers)(),
      options
    );
export const FetchTasksDocument = /*#__PURE__*/ `
    query fetchTasks($user_id: Int!) {
  tasks(where: {user_id: {_eq: $user_id}}) {
    id
    name
    start_time
    end_time
    completed
    created_at
    updated_at
  }
}
    `;
export const useFetchTasksQuery = <
      TData = FetchTasksQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: FetchTasksQueryVariables,
      options?: UseQueryOptions<FetchTasksQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FetchTasksQuery, TError, TData>(
      ['fetchTasks', variables],
      fetcher<FetchTasksQuery, FetchTasksQueryVariables>(client, FetchTasksDocument, variables, headers),
      options
    );

useFetchTasksQuery.getKey = (variables: FetchTasksQueryVariables) => ['fetchTasks', variables];
;

export const GetTaskByIdDocument = /*#__PURE__*/ `
    query getTaskById($id: Int!) {
  tasks_by_pk(id: $id) {
    id
    name
    completed
    user_id
  }
}
    `;
export const useGetTaskByIdQuery = <
      TData = GetTaskByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetTaskByIdQueryVariables,
      options?: UseQueryOptions<GetTaskByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetTaskByIdQuery, TError, TData>(
      ['getTaskById', variables],
      fetcher<GetTaskByIdQuery, GetTaskByIdQueryVariables>(client, GetTaskByIdDocument, variables, headers),
      options
    );

useGetTaskByIdQuery.getKey = (variables: GetTaskByIdQueryVariables) => ['getTaskById', variables];
;

export const UpdateTaskDocument = /*#__PURE__*/ `
    mutation updateTask($id: Int!, $completed: Boolean!) {
  update_tasks_by_pk(pk_columns: {id: $id}, _set: {completed: $completed}) {
    id
    name
    completed
  }
}
    `;
export const useUpdateTaskMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateTaskMutation, TError, UpdateTaskMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateTaskMutation, TError, UpdateTaskMutationVariables, TContext>(
      ['updateTask'],
      (variables?: UpdateTaskMutationVariables) => fetcher<UpdateTaskMutation, UpdateTaskMutationVariables>(client, UpdateTaskDocument, variables, headers)(),
      options
    );
export const DeleteTaskDocument = /*#__PURE__*/ `
    mutation deleteTask($id: Int!) {
  delete_tasks_by_pk(id: $id) {
    id
    name
    completed
  }
}
    `;
export const useDeleteTaskMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteTaskMutation, TError, DeleteTaskMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteTaskMutation, TError, DeleteTaskMutationVariables, TContext>(
      ['deleteTask'],
      (variables?: DeleteTaskMutationVariables) => fetcher<DeleteTaskMutation, DeleteTaskMutationVariables>(client, DeleteTaskDocument, variables, headers)(),
      options
    );