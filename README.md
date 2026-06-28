# ANTIMATTERIUM CONTROL

Public cold-replay control plane for ANTIMATTERIUM.

```bash
npm run verify
npm run replay
````

This repository verifies the public chain across:

```text
ANTIMATTERIUM Core v0.2.11
ANTIMATTERIUM WWW v0.1.7
ANTIMATTERIUM org profile v0.0.5
npm package 0.2.2
```

The control plane binds public release surfaces, public identifiers, verification commands, and replayable public evidence.

Boundary:

```text
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true
NON_PUBLIC_INFORMATION_EXCLUDED=true
```


## CI Replay Gate

CONTROL v0.1.1 adds two public GitHub Actions gates:

```text id="v6wpbz"
verify.yml
cold-replay.yml
````

The verify gate runs on push, pull request, and manual dispatch.

The cold replay gate runs on push, pull request, manual dispatch, and a weekly schedule.

```bash
npm run verify
npm run replay
```


## CI Evidence Seal

CONTROL v0.1.2 seals successful GitHub Actions runs into a public evidence receipt.

```bash
npm run verify
````

The receipt binds:

```text id="b7a77i"
verify workflow success
cold-replay workflow success
GitHub Actions run URLs
main branch evidence
head SHA evidence
```


## Bidirectional Public Closure

CONTROL v0.1.3 closes the public loop:

CONTROL points to Core, WWW, and org profile.

Core, WWW, and org profile point back to CONTROL.

```text
ANTIMATTERIUM_BIDIRECTIONAL_PUBLIC_CHAIN_CLOSED=true
````


## Stranger Final Audit

CONTROL v0.1.4 adds a stranger-verifiable final audit bundle.

```bash
npm run audit:final
````

The audit performs fresh public clones of CONTROL, Core, WWW, and org profile at their public closure tags, then replays the public verification chain.

```text
ANTIMATTERIUM_STRANGER_FINAL_AUDIT_PASS=true
```


## Public Release Matrix

CONTROL v0.1.5 publishes the public release matrix for the live ANTIMATTERIUM chain.

```bash
npm run verify:release-matrix
npm run audit:final
````

```text
ANTIMATTERIUM_CONTROL_PUBLIC_RELEASE_MATRIX_VERIFY_PASS=true
```


## Public Stranger CI

CONTROL v0.1.6 adds a public GitHub Actions workflow that runs the stranger final audit from public release tags.

```bash
gh workflow run stranger-final-audit.yml --repo ANTIMATTERIUM/CONTROL --ref main
````

```text
ANTIMATTERIUM_PUBLIC_STRANGER_CI_PASS=true
```


## Second-Order Public Stranger CI Closure

CONTROL v0.1.7 closes the loop from CONTROL public stranger CI to Core, WWW, and org profile back into CONTROL.

```bash
npm run verify:second-order-public-closure
npm run audit:backpropagation
````

```text id="wx2sva"
ANTIMATTERIUM_SECOND_ORDER_PUBLIC_STRANGER_CI_LOOP_CLOSED=true
```


## Public Ecosystem Closure Index

CONTROL v0.1.8 publishes a machine-readable ecosystem closure index across CONTROL, Core, WWW, and org profile.

Verifier:

npm run verify:ecosystem-index

Marker:

ANTIMATTERIUM_PUBLIC_ECOSYSTEM_GRAPH_CLOSED=true

## Public Ecosystem Index Echo Closure

CONTROL v0.1.9 closes the echo loop from CONTROL v0.1.8 to Core, WWW, and org profile back into CONTROL.

Commands:

npm run verify:ecosystem-echo
npm run audit:ecosystem-echo

Marker:

ANTIMATTERIUM_PUBLIC_ECOSYSTEM_ECHO_GRAPH_CLOSED=true

## Public Rootless Reconstruction Index

CONTROL v0.2.0 publishes a public-release-only reconstruction path. A fresh observer can rebuild the public graph without the local root workspace.

Commands:

npm run verify:rootless-reconstruction
npm run audit:rootless-reconstruction

Marker:

ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true

## Rootless Fanout Echo Closure

CONTROL v0.2.1 closes the rootless reconstruction fanout back into CONTROL.

Commands:

npm run verify:rootless-fanout-echo
npm run audit:rootless-fanout-echo

Marker:

ANTIMATTERIUM_ROOTLESS_FANOUT_ECHO_GRAPH_CLOSED=true

## Rootless Fanout Backlink Closure

CONTROL v0.2.2 closes the rootless fanout echo backpropagation loop by binding the CONTROL v0.2.1 closure to the Core v0.2.16, WWW v0.1.12, and org profile v0.0.10 surface backlinks.

Commands:

npm run verify:rootless-fanout-backlink-closure
npm run audit:rootless-fanout-backlink-closure

Markers:

ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_VERIFY_PASS=true
ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_CLOSED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true

## Rootless Fanout Backpropagation Echo Closure

CONTROL v0.2.3 closes the Move 9 backpropagation echo from Core v0.2.17, WWW v0.1.13, and org profile v0.0.11 back into CONTROL.

Commands:

npm run verify:rootless-fanout-backpropagation-echo
npm run audit:rootless-fanout-backpropagation-echo

Markers:

ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_CLOSURE_VERIFY_PASS=true
ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_CLOSED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true

## Rootless Fanout Backpropagation Echo Fanout Closure

CONTROL v0.2.4 closes the Move 11 fanout from Core v0.2.18, WWW v0.1.14, and org profile v0.0.12 back into CONTROL.

Commands:

npm run verify:rootless-fanout-backpropagation-echo-fanout-closure
npm run audit:rootless-fanout-backpropagation-echo-fanout-closure

Markers:

ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_VERIFY_PASS=true
ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true

## Rootless Fanout Backpropagation Echo Fanout Backlink Closure

CONTROL v0.2.5 closes the Move 13 backpropagation fanout from Core v0.2.19, WWW v0.1.15, and org profile v0.0.13.

Commands:

npm run verify:rootless-fanout-backpropagation-echo-fanout-backlink-closure
npm run audit:rootless-fanout-backpropagation-echo-fanout-backlink-closure

Markers:

ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_VERIFY_PASS=true
ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKPROPAGATION_CLOSED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true

## Rootless Fanout Backpropagation Echo Fanout Backlink Closure Backpropagation Closure

CONTROL v0.2.6 closes the public backpropagation loop created by the Core, WWW, and org-profile backlinks to CONTROL v0.2.5.

Command:

npm run verify:rootless-fanout-backpropagation-echo-fanout-backlink-closure-backpropagation-closure

Markers:

ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_VERIFY_PASS=true
ANTIMATTERIUM_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true
