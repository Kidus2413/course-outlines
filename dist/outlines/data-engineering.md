# Data Engineering

Duration: 4 months / 16 teaching weeks.
Schedule: 6 instructor-led hours weekly (96 total), plus 4 to 6 independent study hours.

Design and operate data pipelines that support trustworthy analytics. Students learn storage design, batch processing, distributed computation, orchestration, data quality, observability, and practical production delivery.

## Prerequisites

SQL and Python proficiency; basic Git and database design.

## Tools

Python; PostgreSQL or SQL Server; Apache Spark or an approved notebook environment; Airflow or equivalent scheduler; Docker where available; Git.

## Learning outcomes

- Design data models and storage layers around workload and business requirements.
- Build incremental, idempotent batch pipelines with validation and orchestration.
- Process data using Spark and explain basic partition and shuffle behavior.
- Document lineage, monitor failures, and deliver a recoverable data product.

## Weekly schedule

### Week 1 — Engineering foundations

Data lifecycle, roles, system boundaries, SLAs and requirements.

Practical: Translate a retail case into a pipeline specification.

### Week 2 — Storage and formats

Databases, object storage, CSV, JSON, Parquet, compression.

Practical: Compare formats and record storage tradeoffs.

### Week 3 — Modeling

Normalization, dimensional models, fact grain, slowly changing dimensions.

Practical: Design a warehouse model with explicit historical rules.

### Week 4 — Ingestion

Files, APIs, database extracts, pagination and schema changes.

Practical: Implement validated ingestion from two source types.

### Week 5 — Reliable loading

Incremental loads, watermarks, deduplication, idempotency, late data.

Practical: Prove repeated runs do not duplicate business records.

### Week 6 — Transformations

SQL and Python transforms, ELT, modularity, business definitions.

Practical: Create reusable transformations with reconciliation checks.

### Week 7 — Data quality

Completeness, uniqueness, referential integrity and quarantine rules.

Practical: Build quality tests and capture failed-record evidence.

### Week 8 — Midpoint practical

Ingestion, modeling and reliable processing.

Practical: Deliver a functioning local analytics pipeline.

### Week 9 — Spark foundations

DataFrames, lazy evaluation, transformations and actions.

Practical: Process a dataset using Spark DataFrame operations.

### Week 10 — Distributed performance

Partitions, shuffles, joins, skew, caching and measurement.

Practical: Diagnose a costly job and justify an optimization.

### Week 11 — Orchestration

DAGs, schedules, dependencies, retries and backfills.

Practical: Schedule the pipeline and test a historical backfill.

### Week 12 — Streaming concepts

Events, offsets, windows, delivery guarantees and reconciliation.

Practical: Simulate event processing and explain duplicate handling.

### Week 13 — Lakehouse and cloud patterns

Layered storage, table formats, warehouse and lakehouse tradeoffs.

Practical: Propose a deployment architecture with clear boundaries.

### Week 14 — Production operations

Observability, lineage, access controls, CI checks, recovery and cost.

Practical: Create monitoring checks and a failure-recovery runbook.

### Week 15 — Capstone build

End-to-end integration, acceptance criteria and peer review.

Practical: Run the platform against normal and failure scenarios.

### Week 16 — Capstone presentation

System demonstration, design defense and operating handover.

Practical: Demonstrate freshness, quality and recovery evidence.

## Capstone

Retail analytics data platform

Submit ingestion code, warehouse schema, transformation jobs, scheduler definitions, quality tests, lineage diagram, monitoring evidence, and an operating runbook.

## Assessment

- Weekly practical work: 25%
- Knowledge checks: 10%
- Midpoint practical: 20%
- Capstone artifact: 35%
- Presentation and defense: 10%
