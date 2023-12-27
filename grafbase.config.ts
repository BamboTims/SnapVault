import { graph, auth, config, connector } from "@grafbase/sdk";

const g = graph.Standalone();

const pg = connector.Postgres("Postgres", {
  url: g.env(process.env.DATABASE_URL),
});

g.datasource(pg);

// const User = g.model("User", {
//   name: g.string().length({ min: 2, max: 20 }),
//   email: g.string().unique(),
//   avatarUrl: g.url(),
//   description: g.string().optional(),
//   githubUrl: g.string(),
//   LinkedInUrl: g.url().optional(),
//   projects: g
//     .relation(() => Project)
//     .list()
//     .optional(),
// });

// const Project = g.model("Project", {
//   title: g.string().length({ min: 3 }),
//   description: g.string(),
//   image: g.url(),
//   liveSiteUrl: g.url(),
//   githubUrl: g.url(),
//   category: g.string().search(),
//   createdBy: g.relation(() => User),
// });

export default config({
  graph: g,
});
