"use client";

import { useMemo, useState } from "react";
// NOTE: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/

// TODO:
// - タイトルタグを変更できるようにする
// https://stackoverflow.com/questions/33471880/dynamic-tag-name-in-react-jsx
// - スタイル付ける
// - テストコード書く
// - storybook
// - react ariaみたいに子要素をタグで記述するにはどうすればいいか調べる

// type HeadingTagName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = {
  /**
   * ID（aria属性に反映される）
   */
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  /**
   * 初期表示時にアコーディオンを開く
   */
  expanded?: boolean;
  // titleTag?: HeadingTagName;
};

const Accordion = ({ id, title, content, expanded = false }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded);
  const buttonId = useMemo(() => `${id}-button`, [id]);
  const contentId = useMemo(() => `${id}-content`, [id]);
  const onClickButton = () => setIsExpanded(!isExpanded);

  return (
    <div>
      <h3>
        {/* NOTE: onClickのみでフォーカス時のキーボードEnterに対応できる */}
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={contentId}
          id={buttonId}
          onClick={onClickButton}
        >
          {title}
        </button>
      </h3>
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        hidden={isExpanded ? undefined : true}
      >
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
