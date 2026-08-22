---
title: "Command Console"
description: "A reflection-based command console used for game development in Godot."
slug: "command-console"
link: "https://github.com/CommandConsole/CommandConsole"
thumbnail: "@assets/cardPlaceholder.jpg"
chips: ["C#", "Godot"]
---

## Header

This is some text in the article.

## Features

- Reflection-based command handling
- Easy to use and extend
- Supports multiple platforms
- Integrates seamlessly with Godot projects

![HWG_logo.png](../../assets/HWG_logo.png)

```csharp
private static void ExecuteCommand(string command)
{
    if (command.isEmpty())
        return;
        
   command.Run();
}
```