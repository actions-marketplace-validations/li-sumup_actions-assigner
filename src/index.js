const { getInput, setFailed } = require('@actions/core')
const { handle } = require('./github')

// Run Action.
const run = async () => {
  try {
    const token = getInput('token', { required: true })
    await handle(token, reviewers, teamReviewers)
  } catch (error) {
    setFailed(error.message)
  }
}

run()
