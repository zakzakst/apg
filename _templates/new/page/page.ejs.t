---
to: src/app/<%= path %>/page.tsx
---
<%_
  // NOTE: Frontmatter（---の中）で指定すると上手くいかなかったので、ここで指定
  Page = `${h.pascalizePath(path)}Page`
-%>
const <%= Page %> = () => {
  return (
    <div>
      <h1><%= Page %></h1>
    </div>
  );
};

export default <%= Page %>;