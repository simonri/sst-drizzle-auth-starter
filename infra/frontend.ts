import { rds } from "./database";
import { secrets } from "./secrets";

export const web = new sst.aws.Nextjs("Web", {
  path: "packages/frontend",
  link: [rds, secrets.googleClientId, secrets.googleClientSecret],
  environment: {
    AUTH_SECRET: "secret",
  },
});
