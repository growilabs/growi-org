---
name: figma-to-implementation
description: Figma MCP でデザインを取得し、growi.org（VuePress + Bootstrap 5）のページとして実装する手順。Figma の URL やノードを渡されて「このデザインを実装して」「Figma から画像を書き出して」と依頼されたときに使う。
---

# Figma デザインを growi.org に実装する

Figma MCP（`.mcp.json` の `figma` サーバー）でデザインを読み取り、既存の Bootstrap ユーティリティとコンポーネントで実装する。

参考となる実装: トップページの GROWI AI Agent セクション（PR #56、[Home.vue](../../../docs/.vuepress/theme/components/Home.vue) の `<!-- AI Section -->`）。

## 前提

- Figma MCP が認証済みであること。未認証なら `/mcp` で `figma` を認証するようユーザーに伝える。
- 画像圧縮に `pngquant` を使う。未インストールなら `brew install pngquant`（macOS）/ `sudo apt-get install -y pngquant`（Debian 系）。

## 1. デザインを読み取る

**Figma MCP の呼び出しは最小限にする。**

- 対象ノードは、ユーザーから受け取った URL の `node-id` で直接指定する。ファイル全体やページ全体を読み込んで目的のノードを探すことはしない。
- 基本は、セクション単位のノードに対して `get_design_context` を **1 回**呼ぶだけにする。子要素ごとに分けて呼ばない。
- `get_screenshot` や `get_metadata` は、`get_design_context` の結果だけでは判断できないときに限って追加で呼ぶ。
- 一度取得した結果は会話の中で使い回す。同じノードを再取得しない。実装中に細かい値を確かめたくなっても、手元の結果から読み取る。
- 情報が足りないときは、むやみに再取得しない。どのノードの何を確認したいかをユーザーに伝えてから呼ぶ。

手順:

1. 上のルールに沿って、対象ノードのデザインを取得する。
2. 取得したコード（React + Tailwind など）は**構造と意図を読むための参考**として扱い、そのまま貼り付けない。
3. 既存ページとの差分（追加・置き換え・削除するセクション）を整理してから実装に入る。

## 2. 実装方針: Figma のサイズにこだわりすぎない

Figma の px 値を忠実に再現するより、**サイト全体の一貫性とレスポンシブ性**を優先する。

- **Bootstrap 5 のユーティリティクラスを使う**: 余白は `p-*` / `m-*` / `py-5` / `mb-4`、文字サイズは `fs-*`、角丸は `rounded-3` / `rounded-5`、影は `shadow` など、近い値のクラスに丸める。`style="margin-top: 37px"` のような固定値は書かない。
- **レイアウトはグリッドで組む**: `container` / `row` / `col-lg-*` / `justify-content-*` / `align-items-*` を使い、ブレークポイントごとの並び（`mb-5 mb-lg-0`、`text-lg-start text-center` など）をクラスで表現する。
- **既存コンポーネント・クラスを再利用する**（[style.scss](../../../docs/.vuepress/theme/styles/style.scss)）:
  - ボタン: `btn btn-hexagon btn-bg-green-gradient btn-hexagon-angle-right fw-bold d-inline-block text-white px-5 py-2 rounded-0`
  - カード: `card border-0 bg-transparent` + `card-img-top rounded-3 shadow` + `card-body px-0`
  - 色は [_variables.scss](../../../docs/.vuepress/theme/styles/_variables.scss) の変数（`$primary`, `$navy`, `$btn-green-gradient` など）を優先する。
- **新しい CSS は最小限**: グラデーション背景など、ユーティリティで表現できないものだけを `style.scss` にクラスとして追加する（例: `.bg-growi-ai-feature-section`）。
- **テキストは Vue に直書きしない**: 文言は `docs/en/README.md` と `docs/ja/README.md` の frontmatter（`sections.*` / `links.*`）に追加し、`Home.vue` から `data.sections...` で参照する。**日英両方**を必ず更新する。段落が複数あるものは配列（`descriptions:`）にして `v-for` で回す。
- 画像・動画には意味のある `alt` / `aria-label` を付ける。
- コード中のコメントは英語で書く。

## 3. 画像を書き出す

### PNG

1. Figma MCP で **2x** で書き出す。書き出す画像が 5 枚以上のときは、MCP の呼び出しが増える。そのため、書き出す前に「このまま MCP で書き出すか、ユーザーが Figma から書き出すか」を一言確認する。MCP でよいと言われたら、そのまま書き出す。ユーザーが書き出す場合は、必要な画像のファイル名と対象レイヤーを一覧にして伝える。
2. `docs/.vuepress/public/assets/images/` に kebab-case の名前で置く（例: `growi-ai-agent-explore.png`）。
3. **pngquant（quality 100）で圧縮する**:

   ```bash
   pngquant --quality=100 --strip --skip-if-larger --force --ext .png docs/.vuepress/public/assets/images/<file>.png
   ```

   - `--ext .png --force` で上書き、`--skip-if-larger` で逆に大きくなる場合はスキップ。
   - 圧縮前後のサイズを `ls -l` で確認し、結果をユーザーに報告する（目安: 半分前後になる）。

### SVG（ロゴ・アイコン）

- Figma から SVG で書き出し、そのまま `assets/images/` に置く。PNG にはしない。

### 動画

- 重い動画は `preload="none"` + `data-src` にしておき、`IntersectionObserver` でビューポートに入ったときに `src` を設定して再生する（`Home.vue` の `observeMcpServerVideo` を参照）。初期表示用に `poster` 画像（jpg）を用意する。

## 4. 確認

1. `yarn docs:dev` で起動し、ブラウザでデスクトップ / タブレット / モバイル幅の表示を確認する。
2. Figma のスクリーンショットと見比べ、**レイアウト・情報の優先順位・色**が合っていればよい（px 単位の一致は求めない）。
3. 使われなくなった旧画像（置き換え前の png / svg）は削除する。
4. `yarn lint`（textlint）で README の文言をチェックする。
