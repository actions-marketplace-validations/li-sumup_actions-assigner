const { context, getOctokit } = require('@actions/github')

/**
 * Creates Octokit instance and run assign and review.
 *
 * @param {string} token - GitHub token
 */
const handle = async (token) => {
  if (context.eventName === 'pull_request') {
    const octokit = getOctokit(token)
    await assign(octokit)
  } else {
    throw new Error('Sorry, this Action only works with pull requests.')
  }
}

/**
 * Auto assign pull requests.
 *
 * @param {Octokit} octokit - Octokit instance
 */
const assign = async (octokit) => {
  try {
    const { owner, repo, number } = context.issue
    await octokit.issues.addAssignees({
      owner: owner,
      repo: repo,
      issue_number: number,
      assignees: [context.actor]
    })
  } catch (err) {
    throw new Error(`Couldn't assign pull request.\n  Error: ${err}`)
  }
}

module.exports = { handle }
