import { EleventyHtmlBasePlugin } from "@11ty/eleventy"

/** @param {import("@11ty/eleventy").UserConfig} cfg */
export default async function(cfg) {
    // Configure Eleventy
    cfg.setInputDirectory("content")      // Template files dir
    cfg.setIncludesDirectory("_includes") // Layouts/partials/macros files that are consumed by other templates
    cfg.setDataDirectory("_data")         // Global Data template files that apply to all templates
    cfg.setOutputDirectory("build")       // Finished compiled templates dir
    cfg.setTemplateFormats("html, njk")   // Template formats
    
    cfg.setQuietMode(false)               // Quiet console output
    cfg.addPassthroughCopy("content/img")
    cfg.addPassthroughCopy("content/css")
    cfg.addPlugin(EleventyHtmlBasePlugin) // Transform any absolute URLs in HTML to include this folder name
};

export const config = {
	pathPrefix: "/my-simple-blog/",
}