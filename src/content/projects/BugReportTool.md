---
title: "Bug Report Tool"
description: "A tool for reporting bugs in Godot games and a dedicated bug viewer and notification automation."
slug: "bug-report-tool"
link: "https://github.com/Half-wayGames/BugReportTool"
thumbnail: "@assets/code.jpg"
chips: ["C#", "Godot", "Node.js", "React", "Discord"]
---

The bug report tool can be thought of as two parts: the in game tool that collects information from the user and the 
game state, and the server that receives reports and handles viewing them. 

## Future Improvements
For this first iteration of the reporting tool, I made use of N8N to automate the pipeline of handling the report after it is received. 
In the future, I plan to incorporate this automation into the tool itself, allowing it to handle storing the report, getting the summary, and sending the notification in Discord.

I would also likely use something other than server-side rendered React to handle the viewer aspect of bug reports, 
such as a more lightweight framework or a static site generator.

Another future improvement for the tool that I plan to add soon is the ability to promote a bug to a GitHub issue. 
This will allow someone on the team with access to the viewer to quickly decide which bugs need to be addressed to 
make them issues on the GitHub repository, using the GitHub API.