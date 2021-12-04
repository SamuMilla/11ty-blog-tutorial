const {DateTime} = require("luxon");

module.exports = function(eleventyConfig){
    //To tell where the files are

    //Eleventy ignore files and folders that don't have templating languages, so we have to tell it to also get other files such as css or imnages
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    });
    // Return your Object options:
  return {
    dir: {
        //Telling 11ty all my files I'm working from are in the src folder
      input: "src",
      output: "public"
    }
  }
}