// Data
const skills = require("./content/skills/skills.json");
const siteMetadata = require("./src/data/siteMetadata.json");

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

module.exports = function (api) {
  api.loadSource(({ addMetadata }) => {
    const gitCommit = process.env.COMMIT_REF
      ? process.env.COMMIT_REF.slice(0, 7)
      : "N/A";

    addMetadata("site", siteMetadata);
    addMetadata("gitCommit", gitCommit);
  });

  api.loadSource((actions) => {
    const collection = actions.addCollection("Skill");

    const technologies = skills.technologies.slice().reverse();

    technologies.forEach((skill) => {
      collection.addNode({
        ...skill,
        id: slugify(skill.name),
      });
    });
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
