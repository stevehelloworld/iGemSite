import type { NextConfig } from "next";

const teamSlug = process.env.IGEM_TEAM_SLUG?.trim();
const basePath = teamSlug ? `/${teamSlug}` : undefined;

const nextConfig: NextConfig = {
  // A real static export is produced on every build, so lessons never end at localhost only.
  output: "export",
  trailingSlash: true,
  // Local lessons stay at `/`; the official GitLab job sets `IGEM_TEAM_SLUG=vis`.
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
