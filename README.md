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

<!-- ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_START -->
## CONTROL v0.2.10 public surface-fanout closure

CONTROL v0.2.10 closes the public surface fanout from CONTROL v0.2.9.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.9-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure
- Prior CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28335270892
- Prior CONTROL closure id: `570726c66a7f54f3e015ff8d4f09860036957d41c788e3cea8be16ff81d76f44`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.24-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink
- Core backlink id: `6c84c858ce7a8fc4c70d7219b012cf51c612db32a63da6ec86696cdcd9db97ce`
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.20-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink
- WWW backlink id: `c7faa5c43b753515079569c63dba8393380c4c516e551ba8876999d4ca44aadc`
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.18-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink
- Org profile backlink id: `6705f290297203d104262c41d84ec2c375a1f70a7514883fa0a00717031dcda7`
- CONTROL closure id: `12940aa22c1477af9f4748f928b94eaaecb7e1379717997504c66b6975d19baf`
- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_CONTROL_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_END -->

<!-- ANTIMATTERIUM_CONTROL_V0211_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE_START -->
## CONTROL v0.2.11 public surface backlink fanout closure

CONTROL v0.2.11 closes the public surface backlink fanout from CONTROL v0.2.10.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.10-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure
- Prior CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28336116773
- Prior CONTROL closure id: `12940aa22c1477af9f4748f928b94eaaecb7e1379717997504c66b6975d19baf`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.25-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-backlink
- Core backlink id: `4c015cd8bc31bd51c0aa4f6b6101a4827e1ebca2e2820a2ce4d3bb2564fd23f0`
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.21-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-backlink
- WWW backlink id: `69cc72095fcf1196d839efb2ab5fea265b36e7a37b03b939e6c68f99f0d5d036`
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.19-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-backlink
- Org profile backlink id: `a101d4e79a47a2486ec4fcf663a1c1a6220e2e609bd2989e0febe2ddcaf877a3`
- CONTROL closure id: `58b6405492f8994415207a64b4a6051d7970996d601d3a5a7639033ee323fd8b`
- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_CONTROL_V0211_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE_END -->

<!-- ANTIMATTERIUM_CONTROL_V0212_MOVE28_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE_START -->
## CONTROL v0.2.12 public surface backlink fanout closure

CONTROL v0.2.12 closes the public surface backlink fanout from CONTROL v0.2.11.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.11-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure
- Prior CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28475228834
- Prior CONTROL closure id: `58b6405492f8994415207a64b4a6051d7970996d601d3a5a7639033ee323fd8b`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.26-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink
- Core backlink id: `c6d3ad0d2cac39a49bda98037b94096c06265da10bd544f8076853e08efb5ede`
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.22-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink
- WWW backlink id: `8c1ad7efafec8115f3ab1c97a4579398ed51aa9730aebe49fb49be2f4616acb7`
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.20-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink
- Org profile backlink id: `b7905c70228c3b58097e011921cb41446be96b226d05913d3bb29f92b74b65b7`
- CONTROL closure id: `a6ccef52b1a881bfbdf7f066becc46b326d964bb96ebd98648447493a7c2e0fe`
- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_CONTROL_V0212_MOVE28_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE_END -->

<!-- ANTIMATTERIUM_CONTROL_V0213_MOVE30_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE_START -->
## CONTROL v0.2.13 public surface backlink fanout closure

CONTROL v0.2.13 closes the public surface backlink fanout from CONTROL v0.2.12.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.12-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure
- Prior CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28477606355
- Prior CONTROL closure id: `a6ccef52b1a881bfbdf7f066becc46b326d964bb96ebd98648447493a7c2e0fe`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.27-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink
- Core backlink id: `eee199189c9650736dcaba1905315b96f1ce4a7cddd380ce2d399324af04ac85`
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.23-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink
- WWW backlink id: `7168070caf2e6d7759a7c53bc7cb67469f8bf72ee83c5a740722f5d1942a7091`
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.21-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink
- Org profile backlink id: `cfec13610c24e7f452f98d903d292d1e55ee4a634aa8a520d2dba3b80c006ffb`
- CONTROL closure id: `1554781e58535f16c8c5d266af98bdbb8d60f6d397488e6c5b473d8cb780bf4d`
- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_CONTROL_V0213_MOVE30_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE_END -->

<!-- ANTIMATTERIUM_CONTROL_V0214_MOVE32_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE_START -->
## CONTROL v0.2.14 public surface backlink fanout closure

CONTROL v0.2.14 closes the public surface backlink fanout from CONTROL v0.2.13.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.13-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure
- Prior CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28506699839
- Prior CONTROL closure id: `1554781e58535f16c8c5d266af98bdbb8d60f6d397488e6c5b473d8cb780bf4d`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.28-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink
- Core backlink id: `7659f6ecdec65d805d85cb22b3c02402c6d58099d91343ebda3a0a9c67938ce9`
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.24-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink
- WWW backlink id: `0cad7b703d9d8e790559c28ae2641b6bcefc7ca0c307cd8c066195d0270d0b30`
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.22-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink
- Org profile backlink id: `11220984ed027f575b8aaebecfba68dfb4cbc60f2c06c886134f984afe17fe40`
- CONTROL closure id: `34137b43fa0f45b2315b7d3df5b1214b0dbbfd9af8cec3b113ba425dfa27010f`
- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_CONTROL_V0214_MOVE32_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE_END -->

<!-- ANTIMATTERIUM_CONTROL_V0215_MOVE34_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE_START -->
## CONTROL v0.2.15 public surface backlink fanout closure

CONTROL v0.2.15 closes the public surface backlink fanout from CONTROL v0.2.14.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.14-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure
- Prior CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28516323178
- Prior CONTROL closure id: `34137b43fa0f45b2315b7d3df5b1214b0dbbfd9af8cec3b113ba425dfa27010f`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.29-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink
- Core backlink id: `a13b1a78f9ea232e6d14c0ca99cffdfbaa647965a797ab2fed06186d1f7c04a6`
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.25-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink
- WWW backlink id: `5a5239e204e95f523d1a49a6490deec1cbcaf9e57c802107883c90b46419250c`
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.23-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink
- Org profile backlink id: `2a577e4682df3d196c3bec6d2980772355db7f0a1f4ef68d5bc60f8688aec9b0`
- CONTROL closure id: `5fd82a631ca4d01e4209288479d3cbcd623ddd017587722d2c67708ff3cbf56a`
- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_CONTROL_V0215_MOVE34_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE_END -->

<!-- ANTIMATTERIUM_MOVE36_CONTROL_V0216_SURFACE_BACKLINK_FANOUT_CLOSURE_START -->
## CONTROL v0.2.16 public surface backlink fanout closure

CONTROL v0.2.16 closes the Move 35 surface backlink fanout from CONTROL v0.2.15.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.15-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure
- Prior CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28516895725
- Prior CONTROL closure id: `5fd82a631ca4d01e4209288479d3cbcd623ddd017587722d2c67708ff3cbf56a`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.30-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.26-antimatterium-www-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.24-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink
- Core backlink id: `4436b1b981906208e96770b4fc39d5d6c56aa4b7a529509fb78217434b59eea6`
- WWW backlink id: `a3d6f3ed5210e69f8a21f778a29c7452387a5d186925c7eb9188c3bc1a7acba5`
- Org profile backlink id: `91112913207470869fc6f18b4c780011cc581fddd8a7908d7bbdbdffecb9dbcc`
- CONTROL closure id: `e9f48278e811786b35f9939f982d502a7b0eacc4aff47e03e9257095190c6d26`
- `ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true`
- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_MOVE36_CONTROL_V0216_SURFACE_BACKLINK_FANOUT_CLOSURE_END -->

<!-- ANTIMATTERIUM_MOVE38_CONTROL_V0217_SURFACE_BACKLINK_FANOUT_CLOSURE_START -->
## CONTROL v0.2.17 public surface backlink fanout closure

CONTROL v0.2.17 closes the Move 37 surface backlink fanout from CONTROL v0.2.16.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.17-antimatterium-control-v0216-surface-backlink-closure
- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.16-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure
- Prior CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28518517865
- Prior CONTROL closure id: `e9f48278e811786b35f9939f982d502a7b0eacc4aff47e03e9257095190c6d26`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.31-antimatterium-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.27-antimatterium-www-control-v0216-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.25-antimatterium-org-profile-control-v0216-backlink
- Core backlink id: `b5a671ef8b595a9364f2aeb84bcc3a65d8204edacc4fc286c6c93c22929db325`
- WWW backlink id: `e0d7c0656edb7d82aef592ce161b22b83d96b271de5bce0627b09ab20ff0379c`
- Org profile backlink id: `6e5fcd8333be67c3a707210b384a9b78aac416f19d285879533f46e291248f27`
- CONTROL closure id: `7be5acda41a87a01a436239de422e56c6384746bb873ef3d521284ee9c46513e`
- `ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true`
- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_MOVE38_CONTROL_V0217_SURFACE_BACKLINK_FANOUT_CLOSURE_END -->

<!-- ANTIMATTERIUM_MOVE40_CONTROL_V0218_SURFACE_BACKLINK_FANOUT_CLOSURE_START -->
## CONTROL v0.2.18 public surface backlink fanout closure

CONTROL v0.2.18 closes the Move 39 surface backlink fanout from CONTROL v0.2.17 using short public tag discipline.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.18-antimatterium-control-move39-surface-closure
- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.17-antimatterium-control-v0216-surface-backlink-closure
- Prior CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28520105839
- Prior CONTROL closure id: `7be5acda41a87a01a436239de422e56c6384746bb873ef3d521284ee9c46513e`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.32-antimatterium-control-v0217-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.28-antimatterium-www-control-v0217-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.26-antimatterium-org-profile-control-v0217-backlink
- Core backlink id: `7b82854012506928ee4b9d74b83f8f64682e23125dae344dda85b6f3aab60736`
- WWW backlink id: `55b72bf947c3b8a09eb131f5fa9f6f133c470b93b4409dc1b3775ff3ecaf3cca`
- Org profile backlink id: `e83d51a84b4098da43fa5e7101e3795e610b59bec7ce9fd53f7d642118bda7e1`
- CONTROL closure id: `01a39a53a3914b1b38f283f2b4232b190c201712f0f8edb6fd0e91fc7bca717a`
- `ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true`
- `ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true`
- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_MOVE40_CONTROL_V0218_SURFACE_BACKLINK_FANOUT_CLOSURE_END -->

<!-- ANTIMATTERIUM_MOVE42_CONTROL_V0219_SURFACE_BACKLINK_FANOUT_CLOSURE_START -->
## CONTROL v0.2.19 public surface backlink fanout closure

CONTROL v0.2.19 closes the Move 41 surface backlink fanout from CONTROL v0.2.18 using short public tag discipline.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.19-antimatterium-control-move41-surface-closure
- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.18-antimatterium-control-move39-surface-closure
- Prior CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28524366738
- Prior CONTROL closure id: `01a39a53a3914b1b38f283f2b4232b190c201712f0f8edb6fd0e91fc7bca717a`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.33-antimatterium-control-v0218-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.29-antimatterium-www-control-v0218-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.27-antimatterium-org-profile-control-v0218-backlink
- Core backlink id: `7a45950d954911d5c83137bcf273c7ee53fa3d78c83c94b5e1be0c8bcaccb7f3`
- WWW backlink id: `d2b0bada95d147729a5fc041879c7a4cc7dfe35341b75d92e3d1d0b5244ced60`
- Org profile backlink id: `2ea777fdfe235d31159ec4601a1c26098d0a0ec2092319fd171ac332863ee008`
- CONTROL closure id: `9ae0cf352d7062356e02b964d517a9321f0c0743d2eba695fb0d6adc6a702f08`
- `ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true`
- `ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true`
- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_MOVE42_CONTROL_V0219_SURFACE_BACKLINK_FANOUT_CLOSURE_END -->

<!-- ANTIMATTERIUM_MOVE44_CONTROL_V0220_SURFACE_BACKLINK_FANOUT_CLOSURE_START -->
## CONTROL v0.2.20 public surface backlink fanout closure

CONTROL v0.2.20 closes the Move 43 surface backlink fanout from CONTROL v0.2.19 using short public tag discipline.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.20-antimatterium-control-move43-surface-closure
- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.19-antimatterium-control-move41-surface-closure
- Prior CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28525061736
- Prior CONTROL closure id: `9ae0cf352d7062356e02b964d517a9321f0c0743d2eba695fb0d6adc6a702f08`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.34-antimatterium-control-v0219-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.30-antimatterium-www-control-v0219-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.28-antimatterium-org-profile-control-v0219-backlink
- Core backlink id: `030604066e720daecb36c2e43a7cfe70e7f763b69f2766241f8277b058342d6a`
- WWW backlink id: `a1daaf00ecc840a8f30513505205e2414dc170f1141bc6adcb501bd6b6121b75`
- Org profile backlink id: `87276a767baa71208d5f2ad2623f306d007f90c4f83fa50725d31f321b32b2c8`
- CONTROL closure id: `0a336efeec3df03622df1814eeb076ba69a3e181006fe52add05c71a05704efc`
- `ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true`
- `ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true`
- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_MOVE44_CONTROL_V0220_SURFACE_BACKLINK_FANOUT_CLOSURE_END -->

<!-- ANTIMATTERIUM_MOVE46_CONTROL_SURFACE_BACKLINK_FANOUT_CLOSURE_START -->
## Move 46 CONTROL public surface backlink fanout closure

CONTROL v0.2.21 closes the Move 45 public surface backlinks from CONTROL v0.2.20.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.20-antimatterium-control-move43-surface-closure
- Prior CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28525467798
- Core backlink release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.35-antimatterium-control-v0220-backlink
- WWW backlink release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.31-antimatterium-www-control-v0220-backlink
- Org profile backlink release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.29-antimatterium-org-profile-control-v0220-backlink
- Verify: `npm run verify:move46-surface-backlink-fanout-closure`
- Audit: `npm run audit:move46-surface-backlink-fanout-closure`
- `ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true`

Safety boundary remains explicit:

- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_MOVE46_CONTROL_SURFACE_BACKLINK_FANOUT_CLOSURE_END -->

<!-- ANTIMATTERIUM_MOVE48_SURFACE_BACKLINK_FANOUT_CLOSURE_START -->
## Move 48 public surface backlink fanout closure

CONTROL v0.2.22 closes the Move 47 public surface backlink fanout.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.21-antimatterium-control-move45-surface-closure
- Prior CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28527938011
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.36-antimatterium-control-v0221-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.32-antimatterium-www-control-v0221-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.30-antimatterium-org-profile-control-v0221-backlink
- Verify: `npm run verify:move48-surface-backlink-fanout-closure`
- Audit: `npm run audit:move48-surface-backlink-fanout-closure`
- `ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true`

Safety boundary remains explicit:

- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_MOVE48_SURFACE_BACKLINK_FANOUT_CLOSURE_END -->

## ANTIMATTERIUM_MOVE50_CONTROL_V0223_SURFACE_BACKLINK_FANOUT_CLOSURE

CONTROL v0.2.23 records the public closure of the Move 49 surface backlink fanout.

Bound public inputs:

- CONTROL v0.2.22 closure release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.22-antimatterium-control-move47-surface-closure
- CONTROL v0.2.22 verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28534121995
- Core v0.2.37 backlink release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.37-antimatterium-control-v0222-backlink
- WWW v0.1.33 backlink release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.33-antimatterium-www-control-v0222-backlink
- Org profile v0.0.31 backlink release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.31-antimatterium-org-profile-control-v0222-backlink

Flags:

- ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
- ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

<!-- ANTIMATTERIUM_MOVE52_CONTROL_SURFACE_BACKLINK_FANOUT_CLOSURE -->
## CONTROL v0.2.24 public surface backlink fanout closure — Move 52

CONTROL v0.2.24 closes the Move 51 public surface backlink fanout.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.23-antimatterium-control-move49-surface-closure
- Prior CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28641499317
- Prior CONTROL closure ID: `35f989768e72c5d856cc79bf1d84dac2c950ffd2552c81133f470637d441dd0e`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.38-antimatterium-control-v0223-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.34-antimatterium-www-control-v0223-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.32-antimatterium-org-profile-control-v0223-backlink
- Closure receipt: `control/ANTIMATTERIUM_CONTROL_MOVE52_SURFACE_BACKLINK_FANOUT_CLOSURE.json`
- Verifier: `scripts/verify-move52-surface-backlink-fanout-closure.mjs`
- Audit: `scripts/move52-surface-backlink-fanout-closure-audit.sh`

ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

<!-- ANTIMATTERIUM_CONTROL_MOVE54_SURFACE_BACKLINK_FANOUT_CLOSURE -->
## Move 54 — CONTROL closes Move 53 public surface backlink fanout

CONTROL v0.2.25 closes the public surface fanout from CONTROL v0.2.24 into Core, WWW, and Org profile.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.24-antimatterium-control-move51-surface-closure
- Prior CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28678642573
- Prior CONTROL closure ID: `fd4abe2ef7ad043517e9d065310b4ededeb625d4e0937e8b5d57eff7b85a2872`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.39-antimatterium-control-v0224-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.35-antimatterium-www-control-v0224-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.33-antimatterium-org-profile-control-v0224-backlink
- Move 54 closure ID: `99efa1a97857babbe872e4e126114afc3d119cde359968ba62602c99b46cba08`
- Receipt: `control/ANTIMATTERIUM_CONTROL_MOVE54_SURFACE_BACKLINK_FANOUT_CLOSURE.json`
- Verifier: `scripts/verify-move54-surface-backlink-fanout-closure.mjs`
- Audit: `scripts/move54-surface-backlink-fanout-closure-audit.sh`

ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

<!-- ANTIMATTERIUM_CONTROL_MOVE56_SURFACE_BACKLINK_FANOUT_CLOSURE -->
## Move 56 — CONTROL closes Move 55 public surface backlink fanout

CONTROL v0.2.26 closes the public surface fanout from CONTROL v0.2.25 into Core, WWW, and Org profile.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.25-antimatterium-control-move53-surface-closure
- Prior CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28679307644
- Prior CONTROL closure ID: `99efa1a97857babbe872e4e126114afc3d119cde359968ba62602c99b46cba08`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.40-antimatterium-control-v0225-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.36-antimatterium-www-control-v0225-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.34-antimatterium-org-profile-control-v0225-backlink
- Move 56 closure ID: `8a4746968c055d92c7ee896656caa2e6ffad611b2800943901d843da1a256fbf`
- Receipt: `control/ANTIMATTERIUM_CONTROL_MOVE56_SURFACE_BACKLINK_FANOUT_CLOSURE.json`
- Verifier: `scripts/verify-move56-surface-backlink-fanout-closure.mjs`
- Audit: `scripts/move56-surface-backlink-fanout-closure-audit.sh`

ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

<!-- ANTIMATTERIUM_CONTROL_MOVE58_SURFACE_BACKLINK_FANOUT_CLOSURE -->
## Move 58 — CONTROL closes Move 57 public surface backlink fanout

CONTROL v0.2.27 closes the public surface fanout from CONTROL v0.2.26 into Core, WWW, and Org profile.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.26-antimatterium-control-move55-surface-closure
- Prior CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28704906669
- Prior CONTROL closure ID: `8a4746968c055d92c7ee896656caa2e6ffad611b2800943901d843da1a256fbf`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.41-antimatterium-control-v0226-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.37-antimatterium-www-control-v0226-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.35-antimatterium-org-profile-control-v0226-backlink
- Move 58 closure ID: `a2641f70f738ae3e5959f8f1c46f4c8328a938b59a8112afbbff6702758691ba`
- Receipt: `control/ANTIMATTERIUM_CONTROL_MOVE58_SURFACE_BACKLINK_FANOUT_CLOSURE.json`
- Verifier: `scripts/verify-move58-surface-backlink-fanout-closure.mjs`
- Audit: `scripts/move58-surface-backlink-fanout-closure-audit.sh`

ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

<!-- ANTIMATTERIUM_CONTROL_MOVE60_SURFACE_BACKLINK_FANOUT_CLOSURE -->
## Move 60 — CONTROL closes Move 59 public surface backlink fanout

CONTROL v0.2.28 closes the public surface fanout from CONTROL v0.2.27 into Core, WWW, and Org profile.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.27-antimatterium-control-move57-surface-closure
- Prior CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28705916342
- Prior CONTROL closure ID: `a2641f70f738ae3e5959f8f1c46f4c8328a938b59a8112afbbff6702758691ba`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.42-antimatterium-control-v0227-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.38-antimatterium-www-control-v0227-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.36-antimatterium-org-profile-control-v0227-backlink
- Move 60 closure ID: `0baab5144c52e311f9f2c75b41198fd36c5ea512a861be374cddc8452f378671`
- Receipt: `control/ANTIMATTERIUM_CONTROL_MOVE60_SURFACE_BACKLINK_FANOUT_CLOSURE.json`
- Verifier: `scripts/verify-move60-surface-backlink-fanout-closure.mjs`
- Audit: `scripts/move60-surface-backlink-fanout-closure-audit.sh`

ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

<!-- ANTIMATTERIUM_CONTROL_MOVE62_SURFACE_BACKLINK_FANOUT_CLOSURE -->
## Move 62 — CONTROL closes Move 61 public surface backlink fanout

CONTROL v0.2.29 closes the public surface fanout from CONTROL v0.2.28 into Core, WWW, and Org profile.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.28-antimatterium-control-move59-surface-closure
- Prior CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28706320665
- Prior CONTROL closure ID: `0baab5144c52e311f9f2c75b41198fd36c5ea512a861be374cddc8452f378671`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.43-antimatterium-control-v0228-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.39-antimatterium-www-control-v0228-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.37-antimatterium-org-profile-control-v0228-backlink
- Move 62 closure ID: `cc3254bf684790e5b5e88b947b35ef1ff5796cba9dcf827234ec08114d40d67c`
- Receipt: `control/ANTIMATTERIUM_CONTROL_MOVE62_SURFACE_BACKLINK_FANOUT_CLOSURE.json`
- Verifier: `scripts/verify-move62-surface-backlink-fanout-closure.mjs`
- Audit: `scripts/move62-surface-backlink-fanout-closure-audit.sh`

ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

<!-- ANTIMATTERIUM_CONTROL_MOVE64_SURFACE_BACKLINK_FANOUT_CLOSURE -->
## Move 64 — CONTROL closes Move 63 public surface backlink fanout

CONTROL v0.2.30 closes the Move 63 public surface backlink fanout from CONTROL v0.2.29 into Core, WWW, and Org profile.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.29-antimatterium-control-move61-surface-closure
- Prior CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28706590644
- Prior CONTROL closure ID: `cc3254bf684790e5b5e88b947b35ef1ff5796cba9dcf827234ec08114d40d67c`
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.44-antimatterium-control-v0229-backlink
- Core backlink ID: `c19dfefc5dc203b19ea726bba2987705a13a9bff8f70b43ed77d4a9b685c26e7`
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.40-antimatterium-www-control-v0229-backlink
- WWW backlink ID: `1f2c9df8075c89c6cfce4f8a807b52e313a6d8711631c934e193464e2291c2ae`
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.38-antimatterium-org-profile-control-v0229-backlink
- Org profile backlink ID: `f2119453983e2812b87c9b0821d8fd71ca728f8d1007039e83dd1fb5b20d51d4`
- Move 64 closure ID: `f36f9955746671dcb6a799939c27c6b579dd10be6dc939714feb06d5872a27ea`
- Receipt: `control/ANTIMATTERIUM_CONTROL_MOVE64_SURFACE_BACKLINK_FANOUT_CLOSURE.json`
- Verifier: `scripts/verify-move64-surface-backlink-fanout-closure.mjs`
- Audit: `scripts/move64-surface-backlink-fanout-closure-audit.sh`

ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 66 — CONTROL closes Move 65 public surface backlink fanout

CONTROL v0.2.31 closes the Move 65 public surface backlink fanout from CONTROL v0.2.30 across Core v0.2.45, WWW v0.1.41, and org profile v0.0.39.

Public closure receipt:

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.31-antimatterium-control-move65-surface-closure
- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.30-antimatterium-control-move63-surface-closure
- Prior CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28707158589
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.45-antimatterium-control-v0230-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.41-antimatterium-www-control-v0230-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.39-antimatterium-org-profile-control-v0230-backlink
- Move 66 closure ID: `ed2ac2e0ae68635986a07084622f3ae9a2fc746995b1aaf11846913bad8d9c8d`

Flags:

```text
ANTIMATTERIUM_MOVE66_CONTROL_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE_COMPLETE=true
ANTIMATTERIUM_MOVE66_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSED=true
ANTIMATTERIUM_MOVE66_PUBLIC_SURFACE_BACKLINK_FANOUT_CLOSURE_AUDIT_PASS=true
ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true
````

## Move 68 — CONTROL closes Move 67 public surface backlink fanout

CONTROL v0.2.32 closes the Move 67 public surface backlink fanout from CONTROL v0.2.31 across Core v0.2.46, WWW v0.1.42, and org profile v0.0.40.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.31-antimatterium-control-move65-surface-closure
- Prior CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28746575495
- Prior CONTROL closure ID: ed2ac2e0ae68635986a07084622f3ae9a2fc746995b1aaf11846913bad8d9c8d
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.46-antimatterium-control-v0231-backlink
- Core backlink ID: b59e89409997dfdb99f1aad7ff2078e83e3732725fd7f8d6c8930ef598f98cb9
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.42-antimatterium-www-control-v0231-backlink
- WWW backlink ID: 0c429e30935cfead1be7aee0b2c3b049b2ee8d747d2588de68ea8e4bfa4f9ffd
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.40-antimatterium-org-profile-control-v0231-backlink
- Org profile backlink ID: ef20e78521439412e271acc4d126a2b1d30bda8b241e7f16484eeaea133b6bd2
- Move 68 closure ID: 26f9d60e76939e16c27da34d345686d37fad0a0caa1cd097673f1dc1c9d5210f
- ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
- ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 70 — CONTROL closes Move 69 public surface backlink fanout

CONTROL v0.2.33 closes the Move 69 public surface backlink fanout from CONTROL v0.2.32 across Core v0.2.47, WWW v0.1.43, and org profile v0.0.41.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.32-antimatterium-control-move67-surface-closure
- Prior CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28747392917
- Prior CONTROL closure ID: 26f9d60e76939e16c27da34d345686d37fad0a0caa1cd097673f1dc1c9d5210f
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.47-antimatterium-control-v0232-backlink
- Core backlink ID: 57a6f14ecdcbb314947c46b8001104f2f4ae2911c29526359fed3a854bb4f802
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.43-antimatterium-www-control-v0232-backlink
- WWW backlink ID: e4210f9ade5a9d97d0196b549692b08dc39a9522ff7560af48ed03d57eff7d86
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.41-antimatterium-org-profile-control-v0232-backlink
- Org profile backlink ID: 0bd3fcadae438a38c32aa9bcb06dfbb3ce8a37e85ee13b3ad15f831d4d5cccb9
- Move 70 closure ID: 6e32a74f67f999c779dbcf5117de6fda1bbdc8a2c1505bf3d47c85f8f00b145b
- ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
- ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 72 — CONTROL closes Move 71 public surface backlink fanout

CONTROL v0.2.34 closes the Move 71 public surface backlink fanout from CONTROL v0.2.33 across Core v0.2.48, WWW v0.1.44, and org profile v0.0.42.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.33-antimatterium-control-move69-surface-closure
- Prior CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28747726663
- Prior CONTROL closure ID: 6e32a74f67f999c779dbcf5117de6fda1bbdc8a2c1505bf3d47c85f8f00b145b
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.48-antimatterium-control-v0233-backlink
- Core backlink ID: e530e13a78d4bd2d5d77303b8f58c7bb3402f826defb5769e96f57410a27fb47
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.44-antimatterium-www-control-v0233-backlink
- WWW backlink ID: 7c13483fe112563dc28a2e5eee9322745611fc62ba2f426cf12b82a3ae548e62
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.42-antimatterium-org-profile-control-v0233-backlink
- Org profile backlink ID: da69ca9e87525e415cf2f48eebfc35bda2d480669bce7aaa18006581836d5e01
- Move 72 closure ID: c9af607f2cdaa3d88e0ff3c9abfeab7deaa031e38e48e75af3dbdfa0f738687b
- ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
- ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 74 — CONTROL closes Move 73 public surface backlink fanout

CONTROL v0.2.35 closes the Move 73 public surface backlink fanout.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.34-antimatterium-control-move71-surface-closure
- Prior CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28814745469
- Prior CONTROL closure ID: c9af607f2cdaa3d88e0ff3c9abfeab7deaa031e38e48e75af3dbdfa0f738687b
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.49-antimatterium-control-v0234-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.45-antimatterium-www-control-v0234-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.43-antimatterium-org-profile-control-v0234-backlink
- Core backlink ID: aa29f6557667c26be9680eddfe81cde31a1ead586d8d1831c04e436558f520f3
- WWW backlink ID: 36a06a1af016dced71ed704201490562e438e2af885e083c8026fcd3ebf10548
- Org profile backlink ID: 72fb0dd95579e32ff1143d2f0e2df6fd3aff5f9c50e35b4dad11763dda37f2c6
- Move 74 closure ID: 2585bfc44100f7684c5ea9ac876dc522b0329df829fb4bfb35ee0fcf09cd351f
- ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
- ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 76 — CONTROL closes Move 75 public surface backlink fanout

CONTROL v0.2.36 closes the Move 75 public surface backlink fanout.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.35-antimatterium-control-move73-surface-closure
- Prior CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28817843561
- Prior CONTROL closure ID: 2585bfc44100f7684c5ea9ac876dc522b0329df829fb4bfb35ee0fcf09cd351f
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.50-antimatterium-control-v0235-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.46-antimatterium-www-control-v0235-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.44-antimatterium-org-profile-control-v0235-backlink
- Core backlink ID: a56cd46dc7dd7d61a55de4d2137f5fa8703c551c61700cac223833a944ff6464
- WWW backlink ID: 990a25dc7da43d5ec3235d11c621f53e6e81a12d591c03fc3351f311e4598cd5
- Org profile backlink ID: 06acd3d0c1f4ef483dcdfe90697f8189203c8c5156b1e57a81b7fe5649c629a9
- Move 76 closure ID: 990f14ef8c10ba7e83a50d4dc693ab4aa44483d9d2bc1f306aa49f0259d6812d
- ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
- ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 78 — CONTROL closes Move 77 public surface backlink fanout

CONTROL 0.2.37 closes the Move 77 public surface backlink fanout from CONTROL v0.2.36.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.36-antimatterium-control-move75-surface-closure
- Prior CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28819796095
- Prior CONTROL closure ID: 990f14ef8c10ba7e83a50d4dc693ab4aa44483d9d2bc1f306aa49f0259d6812d
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.51-antimatterium-control-v0236-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.47-antimatterium-www-control-v0236-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.45-antimatterium-org-profile-control-v0236-backlink
- Core backlink ID: 8aa73e300ade2ebea5ee2bc82b40a9c02fb4efddeba6d7dd29c51b20199685aa
- WWW backlink ID: 2c45e1976d95ac366356ea2d18c7ee6ddcc6d394a1ea8fb3b92f806eb9a3648a
- Org profile backlink ID: 39d0be009618a6e0536780345b806fa1feb49c1d578048534fda26ba17693c89
- Move 78 closure ID: 4304bc3fc22364c5600526b2f87bad02d6bb52c56d56755be2b1cbfefdfdd377
- ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
- ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 80 — CONTROL closes Move 79 public surface backlink fanout

CONTROL 0.2.38 closes the Move 79 public surface backlink fanout from CONTROL v0.2.37.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.37-antimatterium-control-move77-surface-closure
- Prior CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28821621138
- Prior CONTROL closure ID: 4304bc3fc22364c5600526b2f87bad02d6bb52c56d56755be2b1cbfefdfdd377
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.52-antimatterium-control-v0237-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.48-antimatterium-www-control-v0237-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.46-antimatterium-org-profile-control-v0237-backlink
- Core backlink ID: c25af4d72c54aba8a6eaa02cea9493b25da8b67aa427d72c9d85898a2f5f7367
- WWW backlink ID: 834907d3ec61ec57ce1b4f21063bfeb285fcaff3c62ffc32508d9761e553e0c2
- Org profile backlink ID: 0fb8c55049f0017a7d9dee82bfaca9283ea3429bcf4c5a83ad6e5c916ebd9517
- Move 80 closure ID: 2d29e07145411ed224b9115f7974875a54149f8cfef514f253409c1c321c4e17
- ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
- ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 82 — CONTROL closes Move 81 public surface backlink fanout

CONTROL 0.2.39 closes the Move 81 public surface backlink fanout from CONTROL v0.2.38.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.38-antimatterium-control-move79-surface-closure
- Prior CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28893546825
- Prior CONTROL closure ID: 2d29e07145411ed224b9115f7974875a54149f8cfef514f253409c1c321c4e17
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.53-antimatterium-control-v0238-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.49-antimatterium-www-control-v0238-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.47-antimatterium-org-profile-control-v0238-backlink
- Core backlink ID: c95084dd908698c740b3e523863dc991a8630433f40024ee1e2a560a7eebcbd1
- WWW backlink ID: 54babbe9a4164c3a93682287f2ec6cc2dc875c137e1cc0cab052b42a43a518c5
- Org profile backlink ID: 34cefba9a61620139341114138f03b0238ac973a770626f3b13cc1ee9f0e5091
- Move 82 closure ID: cff80893bd06f2d1eb219912df96c6f552732a514f2815dc2d348cb5ed24f556
- ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
- ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 84 — CONTROL closes Move 83 public surface backlink fanout

CONTROL 0.2.40 closes the Move 83 public surface backlink fanout from CONTROL v0.2.39.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.39-antimatterium-control-move81-surface-closure
- Prior CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28896213832
- Prior CONTROL closure ID: cff80893bd06f2d1eb219912df96c6f552732a514f2815dc2d348cb5ed24f556
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.54-antimatterium-control-v0239-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.50-antimatterium-www-control-v0239-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.48-antimatterium-org-profile-control-v0239-backlink
- Core backlink ID: 1b0610067973f8527502495b58a7c745f36b081198b51f4398bf96f30b4dc7cb
- WWW backlink ID: 4c7e0f8ea8b623fd5554c32ca358c0036f9bd82b65c1e95bae61c348fc69c990
- Org profile backlink ID: 07389863553ef6f06301e7ccbc5678c265067f59a0d5b40cd0d956a42f47e444
- Move 84 closure ID: 1a3a6df58737e675958e870bd28b4f318b5e458e8dec6354bb76a45cf633633a
- ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
- ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 86 — CONTROL closes Move 85 public surface backlink fanout

CONTROL 0.2.41 closes the Move 85 public surface backlink fanout from CONTROL v0.2.39.

- Prior CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.40-antimatterium-control-move83-surface-closure
- Prior CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28898964616
- Prior CONTROL closure ID: 1a3a6df58737e675958e870bd28b4f318b5e458e8dec6354bb76a45cf633633a
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.55-antimatterium-control-v0240-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.51-antimatterium-www-control-v0240-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.49-antimatterium-org-profile-control-v0240-backlink
- Core backlink ID: 1d898fa91a0cd0730e50ff185edef41efea12058bb35b08abbecb83afb824e9d
- WWW backlink ID: 25f25e7b040768c90d7abe7be51e7ad2b5d97c45fa2069b53aa8ceb77a8ef464
- Org profile backlink ID: ef767654bc0f6b7282a8367af9a048dea131d12247c15ea39edc283631bbed07
- Move 86 closure ID: 448a8074d76baf5d958c6069dbf3d7a9057f86b17aa5d2c74aee76167afc7542
- ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
- ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 88 — CONTROL closes Move 87 public surface backlink fanout

CONTROL v0.2.42 closes the Move 87 public surface backlink fanout from CONTROL v0.2.41.

- Source CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.41-antimatterium-control-move85-surface-closure
- Source CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28900560674
- Source CONTROL closure ID: 448a8074d76baf5d958c6069dbf3d7a9057f86b17aa5d2c74aee76167afc7542
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.56-antimatterium-control-v0241-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.52-antimatterium-www-control-v0241-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.50-antimatterium-org-profile-control-v0241-backlink
- Short public tag required: true
- No local root required: true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 90 — CONTROL closes Move 89 public surface backlink fanout

CONTROL v0.2.43 closes the Move 89 public surface backlink fanout from CONTROL v0.2.42.

- Source CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.42-antimatterium-control-move87-surface-closure
- Source CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28901274914
- Source CONTROL closure ID: 280a205f6631f33300cfd7d5c25c791877823bd52fbcc9d7544d85d561401d4b
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.57-antimatterium-control-v0242-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.53-antimatterium-www-control-v0242-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.51-antimatterium-org-profile-control-v0242-backlink
- Short public tag required: true
- No local root required: true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 92 — CONTROL closes Move 91 public surface backlink fanout

CONTROL v0.2.44 closes the Move 91 public surface backlink fanout.

- Source CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.43-antimatterium-control-move89-surface-closure
- Source CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29045944783
- Source CONTROL closure ID: f433b1fa1c47217bffbd8561ffa1547ae30629b3ef5ee9c6d94fccdaf679548e
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.58-antimatterium-control-v0243-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.54-antimatterium-www-control-v0243-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.52-antimatterium-org-profile-control-v0243-backlink
- Core backlink ID: d5a4ed5ae56e95aab3c2acd2a6e44619aca88b18e6860290218e681b9e7e40f0
- WWW backlink ID: 6d8e6e66bba6468800625040a5256131a0357c55f889c32e74e4de58ce6701b1
- Org profile backlink ID: 7093487b83d8235ecf727634e0e01d7b2b775405f9eb87955107402163e390ee
- Short public tag required: true
- No local root required: true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true


## Move 94 — CONTROL closes Move 93 public surface backlink fanout

CONTROL v0.2.45 closes the Move 93 fanout from CONTROL v0.2.44 into Core, WWW, and Org profile.

- Source CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.44-antimatterium-control-move91-surface-closure
- Source CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29050784336
- Source CONTROL closure ID: 12b7a23e6b4691c991c4a4321b299fc963120a35b22c362e466b66121eddab54
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.59-antimatterium-control-v0244-backlink
- Core backlink ID: 8dad72a77f2689a045ead5bc309bbe29c967f5547bb59f16c9fdd84153f156b6
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.55-antimatterium-www-control-v0244-backlink
- WWW backlink ID: d34f04a80e5e88e06dbf3ed158969098cd65bbe8f9ed8bdf50fa81a89b77503e
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.53-antimatterium-org-profile-control-v0244-backlink
- Org profile backlink ID: 752da614cc114594a30853aa1a1d075dab8cd75d12af945299eb261e0539fa0a
- Move 94 closure ID: a233a9b9a989b021c008843e9a9947af74a27127debb13cd6539cc284cc23b03
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true

## Move 96 — CONTROL v0.2.46 closes Move 95 public surface backlink fanout

Move 96 closes the Move 95 public surface backlink fanout from CONTROL v0.2.45 into:

- Core v0.2.60
- WWW v0.1.56
- Org profile v0.0.54

The closure is bounded to public release evidence, replayable verifier output, short public tags, and rootless reconstruction. It does not assert current physical production, starship readiness, or physical production instructions.

Verifier:

```bash
npm run verify:move96-surface-backlink-fanout-closure
npm run audit:move96-surface-backlink-fanout-closure
npm run test:move96-surface-backlink-fanout-closure
````



## Move 98 — CONTROL closes Move 97 public surface backlink fanout

CONTROL v0.2.47 closes the Move 97 public surface backlink fanout.

- Source CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.46-antimatterium-control-move95-surface-closure
- Source CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29121293151
- Source CONTROL closure ID: 1ddee463650c95cccec7babc8bae95f389c5f75880fc9aeb40a32a7f29b4d33d
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.61-antimatterium-control-v0246-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.57-antimatterium-www-control-v0246-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.55-antimatterium-org-profile-control-v0246-backlink
- Core backlink ID: df8df22c35ef57a793cdb57033d05ebc2c0ba9abd3b072fd6bed6520d2421b6c
- WWW backlink ID: 7ae73e20982f4964076c7ac8394c534451da0701d8f9ce35c6148d2d6857c392
- Org profile backlink ID: ff1268359260e2e4e336eb5f26f861bd83446179b9ab68a8c5134ce37d3e27ce
- Move 98 closure ID: d0d96d476693d7cc05e1a2c6f4467afaeae1711d5dd426944f78cd0e60789874
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true


## Move 100 — CONTROL v0.2.48 closes Move 99 fanout

CONTROL v0.2.48 closes the Move 99 public surface backlink fanout.

- Previous CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.47-antimatterium-control-move97-surface-closure
- Previous CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29121927208
- Previous CONTROL closure ID: d0d96d476693d7cc05e1a2c6f4467afaeae1711d5dd426944f78cd0e60789874
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.62-antimatterium-control-v0247-backlink
- Core backlink ID: a6e585ae0c31cf7ebe2a301bec2eba5b1b39a85bbddcf8c5c8f478dcb77138d2
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.58-antimatterium-www-control-v0247-backlink
- WWW backlink ID: 6be0be82cdfecec6a319604688180db339e64fcb1ea873f030e1efca0db0194f
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.56-antimatterium-org-profile-control-v0247-backlink
- Org profile backlink ID: 3aa39959e3a7b7e4d53ba8eae3d164d22532de1a892e8a5d28705476170d61b1
- Move 100 closure ID: 5b65cc86664000ddedcd539e13ad893e6c88e8912f5785a0163c408bb1624132
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true


## Move 102 — CONTROL closes Move 101 public surface backlink fanout

CONTROL v0.2.49 closes the Move 101 public surface backlink fanout from CONTROL v0.2.48.

- Source CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.48-antimatterium-control-move99-surface-closure
- Source CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29122920642
- Source CONTROL closure ID: 5b65cc86664000ddedcd539e13ad893e6c88e8912f5785a0163c408bb1624132
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.63-antimatterium-control-v0248-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.59-antimatterium-www-control-v0248-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.57-antimatterium-org-profile-control-v0248-backlink
- Core backlink ID: a555a952fe98d531710008e2ece633557a86786f7e1cca3b6128cec5bbf48151
- WWW backlink ID: 82ed229a283be8cf9d54e32dbf7f43a82cf3bdd8e0ba8d1b426c992231c83bae
- Org profile backlink ID: 29e68dcf4d7f831822f5313b6d5b3aebd803dd00b90563b06006363928db4187
- Move 102 closure ID: fb8753876826c2273ea40e7e28e4a1570b3f06e1085820b83b84921905398073
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true


## Move 104 — CONTROL closes Move 103 public surface backlink fanout

CONTROL 0.2.50 closes the Move 103 public surface backlink fanout from CONTROL v0.2.49.

- Source CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.49-antimatterium-control-move101-surface-closure
- Source CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29123896960
- Source CONTROL closure ID: fb8753876826c2273ea40e7e28e4a1570b3f06e1085820b83b84921905398073
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.64-antimatterium-control-v0249-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.60-antimatterium-www-control-v0249-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.58-antimatterium-org-profile-control-v0249-backlink
- Core backlink ID: 6b30c1df950a1875c0af0f930a0121eeebdf83ceb2066cf54d0dbe1366469716
- WWW backlink ID: be72c5faba9810a7a9d5e6b80551097bf545d6329bfec4da109b5dc0e1b04dd8
- Org profile backlink ID: 9138f0c926065906b07dec873f74ee00bd5c787e5cfbd0ffaaec104814bf565f
- Move 104 closure ID: 65a4f5d0435922740c8d2b63539bc7ca1ea31b23579cd20d47cf1fd1adde9186
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true


## Move 106 — CONTROL closes Move 105 public surface backlink fanout

CONTROL 0.2.51 closes the Move 105 public surface backlink fanout from CONTROL v0.2.50 into Core, WWW, and Org profile.

- Source CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.50-antimatterium-control-move103-surface-closure
- Source CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29151398850
- Source CONTROL closure ID: 65a4f5d0435922740c8d2b63539bc7ca1ea31b23579cd20d47cf1fd1adde9186
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.65-antimatterium-control-v0250-backlink
- Core backlink ID: 4cbbdf5854fa9683e56d2f4aadb50f18bbeb4aa5f7ae021b9fe197b2bee5e812
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.61-antimatterium-www-control-v0250-backlink
- WWW backlink ID: 3f9410579f838edf1cf208064e2bfb4974708ba04a78be16d600450c37f7a284
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.59-antimatterium-org-profile-control-v0250-backlink
- Org profile backlink ID: dffc4da67ad1c81c45dbf42d3c5828def70160784fd4febb203762f744d23220
- Move 106 closure ID: 88760f9d9c0dc29d456878503895c5c47bbc5c0a42d33d5050b6fbb95bd1bd2b
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true


## Move 108 — CONTROL closes Move 107 public surface backlink fanout

CONTROL 0.2.52 closes the public surface backlink fanout from CONTROL v0.2.51 across Core, WWW, and Org profile.

- Source CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.51-antimatterium-control-move105-surface-closure
- Source CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29152869204
- Source CONTROL closure ID: 88760f9d9c0dc29d456878503895c5c47bbc5c0a42d33d5050b6fbb95bd1bd2b
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.66-antimatterium-control-v0251-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.62-antimatterium-www-control-v0251-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.60-antimatterium-org-profile-control-v0251-backlink
- Move 108 closure ID: 48d0cd4b1cb1a4c75b3c1f213e6062fa06e530af4aa27cffe013581b20873181
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true


## Move 110 — CONTROL closes Move 109 public surface backlink fanout

CONTROL 0.2.53 closes the Move 109 public surface backlink fanout.

- Source CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.52-antimatterium-control-move107-surface-closure
- Source CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29154133238
- Source CONTROL closure ID: 48d0cd4b1cb1a4c75b3c1f213e6062fa06e530af4aa27cffe013581b20873181
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.67-antimatterium-control-v0252-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.63-antimatterium-www-control-v0252-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.61-antimatterium-org-profile-control-v0252-backlink
- Core backlink ID: 8a92f03a24e41405e8635033b1a9bd4e70fc69e7e3839ab3255fe35d616e8f34
- WWW backlink ID: fd6747f44d1fa00e122e042355e4a7b1c8f855bb183e581cbdc2b524899b4663
- Org profile backlink ID: 7e13161fecd4f3f64332e96aa1efd73704d5b4fdfb85b5f2083837b65da180ad
- Move 110 closure ID: 2730270edff7e1ea62cc00c253ae32e0eed2559a47509efe7dea2655cfdd04a7
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true


## Move 110 — CONTROL closes Move 109 public surface backlink fanout

CONTROL 0.2.53 closes the Move 109 public surface backlink fanout.

- Source CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.52-antimatterium-control-move107-surface-closure
- Source CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29154133238
- Source CONTROL closure ID: 48d0cd4b1cb1a4c75b3c1f213e6062fa06e530af4aa27cffe013581b20873181
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.67-antimatterium-control-v0252-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.63-antimatterium-www-control-v0252-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.61-antimatterium-org-profile-control-v0252-backlink
- Core backlink ID: 8a92f03a24e41405e8635033b1a9bd4e70fc69e7e3839ab3255fe35d616e8f34
- WWW backlink ID: fd6747f44d1fa00e122e042355e4a7b1c8f855bb183e581cbdc2b524899b4663
- Org profile backlink ID: 7e13161fecd4f3f64332e96aa1efd73704d5b4fdfb85b5f2083837b65da180ad
- Move 110 closure ID: 2730270edff7e1ea62cc00c253ae32e0eed2559a47509efe7dea2655cfdd04a7
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true


## Move 112 — CONTROL closes Move 111 public surface fanout

CONTROL 0.2.54 closes the Move 111 public surface backlink fanout from CONTROL v0.2.53.

- Source CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.53-antimatterium-control-move109-surface-closure
- Source CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29155447375
- Source CONTROL main SHA: fcaa2d7c60d5debe679adf899ed769a044dcfbc5
- Source CONTROL closure ID: 2730270edff7e1ea62cc00c253ae32e0eed2559a47509efe7dea2655cfdd04a7
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.68-antimatterium-control-v0253-backlink
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.64-antimatterium-www-control-v0253-backlink
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.62-antimatterium-org-profile-control-v0253-backlink
- Core backlink ID: acfb83e951098c7bf6641c91565ab6485eeb56cabfa536cbd5b5f19364b1daf1
- WWW backlink ID: cf66a45147f746681d692c5763cb5e8b39bb9c9b980a1e177e4f9dac193e7c70
- Org profile backlink ID: 22bed1a287b290fc0219a40e0ac9aea349b9752b6210daa54064b467123ae2e3
- Move 112 closure ID: ebfc24685134a4fb66c15bf9ec149a0d1a4ec8c98871f9684c0cb73447e751a6
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true


## Move 114 — CONTROL closes Move 113 public surface backlink fanout

CONTROL 0.2.55 closes the Move 113 backlink fanout from CONTROL 0.2.54.

- Source CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.54-antimatterium-control-move111-surface-closure
- Source CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29191821036
- Source CONTROL main SHA: cba5f798ac6a803803e86ca39ad54376c338d381
- Source CONTROL closure ID: ebfc24685134a4fb66c15bf9ec149a0d1a4ec8c98871f9684c0cb73447e751a6
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.69-antimatterium-control-v0254-backlink
- Core backlink ID: 6778a5fd828e9470ad30a5a06106dd328089eb00061a10b28c996fd712451ca4
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.65-antimatterium-www-control-v0254-backlink
- WWW backlink ID: 820dd8dc5685b4624f390bd80e085a27bf8d656033ee8a0fcd0c553bbeecc5cf
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.63-antimatterium-org-profile-control-v0254-backlink
- Org profile backlink ID: 42a0e1c8e43944b904e21f71365e55365f270b62832999c8cb0e99242d71d6fa
- Move 114 closure ID: cac92a90fe4ba3a089dda110d5d929814d5fae242961cae18e1ada9cf733e7ab
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true


## Move 116 — CONTROL 0.2.56 closes Move 115 surface fanout

CONTROL 0.2.56 closes the Move 115 public surface backlink fanout from CONTROL 0.2.55.

- Source CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.55-antimatterium-control-move113-surface-closure
- Source CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29194891663
- Source CONTROL main SHA: f579904b1e8ce500661393d25b9016fa7b58bec1
- Source CONTROL closure ID: cac92a90fe4ba3a089dda110d5d929814d5fae242961cae18e1ada9cf733e7ab
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.70-antimatterium-control-v0255-backlink
- Core backlink ID: 42bad1271fae9a2d8af79e6a69fcdeecb88bd6f984c8672017ae001791502059
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.66-antimatterium-www-control-v0255-backlink
- WWW backlink ID: a61e25e38d45861a8de0caadfa6767cfca68cf933068c315beb24034f65d7c1c
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.64-antimatterium-org-profile-control-v0255-backlink
- Org profile backlink ID: 10252b4d19d3477e3ff415f43a942ec764c78d1da0775f643e55327d0b46ec52
- Move 116 closure ID: 5b91b62a34bc1a092474a60215f0fcbd42a9deb1003105a6bf9f5c08c87fdebc
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true


## Move 116 — CONTROL 0.2.56 closes Move 115 surface fanout

CONTROL 0.2.56 closes the Move 115 public surface backlink fanout from CONTROL 0.2.55.

- Source CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.55-antimatterium-control-move113-surface-closure
- Source CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29194891663
- Source CONTROL main SHA: f579904b1e8ce500661393d25b9016fa7b58bec1
- Source CONTROL closure ID: cac92a90fe4ba3a089dda110d5d929814d5fae242961cae18e1ada9cf733e7ab
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.70-antimatterium-control-v0255-backlink
- Core backlink ID: 42bad1271fae9a2d8af79e6a69fcdeecb88bd6f984c8672017ae001791502059
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.66-antimatterium-www-control-v0255-backlink
- WWW backlink ID: a61e25e38d45861a8de0caadfa6767cfca68cf933068c315beb24034f65d7c1c
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.64-antimatterium-org-profile-control-v0255-backlink
- Org profile backlink ID: 10252b4d19d3477e3ff415f43a942ec764c78d1da0775f643e55327d0b46ec52
- Move 116 closure ID: 5b91b62a34bc1a092474a60215f0fcbd42a9deb1003105a6bf9f5c08c87fdebc
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true

<!-- ANTIMATTERIUM MOVE 118 CONTROL SURFACE BACKLINK FANOUT CLOSURE -->
## Move 118 — CONTROL closure for Move 117 surface fanout

CONTROL v0.2.57 closes the Move 117 public surface fanout from CONTROL v0.2.56.

- Source CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.56-antimatterium-control-move115-surface-closure
- Source CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29196327916
- Source CONTROL main SHA: 10f9ca7a645ce99ee98e5e5447bb9d36fd371023
- Source CONTROL closure ID: 5b91b62a34bc1a092474a60215f0fcbd42a9deb1003105a6bf9f5c08c87fdebc
- Core release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.71-antimatterium-control-v0256-backlink
- Core backlink ID: 5b111f52b32c421c7c3d0179a7d417be4716c95c8b57952e6243d210c0837bfd
- WWW release: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.67-antimatterium-www-control-v0256-backlink
- WWW backlink ID: 8f5ce7eb77862788c5abcc5066a9f197c4c789307dc2ada485e74c5ef2057cf8
- Org profile release: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.65-antimatterium-org-profile-control-v0256-backlink
- Org profile backlink ID: 2e5322ce89a5883d434f6632ee9b6fdf1deb575a8d6fc75f6807769234a04a79
- Closure receipt: `control/ANTIMATTERIUM_CONTROL_MOVE118_SURFACE_BACKLINK_FANOUT_CLOSURE.json`
- Closure verifier: `npm run verify:move118-surface-backlink-fanout-closure`
- Closure audit: `npm run audit:move118-surface-backlink-fanout-closure`

```text
ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true
```
<!-- /ANTIMATTERIUM MOVE 118 CONTROL SURFACE BACKLINK FANOUT CLOSURE -->

## Move 120 — CONTROL closes Move 119 public surface backlink fanout

CONTROL v0.2.58 closes the Move 119 public surface backlink fanout from CONTROL v0.2.57 to Core, WWW and Org profile.

Source CONTROL:
- Release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.57-antimatterium-control-move117-surface-closure
- Verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29197125059
- Main SHA: ad002077cc6d86bd03655ee8bec24df00f75d17d
- Closure ID: b9e403645fe18031552c192cd7ebed2c2d8e9aec070502c6d89b556aabfabf32

Surface releases:
- Core: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.72-antimatterium-control-v0257-backlink
- WWW: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.68-antimatterium-www-control-v0257-backlink
- Org profile: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.66-antimatterium-org-profile-control-v0257-backlink

Surface backlink IDs:
- Core: 904813a62a468852f8a1e0fd05b3a34c2959ecc9c34ce7c6248bc2ccc18aea87
- WWW: 08488c1ef5ea6678e6c563669a73cea1a814b9d96bbc861a7fa4a045638419a8
- Org profile: 92c036edafcc6abe1827804f09e0926d86f8b3c907915b44510cbd52484f16c7

Move 120 closure ID:
- cb9d670f584aa1a966bbcb5f2cd36aa1da7ac6bd8a68f36ac283a79d776f34dd

Safety:
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 122 — CONTROL closes Move 121 surface fanout

CONTROL v0.2.59 closes the public surface backlink fanout from CONTROL v0.2.58.

Authority:

- Release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.58-antimatterium-control-move119-surface-closure
- Verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29200037531
- Main SHA: e9ba24b46fb5ea31d036e0db1eb698946af75353
- Closure ID: cb9d670f584aa1a966bbcb5f2cd36aa1da7ac6bd8a68f36ac283a79d776f34dd

Bound surfaces:

- Core: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.73-antimatterium-control-v0258-backlink
- WWW: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.69-antimatterium-www-control-v0258-backlink
- Org profile: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.67-antimatterium-org-profile-control-v0258-backlink

Surface backlink identifiers:

- Core: 749361e6fbc56709a0564fc58eaae2a11ac82ba7ed91c7dee111639041290396
- WWW: 52d52363aec015ecdad4f846be5eba8dc79a6b5aa6e0501ac130c00a32c6c7be
- Org profile: b9bc695553018439f5c97941d047ae155e5113de4a3de1e3386bdfde99d02bd1

Closure identifier:

- 4633ac517d2311b52f13e3021a7949c711463504b2c682647433db4f95d62ba5

Safety boundary:

- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 124 — CONTROL closes Move 123 public surface backlink fanout

CONTROL v0.2.60 closes the Move 123 public-surface backlink fanout.

Source authority:

- CONTROL v0.2.59 release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.59-antimatterium-control-move121-surface-closure
- Successful verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29204415342
- Main SHA: 2272ea956e06360479736d5ba822022597ee78e8
- Closure ID: 4633ac517d2311b52f13e3021a7949c711463504b2c682647433db4f95d62ba5

Bound public surfaces:

- Core v0.2.74: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.74-antimatterium-control-v0259-backlink
- WWW v0.1.70: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.70-antimatterium-www-control-v0259-backlink
- Org profile v0.0.68: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.68-antimatterium-org-profile-control-v0259-backlink

Move 124 closure ID:

- 236db452d82fe9fa222877afda4987e13583504e87a044860477476caffb771d

Boundary:

- Exact public tag commits required: true
- External replay required: true
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true

## Move 126 — CONTROL closes Move 125 public surface backlink fanout

CONTROL v0.2.61 closes the Move 125 public-surface backlink fanout.

Source authority:

- CONTROL v0.2.60 release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.60-antimatterium-control-move123-surface-closure
- Successful verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29204880416
- Main SHA: 2ce460cd816eb4157dc2e65b1af233e33df07410
- Closure ID: 236db452d82fe9fa222877afda4987e13583504e87a044860477476caffb771d

Bound public surfaces:

- Core v0.2.75: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.75-antimatterium-control-v0260-backlink
- WWW v0.1.71: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.71-antimatterium-www-control-v0260-backlink
- Org profile v0.0.69: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.69-antimatterium-org-profile-control-v0260-backlink

Move 126 closure ID:

- 9d1a849ced65fff3f4df4794c906575976131659581bdbbeb9d051b554513e45

Boundary:

- Exact public tag commits required: true
- External replay required: true
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true

## Move 128 — CONTROL closes Move 127 public surface backlink fanout

CONTROL v0.2.62 closes the Move 127 public-surface backlink fanout.

Source authority:

- CONTROL v0.2.61 release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.61-antimatterium-control-move125-surface-closure
- Successful verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29205745933
- Main SHA: 2e514a95c2fda3c46a63eab206b3a3dee2459f4b
- Closure ID: 9d1a849ced65fff3f4df4794c906575976131659581bdbbeb9d051b554513e45

Bound public surfaces:

- Core v0.2.76: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.76-antimatterium-control-v0261-backlink
- WWW v0.1.72: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.72-antimatterium-www-control-v0261-backlink
- Org profile v0.0.70: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.70-antimatterium-org-profile-control-v0261-backlink

Move 128 closure ID:

- 007e29815bc5e5ce89ab28897268ece2d61a503cc08b4add7a9a758249444edb

Boundary:

- Exact public tag commits required: true
- External replay required: true
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true

## Move 130 — CONTROL closes Move 129 public surface backlink fanout

CONTROL v0.2.63 closes the Move 129 public-surface backlink fanout.

Source authority:

- CONTROL v0.2.62 release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.62-antimatterium-control-move127-surface-closure
- Successful verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29206112554
- Main SHA: 3e4e046ac5c477526c4c67695f8ee4cb41a3be48
- Closure ID: 007e29815bc5e5ce89ab28897268ece2d61a503cc08b4add7a9a758249444edb

Bound public surfaces:

- Core v0.2.77: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.77-antimatterium-control-v0262-backlink
- WWW v0.1.73: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.73-antimatterium-www-control-v0262-backlink
- Org profile v0.0.71: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.71-antimatterium-org-profile-control-v0262-backlink

Move 130 closure ID:

- 94889ea04b57855f99f8cff464dc287b3ca518a9f0d38732dd3adc7e26040c05

Boundary:

- Exact public tag commits required: true
- External replay required: true
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true

## Move 132 — CONTROL closes Move 131 public surface backlink fanout

CONTROL v0.2.64 closes the Move 131 public-surface backlink fanout.

Source authority:

- CONTROL v0.2.63 release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.63-antimatterium-control-move129-surface-closure
- Successful verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29206398893
- Main SHA: afada789807ee3333e6c45a6f29aff5790d5ea05
- Closure ID: 94889ea04b57855f99f8cff464dc287b3ca518a9f0d38732dd3adc7e26040c05

Bound public surfaces:

- Core v0.2.78: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.78-antimatterium-control-v0263-backlink
- WWW v0.1.74: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.74-antimatterium-www-control-v0263-backlink
- Org profile v0.0.72: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.72-antimatterium-org-profile-control-v0263-backlink

Move 132 closure ID:

- 0d825bba6e10b333ca0ce5d613b5c0c151a340d6ab4cc6ba485175545d44952e

Boundary:

- Exact public tag commits required: true
- External replay required: true
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true

## Move 134 — CONTROL closes Move 133 public surface backlink fanout

CONTROL v0.2.65 closes the Move 133 public-surface backlink fanout.

Source authority:

- CONTROL v0.2.64 release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.64-antimatterium-control-move131-surface-closure
- Successful verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29361021498
- Main SHA: 29f697a9c6711b9338794fb4ccde24b90d0590f5
- Closure ID: 0d825bba6e10b333ca0ce5d613b5c0c151a340d6ab4cc6ba485175545d44952e

Bound public surfaces:

- Core v0.2.79: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.79-antimatterium-control-v0264-backlink
- WWW v0.1.75: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.75-antimatterium-www-control-v0264-backlink
- Org profile v0.0.73: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.73-antimatterium-org-profile-control-v0264-backlink

Move 134 closure ID:

- 0e5c9918ca4ba76f44577b62549888dadad5464cdc170e5ed7b7835b9107fbd0

Boundary:

- Exact public tag commits required: true
- External replay required: true
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true

## Move 136 — CONTROL closes Move 135 public surface backlink fanout

CONTROL v0.2.66 closes the Move 135 public-surface backlink fanout.

Source authority:

- CONTROL v0.2.65 release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.65-antimatterium-control-move133-surface-closure
- Successful verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29362695665
- Main SHA: bd3e4e02c1b923785607687b36bf1d082042c348
- Closure ID: 0e5c9918ca4ba76f44577b62549888dadad5464cdc170e5ed7b7835b9107fbd0

Bound public surfaces:

- Core v0.2.80: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.80-antimatterium-control-v0265-backlink
- WWW v0.1.76: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.76-antimatterium-www-control-v0265-backlink
- Org profile v0.0.74: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.74-antimatterium-org-profile-control-v0265-backlink

Move 136 closure ID:

- 383ec0b39d241554ed32fce6765cf5c511d4e08e77fe125b309c1cd559dd71c3

Boundary:

- Exact public tag commits required: true
- External replay required: true
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true

## Move 138 — CONTROL closes Move 137 public surface backlink fanout

CONTROL v0.2.67 closes the Move 137 public-surface backlink fanout.

Source authority:

- CONTROL v0.2.66 release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.66-antimatterium-control-move135-surface-closure
- Successful verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29578377132
- Main SHA: 857f266bfa84b652e96de28e93e288667d379013
- Closure ID: 383ec0b39d241554ed32fce6765cf5c511d4e08e77fe125b309c1cd559dd71c3

Bound public surfaces:

- Core v0.2.81: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.81-antimatterium-control-v0266-backlink
- WWW v0.1.77: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.77-antimatterium-www-control-v0266-backlink
- Org profile v0.0.75: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.75-antimatterium-org-profile-control-v0266-backlink

Move 138 closure ID:

- fbc4bbb9a4f22f09657e0a5e9c9e1c6061e8640272e6c87dfc6b20933f3014a1

Boundary:

- Exact public tag commits required: true
- External replay required: true
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true

## Move 140 — CONTROL closes Move 139 public surface backlink fanout

CONTROL v0.2.68 closes the Move 139 public-surface backlink fanout.

Source authority:

- CONTROL v0.2.67 release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.67-antimatterium-control-move137-surface-closure
- Successful verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29653800567
- Main SHA: 3eaa90d7b8850687431a47a5c8419f4bca6bfb0c
- Closure ID: fbc4bbb9a4f22f09657e0a5e9c9e1c6061e8640272e6c87dfc6b20933f3014a1

Bound public surfaces:

- Core v0.2.82: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.82-antimatterium-control-v0267-backlink
- WWW v0.1.78: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.78-antimatterium-www-control-v0267-backlink
- Org profile v0.0.76: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.76-antimatterium-org-profile-control-v0267-backlink

Move 140 closure ID:

- d952f0926fbb5036879e354b301b8a17a77bb1088a133be7494590ad69de2b1e

Boundary:

- Exact public tag commits required: true
- External replay required: true
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true

## Move 142 — CONTROL closes Move 141 public surface backlink fanout

CONTROL v0.2.69 closes the Move 141 public-surface backlink fanout.

Source authority:

- CONTROL v0.2.68 release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.68-antimatterium-control-move139-surface-closure
- Successful verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/29654567950
- Main SHA: 1b72f44cd0887ae62c23499274b1d023df35a9d1
- Closure ID: d952f0926fbb5036879e354b301b8a17a77bb1088a133be7494590ad69de2b1e

Bound public surfaces:

- Core v0.2.83: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.83-antimatterium-control-v0268-backlink
- WWW v0.1.79: https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.79-antimatterium-www-control-v0268-backlink
- Org profile v0.0.77: https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.77-antimatterium-org-profile-control-v0268-backlink

Move 142 closure ID:

- 63c59d3b79e4d34cec2f33f72fc898aba3e8a1311f664f62b247107054b2b31d

Boundary:

- Exact public tag commits required: true
- External replay required: true
- Short public tag required: true
- No local root required: true
- No current production claim: true
- No starship claim: true
- No physical production instructions: true
