import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { homepageSchema } from "./schemas/homepage";

export default defineConfig({
  name: "default",
  title: "Blogtec Website",
  projectId: "jp4u2mib",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [homepageSchema],
  },
});
