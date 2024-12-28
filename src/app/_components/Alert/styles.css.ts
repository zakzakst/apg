import { style } from "@vanilla-extract/css";

const main = style({});

const content = style({
  backgroundColor: "#f00",
});

export const alert = {
  main,
  content,
};
