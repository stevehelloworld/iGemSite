import type { Metadata } from "next";
import WikiPage from "@/components/WikiPage";

export const metadata: Metadata = {
  title: "Safety And Security",
};

export default function Page() {
  return <WikiPage slug="safety-and-security" />;
}
