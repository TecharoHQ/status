import { defineConfig } from "issue-status";
import { github } from "issue-status/providers";

export default defineConfig({
  name: "Techaro Status",
  description: "Uptime and history for Techaro services",
  provider: github({
    owner: "TecharoHQ",
    repo: "status",
  }),
});
