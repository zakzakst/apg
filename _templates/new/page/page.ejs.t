---
to: src/app/<%= path %>/page.tsx
---
<%_
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