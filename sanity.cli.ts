// /**
// * This configuration file lets you run `$ sanity [command]` in this folder
// * Go to https://www.sanity.io/docs/cli to learn more.
// **/
// import { defineCliConfig } from 'sanity/cli'

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

// export default defineCliConfig({ api: { projectId, dataset } })




/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from 'sanity/cli';

const projectId: string = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

const dataset: string = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});

function assertValue(value: string | undefined, errorMessage: string): string {
  if (!value) {
    throw new Error(errorMessage);
  }
  return value;
}
