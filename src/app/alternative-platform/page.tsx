import type { Metadata } from "next";
import WikiPage from "@/components/WikiPage";

export const metadata: Metadata = {
  title: "Alternative Platform",
};

export default function Page() {
  return <WikiPage slug="alternative-platform" />;
}
