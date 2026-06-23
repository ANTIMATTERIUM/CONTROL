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

