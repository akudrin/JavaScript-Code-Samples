const test = require("tape");
const github = require("../github");
test("Get GitHub user by username", async (t) => {
  t.plan(3);
  const githubUser = await github.getGitHubUser("octokit");
  t.equal(githubUser.id, 3430433);
  t.equal(githubUser.login, "octokit");
  t.equal(githubUser.name, "Octokit");
});
