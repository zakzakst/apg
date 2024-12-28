export const HeadingTagNames = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
export type HeadingTagName = (typeof HeadingTagNames)[number];
