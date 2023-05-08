import VS2 from 'vue-script2'
import 'bootstrap/dist/css/bootstrap.css';

export default ({
  Vue,
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
    Vue.use(VS2)
}
