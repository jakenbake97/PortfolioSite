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

![cardPlaceholder.jpg](../../assets/cardPlaceholder.jpg)

To create a table of contents or page minimap from Markdown headings in Astro, you can extract the heading array using Astro's built-in `getHeadings()` function (for direct imports) or the `headings` property (in layouts or content collections).
1. **Query or import the Markdown data** to access the `headings` list containing `depth`, `slug`, and `text` properties.
2. **Pass or iterate over the headings array** in your Astro component or layout to render a structured list.
3. **Map the heading depths** (`depth: 1` through `6`) to indentation classes and link each item to its generated anchor `slug` (`#slug`).

Here is an example implementation inside an Astro layout or page using content collections / direct rendering:astro

![Portrait_Placeholder.png](../../assets/Portrait_Placeholder.png)

### Callouts

> [!note]
> This is a useful piece of information that users should notice.
> It can span multiple lines
>
> This one even has a gap above

> [!WARNING]- 
> this is some important info here

> [!tip]
> This is a tip

> [!important]-
> This is an important callout

> [!caution]
> This is a caution

```astro
---
// Example: Accessing headings from a rendered content collection entry or import
const { headings } = Astro.props;
---
<nav class="minimap">
  <h2>On this page</h2>
  <ul>
    {headings.map((heading) => (
      <li class={`depth-${heading.depth}`}>
        <a href={`#${heading.slug}`}>{heading.text}</a>
      </li>
    ))}
  </ul>
</nav>

<style>
  .depth-2 { margin-left: 1rem; }
  .depth-3 { margin-left: 2rem; }
  /* Add further styling for your visual minimap/sidebar */
</style>
```
### Charts

```mermaid w-400 h-200 title="Deployment Overview" align=center
graph TD
    A[Start] --> B[Deploy] --> C[Done]
```

Use code with caution. Would you like:An example using IntersectionObserver to highlight the active heading in the minimap as the user scrolls?A guide on configuring rehype plugins to customize how Astro generates heading IDs and slugs?

#### Mermaid Chart

```mermaid
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectiveness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid

```