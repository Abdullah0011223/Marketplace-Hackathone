// 'use client'

// /**
//  * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
//  */

// import {visionTool} from '@sanity/vision'
// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'

// // Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import {apiVersion, dataset, projectId} from './src/sanity/env.js'
// import {schema} from './src/sanity/schemaTypes'
// import {structure} from './src/sanity/structure'

// export default defineConfig({
//   basePath: '/studio',
//   projectId,
//   dataset,
//   // Add and edit the content schema in the './sanity/schemaTypes' folder
//   schema,
//   plugins: [
//     structureTool({structure}),
//     // Vision is for querying with GROQ from inside the Studio
//     // https://www.sanity.io/docs/the-vision-plugin
//     visionTool({defaultApiVersion: apiVersion}),
//   ],
// })






// 'use client';

// /**
//  * This configuration is used for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
//  */

// import { visionTool } from '@sanity/vision';
// import { defineConfig } from 'sanity';
// import { apiVersion, dataset, projectId } from './src/sanity/env';
// import { schema } from './src/sanity/schemaTypes';
// import S from 'sanity/desk'; // Import the desk structure builder

// export default defineConfig({
//   basePath: '/studio',
//   projectId,
//   dataset,
//   schema,
//   plugins: [
//     visionTool({ defaultApiVersion: apiVersion }), // Vision plugin for GROQ queries
//   ],
//   // Define custom structure here
//   structure: (S) =>
//     S.list()
//       .title('Content')
//       .items(S.documentTypeListItems()),
// });






// 'use client';

// /**
//  * This configuration is used for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
//  */

// import { visionTool } from '@sanity/vision';
// import { defineConfig } from 'sanity';
// import { apiVersion, dataset, projectId } from './src/sanity/env';
// import { schema } from './src/sanity/schemaTypes';
// import { structure } from './src/sanity/structure';

// export default defineConfig({
//   basePath: '/studio',
//   projectId,
//   dataset,
//   schema,
//   plugins: [
//     visionTool({ defaultApiVersion: apiVersion }), // Vision plugin for GROQ queries
//   ],
//   structure, // Use the imported structure
// });

'use client';

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk'; // 🟢 deskTool import karein
import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schema } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({ structure }), // 🟢 Structure enable karne ke liye deskTool add karein
    visionTool({ defaultApiVersion: apiVersion }), // Vision plugin for GROQ queries
  ],
});
