<template>
  <main class="home" aria-labelledby="main-title">
    <header id="parallax-header" data-section="home">
      <div id="home" class="container" style="position: relative;">
        <!-- header content -->
        <div class="header-content">
          <h2 class="animated fadeIn display-3" v-html="data.heroText"></h2>
          <p class="banner-img animated fadeIn">
            <img :src="data.heroImage" alt="GROWI" />
          </p>
          <div class="row">
            <div class="col-sm-12 animated fadeIn">
              <NavLink v-for="button in data.heroButtons" class="btn" :item="button" />
            </div>
          </div>
          <div class="row">
            <div class="parallax-header-main-img col-md-12">
              <img src="/assets/images/banner-img-2.png" alt="GROWI" />
            </div>
          </div>
        </div>
        <!-- / header content -->
      </div>
      <!-- / container -->
    </header>
    <!-- / header -->

    <div v-if="data.features && data.features.length" id="features" data-section="features">
      <div class="container">
        <div class="page-header wsub first">
          <h2>{{ data.sections.features.title }}</h2>
        </div>

        <div
          v-for="(feature, index) in data.features"
          class="row feature-row"
          style="margin-top: 50px; margin-bottom: 100px;"
        >
          <div v-if="(index % 2) === 0">
            <div class="feature-image-left col-sm-12 col-md-7">
              <img :src="feature.image_path" alt />
            </div>
            <div class="features-left image-left col-xs-12 col-md-5">
              <div v-for="detail in feature.details" class="feature">
                <div class="feature-icon">
                  <i class="lnr" :class="`lnr-${detail.icon}`"></i>
                </div>
                <h3>{{ detail.title }}</h3>
                <p v-html="detail.description"></p>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="features-left image-left col-xs-12 col-md-5">
              <div v-for="detail in feature.details" class="feature">
                <div class="feature-icon">
                  <i class="lnr" :class="`lnr-${detail.icon}`"></i>
                </div>
                <h3>{{ detail.title }}</h3>
                <p v-html="detail.description"></p>
              </div>
            </div>
            <div class="feature-image-left col-sm-12 col-md-7">
              <video
                v-if="feature.image_path.split('.').pop() == 'mp4'"
                class="movie-image"
                :src="feature.image_path"
                autoplay
                loop
                playsinline
                muted="muted"
                data-loaded="true"
              >
              </video>
              <img v-else :src="feature.image_path" alt />
            </div>
          </div>
        </div>
      </div>
      <!-- /container -->
    </div>
    <!-- / features section image-left -->
    <!-- / features section 4col image-left -->

    <div id="demo" class="row">
      <div class="col-sm-12 text-center" style="margin-top: 50px;">
        <a href="https://demo.growi.org/" class="btn btn-success" target="_blank">
          <i class="lnr fa-2x lnr-screen"></i>
          <span style="margin-left: 0.5em; font-size: 1.5em;">Live Demo</span>
          <OutboundLink />
        </a>
      </div>
    </div>

    <!-- growi-cloud section -->
    <div id="cloud" class="parallax" data-section="growi-cloud">
      <div class="container">
        <div class="page-header wsub first">
          <h2>
            GROWI
            <span style="font-size: 0.8em;">.cloud</span>
          </h2>
        </div>
        <div class="row gc-parallax-section-content" style="margin-bottom: 80px;">
          <h3 class="parallax-section-text">{{ data.sections.cloud.descriptions.text }}</h3>
          <h4
            class="parallax-section-text font-weight-normal"
            v-html="data.sections.cloud.descriptions.subtext"
          ></h4>
          <p
            class="parallax-section-text font-weight-normal text-muted"
          >{{ data.sections.cloud.descriptions.subsubtext }}</p>
          <a
            href="https://growi.cloud/"
            style="margin-top: 20px"
            class="btn btn-success growi-cloud-btn"
            target="_blank"
          >
            <i class="lnr lnr-cloud fa-2x"></i>
            <span class="btn-text">{{ data.sections.cloud.descriptions.button_text }}</span>
            <OutboundLink />
          </a>
        </div>
      </div>
    </div>

    <!-- documetnts section 3col -->
    <div id="documents" name="documents" data-section="documetnts">
      <div class="container">
        <div class="page-header wsub first">
          <h2>{{ data.sections.documents.title }}</h2>
        </div>
        <div class="row">
          <div class="about col-sm-4">
            <!--
            <a href="https://github.com/weseek/growi">
              <div class="feature-icon">
                <i class="fa fa-github"></i>
              </div>
              <h5 class="about-title">
                GitHub
              </h5>
            </a>
            -->
          </div>
          <div class="about col-sm-4">
            <a href="https://docs.growi.org">
              <div class="feature-icon">
                <i class="lnr lnr-book"></i>
              </div>
              <h5 class="about-title">
                GROWI Docs
                <br />
                <small>by VuePress</small>
              </h5>
            </a>
          </div>
          <div class="about col-sm-4">
            <!--
            <a href="https://weseek.co.jp/tags/GROWI/">
              <div class="feature-icon">
                <i class="lnr lnr-magic-wand"></i>
              </div>
              <h5 class="about-title">GROWI Blog</h5>
            </a>
            -->
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 text-center animated fadeIn" style="margin: 10px 0;">
            <NavLink
              class="btn btn-default"
              :item="{
                text: 'GITHUB',
                link: 'https://github.com/weseek/growi'
              }"
            />
            <NavLink
              class="btn btn-default"
              :item="{
                text: 'GROWI BLOG',
                link: 'https://weseek.co.jp/tags/GROWI/'
              }"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- joinus -->
    <div id="joinus" class="parallax" data-section="joinus" style="margin-top: 150px;">
      <div class="container">
        <div class="page-header wsub first">
          <h2>JOIN US</h2>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p
              v-for="description in data.sections.joinus.descriptions"
              v-html="description"
              class="text-center"
              style="margin-top: 30px;"
            ></p>
            <p class="text-center" style="margin-top: 60px;">
              <iframe
                src="https://ghbtns.com/github-btn.html?user=weseek&repo=growi&type=watch&count=true"
                allowtransparency="true"
                frameborder="0"
                scrolling="0"
                width="110"
                height="20"
              ></iframe>
              <a href="https://growi-slackin.weseek.co.jp/">
                <img
                  src="https://growi-slackin.weseek.co.jp/badge.svg"
                  style="display: inline; vertical-align: baseline; margin-left: -20px;"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
      <!-- / container -->
    </div>
    <!-- / joinus -->

    <!-- map -->
    <div>
      <iframe
        id="map"
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCRwmtcbaWWW-2R-iiUBvZdVI-UeEb-aXo&q=東京都新宿区西早稲田2-20-15"
      ></iframe>
    </div>
    <!-- / map -->

    <!-- footer widgets 4col -->
    <div id="footer-widgets" data-section="footer-widgets">
      <div class="container">
        <div class="row">
          <div class="first-footer-widget col-sm-6">
            <img src="/assets/images/logo.png" alt />
            <ul>
              <li>
                <a href="https://growi.cloud/">GROWI.cloud</a>
              </li>
              <li>
                <a href="https://github.com/weseek/growi">
                  <i class="fa fa-github" aria-hidden="true"></i> weseek/growi
                </a>
              </li>
              <li>
                <a href="https://github.com/weseek/growi-docker-compose">
                  <i class="fa fa-github" aria-hidden="true"></i> weseek/growi-docker-compose
                </a>
              </li>
              <li>
                <a href="https://hub.docker.com/r/weseek/growi/">Docker Hub</a>
              </li>
              <li>
                <a href="https://demo.growi.org">demo.growi.org</a>
              </li>
            </ul>
            <p></p>
          </div>
          <div class="col-sm-6">
            <div class="widget-title">
              <h3>CONTACT US</h3>
            </div>
            <div class="footer-contact-info">
              <div class="info">
                <p>
                  <i class="lnr lnr-map-marker"></i>
                  <span>{{ data.sections.contact_us.address }}</span>
                </p>
              </div>
              <div class="info" v-if="data.sections.contact_us.tel">
                <a :href="`tel:+${data.sections.contact_us.tel.link}`">
                  <i class="lnr lnr-phone-handset"></i>
                  <span>{{ data.sections.contact_us.tel.text }}</span>
                </a>
              </div>
              <div class="info">
                <a :href="`mailto:${data.sections.contact_us.email}`">
                  <i class="lnr lnr-envelope"></i>
                  <span>{{ data.sections.contact_us.email }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- / container -->
    </div>
    <!-- / footer widgets 4col -->

    <!-- footer social icons right -->
    <footer>
      <div class="container">
        <p class="row">
          <span class="col-xs-12 col-sm-8 left">
            © 2018
            <b>GROWI</b> - produced by
            <a href="https://weseek.co.jp">WESEEK, Inc.</a>
          </span>
          <span class="col-xs-12 col-sm-4 right">
            <a href="https://twitter.com/weseek_inc">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/weseek">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </span>
        </p>
      </div>
    </footer>
    <!-- / footer social icons right -->

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
    <!-- scroll to top -->
    <a href="#home" class="scroll-to-top page-scroll">
      <i class="fa fa-angle-up"></i>
    </a>
    <!-- / scroll to top -->
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
import NavLink from '@theme/components/NavLink.vue';

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
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/style.scss';
@import '../styles/owl.carousel.css';
@import '../styles/owl.theme.css';

/deep/ {
  -webkit-font-smoothing: auto;
  p {
    a {
      color: $info;
    }
  }
}

h2 {
  @extend .h2;
  border-bottom: 0;
}

/deep/ .btn {
  i,
  span {
    vertical-align: middle;
  }

  svg {
    color: #fff;
    fill: currentColor;
  }
}

/* GROWI cloud section */
.gc-parallax-section-content {
  $success: #55a79a;
  $success-hover: darken($success, 10%);

  .parallax-section-text {
    $headings-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }

  .font-weight-normal {
    font-weight: normal !important;
  }

  .display-3 {
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.2;
  }

  .growi-cloud-btn {
    background-color: $success;
    border-color: $success;
    text-transform: none;
  }

  .growi-cloud-btn:hover,
  .growi-cloud-btn:focus {
    color: $white;
    background-color: $success-hover;
    border-color: $success-hover;
    outline: none;
  }

  .btn-text {
    margin-left: 0.5em;
    font-size: 1.5em;
  }
}
/* End GROWI cloud section */

/* Join Us */

/deep/ #joinus {
  background: url(/assets/images/joinus-background.jpg) no-repeat;
  padding-bottom: 50px;
  margin-top: 50px;
  p {
    color: white;
  }

  .page-header h2 {
    color: $white;
  }
}
</style>
