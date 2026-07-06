import { headingFont, bodyFont } from "@/app/fonts";

export function ArticleContent() {
  return (
    <article className={`max-w-2xl mx-auto px-6 py-16 text-gray-400 leading-[1.8] text-lg ${bodyFont.className}`}>
      <p className="mb-8">
        When we started building MetricStack, we knew that traditional polling architectures wouldn't cut it. Our customers needed to see the impact of a payment failure the millisecond it happened.
      </p>
      <p className="mb-8">
        We set out to build a system that could ingest millions of webhook events per second, normalize them into a unified schema, and write them to a datastore that supports sub-second analytical queries across billions of rows.
      </p>
      <h2 className={`text-3xl text-white tracking-tight mt-20 mb-8 ${headingFont.className}`}>The Problem with Batch Processing</h2>
      <p className="mb-8">
        Most analytics tools process events in batches. They pull from your billing provider every hour, or maybe every 15 minutes if you pay for the enterprise tier. But when you are debugging a failed launch or monitoring a flash sale, 15 minutes is an eternity.
      </p>
      <p className="mb-8">
        Batch processing also forces you to maintain complex reconciliation logic. If an invoice is created and then immediately voided, a batch processor might miss the intermediate state entirely, leaving your local database out of sync with reality.
      </p>
      <h2 className={`text-3xl text-white tracking-tight mt-20 mb-8 ${headingFont.className}`}>Enter ClickHouse and Kafka</h2>
      <p className="mb-8">
        Our solution relies on a streaming architecture. Webhooks hit our edge nodes, which immediately push the raw payloads onto a Kafka topic. This decouples ingestion from processing, ensuring we never drop an event even under massive load.
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-4">
        <li><strong>Ingestion:</strong> Edge functions accept the webhook and write to Kafka in under 10ms.</li>
        <li><strong>Normalization:</strong> Flink jobs consume the raw payloads, map them to our universal schema, and handle currency conversion.</li>
        <li><strong>Storage:</strong> The normalized events are written to ClickHouse, a columnar database optimized for lightning-fast aggregations.</li>
      </ul>
      <p className="mb-8">
        By leveraging ClickHouse's materialized views, we pre-aggregate common queries (like daily MRR per plan) at write time. When you load your dashboard, the data is already computed. The result is a UI that feels instantaneous, no matter how much history you have.
      </p>
    </article>
  );
}
