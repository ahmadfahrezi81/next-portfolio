import { MetadataRoute } from "next";
import { createClient } from "contentful";

async function getAllProject() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    const res = await client.getEntries({
        content_type: "project",
    });

    return res.items;
}

export default async function sitemap() {
    const baseURL = "https://www.ahmadfahrezi.com";

    // Get All Posts from CMS
    const projects = await getAllProject();
    const projectsURL =
        projects?.map((project) => {
            return {
                url: `${baseURL}/projects/${project.fields.slug}`,
                lastModified: new Date(),
            };
        }) ?? [];

    return [
        {
            url: baseURL,
            lastModified: new Date(),
        },
        {
            url: baseURL + "/about",
            lastModified: new Date(),
        },
        {
            url: baseURL + "/projects",
            lastModified: new Date(),
        },
        ...projectsURL,
    ];
}
