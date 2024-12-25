"use client";

import { useMemo, useState } from "react";
// NOTE: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/

// TODO:
// - スタイル付ける
// - テストコード書く
// - コンポーネント外から開閉を操作できるようにする（useEffect利用してexpandedの変化を連動させる？）
// - カスタムクラスを適用できるようにする
// - storybook
// - react ariaみたいに子要素をタグで記述するにはどうすればいいか調べる

type HeadingTagName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

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
  titleTag?: HeadingTagName;
};

const Accordion = ({
  id,
  title,
  content,
  expanded = false,
  titleTag = "h3",
}: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded);
  // TODO: この方法だと、コンポーネントを複数個所で利用した時にidが重複する可能性がある。対応方法考える
  const buttonId = useMemo(() => `${id}-button`, [id]);
  const contentId = useMemo(() => `${id}-content`, [id]);
  const onClickButton = () => setIsExpanded(!isExpanded);
  // NOTE: 下記の記述だと見出しタグのTypeScript制限かからなさそう？（設定できない属性とか）余裕ある時調べる
  const TitleTag = titleTag;

  return (
    <div>
      <TitleTag>
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
      </TitleTag>
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
