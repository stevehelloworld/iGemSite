import Link from "next/link";
import Card from "@/components/Card";
import Section from "@/components/Section";

const starterProblem = {
  tag: "Pb + Cd",
  title: "Heavy-metal pollution",
  body: "This first card is working. In Lesson 5 it will grow into a data-driven list.",
};

export default function Home() {
  return (
    <div>
      <section className="starter-hero">
        <div className="page-shell starter-hero__content">
          <p className="eyebrow">VIS iGEM 2026 · Student build</p>
          <h1>Cadture</h1>
          <p className="starter-hero__lead">
            Detect, capture, sequester, and remove lead and cadmium from wastewater.
          </p>
          <div className="starter-actions">
            <Link className="primary-button" href="/description">
              Open the page pipeline
            </Link>
            <span className="build-badge">Starter builds successfully</span>
          </div>
        </div>
      </section>

      <div className="page-shell page-stack">
        <Section eyebrow="Lesson 2" title="The Problem">
          <div className="starter-grid">
            <Card
              title={starterProblem.title}
              description={starterProblem.body}
              tag={starterProblem.tag}
            />
            {/* TODO(S02-2): build a second semantic problem card without copying the entire section. */}
            <div className="lesson-placeholder">
              <strong>Next visible result</strong>
              <p>Add the Cadmium Threat card here in Lesson 2.</p>
            </div>
          </div>
        </Section>

        <Section eyebrow="Lessons 4–5" title="Our Solution">
          {/* TODO(S04-2): replace these placeholders with reusable Card components. */}
          {/* TODO(S05-1): move the solution objects into an array and render them with .map(). */}
          <div className="starter-grid starter-grid--five">
            <div className="lesson-placeholder lesson-placeholder--small">
              <span className="step-number">1</span>
              <strong>Detection</strong>
            </div>
            <div className="lesson-placeholder lesson-placeholder--small">
              <span className="step-number">2</span>
              <strong>Capture</strong>
            </div>
            <div className="lesson-placeholder lesson-placeholder--small">
              <span className="step-number">3</span>
              <strong>Sequestration</strong>
            </div>
            <div className="lesson-placeholder lesson-placeholder--small">
              <span className="step-number">4</span>
              <strong>Removal</strong>
            </div>
            <div className="lesson-placeholder lesson-placeholder--small">
              <span className="step-number">5</span>
              <strong>Clean Water</strong>
            </div>
          </div>
        </Section>

        <Section eyebrow="Lesson 11" title="Markdown-driven homepage">
          <div className="lesson-placeholder">
            <strong>Not connected yet</strong>
            <p>
              The final version reads all homepage cards from <code>content/home.md</code>.
              The starter keeps this message visible so the class can see exactly when the
              connection begins working.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
