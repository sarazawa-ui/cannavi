// ===== ページ =====

import { courses, professors, careers, isFavorite, toggleFavorite, getFavorites, enrollments, attendanceRecords, getAttendanceStats, isEnrolled, getProfile, saveProfile, isProfileSetup } from './data.js';
import { renderLayout, renderHeader, renderCourseCard, renderSearchBar, renderRating, renderDifficulty, renderReviewCard, renderEvalBars, icons } from './components.js';

// ===== ホームページ =====
export function renderHomePage() {
  const categories = ['すべて', ...new Set(courses.map(c => c.category))];
  const popular = [...courses].sort((a, b) => b.satisfaction - a.satisfaction).slice(0, 5);

  return `
    ${renderHeader('キャンナビ')}
    <div class="page-content">
      ${renderSearchBar()}

      <div class="category-chips" id="categoryChips">
        ${categories.map((c, i) => `<button class="chip ${i === 0 ? 'active' : ''}" data-category="${c}">${c}</button>`).join('')}
      </div>

      <div class="section">
        <div class="section-header">
          <h2 class="section-title">人気の授業</h2>
        </div>
        <div id="courseList">
          ${popular.map((c, i) => renderCourseCard(c, i)).join('')}
        </div>
      </div>
    </div>
    ${renderLayout('home')}
  `;
}

export function initHomePage() {
  const searchInput = document.getElementById('searchInput');
  const courseList = document.getElementById('courseList');
  const chips = document.querySelectorAll('#categoryChips .chip');
  let activeCategory = 'すべて';

  function filterCourses() {
    const query = (searchInput?.value || '').toLowerCase();
    let filtered = courses;
    if (activeCategory !== 'すべて') {
      filtered = filtered.filter(c => c.category === activeCategory);
    }
    if (query) {
      filtered = filtered.filter(c =>
        c.title.toLowerCase().includes(query) ||
        c.subtitle.toLowerCase().includes(query) ||
        c.skills.some(s => s.toLowerCase().includes(query)) ||
        c.category.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query)
      );
    }
    courseList.innerHTML = filtered.length
      ? filtered.map((c, i) => renderCourseCard(c, i)).join('')
      : '<div class="empty-state"><div class="empty-state-icon">🔍</div><div class="empty-state-title">見つかりませんでした</div><div class="empty-state-text">別のキーワードで検索してみてください</div></div>';
  }

  searchInput?.addEventListener('input', filterCourses);

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.category;
      filterCourses();
    });
  });
}

// ===== 授業詳細ページ =====
export function renderCoursePage(params) {
  const course = courses.find(c => c.id === parseInt(params.id));
  if (!course) return '<div class="page-content"><p>授業が見つかりません</p></div>';

  const prof = professors.find(p => p.id === course.professorId);
  const fav = isFavorite(course.id);
  const instructorNames = course.instructorNames?.length
    ? course.instructorNames
    : (prof?.name ? [prof.name] : []);
  const defaultInstructor = instructorNames[0] || '';

  return `
    ${renderHeader(course.title, true)}
    <div class="page-content" style="padding-top:0">
      <div class="detail-hero">
        <h1>${course.title}</h1>
        <p class="detail-hero-subtitle">${course.subtitle}</p>
        <div class="detail-hero-stats">
          <div class="detail-stat">
            <div class="detail-stat-value">${course.satisfaction}</div>
            <div class="detail-stat-label">満足度</div>
          </div>
          <div class="detail-stat">
            <div class="detail-stat-value">${course.semesterEnrollCount ?? course.enrollCount ?? '--'}</div>
            <div class="detail-stat-label">今学期履修者数</div>
          </div>
          <div class="detail-stat">
            <div class="detail-stat-value">${course.credits}</div>
            <div class="detail-stat-label">単位</div>
          </div>
          <div class="detail-stat" style="cursor:pointer" onclick="document.getElementById('difficultyDetail').classList.toggle('hidden')">
            <div class="detail-stat-value">${['', '入門', '易', '標準', '発展', '上級'][course.difficulty]}</div>
            <div class="detail-stat-label">難易度 ▾</div>
          </div>
        </div>
      </div>
      <div id="difficultyDetail" class="difficulty-detail hidden">
        <div class="difficulty-detail-row">
          <span>単位取得率</span>
          <span>${course.difficultyReason?.creditRate ?? '--'}%</span>
        </div>
        <div class="difficulty-detail-row">
          <span>課題量</span>
          <span>${course.difficultyReason?.homeworkLoad ?? '--'}</span>
        </div>
        <div class="difficulty-detail-row">
          <span>出席の厳しさ</span>
          <span>${course.difficultyReason?.attendanceStrict ? '厳しい' : '普通'}</span>
        </div>
        <div class="difficulty-detail-row">
          <span>ポイント</span>
          <span>${course.difficultyReason?.reason ?? '--'}</span>
        </div>
      </div>

      <!-- 1分紹介動画 -->
      <div class="video-section animate-in">
        <div class="video-player">
          ${course.videoUrl
            ? `<video controls playsinline preload="metadata"><source src="${course.videoUrl}" type="video/mp4"></video>`
            : `<div style="display:flex;flex-direction:column;align-items:center;gap:8px;color:#999">
                <span style="font-size:48px">▶️</span>
                <span style="font-size:14px">授業紹介動画 (1分)</span>
              </div>`
          }
        </div>
        <div class="video-label">🎬 1分でわかる授業紹介</div>
      </div>

      <!-- 身につくスキル -->
      <div class="info-card animate-in" style="animation-delay:0.05s">
        <div class="info-card-title">🎯 身につくスキル</div>
        <div class="skill-list">
          ${course.skills.map(s => `<span class="skill-badge accent">${s}</span>`).join('')}
        </div>
      </div>

      <!-- 教授プロフィール -->
      ${(prof || instructorNames.length) ? `
      <div class="info-card animate-in" style="animation-delay:0.1s">
        <div class="info-card-title">👨‍🏫 担当教員</div>
        <div class="professor-card">
          <div class="professor-avatar">${(defaultInstructor || prof?.name || '?').slice(0, 1)}</div>
          <div class="professor-info">
            ${instructorNames.length > 1 ? `
              <div style="margin-bottom:10px">
                <label for="instructorSelect" style="font-size:12px;color:var(--text-secondary);display:block;margin-bottom:4px">教員を選択</label>
                <select id="instructorSelect" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:8px;background:#fff">
                  ${instructorNames.map(name => `<option value="${name}">${name}</option>`).join('')}
                </select>
              </div>
            ` : ''}
            <div class="professor-name" id="selectedInstructorName">${defaultInstructor || prof?.name || '担当教員'}</div>
            <div class="professor-dept">${course.university} / ${course.faculty}</div>
            <div class="professor-greeting">${course.syllabusUrl ? `<a href="${course.syllabusUrl}" target="_blank" style="color:var(--accent);text-decoration:none;font-size:13px">📄 シラバスを見る →</a>` : (prof?.greeting || 'シラバス情報を参照してください。')}</div>
            <div class="professor-meta">
              <div class="professor-meta-item"><strong>担当教員:</strong> ${defaultInstructor || 'シラバス参照'}</div>
              <div class="professor-meta-item"><strong>授業情報:</strong> ${course.subtitle}</div>
              <div class="professor-meta-item"><strong>備考:</strong> ${course.sourceNote || '教員情報はシラバス掲載内容を反映'}</div>
            </div>
          </div>
        </div>
      </div>
      ` : ''}

      <!-- 履修者の声 -->
      <div class="info-card animate-in" style="animation-delay:0.15s">
        <div class="info-card-title">💬 履修した先輩の声</div>
        ${course.reviews.map(r => renderReviewCard(r)).join('')}
      </div>

      <!-- 評価方法 -->
      <div class="info-card animate-in" style="animation-delay:0.2s">
        <div class="info-card-title">📝 成績評価</div>
        ${renderEvalBars(course.evaluation)}
      </div>

      <!-- 教科書情報 -->
      <div class="info-card animate-in" style="animation-delay:0.22s">
        <div class="info-card-title">📚 教科書情報</div>
        ${course.textbook?.required
          ? `<div class="textbook-info required">
              <span class="textbook-badge required">教科書あり</span>
              <span class="textbook-name">${course.textbook.name || ''}</span>
              ${course.textbook.price ? `<span class="textbook-price">¥${course.textbook.price.toLocaleString()}</span>` : ''}
             </div>`
          : `<div class="textbook-info">
              <span class="textbook-badge">教科書不要</span>
              <span class="textbook-note">${course.textbook?.note || '資料配布'}</span>
             </div>`
        }
      </div>

      <!-- 基本情報 (折りたたみ) -->
      <div class="info-card collapsible animate-in" style="animation-delay:0.25s" id="basicInfoCollapsible">
        <div class="info-card-title">📋 基本情報</div>
        <div class="collapsible-content">
          <div class="basic-info-grid">
            <div class="basic-info-item"><dt>曜日・時限</dt><dd>${course.day}曜 ${course.period}限</dd></div>
            <div class="basic-info-item"><dt>学期</dt><dd>${course.semester}</dd></div>
            <div class="basic-info-item"><dt>授業形式</dt><dd>${course.format || '--'}</dd></div>
            <div class="basic-info-item"><dt>授業時間</dt><dd>${course.classMinutes ? course.classMinutes + '分/コマ' : '--'}</dd></div>
            <div class="basic-info-item"><dt>教室</dt><dd>${course.classroom || '--'}</dd></div>
            <div class="basic-info-item"><dt>対象学年</dt><dd>${course.yearNote || course.year.join('・') + '年'}</dd></div>
            <div class="basic-info-item"><dt>学部</dt><dd>${course.faculty}</dd></div>
            <div class="basic-info-item"><dt>単位数</dt><dd>${course.credits}単位</dd></div>
            <div class="basic-info-item"><dt>今学期履修者数</dt><dd>${course.semesterEnrollCount != null ? course.semesterEnrollCount + '名' : '--'}</dd></div>
          </div>
        </div>
      </div>

      <!-- おすすめキャリア -->
      <div class="info-card animate-in" style="animation-delay:0.3s">
        <div class="info-card-title">🚀 この授業が活きるキャリア</div>
        <div class="skill-list">
          ${course.careerTags.map(t => `<span class="skill-badge" style="cursor:pointer" onclick="window.appNavigate('/career?select=${encodeURIComponent(careers.find(c=>c.label===t)?.id||'')}')">${t}</span>`).join('')}
        </div>
      </div>
    </div>

    <button class="detail-fav-btn" id="detailFavBtn" onclick="(function(e){e.stopPropagation();const btn=document.getElementById('detailFavBtn');const now=window.appToggleFav(${course.id});btn.textContent=now?'❤️':'🤍';})(event)">${fav ? '❤️' : '🤍'}</button>
    ${renderLayout('')}
  `;
}

export function initCoursePage() {
  const collapsible = document.getElementById('basicInfoCollapsible');
  if (collapsible) {
    collapsible.querySelector('.info-card-title').addEventListener('click', () => {
      collapsible.classList.toggle('open');
    });
  }

  const instructorSelect = document.getElementById('instructorSelect');
  const selectedInstructorName = document.getElementById('selectedInstructorName');
  if (instructorSelect && selectedInstructorName) {
    instructorSelect.addEventListener('change', () => {
      selectedInstructorName.textContent = instructorSelect.value;
    });
  }
}

// ===== キャリアパスページ =====
export function renderCareerPage(params) {
  const selectedId = params?.select || null;

  return `
    ${renderHeader('なりたい将来像')}
    <div class="page-content">
      <div class="section">
        <p style="font-size:14px;color:var(--text-secondary);margin-bottom:16px;line-height:1.6">
          なりたい将来像を選ぶと、おすすめの授業を表示します。
        </p>
        <div class="career-grid" id="careerGrid">
          ${careers.map(c => `
            <div class="career-card ${selectedId === c.id ? 'selected' : ''}" data-career="${c.id}">
              <div class="career-icon">${c.icon}</div>
              <div class="career-label">${c.label}</div>
              <div class="career-desc">${c.description}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div id="careerResults">
        ${selectedId ? renderCareerResults(selectedId) : ''}
      </div>
    </div>
    ${renderLayout('career')}
  `;
}

function renderCareerResults(careerId) {
  const career = careers.find(c => c.id === careerId);
  if (!career) return '';

  const byIds = (career.courseIds || []).map(id => courses.find(c => c.id === id)).filter(Boolean);
  const byTags = courses.filter(c => Array.isArray(c.careerTags) && c.careerTags.includes(career.label));
  const recommended = Array.from(new Map([...byIds, ...byTags].map(c => [c.id, c])).values());

  return `
    <div class="career-results animate-in">
      <div class="career-results-title">${career.icon} ${career.label}になるために</div>
      <div class="career-results-desc">以下の授業を履修すると、必要なスキルが身につきます</div>
      <div class="career-skill-map">
        ${career.skills.map(s => `<span class="skill-badge accent">${s}</span>`).join('')}
      </div>
      ${recommended.map((c, i) => `
        <div class="career-recommend-reason">
          💡 <strong>${c.title}</strong>をおすすめする理由：
          ${c.careerTags.filter(t => t === career.label || career.skills.some(s => c.skills.includes(s))).length > 0
            ? `「${career.label}」に必要な ${c.skills.filter(s => career.skills.includes(s)).join('・') || c.skills[0]} が身につく授業です`
            : `${career.label}に関連するスキルが習得できます`}
        </div>
        ${renderCourseCard(c, i)}
      `).join('')}
    </div>
  `;
}

export function initCareerPage() {
  const grid = document.getElementById('careerGrid');
  const results = document.getElementById('careerResults');
  let selectedCareerId = null;

  // URLから初期選択を取得
  const hash = window.location.hash;
  const urlParams = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
  selectedCareerId = urlParams.get('select') || null;

  grid?.querySelectorAll('.career-card').forEach(card => {
    card.addEventListener('click', () => {
      const careerId = card.dataset.career;
      if (selectedCareerId === careerId) {
        // 同じカードをタップ → 選択解除
        selectedCareerId = null;
        grid.querySelectorAll('.career-card').forEach(c => c.classList.remove('selected'));
        results.innerHTML = '';
      } else {
        // 新規選択
        selectedCareerId = careerId;
        grid.querySelectorAll('.career-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        results.innerHTML = renderCareerResults(careerId);
      }
    });
  });
}

// ===== フィルターページ =====
export function renderFilterPage() {
  const days = ['月', '火', '水', '木', '金'];
  const periods = ['1限', '2限', '3限', '4限', '5限'];
  const categories = [...new Set(courses.map(c => c.category))];
  const allSkills = [...new Set(courses.flatMap(c => c.skills))].sort();
  const faculties = [...new Set(courses.map(c => c.faculty))];
  const universities = [...new Set(courses.map(c => c.university))].sort();

  return `
    ${renderHeader('条件でさがす')}
    <div class="page-content">
      ${renderSearchBar('キーワードで絞り込み', 'filterSearchInput')}

      <div class="filter-group">
        <div class="filter-label">🏫 大学名</div>
        <div class="filter-options" id="filterUniversities">
          ${universities.map(u => `<button class="filter-chip" data-value="${u}">${u}</button>`).join('')}
        </div>
      </div>

      <div class="filter-group">
        <div class="filter-label">曜日</div>
        <div class="filter-options" id="filterDays">
          ${days.map(d => `<button class="filter-chip" data-value="${d}">${d}</button>`).join('')}
        </div>
      </div>

      <div class="filter-group">
        <div class="filter-label">時限</div>
        <div class="filter-options" id="filterPeriods">
          ${periods.map((p, i) => `<button class="filter-chip" data-value="${i + 1}">${p}</button>`).join('')}
        </div>
      </div>

      <div class="filter-group">
        <div class="filter-label">カテゴリ</div>
        <div class="filter-options" id="filterCategories">
          ${categories.map(c => `<button class="filter-chip" data-value="${c}">${c}</button>`).join('')}
        </div>
      </div>

      <div class="filter-group">
        <div class="filter-label">学部</div>
        <div class="filter-options" id="filterFaculties">
          ${faculties.map(f => `<button class="filter-chip" data-value="${f}">${f}</button>`).join('')}
        </div>
      </div>

      <div class="filter-group">
        <div class="filter-label">難易度</div>
        <div class="filter-options" id="filterDifficulty">
          ${['入門 (1)', 'やさしい (2)', '標準 (3)', '発展 (4)'].map((d, i) => `<button class="filter-chip" data-value="${i + 1}">${d}</button>`).join('')}
        </div>
      </div>

      <div class="filter-group">
        <div class="filter-label">身につくスキル</div>
        <div class="filter-options" id="filterSkills">
          ${allSkills.map(s => `<button class="filter-chip" data-value="${s}">${s}</button>`).join('')}
        </div>
      </div>

      <div class="filter-group">
        <div class="filter-label">並び替え</div>
        <div class="filter-options" id="filterSort">
          <button class="filter-chip active" data-value="satisfaction">満足度順</button>
          <button class="filter-chip" data-value="difficulty-asc">難易度:低→高</button>
          <button class="filter-chip" data-value="difficulty-desc">難易度:高→低</button>
          <button class="filter-chip" data-value="enroll">履修者数順</button>
        </div>
      </div>

      <button class="filter-apply-btn" id="filterApplyBtn">検索結果を表示</button>
      <div class="filter-result-count" id="filterResultCount"></div>

      <div id="filterResults" style="margin-top:20px"></div>
    </div>
    ${renderLayout('filter')}
  `;
}

export function initFilterPage() {
  // Toggle chips
  document.querySelectorAll('.filter-options').forEach(group => {
    const isSort = group.id === 'filterSort';
    group.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        if (isSort) {
          group.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        }
        chip.classList.toggle('active');
        applyFilters();
      });
    });
  });

  document.getElementById('filterApplyBtn')?.addEventListener('click', applyFilters);
  document.getElementById('filterSearchInput')?.addEventListener('input', applyFilters);

  // 初期表示時にも全科目を一覧表示
  applyFilters();
}

function getActiveValues(containerId) {
  return Array.from(document.querySelectorAll(`#${containerId} .filter-chip.active`)).map(c => c.dataset.value);
}

function applyFilters() {
  const universities = getActiveValues('filterUniversities');
  const days = getActiveValues('filterDays');
  const periods = getActiveValues('filterPeriods').map(Number);
  const categories = getActiveValues('filterCategories');
  const faculties = getActiveValues('filterFaculties');
  const difficulties = getActiveValues('filterDifficulty').map(Number);
  const skills = getActiveValues('filterSkills');
  const sortBy = getActiveValues('filterSort')[0] || 'satisfaction';
  const query = (document.getElementById('filterSearchInput')?.value || '').toLowerCase();

  let filtered = [...courses];

  if (query) {
    filtered = filtered.filter(c =>
      c.title.toLowerCase().includes(query) ||
      c.skills.some(s => s.toLowerCase().includes(query)) ||
      (c.university && c.university.toLowerCase().includes(query))
    );
  }
  if (universities.length) filtered = filtered.filter(c => universities.includes(c.university));
  if (days.length) filtered = filtered.filter(c => days.includes(c.day));
  if (periods.length) filtered = filtered.filter(c => periods.includes(c.period));
  if (categories.length) filtered = filtered.filter(c => categories.includes(c.category));
  if (faculties.length) filtered = filtered.filter(c => faculties.includes(c.faculty));
  if (difficulties.length) filtered = filtered.filter(c => difficulties.includes(c.difficulty));
  if (skills.length) filtered = filtered.filter(c => c.skills.some(s => skills.includes(s)));

  // Sort
  switch (sortBy) {
    case 'satisfaction': filtered.sort((a, b) => b.satisfaction - a.satisfaction); break;
    case 'difficulty-asc': filtered.sort((a, b) => a.difficulty - b.difficulty); break;
    case 'difficulty-desc': filtered.sort((a, b) => b.difficulty - a.difficulty); break;
    case 'enroll': filtered.sort((a, b) => b.semesterEnrollCount - a.semesterEnrollCount); break;
  }

  const resultsEl = document.getElementById('filterResults');
  const countEl = document.getElementById('filterResultCount');

  countEl.textContent = `${filtered.length}件の授業が見つかりました`;

  resultsEl.innerHTML = filtered.length
    ? filtered.map((c, i) => renderCourseCard(c, i)).join('')
    : '<div class="empty-state"><div class="empty-state-icon">📭</div><div class="empty-state-title">条件に合う授業がありません</div><div class="empty-state-text">条件を変更してお試しください</div></div>';
}

// ===== お気に入りページ =====
export function renderFavoritesPage() {
  const favIds = getFavorites();
  const favCourses = favIds.map(id => courses.find(c => c.id === id)).filter(Boolean);
  const days = ['月', '火', '水', '木', '金'];

  // 時間割データ
  const timetable = {};
  favCourses.forEach(c => {
    const key = `${c.day}-${c.period}`;
    if (!timetable[key]) timetable[key] = [];
    timetable[key].push(c);
  });

  return `
    ${renderHeader('お気に入り')}
    <div class="page-content">
      ${favCourses.length > 0 ? `
        <div class="timetable">
          <div class="timetable-title">📅 時間割プレビュー</div>
          <div class="timetable-grid">
            <div class="timetable-header"></div>
            ${days.map(d => `<div class="timetable-header">${d}</div>`).join('')}
            ${[1,2,3,4,5].map(period => `
              <div class="timetable-period">${period}限</div>
              ${days.map(day => {
                const cells = timetable[`${day}-${period}`] || [];
                return cells.length > 0
                  ? `<div class="timetable-cell filled ${cells.length > 1 ? 'conflict' : ''}" onclick="window.appNavigate('/course/${cells[0].id}')" title="${cells.map(c=>c.title).join(' / ')}">${cells.length > 1 ? '⚠️' + cells[0].title.slice(0,3) : cells[0].title.slice(0,4)}</div>`
                  : `<div class="timetable-cell"></div>`;
              }).join('')}
            `).join('')}
          </div>
        </div>

        <div class="section">
          <div class="section-header">
            <h2 class="section-title">保存した授業</h2>
            <span style="font-size:14px;color:var(--text-secondary)">${favCourses.length}件</span>
          </div>
          ${favCourses.map((c, i) => renderCourseCard(c, i)).join('')}
        </div>
      ` : `
        <div class="empty-state">
          <div class="empty-state-icon">💫</div>
          <div class="empty-state-title">まだお気に入りがありません</div>
          <div class="empty-state-text">気になる授業の ❤️ をタップして<br>お気に入りに追加しましょう</div>
        </div>
      `}
    </div>
    ${renderLayout('favorites')}
  `;
}

// ===== 出席管理ページ =====
export function renderAttendancePage() {
  const enrolledCourses = enrollments
    .filter(e => e.enrolled)
    .map(e => ({ course: courses.find(c => c.id === e.courseId), stats: getAttendanceStats(e.courseId) }))
    .filter(e => e.course && e.stats);

  // 全体の出席率を計算
  const totalPresent = enrolledCourses.reduce((sum, e) => sum + e.stats.present, 0);
  const totalLate = enrolledCourses.reduce((sum, e) => sum + e.stats.late, 0);
  const totalAbsent = enrolledCourses.reduce((sum, e) => sum + e.stats.absent, 0);
  const totalAttended = enrolledCourses.reduce((sum, e) => sum + e.stats.attended, 0);
  const totalRemaining = enrolledCourses.reduce((sum, e) => sum + e.stats.remaining, 0);
  const overallRate = totalAttended > 0 ? Math.round(((totalPresent + totalLate) / totalAttended) * 100) : 0;

  const rateClass = overallRate >= 80 ? 'good' : overallRate >= 60 ? 'warning' : 'danger';

  // 警告チェック
  const warningCourses = enrolledCourses.filter(e => e.stats.absent >= 2);

  // SVG円グラフ計算
  const circumference = 2 * Math.PI * 32;
  const offset = circumference - (overallRate / 100) * circumference;

  return `
    ${renderHeader('出席管理')}
    <div class="page-content">
      ${warningCourses.length > 0 ? `
        <div class="attendance-warning ${warningCourses.some(e => e.stats.absent >= 3) ? 'attendance-danger' : ''}">
          <span class="attendance-warning-icon">⚠️</span>
          <div>
            ${warningCourses.map(e =>
              `<strong>${e.course.title}</strong>の欠席が${e.stats.absent}回です。${e.stats.absent >= 3 ? '単位取得が危険です。' : '注意してください。'}`
            ).join('<br>')}
          </div>
        </div>
      ` : ''}

      <div class="attendance-summary animate-in">
        <div class="attendance-summary-title">全体の出席状況</div>
        <div class="attendance-overall">
          <div class="attendance-ring">
            <svg viewBox="0 0 80 80">
              <circle class="attendance-ring-bg" cx="40" cy="40" r="32"/>
              <circle class="attendance-ring-fill ${rateClass}" cx="40" cy="40" r="32"
                stroke-dasharray="${circumference}"
                stroke-dashoffset="${offset}"/>
            </svg>
            <span class="attendance-ring-text">${overallRate}%</span>
          </div>
          <div class="attendance-counts">
            <div class="attendance-count-item">
              <div class="attendance-count-value present">${totalPresent}</div>
              <div class="attendance-count-label">出席</div>
            </div>
            <div class="attendance-count-item">
              <div class="attendance-count-value late">${totalLate}</div>
              <div class="attendance-count-label">遅刻</div>
            </div>
            <div class="attendance-count-item">
              <div class="attendance-count-value absent">${totalAbsent}</div>
              <div class="attendance-count-label">欠席</div>
            </div>
            <div class="attendance-count-item">
              <div class="attendance-count-value remaining">${totalRemaining}</div>
              <div class="attendance-count-label">残り</div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <h2 class="section-title">履修中の授業</h2>
          <span style="font-size:14px;color:var(--text-secondary)">${enrolledCourses.length}科目</span>
        </div>
        ${enrolledCourses.map((e, i) => renderAttendanceCourseCard(e.course, e.stats, i)).join('')}
      </div>
    </div>
    ${renderLayout('attendance')}
  `;
}

function renderAttendanceCourseCard(course, stats, index) {
  const rateClass = stats.rate >= 80 ? 'good' : stats.rate >= 60 ? 'warning' : 'danger';
  return `
    <div class="attendance-course-card animate-in" style="animation-delay:${index * 0.05}s" onclick="window.appNavigate('/attendance/${course.id}')">
      <div class="attendance-course-header">
        <span class="attendance-course-title">${course.title}</span>
        <span class="attendance-course-schedule">${course.day}${course.period}限</span>
      </div>
      <div class="attendance-rate-bar">
        <div class="attendance-rate-track">
          <div class="attendance-rate-fill ${rateClass}" style="width:${stats.rate}%"></div>
        </div>
        <span class="attendance-rate-value ${rateClass}">${stats.rate}%</span>
      </div>
      <div class="attendance-course-counts">
        <span>✅ 出席 ${stats.present}</span>
        <span>⏰ 遅刻 ${stats.late}</span>
        <span>❌ 欠席 ${stats.absent}</span>
        <span>📅 残り ${stats.remaining}回</span>
      </div>
    </div>
  `;
}

// ===== 出席詳細ページ =====
export function renderAttendanceDetailPage(params) {
  const courseId = parseInt(params.id);
  const course = courses.find(c => c.id === courseId);
  const stats = getAttendanceStats(courseId);

  if (!course || !stats) return `${renderHeader('出席詳細', true)}<div class="page-content"><p>データが見つかりません</p></div>${renderLayout('attendance')}`;

  const rateClass = stats.rate >= 80 ? 'good' : stats.rate >= 60 ? 'warning' : 'danger';
  const circumference = 2 * Math.PI * 32;
  const offset = circumference - (stats.rate / 100) * circumference;

  const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
  const statusLabels = { present: '出席', late: '遅刻', absent: '欠席' };

  return `
    ${renderHeader(course.title, true)}
    <div class="page-content">
      ${stats.absent >= 2 ? `
        <div class="attendance-warning ${stats.absent >= 3 ? 'attendance-danger' : ''}">
          <span class="attendance-warning-icon">${stats.absent >= 3 ? '🚨' : '⚠️'}</span>
          <div>
            欠席が<strong>${stats.absent}回</strong>です。
            ${stats.absent >= 3
              ? 'これ以上の欠席は単位取得に影響する可能性があります。'
              : 'あと1回の欠席で警告ラインに達します。'}
          </div>
        </div>
      ` : ''}

      <div class="attendance-summary animate-in">
        <div class="attendance-summary-title">${course.day}${course.period}限 ・ ${course.semester} ・ ${course.credits}単位</div>
        <div class="attendance-overall">
          <div class="attendance-ring">
            <svg viewBox="0 0 80 80">
              <circle class="attendance-ring-bg" cx="40" cy="40" r="32"/>
              <circle class="attendance-ring-fill ${rateClass}" cx="40" cy="40" r="32"
                stroke-dasharray="${circumference}"
                stroke-dashoffset="${offset}"/>
            </svg>
            <span class="attendance-ring-text">${stats.rate}%</span>
          </div>
          <div class="attendance-counts">
            <div class="attendance-count-item">
              <div class="attendance-count-value present">${stats.present}</div>
              <div class="attendance-count-label">出席</div>
            </div>
            <div class="attendance-count-item">
              <div class="attendance-count-value late">${stats.late}</div>
              <div class="attendance-count-label">遅刻</div>
            </div>
            <div class="attendance-count-item">
              <div class="attendance-count-value absent">${stats.absent}</div>
              <div class="attendance-count-label">欠席</div>
            </div>
            <div class="attendance-count-item">
              <div class="attendance-count-value remaining">${stats.remaining}</div>
              <div class="attendance-count-label">残り</div>
            </div>
          </div>
        </div>
      </div>

      <div class="attendance-detail-card animate-in" style="animation-delay:0.1s">
        <div class="attendance-detail-title">📋 出席記録</div>
        <div class="attendance-record-list">
          ${stats.records.slice().reverse().map((r, i) => {
            const d = new Date(r.date);
            const weekDay = weekDays[d.getDay()];
            const month = d.getMonth() + 1;
            const day = d.getDate();
            const weekNum = stats.records.length - i;
            return `
              <div class="attendance-record-row">
                <div>
                  <span class="attendance-record-date">第${weekNum}回 ${month}/${day}</span>
                  <span class="attendance-record-week">(${weekDay})</span>
                </div>
                <span class="attendance-status-badge ${r.status}">${statusLabels[r.status]}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="info-card animate-in" style="animation-delay:0.15s;cursor:pointer" onclick="window.appNavigate('/course/${course.id}')">
        <div class="info-card-title">📖 授業詳細を見る</div>
        <p style="font-size:13px;color:var(--text-secondary)">${course.title} - ${course.subtitle}</p>
      </div>
    </div>
    ${renderLayout('attendance')}
  `;
}

// ===== プロフィールページ =====

const AVATAR_OPTIONS = ['😊', '😎', '🤓', '🧑‍💻', '🎓', '🦊', '🐱', '🌸', '⭐', '🔥', '🎵', '🌈'];
const INTEREST_OPTIONS = ['プログラミング', 'デザイン', 'マーケティング', 'データ分析', '映像制作', '心理学', '経済学', '起業', 'AI・機械学習', '環境問題', '統計学', '語学'];

export function renderProfilePage() {
  const profile = getProfile();
  const setup = isProfileSetup();
  const favCount = getFavorites().length;
  const enrolledCount = enrollments.filter(e => e.enrolled).length;

  if (!setup) {
    return renderProfileEditPage();
  }

  const careerObj = careers.find(c => c.id === profile.career);
  return `
    ${renderHeader('マイプロフィール', true)}
    <div class="page-content">
      <div class="profile-header-card animate-in">
        <div class="profile-avatar">${profile.avatar}</div>
        <div class="profile-nickname">${profile.nickname}</div>
        <div class="profile-university-label">${profile.university} ${profile.faculty ? '/ ' + profile.faculty : ''}</div>
        <div class="profile-stats-row">
          <div class="profile-stat">
            <div class="profile-stat-value">${enrolledCount}</div>
            <div class="profile-stat-label">履修中</div>
          </div>
          <div class="profile-stat">
            <div class="profile-stat-value">${favCount}</div>
            <div class="profile-stat-label">お気に入り</div>
          </div>
          <div class="profile-stat">
            <div class="profile-stat-value">${profile.year || '-'}${profile.year ? '年' : ''}</div>
            <div class="profile-stat-label">学年</div>
          </div>
        </div>
      </div>

      ${profile.bio ? `
        <div class="profile-info-card animate-in" style="animation-delay:0.05s">
          <div class="profile-info-title">💬 ひとこと</div>
          <div class="profile-bio">${profile.bio}</div>
        </div>
      ` : ''}

      ${profile.interests.length > 0 ? `
        <div class="profile-info-card animate-in" style="animation-delay:0.1s">
          <div class="profile-info-title">🎯 興味のある分野</div>
          <div class="profile-interests">
            ${profile.interests.map(i => `<span class="profile-interest-tag">${i}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      ${careerObj ? `
        <div class="profile-info-card animate-in" style="animation-delay:0.15s">
          <div class="profile-info-title">🚀 目指す将来像</div>
          <div style="display:flex;align-items:center;gap:10px">
            <span style="font-size:28px">${careerObj.icon}</span>
            <div>
              <div style="font-size:15px;font-weight:600">${careerObj.label}</div>
              <div style="font-size:12px;color:var(--text-secondary)">${careerObj.description}</div>
            </div>
          </div>
        </div>
      ` : ''}

      <div class="profile-info-card animate-in" style="animation-delay:0.2s">
        <div class="profile-info-title">📋 登録情報</div>
        <div class="profile-info-grid">
          <div class="profile-info-item"><dt>大学</dt><dd>${profile.university}</dd></div>
          <div class="profile-info-item"><dt>学部</dt><dd>${profile.faculty || '未設定'}</dd></div>
          <div class="profile-info-item"><dt>学年</dt><dd>${profile.year ? profile.year + '年' : '未設定'}</dd></div>
          <div class="profile-info-item"><dt>将来像</dt><dd>${careerObj ? careerObj.label : '未設定'}</dd></div>
        </div>
      </div>

      <button class="profile-edit-btn" onclick="window.appNavigate('/profile/edit')">✏️ プロフィールを編集</button>
    </div>
  `;
}

export function renderProfileEditPage() {
  const profile = getProfile();
  const universities = [...new Set(courses.map(c => c.university))].sort();
  const faculties = [...new Set(courses.map(c => c.faculty))].sort();
  const isNew = !isProfileSetup();

  return `
    ${renderHeader(isNew ? 'プロフィール設定' : 'プロフィール編集', !isNew)}
    <div class="page-content">
      ${isNew ? `
        <div style="text-align:center;margin-bottom:20px" class="animate-in">
          <div style="font-size:40px;margin-bottom:8px">👋</div>
          <div style="font-size:18px;font-weight:700;margin-bottom:4px">ようこそ、キャンナビへ！</div>
          <div style="font-size:13px;color:var(--text-secondary);line-height:1.6">あなたに合った授業をおすすめするために<br>プロフィールを設定しましょう</div>
        </div>
      ` : ''}

      <div class="profile-info-card animate-in" style="animation-delay:0.05s">
        <div class="profile-form" id="profileForm">

          <div class="profile-form-group">
            <label class="profile-form-label">アバター</label>
            <div class="avatar-picker" id="avatarPicker">
              ${AVATAR_OPTIONS.map(a => `
                <button class="avatar-option ${profile.avatar === a ? 'selected' : ''}" data-avatar="${a}">${a}</button>
              `).join('')}
            </div>
          </div>

          <div class="profile-form-group">
            <label class="profile-form-label">ニックネーム <span class="required">*</span></label>
            <input class="profile-form-input" id="profileNickname" type="text" placeholder="例: たろう" value="${profile.nickname}" maxlength="20">
          </div>

          <div class="profile-form-group">
            <label class="profile-form-label">大学名 <span class="required">*</span></label>
            <select class="profile-form-select" id="profileUniversity">
              <option value="">選択してください</option>
              ${universities.map(u => `<option value="${u}" ${profile.university === u ? 'selected' : ''}>${u}</option>`).join('')}
            </select>
            <div class="profile-form-hint">授業のフィルターに連動します</div>
          </div>

          <div class="profile-form-group">
            <label class="profile-form-label">学部</label>
            <select class="profile-form-select" id="profileFaculty">
              <option value="">選択してください</option>
              ${faculties.map(f => `<option value="${f}" ${profile.faculty === f ? 'selected' : ''}>${f}</option>`).join('')}
            </select>
          </div>

          <div class="profile-form-group">
            <label class="profile-form-label">学年</label>
            <select class="profile-form-select" id="profileYear">
              <option value="">選択してください</option>
              ${[1,2,3,4].map(y => `<option value="${y}" ${profile.year == y ? 'selected' : ''}>${y}年</option>`).join('')}
            </select>
          </div>

          <div class="profile-form-group">
            <label class="profile-form-label">目指す将来像</label>
            <select class="profile-form-select" id="profileCareer">
              <option value="">選択してください</option>
              ${careers.map(c => `<option value="${c.id}" ${profile.career === c.id ? 'selected' : ''}>${c.icon} ${c.label}</option>`).join('')}
            </select>
          </div>

          <div class="profile-form-group">
            <label class="profile-form-label">興味のある分野</label>
            <div class="interest-chips" id="interestChips">
              ${INTEREST_OPTIONS.map(i => `
                <button class="interest-chip ${profile.interests.includes(i) ? 'active' : ''}" data-interest="${i}">${i}</button>
              `).join('')}
            </div>
            <div class="profile-form-hint">複数選択できます</div>
          </div>

          <div class="profile-form-group">
            <label class="profile-form-label">ひとこと</label>
            <textarea class="profile-form-textarea" id="profileBio" placeholder="自己紹介やメモなど自由に書けます" maxlength="200">${profile.bio}</textarea>
          </div>

          <button class="profile-save-btn" id="profileSaveBtn">${isNew ? '設定を完了してはじめる' : '保存する'}</button>
        </div>
      </div>
    </div>
  `;
}

export function initProfileEditPage() {
  // アバター選択
  document.getElementById('avatarPicker')?.querySelectorAll('.avatar-option').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.avatar-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  // 興味チップ
  document.getElementById('interestChips')?.querySelectorAll('.interest-chip').forEach(chip => {
    chip.addEventListener('click', () => chip.classList.toggle('active'));
  });

  // 保存
  document.getElementById('profileSaveBtn')?.addEventListener('click', () => {
    const nickname = document.getElementById('profileNickname')?.value.trim();
    const university = document.getElementById('profileUniversity')?.value;

    if (!nickname) { alert('ニックネームを入力してください'); return; }
    if (!university) { alert('大学を選択してください'); return; }

    const avatar = document.querySelector('.avatar-option.selected')?.dataset.avatar || '😊';
    const faculty = document.getElementById('profileFaculty')?.value || '';
    const year = document.getElementById('profileYear')?.value || '';
    const career = document.getElementById('profileCareer')?.value || '';
    const bio = document.getElementById('profileBio')?.value.trim() || '';
    const interests = Array.from(document.querySelectorAll('.interest-chip.active')).map(c => c.dataset.interest);

    saveProfile({ nickname, university, faculty, year: year ? parseInt(year) : '', career, interests, bio, avatar });
    window.appNavigate('/profile');
  });
}
