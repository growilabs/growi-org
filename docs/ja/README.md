---
home: true
heroText: 快適な情報共有を、全ての人へ
heroImage: /assets/images/banner-logo.png
heroButtons:
- text: 機能紹介
  link: /ja/#features
- text: デモサイト
  link: https://demo.growi.org
- text: GROWI.cloud
  link: /ja/#cloud
sections:
  introduction:
    title: GROWI とは
  features:
    title: 機能紹介
  documents:
    title: ドキュメント
  cloud:
    title: GROWI.cloud
    descriptions:
      text: 『Markdown × Wiki × 自由。』
      subtext: 情報共有をもっと身近に、もっと手軽に
      subsubtext: GROWI.cloud は GROWI を手軽に始められるクラウドサービスです
      button_text: GROWI.cloud を始める
  joinus:
    title: JOIN US
    descriptions:
    - GROWI は、<a href="https://weseek.co.jp">WESEEK, Inc.</a> が開発を行い、<br> MITライセンスで公開しているオープンソースソフトウェアです。
    - 開発を手伝っていただけるコントリビューター、開発してみたいインターン生を募集しています。<br> まずは Slack に参加し、気軽にWESEEKメンバーに声をかけてください。
  contact_us:
    address: 東京都新宿区西早稲田2-20-15 高田馬場アクセス10F
    tel:
      text: 03-6667-4862
      link: 0366674862
    email: info@weseek.co.jp
introductions:
- image_path: https://user-images.githubusercontent.com/42988650/70600974-6b29cc80-1c34-11ea-94ef-33c39c6a00dc.gif
  details:
  - title: GROWI とは
    icon: pencil
    description: GROWI とは、オリジナルの wiki を構築できるサービスです。wiki というと多くの人は wikipedia を連想すると思いますが、wiki とは多数のユーザーが共同してブラウザからコンテンツを編集するウェブサイトの事です。GROWI を使えば、自分だけの、自分達の、自社だけの wiki を作成できます。
  - title: GROWI で出来ること  
    icon: picture
    description: 企業やサークル、個人などあらゆる単位で、特定の情報についてまとめたり、情報共有したいときに、GROWI を使えばそれらの情報やファイルを共有できます。整理の仕方、ページの追加が自由自在で、思った通りの情報共有が簡単に実現できます。
- image_path: /assets/images/screenshots/growicloud.png
  details:
  - title: GROWI を使うには
    icon: keyboard
    description: GROWI は、株式会社 WESEEK が開発し、MIT ライセンスで公開しているオープンソースソフトウェアです。GitHub からダウンロードして手順に沿って構築すれば、 wiki として使えるようになります。
  - title: GROWI.cloud とは
    icon: smile
    description: GROWI の一番簡単な導入方法は、GROWI.cloud でサービスを契約する事です。GROWI.cloud では無料プランもありますので、是非使ってみてください。<br/><a href="https://growi.cloud/">GROWI.cloud</a>
- image_path: /assets/images/screenshots/growidocs.png
  details:
  - title: 具体的に GROWI ってどんなサービス？
    icon: music-note
    description: GROWI にはデモサイトがあります。使い心地を気軽に試すことができます。GROWI はノウハウの共有や、ファイルサーバーとしても活用できます。使い方次第であらゆる用途に対応出来ます。GROWI のドキュメントや、便利な機能開発も充実させています。<br/><a href="https://demo.growi.org/">GROWIデモサイト</a>
  - title: GROWI の使い方は難しくない？
    icon: cog
    description: どなたでも簡単に使っていただけるよう、使い心地や書きやすさに力を入れて GROWI を開発しています。使い方についてのマニュアルも用意しているので、多くのお客様から使いやすいとのお声をいただいています。<br/><a href="https://docs.growi.org/">マニュアル GROWI Docs</a>
- image_path: /assets/images/screenshots/growiuser.png
  details:
  - title: 導入事例
    icon: magnifier
    description: 企業の自社情報一元管理、大学のサークルでの情報管理、個人によるゲーム攻略サイトとしての利用など、あらゆる用途でご活用いただいています。
  - title: お客様の声
    icon: magnifier
    description: 「GROWI を知らずに仕事をしていた頃にはもう戻れない」<br/>「GROWI を使って属人化していた仕事が誰でも出来るようになった」<br/>「使い勝手が心地良い」<br/>「最近色んなとこからGROWIって聞く、社内wikiの定番」<br/>「今までの100倍くらい知識の共有が進んだと感じます。知識は共有してなんぼです。」
features:
- image_path: /assets/images/screenshots/editor.png
  details:
  - title: Markdown
    icon: pencil
    description: 左右2画面でのリアルタイムプレビューが可能。言語ごとのコードハイライトや絵文字や注釈(footnotes)、タスクリスト、Bootstrap による HTML コードにも対応しています。
  - title: シンプルなアセット管理
    icon: picture
    description: ファイルのアップロードは編集画面にファイルをドロップするだけです。ストレージはローカルFS、AWS S3、Google Cloud Storage、MongoDB GridFS の4種をサポートしています。
- image_path: /assets/images/screenshots/keymap.png
  details:
  - title: 3種のキーマップ
    icon: keyboard
    description: Vim/Emacs/Sublime Text のキーマップをサポート。ブラウザからでも快適に入力できます。
  - title: 絵文字入力
    icon: smile
    description: <a href="https://www.emojione.com/emoji/v3">EmojiOne v3</a> による絵文字が文書を表情豊かに彩ります。入力支援機能として、<code>:</code>から入力を始めることでオートコンプリートウィンドウを表示します。
- image_path: /assets/images/screenshots/customize.png
  details:
  - title: テーマの変更
    icon: music-note
    description: 管理画面からサイトのテーマとコードハイライトのテーマの変更が可能です。 <br/> それぞれにライトテーマ、ダークテーマを複数種類用意しています。
  - title: チームに合わせたカスタマイズ
    icon: cog
    description: 挙動・レイアウトを2タイプから選択できる他、Markdown レンダリング設定を管理画面から変更できます。チームの使い方に合わせた柔軟な設定が可能です。
- image_path: /assets/images/screenshots/search.png
  details:
  - title: 高速な検索
    icon: magnifier
    description: ElasticSearch を利用したページタイトルのインクリメンタルサーチと、ページコンテンツの全文検索が可能です。日本語ユーザーにもやさしく、英数字は全角半角どちらでもヒットするようになっています。
- image_path: /assets/images/screenshots/ldaplogin.png
  details:
  - title: 強力な認証機構・グループ管理
    icon: lock
    description: <a href="http://www.passportjs.org/">Passport</a>による認証機構を採用、SSO を実現する SAML や、LDAP 認証、GitHub/Twitter/Google OAuth プロバイダを利用したログインをサポートしています。<br /> また、グループごとのアクセスコントロールを搭載し、より柔軟なページ管理が可能です。
  - title: オープンWiki
    icon: users
    description: ゲストユーザーに対して閲覧を許可することで、オープンWikiの公開も可能です。
- image_path: /assets/images/screenshots/comment.png
  details:
  - title: コメント機能でコミュニケーション活性化
    icon: bubble
    description: ページ毎にコメントをスレッド表示できます。もちろんコメントも Markdown による記述・プレビュー、ファイル添付が可能。<span class="text-muted">(コメント追加時の Slack 通知には近々対応予定
---
