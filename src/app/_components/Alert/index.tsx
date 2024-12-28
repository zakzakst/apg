// https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/

import classNames from "classnames";
// import { alert as styles } from "./styles.css";

// TODO:
// - スタイル付ける

// NOTE: 余裕ある時に挑戦してみる
// - storybookにどのように表示するか、他の事例調べる（アラート表示ボタンを一緒に入れて挙動確認できるようにする？）
// - 読み上げツールでの挙動確認

type Props = {
  children: React.ReactNode;
  isShow: boolean;
  className?: string;
};

const Alert = ({ children, isShow, className = "" }: Props) => {
  return (
    <>
      {/* NOTE: role="alert"を持つ要素は最初に存在している必要がある。そのため、内容のみ表示切替する処理をしている（display: noneのようなスタイルを設定する際は気を付ける ※基本的には付けない） */}
      <div
        role="alert"
        // className={classNames(className || undefined, styles.main)}
        className={classNames(className || undefined)}
      >
        {/* {isShow && <div className={styles.content}>{children}</div>} */}
        {isShow && <div>{children}</div>}
      </div>
    </>
  );
};

export default Alert;
