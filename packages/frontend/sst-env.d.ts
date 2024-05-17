/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    GoogleClientId: {
      type: "sst.sst.Secret"
      value: string
    }
    GoogleClientSecret: {
      type: "sst.sst.Secret"
      value: string
    }
    MyPostgres: {
      clusterArn: string
      database: string
      secretArn: string
      type: "sst.aws.Postgres"
    }
  }
}
export {}