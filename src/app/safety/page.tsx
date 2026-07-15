import Link from "next/link";

export default function SafetyAliasPage() {
  return (
    <div className="page-shell page-stack">
      <div className="lesson-placeholder">
        <strong>Safety has a Standard destination</strong>
        <p>
          Continue to <Link href="/safety-and-security">/safety-and-security</Link>.
        </p>
      </div>
    </div>
  );
}
