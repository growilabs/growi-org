<template>
  <main class="home" aria-labelledby="main-title">
    <header id="parallax-header" data-section="home">
      <div id="home" class="container py-5">
        <!-- header content -->
        <div class="header-content row pt-4 pt-lg-5 pb-0 pb-lg-5 mt-5">
          <div class="col-lg-6 px-0 animated fadeIn">
            <h1 id="main-title" class="fs-1 border-0 mt-0 mt-lg-4 mb-4"> {{ data.heroText.line1 }} <br />{{ data.heroText.line2 }}</h1>
            <img :src="data.mockImage" :alt="data.heroImageAlt" width="2078" height="1217" loading="lazy" decoding="async" v-on:click="handleClick" class="d-lg-none">
          <p class="mt-3" v-html="data.heroText.subtext"></p>
          <a :href="data.links.admin_guide" class="btn btn-hexagon btn-bg-green-gradient btn-hexagon-angle-right fw-bold d-inline-block text-white mt-4 mb-5 px-5 py-2 rounded-0" target="_blank">
            <span> {{ data.button.start }}</span>
          </a>
        </div>
        <div class="d-none d-lg-block col-lg-6 my-auto animated fadeIn">
          <p class="animated fadeIn">
            <img :src="data.mockImage" :alt="data.heroImageAlt" width="2078" height="1217" fetchpriority="high" v-on:click="handleClick">
          </p>
          </div>
        </div>
      </div>
    </header>

    <!-- Introduce section -->
    <div class="container">
      <h2 class="text-center mt-5 py-4 py-md-5 section-title animated fadeIn">{{ data.sections.introduction.title }}</h2>
      <div class="row animated fadeIn mb-0 mb-md-5 pb-5">
        <div class="col-md-7 text-center">
          <div class="row">
            <div class="d-sm-flex flex-md-fill flex-row justify-content-center order-md-2">
              <img src="/assets/images/growi-logo.svg" loading="lazy" alt="GROWI" class="d-md-none w-50 mb-4" v-on:click="handleClick">
              <div class="my-auto ms-sm-4">
                <p class="ff-montserrat fs-3 mb-2">More than</p>
                <span class="ff-montserrat display-1 text-reset">1,200,000</span>
                <p class="ff-montserrat fs-3 mt-3">Docker Image Pulls </p>
              </div>
            </div>
            <p class="mb-0 mb-md-4 order-md-1 mt-5 mt-md-auto text-start text-md-center px-0" v-html="data.sections.introduction.text">
            </p>
            <!-- Preventing misalignment of button designs by using the `row` class to create a flex container -->
            <div class="btn-green-bg mt-5 mx-auto order-md-3 row px-0">
              <a href="https://hub.docker.com/r/growilabs/growi/" class="btn-green-line fw-bold d-inline-block" target="_blank">
                <i class="fab fa-docker me-2"></i><span class="btn-text">Dockerhub</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-5 d-none d-md-block">
          <img src="/assets/images/growi-logo.svg" loading="lazy" alt="GROWI" class="h-75 ms-4 ms-lg-0" v-on:click="handleClick">
        </div>
      </div>
    </div>

    <!-- Community section -->
    <div class="bg-lightgreen py-5 text-center">
      <div class="container">
        <h3 class="mb-4 fs-3 text-reset"> {{ data.sections.community.title }}</h3>
        <p v-html="data.sections.community.text" class="mb-5">
        </p>
        <div class="d-md-flex justify-content-center">
          <div>
            <a href="https://github.com/growilabs/growi/" target="_blank" class="btn btn-hexagon btn-navy text-white fs-6 rounded-0 py-2">
              <span class="mx-5 d-inline-block"><i class="fab fa-github me-2"></i>Github</span>
            </a>
          </div>
          <div>
            <a href="https://communityinviter.com/apps/wsgrowi/invite" target="_blank" class="btn btn-hexagon btn-navy text-white fs-6 rounded-0 py-2">
              <span class="mx-5 d-inline-block"><i class="fab fa-slack me-2"></i>Slack</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- features section -->
    <div class="container section-padding" id="features" data-section="features">
      <div class="animated fadeIn text-center">
        <h2 class="pb-5 section-title">{{ data.sections.features.title }}</h2>
        <p class="mb-4 text-start text-md-center mx-3 mx-md-auto" v-html="data.sections.features.text"></p>
      </div>
      <div class="row mt-5 pt-0 pt-md-5">
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/editor.png" width="680" height="480" loading="lazy" :alt="data.features.markdown.title" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h3 class="text-center mt-4 fs-5">{{ data.features.markdown.title }}</h3>
              <p v-html="data.features.markdown.description" class=""></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/shape.png" width="680" height="480" loading="lazy" :alt="data.features.shape.title" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h3 class="text-center mt-4 fs-5">{{ data.features.shape.title }}</h3>
              <p v-html="data.features.shape.description"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/search.png" width="680" height="480" loading="lazy" :alt="data.features.search.title" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h3 class="text-center mt-4 fs-5">{{ data.features.search.title }}</h3>
              <p v-html="data.features.search.description"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/collaborative-editor.png" width="680" height="480" loading="lazy" :alt="data.features.collaborative_editor.title" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h3 class="text-center mt-4 fs-5">{{ data.features.collaborative_editor.title }}</h3>
              <p v-html="data.features.collaborative_editor.description"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/customize.png" width="680" height="480" loading="lazy" :alt="data.features.customize.title" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h3 class="text-center mt-4 fs-5">{{ data.features.customize.title }}</h3>
              <p v-html="data.features.customize.description"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/group.png" width="680" height="480" loading="lazy" :alt="data.features.group.title" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h3 class="text-center mt-4 fs-5">{{ data.features.group.title }}</h3>
              <p v-html="data.features.group.description"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/comment.png" width="680" height="480" loading="lazy" :alt="data.features.comment.title" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h3 class="text-center mt-4 fs-5">{{ data.features.comment.title }}</h3>
              <p v-html="data.features.comment.description"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/auth.png" width="680" height="480" loading="lazy" :alt="data.features.auth.title" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h3 class="text-center mt-4 fs-5">{{ data.features.auth.title }}</h3>
              <p v-html="data.features.auth.description"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 px-lg-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/assets.png" width="680" height="480" loading="lazy" :alt="data.features.assets.title" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0 pb-0">
              <h3 class="text-center mt-4 fs-5">{{ data.features.assets.title }}</h3>
              <p v-html="data.features.assets.description" class="mb-0"></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- AI Section -->
    <div class="pb-5 container" id="growi-ai-feature" data-section="growi-ai-feature">
      <!-- Keep the previous anchor so existing #growi-ai links still scroll here -->
      <span id="growi-ai"></span>
      <div class="container py-5 bg-growi-ai-feature-section rounded-5 mb-5">
        <div class="animated fadeIn">
          <h2 class="border-0 p-0 mt-0 mb-0">
            <img src="/assets/images/growi-ai-agent-logo.svg" loading="lazy" alt="GROWI AI Agent" class="pb-3 mb-3" v-on:click="handleClick">
          </h2>
        </div>
        <div class="row mx-md-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-12 text-center mb-5">
            <p v-html="data.sections.growi_ai.text" class="mb-0"></p>
          </div>
        </div>
        <div class="row mx-md-5 justify-content-around">
          <div class="col-lg-5 col-md-10 mb-5 mb-lg-0">
            <div class="card border-0 bg-transparent">
              <img src="/assets/images/growi-ai-agent-explore.png" width="800" height="520" loading="lazy" :alt="data.sections.growi_ai.explore.image_alt" class="card-img-top rounded-3 shadow mb-2" />
              <div class="card-body px-0 text-center">
                <h3 class="mb-3 fs-4">{{ data.sections.growi_ai.explore.title }}</h3>
                <p v-for="(description, index) in data.sections.growi_ai.explore.descriptions" :key="`explore-${index}`" class="text-start mb-2" v-html="description"></p>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-10">
            <div class="card border-0 bg-transparent">
              <img src="/assets/images/growi-ai-agent-providers.png" width="800" height="520" loading="lazy" :alt="data.sections.growi_ai.providers.image_alt" class="card-img-top rounded-3 shadow mb-2" />
              <div class="card-body px-0 text-center">
                <h3 class="mb-3 fs-4">{{ data.sections.growi_ai.providers.title }}</h3>
                <p v-for="(description, index) in data.sections.growi_ai.providers.descriptions" :key="`providers-${index}`" class="text-start mb-2" v-html="description"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <a :href="data.links.growi_ai_agent" class="btn btn-hexagon btn-bg-green-gradient btn-hexagon-angle-right fw-bold d-inline-block text-white px-5 py-2 rounded-0" target="_blank">
            <span class="fs-5">{{ data.sections.growi_ai.button_text }}</span>
          </a>
        </div>
      </div>

      <!-- GROWI MCP Server -->
      <div id="mcp-server" class="row mx-xl-5 justify-content-center align-items-center py-5">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <video ref="mcpServerVideo" data-src="/assets/images/growi-mcp-server.mp4" poster="/assets/images/growi-mcp-server-poster.jpg" class="rounded-3 shadow w-100" muted loop playsinline controls preload="none" :aria-label="data.sections.growi_ai.mcp_server.video_label"></video>
          <p class="small text-muted mt-2 mb-0">{{ data.sections.growi_ai.mcp_server.video_description }}</p>
        </div>
        <div class="col-lg-5 ps-lg-5 text-lg-start text-center">
          <h3 class="mb-4 fs-2">{{ data.sections.growi_ai.mcp_server.title }}</h3>
          <p v-html="data.sections.growi_ai.mcp_server.description"></p>
          <h4 class="fs-6 mb-2">{{ data.sections.growi_ai.mcp_server.capabilities_title }}</h4>
          <ul class="list-unstyled mb-3">
            <li v-for="(capability, index) in data.sections.growi_ai.mcp_server.capabilities" :key="`mcp-capability-${index}`">{{ capability }}</li>
          </ul>
          <p class="small mb-2">{{ data.sections.growi_ai.mcp_server.compatibility }}</p>
          <p class="small mb-0">
            <a :href="data.links.mcp_server_repo" target="_blank" rel="noopener">GitHub: growilabs/growi-mcp-server</a>
            ・ <a :href="data.links.mcp_server_npm" target="_blank" rel="noopener">npm: @growi/mcp-server</a>
          </p>
          <a :href="data.links.mcp_server" class="btn btn-hexagon btn-bg-green-gradient btn-hexagon-angle-right fw-bold d-inline-block text-white px-5 py-2 mt-3 rounded-0" target="_blank">
            <span class="fs-5">{{ data.sections.growi_ai.mcp_server.button_text }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Merits section -->
    <div class="bg-lightgreen section-padding">
      <div class="container">
        <h2 class="pb-md-5 section-title text-center">{{ data.sections.merits.title }}</h2>
        <div class="row mx-md-5 justify-content-center mt-5">
          <img src="/assets/images/merit-management.svg" loading="lazy" :alt="data.merits.management.title" class="col-md-6 col-xl-5 mx-0 mb-5 mb-md-auto order-md-2" v-on:click="handleClick" />
          <div class="col-md-6 col-xl-5 my-auto px-0 px-lg-5 order-md-1">
            <h3 class="mb-4">{{ data.merits.management.title }}</h3>
            <p v-html="data.merits.management.description"></p>
          </div>
        </div>
        <div class="row mx-md-5 justify-content-center mt-5">
          <img src="/assets/images/merit-get-infomation.svg" loading="lazy" :alt="data.merits.infomation.title" class="col-md-6 col-xl-5 mx-0 mb-5 mb-md-auto" v-on:click="handleClick" />
          <div class="col-md-6 col-xl-5 my-auto px-0 px-lg-5">
            <h3 class="mb-4">{{ data.merits.infomation.title }}</h3>
            <p v-html="data.merits.infomation.description"></p>
          </div>
        </div>
        <div class="row mx-md-5 justify-content-center mt-5">
          <img src="/assets/images/merit-team.svg" loading="lazy" :alt="stripTags(data.merits.team.title)" class="col-md-6 col-xl-5 mx-0 mb-5 mb-md-auto order-md-2" v-on:click="handleClick" />
          <div class="col-md-6 col-xl-5 my-auto px-0 px-lg-5 order-md-1">
            <h3 class="mb-4" v-html="data.merits.team.title"></h3>
            <p v-html="data.merits.team.description"></p>
          </div>
        </div>
      </div>
      <div class="text-center mx-auto mt-5">
        <a
        :href="data.links.admin_guide"
        class="btn btn-hexagon btn-bg-green-gradient btn-hexagon-angle-right fw-bold d-inline-block text-white px-5 py-2 rounded-0"
        target="_blank"
        >
          <span class="fs-5"> {{ data.button.start }}</span>
        </a>
      </div>
    </div>

    <!-- Trial section -->
    <div class="container text-center my-md-5 py-5">
      <h2 class="border-0 d-flex">
        <img src="/assets/images/appearl-effect.svg" alt="" loading="lazy" class="me-3" v-on:click="handleClick" />
        {{ data.sections.trial.title }}
        <img src="/assets/images/appearl-effect.svg" alt="" loading="lazy" class="ms-3 header-appeal-effect" v-on:click="handleClick" />
      </h2>
      <div class="row mt-5 justify-content-center">
        <div class="bg-lightgreen shadow rounded p-5 mx-4 col-sm-10 col-lg-5">
          <h3 class="h5">{{ data.sections.trial.demo }}</h3>
          <div class="btn-green-bg mt-4 mx-auto">
              <a href="https://demo.growi.org/" class="btn-green-line btn-hexagon-angle-right fw-bold d-inline-block" target="_blank">
                <span>GROWI Demo</span>
              </a>
          </div>
        </div>
        <div class="bg-lightgreen shadow rounded p-5 mx-4 col-sm-10 col-lg-5 mt-4 mt-lg-auto">
          <h3 class="h5">{{ data.sections.trial.operation }}</h3>
          <div class="btn-green-bg mt-4 mx-auto">
              <a :href="data.links.docs" class="btn-green-line btn-hexagon-angle-right fw-bold d-inline-block" target="_blank">
                <span>GROWI Docs</span>
              </a>
          </div>
        </div>
      </div>
    </div>

    <!-- growi-cloud section -->
    <div class="growi-cloud-bg">
      <div class="container">
        <div class="row py-4 justify-content-center">
          <div class="col-8 col-md-4 col-xl-3 my-auto order-md-2">
            <img src="/assets/images/growi-cloud-logo.svg" alt="GROWI.cloud" loading="lazy" v-on:click="handleClick" />
          </div>
          <div class="col-md-7 col-xl-5 col-xxl-4 my-auto order-md-1 py-4 py-md-auto px-xl-0 ps-xl-3 text-nowrap">
            <p class="h5 fw-bold text-center text-md-start growi-cloud-text" v-html="data.sections.cloud.text"></p>
            <p class="h5 fw-bold text-center text-md-start mb-0 growi-cloud-text" v-html="data.sections.cloud.subtext"></p>
          </div>
          <div class="col-10 col-xl-4 my-auto order-3 text-center">
            <a href="https://growi.cloud/" class="btn btn-hexagon growi-cloud-btn text-white fs-6 rounded-0 py-2 btn-hexagon-angle-right" target="_blank">
              <span class="mx-5 d-inline-block text-nowrap">{{ data.sections.cloud.button_text }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- footer widgets 4col -->
    <div id="footer-widgets" data-section="footer-widgets">
      <div class="container pt-5 pb-3">
        <div class="row justify-content-center">
          <div class="first-footer-widget col-sm-6 col-md-4">
            <img src="/assets/images/growi-brand-logo-white.svg" loading="lazy" alt="GROWI" class="me-2" />
            <ul>
              <li><a href="https://growi.cloud/" target="_blank">GROWI.cloud</a></li>
              <li><a href="https://github.com/growilabs/growi" target="_blank"><i class="fab fa-github me-1"></i> growilabs/growi</a></li>
              <li><a href="https://github.com/growilabs/growi-docker-compose" target="_blank"><i class="fab fa-github me-1"></i> growilabs/growi-docker-compose</a></li>
              <li><a href="https://hub.docker.com/r/growilabs/growi/" target="_blank"><i class="fab fa-docker me-1"></i>Docker Hub</a></li>
              <li><a href="https://demo.growi.org" target="_blank">demo.growi.org</a></li>
            </ul>
            <p></p>
          </div>
          <div class="col-sm-6 col-md-4 mt-4 mt-md-0">
            <div class="widget-title">
              <h3 class="mb-3"><img src="/assets/images/growi-inc-negative.svg" loading="lazy" alt="GROWI, Inc." class="ms-0" height="20px"/></h3>
              <h4 class="fs-6 text-white mb-0">CONTACT US</h4>
            </div>
            <ul class="mt-4">
              <li class="d-flex">
                <i class="fa-regular fa-map me-2 mt-1"></i><p v-html="data.sections.contact_us.address"></p>
              </li>
              <li v-if="data.sections.contact_us.tel">
                <a :href="`tel:+${data.sections.contact_us.tel.link}`" target="_blank"><i class="fa-solid fa-phone me-2"></i><span>{{ data.sections.contact_us.tel.text }}</span></a>
              </li>
              <li>
                <a :href="`mailto:${data.sections.contact_us.email}`" target="_blank"><i class="fa-regular fa-envelope me-2"></i><span>{{ data.sections.contact_us.email }}</span></a>
              </li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-3 mt-4 mt-md-0">
            <h3 class="mb-3">JOIN US</h3>
            <p v-html="data.sections.joinus.descriptions"></p>
          </div>
        </div>
      </div><!-- / container -->
    </div><!-- / footer widgets 4col -->

    <!-- footer social icons right -->
    <footer class="d-flex justify-content-between align-items-center">
        <p class="ms-3">
          © 2024 GROWI - produced by <a :href="data.links.growi" target="_blank">GROWI, Inc.</a>
        </p>
        <div class="d-flex">
          <a href="https://github.com/growilabs" class="ms-auto me-3" target="_blank" aria-label="GROWI on GitHub"><i class="fab fa-github fs-4" aria-hidden="true"></i></a>
          <a href="https://x.com/GrowiDev" class="ms-auto me-3" target="_blank" aria-label="GROWI on X"><i class="fab fa-x-twitter fs-4" aria-hidden="true"></i></a>
        </div>
    </footer><!-- / footer social icons right -->

  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },

  mounted() {
    this.observeMcpServerVideo();
  },

  beforeDestroy() {
    if (this.videoObserver != null) {
      this.videoObserver.disconnect();
    }
  },

  methods: {
    isMovieFile(path) {
      const extension = path.split('.').pop();
      if (extension == 'mp4') {
        return true;
      } else {
        return false;
      }
    },
    observeMcpServerVideo() {
      const video = this.$refs.mcpServerVideo;
      if (video == null) {
        return;
      }
      // Keep the source in data-src and set src right before playback
      // (preload is only a hint that browsers may ignore, so control load timing by whether src is set)
      const loadAndPlay = () => {
        if (!video.hasAttribute('src')) {
          video.src = video.dataset.src;
        }
        video.play().catch(() => {});
      };
      // Respect the OS "reduce motion" setting: never autoplay, the user starts it with the controls
      if (window.matchMedia != null && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }
      // Play immediately in browsers without IntersectionObserver support
      if (!('IntersectionObserver' in window)) {
        loadAndPlay();
        return;
      }
      // Load and play only while in the viewport; pause when out of view
      this.videoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !document.hidden) {
            loadAndPlay();
          } else {
            video.pause();
          }
        });
      }, { threshold: 0.25 });
      this.videoObserver.observe(video);
    },
    stripTags(html) {
      return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    },
    handleClick(event) {
      // Ignore click events
      event.stopPropagation();
    }
  },
};
</script>

<style lang="scss" scoped>
@use '../styles/style.scss';

@use '../styles/variables' as var;

::v-deep {
  -webkit-font-smoothing: auto;
  p {
    a {
      color: var.$info
    }
  }
}

::v-deep img[width][height] {
  height: auto;
}

::v-deep .btn {
  i, span {
    vertical-align: middle;
  }
}

@media (max-width: 500px) {
  .text-nowrap {
    white-space: normal !important;
  }
}

</style>
