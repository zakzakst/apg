// https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/

import { useMemo } from "react";
import Link from "next/link";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
// import { breadcrumb as styles } from "./styles.css";

// TODO:
// - スタイル付ける（パンくず間のセパレーターを表現する際、読み上げツールで読み上げられないようにする）

// NOTE: 余裕ある時に挑戦してみる
// - ariaLabelに空文字が設定された場合、意図した挙動にならない。対応方法を考える

type BreadcrumbItem = {
  href: string;
  label: string;
};

export type BreadcrumbItems = [BreadcrumbItem, ...BreadcrumbItem[]];

type Props = {
  // NOTE: 1つ以上のパンくずがあることを保証するため、1つ目の要素は必須としている
  items: BreadcrumbItems;
  ariaLabel?: string;
  className?: string;
};

const Breadcrumb = ({
  items,
  ariaLabel = "パンくずリスト",
  className,
}: Props) => {
  const itemsWithId = useMemo(() => {
    return items.map((item) => {
      return {
        ...item,
        id: uuidv4(),
      };
    });
  }, [items]);

  return (
    // <nav aria-label={ariaLabel} className={classNames(className, styles.nav)}>
    <nav aria-label={ariaLabel} className={classNames(className)}>
      <ol>
        {itemsWithId.map((item, index) => {
          const isCurrent = index === itemsWithId.length - 1;
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
