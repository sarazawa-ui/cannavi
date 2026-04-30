// ===== アプリケーションエントリ =====

import { router } from './router.js';
import { toggleFavorite } from './data.js';
import {
  renderHomePage, initHomePage,
  renderCoursePage, initCoursePage,
  renderCareerPage, initCareerPage,
  renderFilterPage, initFilterPage,
  renderFavoritesPage,
  renderAttendancePage,
  renderAttendanceDetailPage,
  renderProfilePage,
  renderProfileEditPage, initProfileEditPage
} from './pages.js';

const app = document.getElementById('app');

// ===== グローバル関数 =====
window.appNavigate = (path) => router.navigate(path);

window.appToggleFav = (courseId) => {
  const isFav = toggleFavorite(courseId);
  // お気に入りページにいる場合のみ再レンダリング（詳細ページでは再レンダリングしない）
  const hash = window.location.hash;
  if (hash === '#/favorites') {
    router.resolve();
  }
  return isFav;
};

// ===== ルート定義 =====
router
  .on('/', () => {
    app.innerHTML = renderHomePage();
    initHomePage();
    window.scrollTo(0, 0);
  })
  .on('/course/:id', (params) => {
    app.innerHTML = renderCoursePage(params);
    initCoursePage();
    window.scrollTo(0, 0);
  })
  .on('/career', (params) => {
    app.innerHTML = renderCareerPage(params);
    initCareerPage();
    window.scrollTo(0, 0);
  })
  .on('/filter', () => {
    app.innerHTML = renderFilterPage();
    initFilterPage();
    window.scrollTo(0, 0);
  })
  .on('/attendance', () => {
    app.innerHTML = renderAttendancePage();
    window.scrollTo(0, 0);
  })
  .on('/attendance/:id', (params) => {
    app.innerHTML = renderAttendanceDetailPage(params);
    window.scrollTo(0, 0);
  })
  .on('/favorites', () => {
    app.innerHTML = renderFavoritesPage();
    window.scrollTo(0, 0);
  })
  .on('/profile', () => {
    app.innerHTML = renderProfilePage();
    // 初回設定の場合は編集フォームが表示されるのでinitも呼ぶ
    initProfileEditPage();
    window.scrollTo(0, 0);
  })
  .on('/profile/edit', () => {
    app.innerHTML = renderProfileEditPage();
    initProfileEditPage();
    window.scrollTo(0, 0);
  });

// ===== 初回レンダリング =====
router.resolve();
