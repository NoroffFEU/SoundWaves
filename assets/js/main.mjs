import { addHeaderScrollInteractivity } from "./modules/components/headerScroll.mjs";
import { initializeKonamiCode } from "./utils/konamiCode.mjs";
import { comingFeature } from "./utils/commingFeature.mjs";
import { initializeAdminBar } from "./modules/components/adminBar.mjs";
import {
  headerSearchButtonInteractivity,
  loadLatestPostsSearchBar,
} from "./modules/components/headerSearch.mjs";
import { redirectIfAccessDenied } from "./utils/redirect.mjs";
import { searchPostsByTitle } from "./modules/components/searchMain.mjs";
import { loadCategoryPicker } from "./modules/components/categoryPicker.mjs";

function main() {
  redirectIfAccessDenied();
  initializeKonamiCode();
  addHeaderScrollInteractivity();
  headerSearchButtonInteractivity();
  loadLatestPostsSearchBar();
  initializeAdminBar();
  comingFeature();
  searchPostsByTitle();
  loadCategoryPicker();
}

main();
