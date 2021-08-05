// Inspired by: https://medium.com/swlh/auto-deploy-vue-js-to-github-pages-using-actions-723a2206e4d3

const execa = require("execa");
const fs = require("fs");

(async () => {
    try {
        console.log("Starting deployment...");
        await execa("git", ["checkout", "--orphan", "gh-pages"]);
        await execa("yarn", ["build"]);
        console.log("Build complete.");
        await execa("git", ["--work-tree", "dist", "add", "--all"]);
        await execa("git", ["--work-tree", "dist", "commit", "-m", "gh-pages"]);
        console.log("Pushing to gh-pages...");
        await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
        await execa("rm", ["-r", "dist"]);
        await execa("git", ["checkout", "-f", "main"]);
        await execa("git", ["branch", "-D", "gh-pages"]);
        console.log("Deployment successful.");
    } catch (e) {
        console.log(e.message);
        process.exit(1);
    }
})();
