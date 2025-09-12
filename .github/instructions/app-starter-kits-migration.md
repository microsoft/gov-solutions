
# Overview

These are the instructions on how to migrate app starter kit information from the source repo into this repo.

App Starter Kits are currently cataloged in the .source-apps-wiki folder.

# Migrating App Starter Kits

Each app has a <module>.md markdown page at that location. This page has an Overview section, a table of contents, Key Planned Features, Benefits, Ideal Customers, Installation Instructions, a Subpages list, and other optional sections. For the most part, this content should be ignored.

1. Create an app starter kit markdown page within the app_starter_kits collection (_app_starter_kits folder). The page name should be lowercase and hyphentated, matching the source module name as closely as possible. Use the provided _app_starter_kits/_template.md as a template for the app. Do not copy over the content from the sections in the source, we'll rebuild this in a separate pass. Do try to set the front matter metadata as much as possible for each app. 

2. Set the thumbnails for the app starter kit to the corresponding image at /assets/use_cases/<module>.png. 

# Migrating App Starter Kit Documents

Each app may have additional <module>/<documentation>.md files explaining various components in the app or other topics.

1. Extract the list of documents related to that app page at .source-app-wiki\<module>\<document>.md. Create a corresponding document in the docs collection at _docs/<module> for that same document. Just copy over the content as is, we'll resolve any images in a future pass. Make the document name all lowercase and hyphenated.

2. For each document, convert all images in each document by finding the image in the .attachments folder, copying that image into the /assets/app-starter-kits/<module> folder, and updating the image reference in the document to point to the new location. Be sure to use relative urls for all links. If needed, create or use a PowerShell script for this in the scripts folder.

3. Make sure every doc has a front matter set with a title, parent, and description. Parent is the module slug.

# Migrating App Starter Kit Releases

Each app also has a .source-apps-wiki/<module>/Release-Notes.md markdown page, which has entries for each of the releases for that app starter kit.

1. Use the information in the source .source-apps-wiki/<module>/Release-Notes.md file to create app starter kits releases, with the corresponding version number. See the other app starter kit releases for examples of the structure and format.

2. Set the app starter kit's latest_release front matter to the latest release.