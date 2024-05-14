import { addHeaderScrollInteractivity } from "./modules/components/headerScroll.mjs";
import { initializeKonamiCode } from "./utils/konamiCode.mjs";
import { comingFeature } from "./utils/commingFeature.mjs";
import { initializeAdminBar } from "./modules/components/adminBar.mjs";
import { headerSearchButtonInteractivity, loadLatestPostsSearchBar } from "./modules/components/headerSearch.mjs";

function main() {
  initializeKonamiCode();
  addHeaderScrollInteractivity();
  headerSearchButtonInteractivity();
  loadLatestPostsSearchBar();
  initializeAdminBar();
  comingFeature();
}

main();
