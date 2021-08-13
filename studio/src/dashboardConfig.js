export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6116575a143d290a8dad5e4f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-iqicy8th",
                  apiId: "3e92bad0-9338-4705-b97d-1b9c96d6633d",
                },
                {
                  buildHookId: "6116575bd8515b0944da0413",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-fru72vh2",
                  apiId: "fdd6e204-cc08-4496-a4b9-ce5bd34c7b3f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/vosaul/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-fru72vh2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
