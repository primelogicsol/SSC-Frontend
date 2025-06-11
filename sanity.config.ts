'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
import blockContent from '@/sanity/schemaTypes/blockContent'

// Custom layout jisme CSS inject ki gayi hai
import { StudioLayout } from '@/sanity/studio/StudioLayout'


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
export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,

  schema,

  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  // ✅ Inject custom layout here
  studio: {
    components: {
      layout: StudioLayout,
    },
  },
})
