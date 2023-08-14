import { MetadataRoute } from "next";
import { getAllProject } from "./projects/[slug]/page";

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
        {
            url: baseURL + "/projects",
            lastModified: new Date(),
        },
        ...projectsURL,
    ];
}
