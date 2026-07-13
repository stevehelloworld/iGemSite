import type { Metadata } from "next";
import WikiPage from "@/components/WikiPage";

export const metadata: Metadata = {
  title: "Parts",
};

export default function Page() {
  return <WikiPage slug="parts" />;
}
