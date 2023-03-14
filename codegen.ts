import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.API_URL]: {
        headers: { authorization: `Bearer ${process.env.API_TOKEN}` },
      },
    },
  ],
  documents: "src/**/*.ts",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
