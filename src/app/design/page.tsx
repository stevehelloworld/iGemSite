import type { Metadata } from "next";
import WikiPage from "@/components/WikiPage";

export const metadata: Metadata = {
  title: "Design",
};

export default function Page() {
  return <WikiPage slug="design" />;
}
