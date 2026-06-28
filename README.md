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


<!-- antimatterium-move18-rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure -->
## CONTROL v0.2.7 Rootless Fanout Backlink Closure Backpropagation Closure Fanout Closure

CONTROL v0.2.7 closes the public fanout from CONTROL v0.2.6 into Core v0.2.21, WWW v0.1.17, and org profile v0.0.15.

- CONTROL v0.2.6 release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.6-antimatterium-control-rootless-fanout-backpropagation-echo-fanout-backlink-closure-backpropagation-closure
- CONTROL v0.2.6 CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28327289926
- Rootless fanout backlink closure backpropagation closure ID: 831c663f39d9d5151c5e56e16f5565406f7059624c030ba527f8a48afdd24386
- Local-root dependency: not required
- Current production claim: false
- Starship claim: false
- Physical production instructions: false

<!-- ANTIMATTERIUM:ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE:START -->
## CONTROL v0.2.8 rootless fanout backlink closure backpropagation closure fanout backlink closure

- CONTROL v0.2.7 release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.7-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure
- CONTROL v0.2.7 CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28327734001
- CONTROL v0.2.7 closure id: 755c0844bc9bd8c3194e1fc02bc1254e9b6a0c5cefb79d21bb5ae6d0b1e5baa1
- Core v0.2.22 backlink id: 04cc333c78c0342594b6809f638ba855da99a6cd36c50c86596ff50f7c0a8d61
- WWW v0.1.18 backlink id: 1f02f05b5321a32442cb8af4a2c4e27b7aacbadbaef543619386feed136f1af3
- Org profile v0.0.16 backlink id: 03e405c1d7d240f63225dfb09e1c27e8c35959e1ccc3e86cc1db269aabab10cd
- Closure id: be4ae8df12eb897733590e1732b9e539447cb16e2b1de6018f62c4d41e4cd3ff
- Local root required: false
- Current production claim: false
- Starship claim: false
- Physical production instructions: false
<!-- ANTIMATTERIUM:ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE:END -->

## Rootless fanout backlink closure fanout closure v0.2.9

CONTROL v0.2.9 closes the public backlink fanout from CONTROL v0.2.8 across Core v0.2.23, WWW v0.1.19, and org profile v0.0.17.

- CONTROL v0.2.8 release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.8-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure
- CONTROL v0.2.8 CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28334484888
- Core backlink release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.23-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-backlink
- WWW backlink release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.19-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-backlink
- Org profile backlink release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.17-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-backlink
- Closure id: 570726c66a7f54f3e015ff8d4f09860036957d41c788e3cea8be16ff81d76f44

Safety boundary remains unchanged: no current production claim, no starship claim, and no physical production instructions.
