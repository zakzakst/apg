### 全ての変更をステージ

git add .
git add <file>

### ステージされていない変更を破棄

git restore <file>

### コミット

git commit -m <message>

### 状態を確認

git status

### リモートの URL を設定

git remote add origin <git の HTTPS>

### リモートの確認

git remote -v

### 追跡関係を設定して push

git push -u origin HEAD （次回以降は git push のみでよくなる）

### ローカルブランチの一覧を表示

git branch

### リモートブランチの一覧を表示

git branch -r

### 現在の HEAD から、指定したブランチ名を名前として、新しいブランチを作成する。（新しく作成したブランチへの切り替えは行わない）

git branch <ブランチ名>

### 現在の HEAD から、指定したブランチ名を名前として、新しいブランチを作成する。（新しく作成したブランチへの切り替える）

git checkout -b <ブランチ名>

### 現在チェックアウトしているブランチ名を新しいブランチ名に変更する。

git branch -m <新しいブランチ名>

### 追跡関係の確認

git branch -vv

## staged されていない、新規作成したファイルを破棄（未追跡のファイルやディレクトリを削除するコマンド）

git clean -fd
