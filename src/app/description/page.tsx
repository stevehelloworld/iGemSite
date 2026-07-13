import type { Metadata } from "next";
import WikiPage from "@/components/WikiPage";

export const metadata: Metadata = {
  title: "Description",
};

export default function Page() {
  return <WikiPage slug="description" />;
}
