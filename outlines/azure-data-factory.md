# Azure Data Factory

Duration: 4 months / 16 teaching weeks.
Schedule: 6 instructor-led hours weekly (96 total), plus 4 to 6 independent study hours.

Create reliable data integration pipelines with Azure Data Factory. The course emphasizes ingestion, parameterization, orchestration, incremental loads, monitoring, security, and operational handover, with a short comparison to Fabric Data Factory.

## Prerequisites

SQL and Python fundamentals; relational modeling; basic cloud concepts.

## Tools

Azure Data Factory; Azure Storage or ADLS Gen2; Azure SQL; Key Vault; Git integration; approved Azure lab subscription.

## Learning outcomes

- Configure linked services, datasets, activities, and integration runtimes.
- Build metadata-driven pipelines with controlled parameters and triggers.
- Implement incremental processing, validation, retries, and operational logging.
- Apply managed identity, secret management, deployment practices, and cost monitoring.

## Weekly schedule

### Week 1 — Integration architecture

ETL and ELT, ADF objects, source and sink patterns, Fabric context.

Practical: Design a source-to-reporting integration architecture.

### Week 2 — Secure setup

Resource groups, storage, access control, managed identities, budgets.

Practical: Provision a scoped lab and verify minimal required access.

### Week 3 — Connections and runtimes

Linked services, datasets, Azure and self-hosted runtimes.

Practical: Connect to approved storage and database sources.

### Week 4 — Copy activity

Mappings, formats, partitioning concepts, throughput and validation.

Practical: Copy CSV data to SQL and reconcile counts.

### Week 5 — Parameters and expressions

Pipeline and dataset parameters, variables, dynamic content.

Practical: Reuse one pipeline across several source tables.

### Week 6 — Control flow

Lookup, ForEach, If Condition, dependencies and execution order.

Practical: Orchestrate a metadata-driven ingestion workflow.

### Week 7 — Triggers

Schedule, tumbling window, event triggers and time dependencies.

Practical: Compare trigger choices for a daily ingestion job.

### Week 8 — Midpoint practical

Parameterized ingestion and dependency troubleshooting.

Practical: Deliver an independently tested multi-source pipeline.

### Week 9 — Transformation options

SQL pushdown, notebooks, Mapping Data Flows and compute tradeoffs.

Practical: Implement and justify a transformation approach.

### Week 10 — Incremental loads

Watermarks, late arrivals, upserts, change-data concepts.

Practical: Load only changed records and prevent duplicate writes.

### Week 11 — Data quality and failures

Validation rules, quarantines, retry policies, timeout handling.

Practical: Inject bad data and verify an auditable failure path.

### Week 12 — Monitoring and operations

Activity output, alerts, logs, run history and diagnostics.

Practical: Build an operations checklist and investigate a failed run.

### Week 13 — Deployment

Git workflow, environment configuration, deployment artifacts, secrets.

Practical: Promote a pipeline using environment-specific configuration.

### Week 14 — Security and cost

Key Vault, network considerations, access reviews and cost drivers.

Practical: Review permissions and estimate costs from measured usage.

### Week 15 — Capstone build

Integration tests, idempotency, backfills, operational documentation.

Practical: Demonstrate safe reruns and historical reloads.

### Week 16 — Capstone presentation

Architecture defense, recovery demonstration and handover.

Practical: Show successful incremental processing and failure recovery.

## Capstone

Incremental sales ingestion and reporting pipeline

Submit pipeline definitions, architecture diagram, parameter and metadata design, watermark logic, rerun tests, monitoring evidence, deployment notes, and a recovery runbook.

## Assessment

- Weekly practical work: 25%
- Knowledge checks: 10%
- Midpoint practical: 20%
- Capstone artifact: 35%
- Presentation and defense: 10%
