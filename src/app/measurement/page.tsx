import type { Metadata } from "next";
import WikiPage from "@/components/WikiPage";

export const metadata: Metadata = {
  title: "Measurement",
};

export default function Page() {
  return <WikiPage slug="measurement" />;
}
