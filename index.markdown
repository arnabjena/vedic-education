---
layout: default
title: Welcome to Vedic Wisdom for Families
---

<style>
/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  border-radius: 16px;
  margin-bottom: 3rem;
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 800;
  text-shadow: 3px 3px 6px rgba(0,0,0,0.3);
  line-height: 1.2;
}

.hero-section .om-symbol {
  font-size: 5rem;
  margin-bottom: 1rem;
  animation: pulse 3s infinite;
  filter: drop-shadow(0 0 20px rgba(255,255,255,0.5));
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.85; transform: scale(1.08); }
}

.hero-section p {
  font-size: 1.4rem;
  max-width: 900px;
  margin: 0 auto 2.5rem;
  line-height: 1.9;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
}

.hero-cta {
  background: white;
  color: #667eea;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  display: inline-block;
  box-shadow: 0 8px 25px rgba(0,0,0,0.25);
  transition: all 0.3s ease;
  margin: 0.5rem;
}

.hero-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(0,0,0,0.35);
  color: #667eea;
  text-decoration: none;
}

.hero-cta.secondary {
  background: rgba(255,255,255,0.2);
  color: white;
  backdrop-filter: blur(10px);
}

.hero-cta.secondary:hover {
  background: rgba(255,255,255,0.3);
  color: white;
}

/* Image Banner Section */
.image-banner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  margin: 3rem 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
}

.image-banner img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: all 0.3s ease;
  filter: brightness(0.8);
}

.image-banner img:hover {
  transform: scale(1.1);
  filter: brightness(1);
  z-index: 1;
}

/* Stats Section */
.stats-section {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 4rem 2rem;
  border-radius: 16px;
  margin: 3rem 0;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.2rem;
  color: #555;
  font-weight: 600;
}

/* Section Styles */
.section {
  margin: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-header h2 {
  font-size: 3rem;
  background: linear-gradient(135deg, #667eea, #f093fb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  font-weight: 800;
}

.section-header p {
  font-size: 1.3rem;
  color: #666;
  max-width: 700px;
  margin: 1rem auto 0;
  line-height: 1.7;
}

/* Category Grid */
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin: 3rem 0;
}

.category-card {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.4s ease;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  border: 3px solid transparent;
  position: relative;
  overflow: hidden;
}

.category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--card-color-1), var(--card-color-2));
}

.category-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0,0,0,0.15);
  border-color: var(--card-color-1);
}

.category-card h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #222;
  font-weight: 700;
}

.category-card p {
  color: #666;
  line-height: 1.7;
  margin-bottom: 0;
  font-size: 1.05rem;
}

/* Category-specific colors */
.vedic-literature {
  --card-color-1: #667eea;
  --card-color-2: #764ba2;
}

.puranas {
  --card-color-1: #f093fb;
  --card-color-2: #f5576c;
}

.philosophy {
  --card-color-1: #4facfe;
  --card-color-2: #00f2fe;
}

.vedic-sciences {
  --card-color-1: #43e97b;
  --card-color-2: #38f9d7;
}

.rituals {
  --card-color-1: #fa709a;
  --card-color-2: #fee140;
}

.values {
  --card-color-1: #30cfd0;
  --card-color-2: #330867;
}

.stories {
  --card-color-1: #ff9a9e;
  --card-color-2: #fecfef;
}

.modern {
  --card-color-1: #ff6e7f;
  --card-color-2: #bfe9ff;
}

.history {
  --card-color-1: #f857a6;
  --card-color-2: #ff5858;
}

/* Quiz Banner */
.quiz-banner {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 50%, #fa709a 100%);
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
  color: white;
  padding: 4rem 2rem;
  border-radius: 20px;
  text-align: center;
  margin: 4rem 0;
  box-shadow: 0 15px 50px rgba(250, 112, 154, 0.4);
  position: relative;
  overflow: hidden;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.quiz-banner::before {
  content: '🎯';
  position: absolute;
  font-size: 15rem;
  opacity: 0.1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.quiz-banner h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  position: relative;
  z-index: 1;
}

.quiz-banner p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  position: relative;
  z-index: 1;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.quiz-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.quiz-link {
  background: white;
  color: #fa709a;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  display: inline-block;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

.quiz-link:hover {
  transform: scale(1.08);
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
  text-decoration: none;
  color: #fa709a;
}

/* Feature Grid */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin: 3rem 0;
}

.feature-card {
  padding: 3rem 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 25px 60px rgba(0,0,0,0.25);
}

.feature-card .icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2));
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
  font-weight: 700;
}

.feature-card p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: white;
  opacity: 0.95;
}

/* Featured Content Cards */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin: 3rem 0;
}

.featured-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  transition: all 0.4s ease;
  text-decoration: none;
  color: inherit;
}

.featured-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 60px rgba(0,0,0,0.2);
  text-decoration: none;
  color: inherit;
}

.featured-card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.featured-card:hover .featured-card-image {
  transform: scale(1.1);
}

.featured-card-content {
  padding: 2rem;
}

.featured-card-badge {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.featured-card h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #222;
  font-weight: 700;
}

.featured-card p {
  color: #666;
  line-height: 1.7;
  font-size: 1.05rem;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 5rem 3rem;
  border-radius: 20px;
  text-align: center;
  margin: 5rem 0;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
  color: white;
}

.cta-section h2 {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: white;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.cta-section p {
  font-size: 1.4rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  opacity: 0.95;
  line-height: 1.8;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .hero-section p {
    font-size: 1.1rem;
  }

  .category-grid, .featured-grid {
    grid-template-columns: 1fr;
  }

  .image-banner {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .quiz-links {
    flex-direction: column;
    align-items: stretch;
  }

  .quiz-link {
    width: 100%;
  }
}
</style>

<!-- Hero Section -->
<div class="hero-section">
  <div class="hero-content">
    <div class="om-symbol">ॐ</div>
    <h1>Discover Vedic Wisdom<br>for Your Family</h1>
    <div style="font-size: 0.8rem; opacity: 0.8; margin-top: 0.5rem;">Version 2.0 - Updated Design</div>
    <p>Explore 3000+ years of Hindu knowledge, ancient sciences, epic stories, and timeless philosophy. From the Vedas to modern applications - comprehensive education rooted in authenticity.</p>
    <div>
      <a href="{{ '/vedic-literature/' | relative_url }}" class="hero-cta">Start Exploring</a>
      <a href="{{ '/quizzes/' | relative_url }}" class="hero-cta secondary">Take a Quiz</a>
    </div>
  </div>
</div>

<!-- Image Banner -->
<div class="image-banner">
  <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop" alt="Ancient Indian Temple" style="filter: brightness(0.75) saturate(1.2);">
  <img src="https://images.unsplash.com/photo-1524230659092-07f99a75c013?w=400&h=300&fit=crop" alt="Hindu Deity" style="filter: brightness(0.75) saturate(1.2);">
  <img src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop" alt="Yoga and Meditation" style="filter: brightness(0.75) saturate(1.2);">
  <img src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?w=400&h=300&fit=crop" alt="Ancient Manuscripts" style="filter: brightness(0.75) saturate(1.2);">
</div>

<!-- Stats Section -->
<div class="stats-section">
  <div class="stats-grid">
    <div class="stat-card">
      <span class="stat-number">28+</span>
      <div class="stat-label">Detailed Articles</div>
    </div>
    <div class="stat-card">
      <span class="stat-number">5</span>
      <div class="stat-label">Interactive Quizzes</div>
    </div>
    <div class="stat-card">
      <span class="stat-number">150</span>
      <div class="stat-label">Quiz Questions</div>
    </div>
    <div class="stat-card">
      <span class="stat-number">9</span>
      <div class="stat-label">Categories</div>
    </div>
  </div>
</div>

<!-- Explore Categories -->
<div class="section">
  <div class="section-header">
    <h2>Explore Knowledge</h2>
    <p>Comprehensive content organized by category for easy learning</p>
  </div>

  <div class="category-grid">
    <a href="{{ '/vedic-literature/' | relative_url }}" class="category-card vedic-literature">
      <h3>📚 Vedic Literature</h3>
      <p>Rigveda, Samaveda, Yajurveda, Atharvaveda, and the profound Upanishads</p>
    </a>

    <a href="{{ '/stories/' | relative_url }}" class="category-card stories">
      <h3>📖 Epic Stories</h3>
      <p>Ramayana, Mahabharata, Krishna's childhood - timeless tales with deep meanings</p>
    </a>

    <a href="{{ '/vedic-sciences/' | relative_url }}" class="category-card vedic-sciences">
      <h3>🔬 Ancient Sciences</h3>
      <p>Astronomy, Mathematics, Ayurveda, Yoga - achievements that shaped humanity</p>
    </a>

    <a href="{{ '/philosophy/' | relative_url }}" class="category-card philosophy">
      <h3>🧘 Philosophy</h3>
      <p>Bhagavad Gita, Six Darshanas, Yoga Sutras - wisdom for life's questions</p>
    </a>

    <a href="{{ '/values/' | relative_url }}" class="category-card values">
      <h3>💎 Values & Ethics</h3>
      <p>Dharma, Karma, Purusharthas - principles for righteous living</p>
    </a>

    <a href="{{ '/history/' | relative_url }}" class="category-card history">
      <h3>🏛️ Hindu History</h3>
      <p>3000 years of civilization - achievements, challenges, and resilience</p>
    </a>

    <a href="{{ '/rituals/' | relative_url }}" class="category-card rituals">
      <h3>🕉️ Rituals & Festivals</h3>
      <p>Puja, Samskaras, celebrations - living traditions explained clearly</p>
    </a>

    <a href="{{ '/puranas/' | relative_url }}" class="category-card puranas">
      <h3>📜 Puranas</h3>
      <p>18 Mahapuranas filled with mythology, history, and teachings</p>
    </a>

    <a href="{{ '/modern-applications/' | relative_url }}" class="category-card modern">
      <h3>🌟 Modern Life</h3>
      <p>Applying ancient wisdom to today's challenges and opportunities</p>
    </a>
  </div>
</div>

<!-- Quiz Banner -->
<div class="quiz-banner">
  <h2>🎯 Test Your Knowledge!</h2>
  <p>Challenge yourself with interactive quizzes covering stories, philosophy, science, and values</p>
  <div class="quiz-links">
    <a href="{{ '/quizzes/ramayana-quiz/' | relative_url }}" class="quiz-link">Ramayana</a>
    <a href="{{ '/quizzes/krishna-quiz/' | relative_url }}" class="quiz-link">Krishna</a>
    <a href="{{ '/quizzes/vedic-science-quiz/' | relative_url }}" class="quiz-link">Science</a>
    <a href="{{ '/quizzes/bhagavad-gita-quiz/' | relative_url }}" class="quiz-link">Gita</a>
    <a href="{{ '/quizzes/dharma-karma-quiz/' | relative_url }}" class="quiz-link">Dharma</a>
  </div>
</div>

<!-- Why Learn -->
<div class="section">
  <div class="section-header">
    <h2>Why This Matters</h2>
    <p>Ancient wisdom for modern challenges</p>
  </div>

  <div class="feature-grid">
    <div class="feature-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
      <div class="icon">🎯</div>
      <h3>Find Your Purpose</h3>
      <p>Discover life's deeper meaning through Vedic philosophy and timeless teachings</p>
    </div>

    <div class="feature-card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
      <div class="icon">💎</div>
      <h3>Live with Integrity</h3>
      <p>Learn dharma and karma - ethical principles that guide righteous action</p>
    </div>

    <div class="feature-card" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
      <div class="icon">🧘</div>
      <h3>Achieve Wellness</h3>
      <p>Holistic health through Ayurveda, Yoga, and ancient healing sciences</p>
    </div>

    <div class="feature-card" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
      <div class="icon">🔬</div>
      <h3>Know Your Heritage</h3>
      <p>Discover scientific achievements - from zero to calculating moon's distance</p>
    </div>

    <div class="feature-card" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">
      <div class="icon">📖</div>
      <h3>Learn from Stories</h3>
      <p>Epic tales of Rama, Krishna, and Mahabharata with profound life lessons</p>
    </div>

    <div class="feature-card" style="background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);">
      <div class="icon">🌟</div>
      <h3>Grow Spiritually</h3>
      <p>Paths to self-realization, inner peace, and higher consciousness</p>
    </div>
  </div>
</div>

<!-- Featured Articles -->
<div class="section">
  <div class="section-header">
    <h2>Start Here</h2>
    <p>Popular articles to begin your journey</p>
  </div>

  <div class="featured-grid">
    <a href="{{ site.baseurl }}/vedic-sciences/vedic-astronomy-and-mathematics/" class="featured-card">
      <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=500&fit=crop" alt="Ancient Astronomy" class="featured-card-image" style="filter: brightness(0.8) saturate(1.3);">
      <div class="featured-card-content">
        <span class="featured-card-badge" style="background: linear-gradient(135deg, #43e97b, #38f9d7);">Science</span>
        <h3>Vedic Astronomy & Math</h3>
        <p>Moon's distance, Earth's size, zero, decimal system - ancient achievements that shaped modern science</p>
      </div>
    </a>

    <a href="{{ site.baseurl }}/stories/rama-story-part1/" class="featured-card">
      <img src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&h=500&fit=crop" alt="Ramayana" class="featured-card-image" style="filter: brightness(0.8) saturate(1.3);">
      <div class="featured-card-content">
        <span class="featured-card-badge" style="background: linear-gradient(135deg, #ff9a9e, #fecfef);">Stories</span>
        <h3>The Story of Rama</h3>
        <p>Epic journey of dharma, devotion, and righteousness - lessons that inspire for thousands of years</p>
      </div>
    </a>

    <a href="{{ site.baseurl }}/philosophy/introduction-to-bhagavad-gita/" class="featured-card">
      <img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&h=500&fit=crop" alt="Bhagavad Gita" class="featured-card-image" style="filter: brightness(0.8) saturate(1.3);">
      <div class="featured-card-content">
        <span class="featured-card-badge" style="background: linear-gradient(135deg, #4facfe, #00f2fe);">Philosophy</span>
        <h3>Bhagavad Gita</h3>
        <p>700 verses of profound wisdom - life's purpose, duty, and the path to liberation</p>
      </div>
    </a>

    <a href="{{ site.baseurl }}/history/hindu-civilization-through-ages/" class="featured-card">
      <img src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=500&fit=crop" alt="Hindu History" class="featured-card-image" style="filter: brightness(0.8) saturate(1.3);">
      <div class="featured-card-content">
        <span class="featured-card-badge" style="background: linear-gradient(135deg, #f857a6, #ff5858);">History</span>
        <h3>Hindu Civilization</h3>
        <p>3000 years of history - from ancient glory through challenges to modern revival</p>
      </div>
    </a>

    <a href="{{ site.baseurl }}/stories/krishna-childhood-stories/" class="featured-card">
      <img src="https://images.unsplash.com/photo-1604608672516-f1b9b1cfce7b?w=800&h=500&fit=crop" alt="Krishna" class="featured-card-image" style="filter: brightness(0.8) saturate(1.3);">
      <div class="featured-card-content">
        <span class="featured-card-badge" style="background: linear-gradient(135deg, #ff9a9e, #fecfef);">Stories</span>
        <h3>Krishna's Adventures</h3>
        <p>Divine play, butter thief, lifting mountains - stories filled with joy and deep teachings</p>
      </div>
    </a>

    <a href="{{ site.baseurl }}/stories/mahabharata-introduction/" class="featured-card">
      <img src="https://images.unsplash.com/photo-1609136176146-eb5d4cf4293d?w=800&h=500&fit=crop" alt="Mahabharata" class="featured-card-image" style="filter: brightness(0.8) saturate(1.3);">
      <div class="featured-card-content">
        <span class="featured-card-badge" style="background: linear-gradient(135deg, #ff9a9e, #fecfef);">Stories</span>
        <h3>Mahabharata Epic</h3>
        <p>World's longest poem - complex characters, dharma dilemmas, and the Bhagavad Gita</p>
      </div>
    </a>
  </div>
</div>

<!-- CTA Section -->
<div class="cta-section">
  <h2>Begin Your Journey Today</h2>
  <p>Explore authentic Vedic wisdom at your own pace. Every article is crafted with care for family learning - from children to adults.</p>
  <div>
    <a href="{{ '/stories/' | relative_url }}" class="hero-cta">Read Stories</a>
    <a href="{{ '/vedic-sciences/' | relative_url }}" class="hero-cta secondary">Explore Science</a>
  </div>
</div>

<!-- Footer Quote -->
<div style="text-align: center; padding: 3rem 2rem; background: linear-gradient(135deg, rgba(102, 126, 234, 0.08), rgba(240, 147, 251, 0.08)); border-radius: 20px; margin: 4rem 0;">
  <p style="font-size: 1.4rem; color: #555; font-style: italic; margin-bottom: 1.5rem; line-height: 1.8; max-width: 800px; margin: 0 auto 1.5rem;">"Explore at your own pace, question freely, and discover timeless truths that have guided humanity for millennia."</p>
  <div style="font-size: 3rem; margin-top: 1rem;">🙏</div>
</div>
