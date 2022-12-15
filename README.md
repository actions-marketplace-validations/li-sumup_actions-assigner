# actions-assigner

Assign functions are defined in [github.js](src/github.js).

The Action will only auto assign the PR.

## Inputs

| Name | Description | Example |
| --- | --- | --- |
| `token` | **Required if using team-reviewers** A `repo` scoped personal access token. [Why](https://github.com/peter-evans/create-pull-request/issues/155#issuecomment-611904487). [Create one here](https://github.com/settings/tokens/new). | ${{ secrets.GH_TOKEN }} |

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
        with:
          token: ${{ secrets.GH_ACTIONS_CI_TOKEN }}
```
