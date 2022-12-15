# actions-assigner

Assign functions are defined in [github.js](src/github.js).

The Action will only auto assign the PR.

## Inputs

none

## Example workflow

- Create a file `pull-request.yml` in `.github/workflows/` directory with the following content:

```yaml
name: pull-request
on:
  pull_request:
    types: [opened]
jobs:
  assign:
    runs-on: ubuntu-latest
    steps:
      - uses: li-sumup/actions-assigner@v1
```
