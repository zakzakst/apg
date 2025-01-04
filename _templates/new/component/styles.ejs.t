---
to: src/app/_components/<%= h.capitalize(name) %>/styles.css.ts
---
import { style } from "@vanilla-extract/css";

const main = style({
  background: "#f00",
});

export const <%= name %> = {
  main,
};