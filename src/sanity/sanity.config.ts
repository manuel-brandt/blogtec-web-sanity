import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { homepageSchema } from "./schemas/homepage";

export default defineConfig({
  name: "default",
  title: "Blogtec Website",
  projectId: "jp4u2mib",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [homepageSchema],
  },
});
