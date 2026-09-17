---
title: "Command Console"
description: "A reflection-based command console and logging system for Godot projects."
slug: "command-console"
link: "https://github.com/Half-Way-Games/GodotCommandConsole"
thumbnail: "@assets/cardPlaceholder.jpg"
chips: ["C#", "Godot"]
---
A reflection-based runtime command console and logging system for Godot projects, built to make development, playtesting, and debugging easier.


![ExampleCommandUsage.gif](../../assets/Command%20Console/ExampleCommandUsage.gif)


## Overview
This command console addon is a reflection-based runtime development console and logging system for Godot projects, 
built to make development, playtesting, and debugging easier. Commands are added by simply adding a static method to 
a script and decorating it with the `[ConsoleCommand]` attribute. When the project starts, all commands are automatically 
discovered and added to the console. The command attribute features optional parameters for specifying a prefix to 
group commands and writing a description to provide context for the command.

As my game began to grow and there were more things to test, I needed a way to be able to set up specific conditions 
easily. I also wanted an easy way for my friends, who were playtesting, to be able to edit various values in the builds 
I sent them to find what felt right. Previously, they would need to have access to the project in Godot and know how 
to tweak values in the inspector before they could run the game and test again. Inspired by a few other command 
consoles I had seen in games or other Godot projects, I decided to create my own version.

With this console in place and some commands on the player to tweak individual settings, I was able to quickly find 
values that would make the character controller feel right. A playtester could fine-tune whatever setting they found 
was off until they found something that felt right. For example, if the jump was too high, they could run the 
command `Player.SetJumpHeight 2.5` to adjust the jump height, test again, and continue to tweak until they found a 
value that felt right. Without ever having to close the game, find the setting in the inspector to change, and then 
rebuild and play again.

The tool is broken down into a handful of different components. 
- DevConsoleUI: handles the display, input of commands, showing of suggestions, and filtering of logs. 
- DevConsole: registers all the commands in the project and handles their execution by converting parsed argument inputs into their data types. 
- ConsoleInputParser: quote-aware parser responsible for splitting the input into a command and its individual arguments.
- DevConsoleLogger: handles logs throughout the project and formatting them as Log Entries with timestamps and caller info.
- ConsoleAutocomplete: takes parsed and partial input to fuzzy search commands and provides suggestions based on their scores against the input.

The goal of the console's design is not only to make it easier to find information and invoke commands at runtime, 
but also to make it easier for developers to use when writing code. As mentioned above, registering a command is as 
easy as decorating a static method with the `[ConsoleCommand]` attribute, and logging is as simple as calling the 
logger and specifying a log level `Log.Info(string message)`.

## Goals
What did I want to accomplish?

## Architecture
How is it structured?

## Implementation
How did the important pieces work?

## Challenges
What was difficult?

## Design Decisions
What I chose this approach?

## Developer/User Experience
Why did I make it pleasant to use?

## Results
The resulting plugin made it incredibly easy and straightforward to add new commands for testing various aspects of my game.
With a simple attribute tag on a static method, I can have a new command to use in my games.

## Future Improvements

