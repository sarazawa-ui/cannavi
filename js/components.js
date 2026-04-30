// ===== 共通コンポーネント =====

import { courses, professors, isFavorite, toggleFavorite, getProfile } from './data.js';
import { router } from './router.js';

// SVG Icons
export const icons = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  career: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  filter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  attendance: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/></svg>`,
};

// ===== レイアウト =====
export function renderLayout(activeTab) {
  return `
    <nav class="bottom-nav">
      <button class="nav-item ${activeTab === 'home' ? 'active' : ''}" onclick="window.appNavigate('/')">
        ${icons.home}
        <span>ホーム</span>
      </button>
      <button class="nav-item ${activeTab === 'filter' ? 'active' : ''}" onclick="window.appNavigate('/filter')">
        ${icons.filter}
        <span>さがす</span>
      </button>
      <button class="nav-item ${activeTab === 'career' ? 'active' : ''}" onclick="window.appNavigate('/career')">
        ${icons.career}
        <span>将来像</span>
      </button>
      <button class="nav-item ${activeTab === 'attendance' ? 'active' : ''}" onclick="window.appNavigate('/attendance')">
        ${icons.attendance}
        <span>出席</span>
      </button>
      <button class="nav-item ${activeTab === 'favorites' ? 'active' : ''}" onclick="window.appNavigate('/favorites')">
        ${icons.heart}
        <span>お気に入り</span>
      </button>
    </nav>
  `;
}

// ===== ヘッダー =====
export function renderHeader(title, showBack = false) {
  const profile = getProfile();
  const avatarBtn = `<button class="header-profile-btn" onclick="window.appNavigate('/profile')">${profile.avatar || '😊'}</button>`;
  return `
    <header class="header">
      ${showBack
        ? `<button class="header-back" onclick="window.history.back()">${icons.back} 戻る</button>`
        : `<span class="header-title">${title}</span>`
      }
      ${showBack ? `<span class="header-title" style="font-size:17px">${title}</span>` : ''}
      ${avatarBtn}
    </header>
  `;
}

// ===== コースカード =====
export function renderCourseCard(course, animateIndex = 0) {
  const prof = professors.find(p => p.id === course.professorId);
  const fav = isFavorite(course.id);
  return `
    <div class="course-card animate-in" style="animation-delay:${animateIndex * 0.05}s" onclick="window.appNavigate('/course/${course.id}')">
      <div class="course-card-top">
        <span class="course-card-category">${course.category}</span>
        ${course.faculty === '全学部' ? '<span class="badge-general">共通教養</span>' : '<span class="badge-specialty">専門科目</span>'}
        <button class="course-card-fav" onclick="event.stopPropagation(); window.appToggleFav(${course.id})">${fav ? '❤️' : '🤍'}</button>
      </div>
      <h3>${course.title}</h3>
      <p class="course-card-subtitle">${course.subtitle}</p>
      <div class="course-card-meta">
        <span>${renderRatingSmall(course.satisfaction)}</span>
        <span>${renderDifficultySmall(course.difficulty)}</span>
        <span>${course.day}${course.period}限</span>
        <span>${course.credits}単位</span>
      </div>
      <div class="course-card-skills">
        ${(course.skills || []).slice(0, 3).map(s => `<span class="skill-badge">${s}</span>`).join('')}
        ${(course.skills || []).length > 3 ? `<span class="skill-badge">+${(course.skills || []).length - 3}</span>` : ''}
      </div>
    </div>
  `;
}

// ===== 小さい星評価 =====
function renderRatingSmall(value) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  let stars = '';
  for (let i = 0; i < full; i++) stars += '★';
  if (half) stars += '☆';
  return `<span class="rating"><span class="rating-star">${stars}</span><span class="rating-value">${value}</span></span>`;
}

// ===== 小さい難易度 =====
function renderDifficultySmall(level) {
  let dots = '';
  for (let i = 1; i <= 5; i++) {
    const cls = i <= level ? (level >= 4 ? 'filled hard' : 'filled') : '';
    dots += `<span class="difficulty-dot ${cls}"></span>`;
  }
  return `<span class="difficulty">${dots}</span>`;
}

// ===== 星評価 (通常) =====
export function renderRating(value) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) stars += '★';
    else if (i === full && half) stars += '☆';
    else stars += '☆';
  }
  return `<span class="rating"><span class="rating-star">${stars}</span><span class="rating-value">${value}</span></span>`;
}

// ===== 難易度 =====
export function renderDifficulty(level) {
  const labels = ['', '入門', 'やさしい', '標準', '発展', '上級'];
  let dots = '';
  for (let i = 1; i <= 5; i++) {
    const cls = i <= level
      ? (level >= 4 ? 'filled hard' : level >= 5 ? 'filled very-hard' : 'filled')
      : '';
    dots += `<span class="difficulty-dot ${cls}"></span>`;
  }
  return `<span class="difficulty">${dots} <span style="font-size:12px;color:var(--text-secondary);margin-left:4px">${labels[level]}</span></span>`;
}

// ===== レビューカード =====
export function renderReviewCard(review) {
  return `
    <div class="review-card">
      <div class="review-header">
        <span class="review-student">${review.studentName}</span>
        ${renderRating(review.rating)}
      </div>
      <p class="review-text">${review.text}</p>
      <div class="review-skill">${review.skill}</div>
    </div>
  `;
}

// ===== 評価方法バー =====
export function renderEvalBars(evaluation) {
  const items = [
    { label: 'テスト', value: evaluation.test },
    { label: 'レポート', value: evaluation.report },
    { label: '出席', value: evaluation.attendance },
    { label: 'その他', value: evaluation.other },
  ].filter(item => item.value > 0);

  return `
    <div class="eval-bars">
      ${items.map(item => `
        <div class="eval-bar-row">
          <span class="eval-bar-label">${item.label}</span>
          <div class="eval-bar-track">
            <div class="eval-bar-fill" style="width:${item.value}%"></div>
          </div>
          <span class="eval-bar-value">${item.value}%</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ===== 検索バー =====
export function renderSearchBar(placeholder = '授業名・スキル・キーワードで検索', onInputId = 'searchInput') {
  return `
    <div class="search-bar">
      <span class="search-icon">${icons.search}</span>
      <input type="text" id="${onInputId}" placeholder="${placeholder}" autocomplete="off">
    </div>
  `;
}
