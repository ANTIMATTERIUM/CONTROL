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
