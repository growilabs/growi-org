---
home: true
canonicalUrl: https://growi.org/en/
heroText: 
  line1: Free high-performance
  line2:  wiki tool
  subtext: A tool for sharing manual, <br /> business proposal and simultaneous editing minutes in real time.<br /> it supports comfortable information sharing and work efficiency within the team.
heroImage: /assets/images/banner-logo.png
heroImageAlt: GROWI screen mockup
mockImage: /assets/images/mock-img-en.png
heroButtons:
- text: Features
  link: /en/#features
- text: Demo
  link: https://demo.growi.org
- text: GROWI.cloud
  link: /en/#cloud
links:
  admin_guide: https://docs.growi.org/en/admin-guide/
  docs: https://docs.growi.org/en/
  growi: https://growi.co.jp/
  growi_ai_agent: https://docs.growi.org/en/admin-guide/management-cookbook/growi-ai-agent.html
  mcp_server: https://docs.growi.org/en/guide/features/mcp-server.html
  mcp_server_repo: https://github.com/growilabs/growi-mcp-server
  mcp_server_npm: https://www.npmjs.com/package/@growi/mcp-server
  markdown_guide: https://docs.growi.org/en/guide/getting-started/markdown.html
  api_reference: https://docs.growi.org/en/api/
  vault: https://docs.growi.org/en/guide/features/vault.html
  vault_setup: https://docs.growi.org/en/admin-guide/management-cookbook/setup-vault.html
sections:
  introduction:
    title: Open Source GROWI
    text: GROWI.cloud is open software developed by GROWI, Inc. <br class="d-none d-md-block" /> And released under MIT license.
  community:
    title: Community-support
    text: We are accepting questions, request and bug reports on our GitHub or Slack.
  readable_wiki:
    title: A wiki readable by people and AI alike
    markdown:
      image_alt: "A page written in Markdown and its body fetched from the .md endpoint"
      title: Markdown native
      description: Every page is plain Markdown. Paragraphs, headings and bullet lists are easy to write, and it supports a rich text editor, code highlighting for each programming language, emoji, footnotes, TODO lists, math, UML and Bootstrap (HTML). Append <code>.md</code> to a page URL to fetch its body as raw Markdown, so AI agents can read a page with a single GET.
      link_text: See the Markdown syntax
    diagram:
      image_alt: "Diagram notation embedded in Markdown and how it renders"
      title: Embedded diagrams
      description: Besides intuitive drawing with <strong class="text-dark">draw.io</strong>, diagrams written in <strong class="text-dark">Mermaid</strong> or <strong class="text-dark">PlantUML</strong> notation can be embedded in Markdown as plain text. Share ideas that are hard to put into words clearly with diagrams.
  api:
    title: Rich APIs and an MCP server
    rest_api:
      image_alt: "Access token permission (scope) settings"
      title: REST API
      description: GROWI provides a REST API for working with pages, users, attachments and more, so you can flexibly integrate it with your existing tools and workflows.
      button_text: API Reference
  vault:
    image_alt: "How GROWI pages are cloned and pulled to your PC as Markdown files"
    title: GROWI Vault
    tagline: git clone your wiki.
    descriptions:
      - Fetch the pages you have permission to view as a tree of Markdown files in a Git repository.
      - Keep it up to date with git pull, or fetch only some pages with sparse checkout.
      - AI coding agents can explore the wiki just like local files.
    command: git clone https://x:<ACCESS_TOKEN>@<GROWI_HOST>/vault.git
    note: Read-only. Available in self-hosted environments when enabled by an administrator.
    button_text: How to use
    setup_link_text: Setup for administrators
  features:
    title: Other Functions and Features
    text: GROWI also has many other features that support smooth information sharing within your company and team. <br class="d-none d-md-block" /> For details, see <a href="https://docs.growi.org/en/guide/">GROWI Docs/Features</a>.
  growi_ai:
    text: Starting with version 8.0.0, GROWI AI has been reborn as <strong>GROWI AI Agent</strong>.<br class="d-none d-md-block" /> No assistants to create, no training required. Just ask a question, and it <strong>explores your entire wiki on its own, gathers evidence, and builds an answer.</strong>
    explore:
      image_alt: "Wiki exploration and answering"
      title: Explores your entire wiki to answer
      descriptions:
        - Ask a question, and it autonomously explores and cross-references related pages to gather evidence and answer. Specify pages with @ to narrow down the scope.
        - It always refers to the latest pages. Access permissions are checked at access time, so pages you cannot view are never used.
    providers:
      image_alt: "Provider and model selection"
      title: Choose your own provider and model
      descriptions:
        - Register an API key to choose from OpenAI, Anthropic, Google, and Azure OpenAI as your provider.
        - Users switch models from the sidebar, and administrators can narrow down the models available in advance.
    button_text: Setup and Management
    mcp_server:
      title: GROWI MCP Server
      description: GROWI provides a server that supports the Model Context Protocol (MCP). Register it with a client such as Claude Code, and agents can search, view, create, and update pages directly.
      button_text: Learn more
      video_label: "Demo: creating a GROWI wiki page from Claude via GROWI MCP Server"
      video_description: "A demo video of registering GROWI MCP Server with Claude Code and creating a GROWI page from the conversation."
      capabilities_title: What it can do
      capabilities:
        - Search and retrieve pages
        - Create, update and manage pages
        - Manage tags, comments and share links
        - Connect to multiple GROWI apps
      compatibility: GROWI v7.3.x or later is recommended. Works with clients such as Claude Desktop, Claude Code and Gemini CLI.
  merits:
    title: Merit of introduction
  trial:
    title: Try first GROWI with a demo!
    demo: Try the demo
    operation: See detailed operation instructions
  cloud:
    title: GROWI.cloud
    text: Who want to operate GROWI more easily!
    subtext: Cloud version service of GROWI!
    button_text: Here is more details
  joinus:
    title: JOIN US
    descriptions: GROWI is open source software developed by <a href="https://growi.co.jp" target="_blank">GROWI, Inc</a> . and released under the MIT license. We are looking for contributors who can help with development and interns who want to develop. <br/> First join Slack and feel free to talk to the GROWI members.
  contact_us:
    address: Takadanobaba Access 10F, 2-20-15 Nishiwaseda, <br /> Shinjuku-ku, Tokyo, Japan
    email: contact@growi.co.jp
button:
  start: Starting GROWI
features:
  search:
    title: Tag and Full-text search
    description: It can search Full-text include the title of the uploaded file.The alphanumeric can be searched with either full-width or half-width characters.
  collaborative_editor:
    title: Simultaneous multi-user edits
    description: A single page can be edited by multi users simultaneously. It'll be useful when compiling minutes of Meeting. Furthermore, it can automatically save edits and allow viewing of past revisions.
  customize:
    title: Highly customizable
    description: It allows users to select themes and layouts, and offers customization of the sidebar, which is rare compared to other services. Flexible settings are available to match the usage of your team.
  group:
    title: Group Management
    description: It is possible to grant administrator privileges to specific users and to set viewing permissions for pages by user groups.
  comment:
    title: Comment Features
    description: It is possible to display comments in a threaded format for each page on the website. Comments can be written in Markdown format, previewed, and files can also be attached.
  auth:
    title: Powerful authentication mechanism
    description: Our system implements an authentication mechanism using Passport, and supports single sigh-on(SSO) using SAML, LDAP authentication, and login through GitHub/Twitter/Google OAuth provider.
  assets:
    title: Asset management as simple
    description: We can upload files simply by dropping them into the editing screen. The system supports storage on one of four types&#58; local FS, AWS S3, Google Cloud Storage, MongoDB GridFS.
merits:
  management:
    title: Able to manage information and knowledge in one place
    description: GROWI allows you to easily manage and share information and knowledge by consolidating business-related information in one place.
  infomation:
    title: Get the information what you want quickly
    description: By utilizing the search features, it is possible to easily find the desired information. This helps prevent personalization of tasks and creates a more collaborative working environment for the team.
  team:
    title: Leveraging individual knowledge for team growth
    description: The knowledge, skills, and experience that individuals gain from their work are essential assets for growth of organizations and teams. By sharing, storing, and using this knowledge, organizations can develop even further.

---
