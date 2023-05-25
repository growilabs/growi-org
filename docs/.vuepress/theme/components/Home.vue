<template>
  <main class="home" aria-labelledby="main-title">
    <header id="parallax-header" data-section="home">
      <div id="home" class="container py-5">
        <!-- header content -->
        <div class="header-content row pt-4 pt-lg-5 pb-0 pb-lg-5 mt-5">
          <div class="col-lg-6 px-0 animated fadeIn">
            <h2 class="fs-1 border-0 mt-0 mt-lg-4 mb-4"> {{ data.heroText.line1 }}<br />{{ data.heroText.line2 }}</h2>
            <img src="/assets/images/mock-img.png" alt="GROWI" v-on:click="handleClick" class="d-lg-none">
          <p class="mt-3" v-html="data.heroText.subtext"></p>
          <a href="data.links.admin_guide" class="btn mt-4 btn-hexagon-angle-right" target="_blank">
            <span class="fs-6"> {{ data.button.start }}</span>
          </a>
        </div>
        <div class="d-none d-lg-block col-lg-6 my-auto animated fadeIn">
          <p class="animated fadeIn">
            <img src="/assets/images/mock-img.png" alt="GROWI" v-on:click="handleClick">
          </p>
          </div>
        </div>
      </div>
    </header>

    <!-- Introduce section -->
    <div class="container">
      <h2 class="text-center mt-5 py-5 section-title animated fadeIn">{{ data.sections.introduction.title }}</h2>
      <div class="row animated fadeIn mb-5 pb-5">
        <div class="col-md-7 text-center">
          <p class="mb-4" v-html="data.sections.introduction.text">
          </p>
          <div class="d-flex flex-md-fill flex-row justify-content-center">
            <img src="/assets/images/growi-logo.svg" alt="GROWI" class="d-md-none w-25" v-on:click="handleClick">
            <div>
              <span class="ff-montserrat display-1 text-reset">500K+</span>
              <p class="ff-montserrat fs-3">Docker Image Pulls </p>
            </div>
          </div>
          <div class="btn-green-bg mt-5 mx-auto">
            <a href="https://hub.docker.com/r/weseek/growi/" class="btn-green-line fw-bold d-inline-block" target="_blank">
              <i class="fab fa-docker me-2"></i><span class="btn-text">Dockerhub</span>
            </a>
          </div>
        </div>
        <div class="col-md-5 my-auto d-none d-md-block">
          <img src="/assets/images/growi-logo.svg" alt="GROWI" class="ms-0" v-on:click="handleClick">
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
            <a href="https://github.com/weseek/growi/" target="_blank" class="btn btn-hexagon btn-navy text-white fs-6 rounded-0 py-2">
              <span class="mx-5 d-inline-block"><i class="fab fa-github me-2"></i>Github</span>
            </a>
          </div>
          <div>
            <a href="https://wsgrowi.slack.com" target="_blank" class="btn btn-hexagon btn-navy text-white fs-6 rounded-0 py-2">
              <span class="mx-5 d-inline-block"><i class="fab fa-slack me-2"></i>Slack</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- features section -->
    <div class="container pb-5 mb-5" id="features" data-section="features">
      <div class="animated fadeIn text-center">
        <h2 class="mt-5 py-5 section-title">{{ data.sections.features.title }}</h2>
        <p class="mb-4" v-html="data.sections.features.text"></p>
      </div>
      <div class="row mt-5 pt-5">
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/editor.png" alt="Editor" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h5 class="text-center mt-4">{{ data.features.markdown.title }}</h5>
              <p v-html="data.features.markdown.description"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/shape.png" alt="Create Diagram" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h5 class="text-center mt-4">{{ data.features.shape.title }}</h5>
              <p v-html="data.features.shape.description"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/search.png" alt="Search" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h5 class="text-center mt-4">{{ data.features.search.title }}</h5>
              <p v-html="data.features.search.description"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/hackmd.png" alt="Highly customizable" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h5 class="text-center mt-4">{{ data.features.hackmd.title }}</h5>
              <p v-html="data.features.hackmd.description"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/customize.png" alt="Customize" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h5 class="text-center mt-4">{{ data.features.customize.title }}</h5>
              <p v-html="data.features.customize.description"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/group.png" alt="Group Management" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h5 class="text-center mt-4">{{ data.features.group.title }}</h5>
              <p v-html="data.features.group.description"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/comment.png" alt="Comment Features" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h5 class="text-center mt-4">{{ data.features.comment.title }}</h5>
              <p v-html="data.features.comment.description"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/auth.png" alt="Auth" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h5 class="text-center mt-4">{{ data.features.auth.title }}</h5>
              <p v-html="data.features.auth.description"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 px-lg-4 mb-4">
          <div class="card border-0 bg-transparent">
            <img src="/assets/images/features/assets.png" alt="Assets management" class="card-img-top rounded-3 shadow" />
            <div class="card-body px-0">
              <h5 class="text-center mt-4">{{ data.features.assets.title }}</h5>
              <p v-html="data.features.assets.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  <!-- Merits section -->
  <div class="bg-lightgreen py-5">
    <div class="container">
      <h2 class="mt-5 py-5 section-title text-center">{{ data.sections.merits.title }}</h2>
      <div class="row mx-md-5 justify-content-center mt-5">
        <img src="/assets/images/merit-management.svg" alt="Merit of management" class="col-md-6 col-xl-5 mx-0 mb-5 mb-md-auto order-md-2" v-on:click="handleClick" />
        <div class="col-md-6 col-xl-5 my-auto px-0 px-lg-5 order-md-1">
          <h3 class="mb-4">{{ data.merits.management.title }}</h3>
          <p v-html="data.merits.management.description"></p>
        </div>
      </div>
      <div class="row mx-md-5 justify-content-center mt-5">
        <img src="/assets/images/merit-get-infomation.svg" alt="Get the infomation" class="col-md-6 col-xl-5 mx-0 mb-5 mb-md-auto" v-on:click="handleClick" />
        <div class="col-md-6 col-xl-5 my-auto px-0 px-lg-5">
          <h3 class="mb-4">{{ data.merits.infomation.title }}</h3>
          <p v-html="data.merits.infomation.description"></p>
        </div>
      </div>
      <div class="row mx-md-5 justify-content-center mt-5">
        <img src="/assets/images/merit-team.svg" alt="Merit for team" class="col-md-6 col-xl-5 mx-0 mb-5 mb-md-auto order-md-2" v-on:click="handleClick" />
        <div class="col-md-6 col-xl-5 my-auto px-0 px-lg-5 order-md-1">
          <h3 class="mb-4" v-html="data.merits.team.title"></h3>
          <p v-html="data.merits.team.description"></p>
        </div>
      </div>
    </div>
    <div class="text-center mx-auto mt-5">
      <a
      href="data.links.admin_guide"
      class="btn btn-hexagon btn-bg-green-gradient btn-hexagon-angle-right fw-bold d-inline-block text-white px-5 py-2 rounded-0"
      target="_blank"
      >
        <span class="fs-5"> {{ data.button.start }}</span>
      </a>
    </div>
  </div>

  <!-- Trial section -->
  <div class="container text-center my-5 py-5">
    <h2 class="border-0 d-flex">
      <img src="/assets/images/appearl-effect.svg" class="me-3" v-on:click="handleClick" />
      {{ data.sections.trial.title }}
      <img src="/assets/images/appearl-effect.svg" class="ms-3 header-appeal-effect" v-on:click="handleClick" />
    </h2>
    <div class="row mt-5 justify-content-center">
      <div class="bg-lightgreen shadow rounded p-5 mx-4 col-10 col-lg-5">
        <h5>{{ data.sections.trial.demo }}</h5>
        <div class="btn-green-bg mt-4 mx-auto">
            <a href="https://demo.growi.org/" class="btn-green-line btn-hexagon-angle-right fw-bold d-inline-block" target="_blank">
              <span>GROWI Demo</span>
            </a>
        </div>
      </div>
      <div class="bg-lightgreen shadow rounded p-5 mx-4 col-10 col-lg-5 mt-4 mt-lg-auto">
        <h5>{{ data.sections.trial.operation }}</h5>
        <div class="btn-green-bg mt-4 mx-auto">
            <a href="data.links.docs" class="btn-green-line btn-hexagon-angle-right fw-bold d-inline-block" target="_blank">
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
          <div class="col-md-4 my-auto order-md-2">
            <img src="/assets/images/growi-cloud-logo.svg" v-on:click="handleClick" />
          </div>
          <div class="col-md-7 col-xl-4 my-auto order-md-1 py-4 py-md-auto ps-xxl-5 text-nowrap">
            <h5 class="text-center text-md-start growi-cloud-text" v-html="data.sections.cloud.text"></h5>
            <h5 class="text-center text-md-start mb-0 growi-cloud-text" v-html="data.sections.cloud.subtext"></h5>
          </div>
          <div class="col-10 col-xl-3 my-auto order-3 text-center">
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
            <div class="d-flex">
              <img src="/assets/images/growi-white-logo.svg" alt="" class="me-2" />
              <h3 class="mt-1">GROWI</h3>
            </div>
            <ul>
              <li><a href="https://growi.cloud/" target="_blank">GROWI.cloud</a></li>
              <li><a href="https://github.com/weseek/growi" target="_blank"><i class="fab fa-github me-1"></i> weseek/growi</a></li>
              <li><a href="https://github.com/weseek/growi-docker-compose" target="_blank"><i class="fab fa-github me-1"></i> weseek/growi-docker-compose</a></li>
              <li><a href="https://hub.docker.com/r/weseek/growi/" target="_blank"><i class="fab fa-docker me-1"></i>Docker Hub</a></li>
              <li><a href="https://demo.growi.org" target="_blank">demo.growi.org</a></li>
              <li><a href="https://weseek.co.jp/tech/category/growi/" target="_blank">Tech Blog</a></li>
            </ul>
            <p></p>
          </div>
          <div class="col-sm-6 col-md-4 mt-4 mt-md-0">
            <div class="widget-title">
              <h3 class="mb-3">WESEEK,Inc.</h3>
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
          © 2018 GROWI - produced by <a href="https://weseek.co.jp" target="_blank">WESEEK, Inc.</a>
        </p>
        <a href="https://github.com/weseek" class="ms-auto me-3" target="_blank"><i class="fab fa-github fs-4"></i></a>
    </footer><!-- / footer social icons right -->

    <!-- javascript -->
    <script2 src="/assets/js/jquery.min.js"></script2>
    <script2 src="/assets/js/bootstrap.min.js"></script2>
    <script2 src="/assets/js/owl.carousel.min.js"></script2>
    <script2 src="/assets/js/jquery.countTo.js"></script2>
    <script2 src="/assets/js/jquery.shuffle.min.js"></script2>
    <script2 src="/assets/js/custom.js"></script2>
    <!-- <script2 src="/assets/js/sticky-nav.js"></script2> -->
    <script2 src="/assets/js/jquery.easing.min.js"></script2>
    <!-- <script2 src="/assets/js/scrolling-nav.js"></script2> -->
    <script2 src="/assets/js/jquery.nav.js"></script2>
    <!-- scripts -->
    <!-- nav scroll -->
    <script2>
      $(document).ready(function () {
        $('.nav').onePageNav();
      });
    </script2>
    <!-- / nav scroll -->
    <!-- facts counter -->
    <script2 type="text/javascript">
      $('.timer').countTo({
        refreshInterval: 60,
        formatter: function (value, options) {
          return value.toFixed(options.decimals);
        },
      });
    </script2>
    <!-- / facts counter -->
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

  methods: {
    isMovieFile(path) {
      const extension = path.split('.').pop();
      if (extension == 'mp4') {
        return true;
      } else {
        return false;
      }
    },
    handleClick(event) {
      // クリックイベントを無視する
      event.stopPropagation();
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/style.scss';
@import '../styles/owl.carousel.css';
@import '../styles/owl.theme.css';

/deep/ .btn {
  i, span {
    vertical-align: middle;
  }
}
</style>
