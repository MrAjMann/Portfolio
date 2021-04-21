// Talks to sanity
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: "pthnz3p4",
  dataset: "production"
})