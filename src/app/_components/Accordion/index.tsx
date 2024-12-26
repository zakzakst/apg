"use client";
// NOTE: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/

import { useMemo, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import { accordion as styles } from "./styles.css";

// TODO:
// - スタイル付ける
// - storybook（テストコードも書く）

// NOTE: 余裕ある時に挑戦してみる
// - react ariaみたいに子要素をタグで記述するにはどうすればいいか調べる
// - コンポーネント外から開閉を操作できるようにする（callbackで操作する場合、外から操作しなくていい時でも、タイトルクリック時の処理をcallbackに記載する必要が出ると思う。それは冗長で使いにくい気がする。いい方法ないか？）
// - TitleTagの箇所、現在の記述だと見出しタグのTypeScript制限かからなさそう？（設定できない属性とか）余裕ある時調べる

type HeadingTagName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = {
  title: React.ReactNode;
  content: React.ReactNode;
  /**
   * 初期表示時にアコーディオンを開く
   */
  expanded?: boolean;
  titleTag?: HeadingTagName;
  className?: string;
};

const Accordion = ({
  title,
  content,
  expanded = false,
  titleTag = "h3",
  className = "",
}: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded);
  const [id, setId] = useState<string>("");
  const buttonId = useMemo(() => `button-${id}`, [id]);
  const contentId = useMemo(() => `content-${id}`, [id]);
  const TitleTag = titleTag;

  const onClickButton = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    // NOTE: cryptoモジュールを試したが、ブラウザとNode.jsで使い方が違い、「描画されるHTMLが一致しない」エラーが出た。そのため、uuidを使うことにした。
    setId(uuidv4());
  }, []);

  return (
    <div className={classNames(className || undefined, styles.main)}>
      <TitleTag className={styles.title}>
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
