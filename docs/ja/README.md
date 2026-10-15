---
home: true
canonicalUrl: https://growi.org/ja/
heroText: 
 line1: 無料で使える
 line2: 高機能なwikiツール
 subtext: マニュアルや企画書の共有、議事録の同時編集など、 <br /> チーム内での快適な情報共有と作業効率化を支えるツールです。
heroImage: /assets/images/banner-logo.png
mockImage: /assets/images/mock-img-ja.png
heroButtons:
- text: 機能紹介
  link: /ja/#features
- text: デモサイト
  link: https://demo.growi.org
- text: GROWI.cloud
  link: /ja/#cloud 
links:
  admin_guide: https://docs.growi.org/ja/admin-guide/
  docs: https://docs.growi.org/ja/
  growi: https://growi.co.jp/
  growi_ai_agent: https://docs.growi.org/ja/admin-guide/management-cookbook/growi-ai-agent.html
  mcp_server: https://docs.growi.org/ja/guide/features/mcp-server.html
  mcp_server_repo: https://github.com/growilabs/growi-mcp-server
  mcp_server_npm: https://www.npmjs.com/package/@growi/mcp-server
sections:
  introduction:
    title: オープンソース GROWI
    pulls_more_than: Docker Image のダウンロード数
    pulls_label: 回以上
    pulls_note: 2026年10月時点。Docker Hub の weseek/growi と growilabs/growi の合計
    text: GROWI は、GROWI, Inc. が開発を行い、<br class="d-none d-md-block" /> MITライセンスで公開しているオープンソースソフトウェアです。 <br class="d-none d-md-block" /> ユーザーの方も加わった開発が日々活発に行われています。
  community:
    title: コミュニティ・サポート
    text: GROWIに関する質問・要望・バグの報告は、 <br /> GitHubまたはSlackにて受け付けております。
  features:
    title: 機能と特徴
    text: 豊富な機能で社内やチーム内でのスムーズな情報共有を支える <br class="d-none d-md-block" /> GROWIの便利な機能の一部をご紹介します。機能の詳細は、<a href="https://docs.growi.org/ja/guide/">GROWI Docs/機能紹介</a> をご覧ください。
  growi_ai:
    text: バージョン 8.0.0 より、GROWI AI は <strong>GROWI AI Agent</strong> として生まれ変わりました。<br class="d-none d-md-block" /> アシスタントの作成も学習も不要。質問を投げるだけで、<strong>wiki 全体を自ら探索して根拠を集め、答えを組み立てます。</strong>
    explore:
      image_alt: "wiki 全体を探索して回答する画面"
      title: wiki 全体を、自ら探索して答える
      descriptions:
        - 質問を投げると、関連するページを自律的に探索・横断参照して根拠を集め、回答します。@ でページを指定すれば、参照範囲を絞り込めます。
        - 参照するのは常に最新のページ。閲覧権限もアクセス時に判定され、権限のないページは使われません。
    providers:
      image_alt: "プロバイダとモデルを選択する画面"
      title: プロバイダとモデルは、自分で選ぶ
      descriptions:
        - API キーを登録すれば、OpenAI・Anthropic・Google・Azure OpenAI からプロバイダを選択できます。
        - モデルはユーザーがサイドバーで切り替え、管理者は使わせたいモデルを事前に絞り込めます。
    button_text: セットアップと管理
    mcp_server:
      title: GROWI MCP Server
      description: GROWI は Model Context Protocol (MCP) 対応のサーバーを提供しています。Claude Code などのクライアントに登録すれば、エージェントがページの検索・閲覧・作成・更新を直接実行できます。
      button_text: 詳しく見る
      video_label: "デモ: Claude から GROWI MCP Server 経由で GROWI のページを作成する様子"
      video_description: "Claude Code に GROWI MCP Server を登録し、会話の中から GROWI のページを作成するデモ動画です。"
      capabilities_title: できること
      capabilities:
        - ページの検索・取得
        - ページの作成・更新・管理
        - タグ・コメント・共有リンクの管理
        - 複数の GROWI アプリへの接続
      compatibility: GROWI v7.3.x 以降を推奨。Claude Desktop・Claude Code・Gemini CLI などから利用できます。
  merits:
    title: 導入のメリット
  trial:
    title: まずはデモでGROWIをご体験ください
    demo: デモを試してみる
    operation: 詳しい操作方法を見る
  cloud:
    title: GROWI.cloud
    text: GROWIをもっと楽に運用したい方へ！
    subtext: GROWIのクラウド版サービス！
    button_text: 詳細はこちら
  joinus:
    title: JOIN US
    descriptions: GROWI の開発を手伝っていただけるコントリビューター、開発してみたいインターン生を募集しています。 <br /> まずは Slack に参加し、気軽にGROWIメンバーに声をかけてください！
  contact_us:
    address: 東京都新宿区西早稲田2-20-15 <br /> 高田馬場アクセス10F
    tel:
      text: 03-6233-9447
      link: 0362339447
    email: contact@growi.co.jp
button:
  start: GROWIを始める
features:
  markdown:
    title: Markdown 対応
    description: 段落や見出し、箇条書きの記入も簡単です。また、リッチテキストエディタ、プログラミング言語ごとのコードハイライト、絵文字、注釈、TODOリスト、数式、UML、Bootstrap(HTML) にも対応しています。
  shape:
    title: 図形作成
    description: draw.io と連携し  GROWI.cloud 上で簡単に図表を作成することができます。文章では表現しにくい内容も図表を用いて伝わりやすい情報共有が可能です。
  search:
    title: タグ検索・全文検索
    description: アップロードされたファイルタイトルを含めた文検索が可能です。英数字は全角半角どちらでもヒットするようになっています。
  collaborative_editor:
    title: 同時多人数編集
    description: 一つのページを複数人で同時に編集可能です。会議の議事録を取るときなどに便利です。また、編集履歴を自動保存し、過去の履歴を閲覧することも出来ます。
  customize:
    title: 優れたカスタマイズ性
    description: テーマ、レイアウトを選択できる他、他のサービスと比べても数少ない、サイドバーのカスタマイズにも対応しています。チームの使い方に合わせた柔軟な設定が可能です。
  group:
    title: グループ管理
    description: 特定ユーザーに管理者権限の付与、ユーザーグループごとのページの閲覧権限が可能です。
  comment:
    title: コメント機能
    description: ページ毎にコメントをスレッド表示できます。コメントも Markdown による記述・プレビュー、またファイル添付が可能です。
  auth:
    title: 強力な認証機構
    description: Passportによる認証機構を採用、SSO を実現する SAML や、LDAP 認証、GitHub/Twitter/Google OAuth プロバイダを利用したログインをサポートしています。
  assets:
    title: シンプルなアセット管理
    description: 編集画面にドロップするだけで、ファイルをアップロード出来ます。ストレージはローカルFS、AWS S3、Google Cloud Storage、MongoDB GridFS の4種をサポートしています。
merits:
  management:
    title: 情報やナレッジをまとめて管理できる
    description: 社内では議事録や報告書、業務マニュアルなど多様な情報が存在します。GROWIを活用し、業務に関わる情報を一つの場所にまとめることで、簡単に情報やナレッジを管理、共有できるようになります。
  infomation:
    title: 欲しい情報がすぐに手に入る
    description: 検索機能を利用することで、簡単に知りたい情報を探し出すことが可能です。また、業務の属人化を防ぎ、チームとして働きやすい環境を作ります。
  team:
    title: 個人が持っている情報を <br /> チームの発展に繋げる
    description: 個人が持つノウハウや知識、仕事をする中で得た経験は、企業やチームとって、組織の成長に欠かせない重要な財産です。ノウハウを共有・蓄積・活用することで組織のさらなる発展へとつながります。

faq:
  title: よくある質問
  items:
    - question: GROWI は無料で使えますか？
      answer: はい。GROWI は MIT ライセンスで公開されているオープンソースソフトウェアで、無料で利用できます。自社のサーバーで運用する場合は、サーバー費用などをご自身で用意します。クラウド版の GROWI.cloud は、運用を任せたい方向けの別サービスです。
    - question: 商用利用できますか？
      answer: はい。MIT ライセンスのため、商用利用を含めて自由に利用・改変・再配布できます。
    - question: どうやって導入しますか？
      answer: Docker で自社のサーバーに導入できます。Docker Compose を使った導入手順は管理者ガイドに掲載しています。運用を任せたい場合は、クラウド版の GROWI.cloud も利用できます。
    - question: GROWI と GROWI.cloud の違いは何ですか？
      answer: GROWI はオープンソースの wiki 本体で、自社のサーバーで運用します。GROWI.cloud は、その GROWI をクラウドサービスとして提供するもので、サーバーの運用を任せられます。
    - question: データはどこに保存されますか？
      answer: 自社のサーバーで運用する場合、ページは MongoDB に保存されます。添付ファイルはローカルのファイルシステム、AWS S3、Google Cloud Storage、Azure Blob Storage、MongoDB GridFS のいずれかに保存できます。
    - question: AI 機能や MCP に対応していますか？
      answer: はい。バージョン 8.0.0 以降、GROWI AI Agent が wiki 全体を自ら探索して質問に回答します。プロバイダは OpenAI・Anthropic・Google・Azure OpenAI から選べます。また GROWI MCP Server により、Claude Code などの AI エージェントからページの検索・作成・更新ができます。

---
