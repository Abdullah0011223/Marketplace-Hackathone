// export const apiVersion =
//   process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18';

// export const dataset = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_DATASET,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
// );

// export const projectId = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
// );

// function assertValue(value, errorMessage) {
//   if (value === undefined) {
//     throw new Error(errorMessage);
//   }

//   return value;
// }
// a






export const apiVersion: string =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18';

export const dataset: string = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId: string = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

function assertValue(value: string | undefined, errorMessage: string): string {
  if (!value) {
    throw new Error(errorMessage);
  }
  return value;
}
