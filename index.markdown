---
layout: default
title: Welcome to Vedic Wisdom for Families
---

<style>
/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #fe9c5e 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 3rem;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.hero-section .om-symbol {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

.hero-section p {
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.8;
}

.hero-cta {
  background: white;
  color: #667eea;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  color: #667eea;
  text-decoration: none;
}

/* Section Styles */
.section {
  margin: 4rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
  position: relative;
  display: inline-block;
}

.section-header h2:after {
  content: '';
  display: block;
  width: 60%;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  margin: 0.5rem auto 0;
  border-radius: 2px;
}

.section-header p {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 1rem auto 0;
}

/* Category Grid */
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.category-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  border-left: 5px solid;
  position: relative;
  overflow: hidden;
}

.category-card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--card-color-1), var(--card-color-2));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.category-card:hover:before {
  transform: scaleX(1);
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
}

.category-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.category-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 0;
}

/* Category-specific colors */
.vedic-literature {
  border-left-color: #667eea;
  --card-color-1: #667eea;
  --card-color-2: #764ba2;
}

.puranas {
  border-left-color: #f093fb;
  --card-color-1: #f093fb;
  --card-color-2: #f5576c;
}

.philosophy {
  border-left-color: #4facfe;
  --card-color-1: #4facfe;
  --card-color-2: #00f2fe;
}

.vedic-sciences {
  border-left-color: #43e97b;
  --card-color-1: #43e97b;
  --card-color-2: #38f9d7;
}

.rituals {
  border-left-color: #fa709a;
  --card-color-1: #fa709a;
  --card-color-2: #fee140;
}

.values {
  border-left-color: #30cfd0;
  --card-color-1: #30cfd0;
  --card-color-2: #330867;
}

.stories {
  border-left-color: #a8edea;
  --card-color-1: #a8edea;
  --card-color-2: #fed6e3;
}

.modern {
  border-left-color: #ff6e7f;
  --card-color-1: #ff6e7f;
  --card-color-2: #bfe9ff;
}

.history {
  border-left-color: #f857a6;
  --card-color-1: #f857a6;
  --card-color-2: #ff5858;
}

/* Feature Cards */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.feature-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
}

.feature-card .icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: white;
}

.feature-card p {
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.95;
}

/* Quiz Section */
.quiz-banner {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 10px 30px rgba(245, 87, 108, 0.3);
}

.quiz-banner h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
}

.quiz-banner p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.quiz-link {
  background: white;
  color: #f5576c;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  margin: 0.5rem;
  display: inline-block;
  transition: all 0.3s ease;
}

.quiz-link:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  text-decoration: none;
  color: #f5576c;
}

/* Stats Section */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  text-align: center;
}

.stat-card {
  padding: 2rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-radius: 12px;
  border: 2px solid rgba(102, 126, 234, 0.2);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #667eea;
  display: block;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
}

/* Image Cards */
.image-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
  transition: all 0.3s ease;
}

.image-card:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 35px rgba(0,0,0,0.18);
}

.image-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
}

.image-card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  padding: 2rem;
}

.image-card-overlay h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: white;
}

.image-card-overlay p {
  font-size: 1rem;
  opacity: 0.9;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .hero-section p {
    font-size: 1.1rem;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .section-header h2 {
    font-size: 2rem;
  }
}
</style>

<!-- Hero Section -->
<div class="hero-section">
  <div class="om-symbol">ॐ</div>
  <h1>Welcome to Vedic Wisdom for Families</h1>
  <p>Discover authentic Hindu knowledge, ancient Indian sciences, and timeless wisdom. From Vedas to modern applications - comprehensive education for your family.</p>
  <a href="{{ '/vedic-literature/' | relative_url }}" class="hero-cta">Start Learning →</a>
</div>

<!-- Stats Section -->
<div class="section">
  <div class="stats-grid">
    <div class="stat-card">
      <span class="stat-number">25+</span>
      <div class="stat-label">Comprehensive Articles</div>
    </div>
    <div class="stat-card">
      <span class="stat-number">5</span>
      <div class="stat-label">Interactive Quizzes</div>
    </div>
    <div class="stat-card">
      <span class="stat-number">3000+</span>
      <div class="stat-label">Years of Wisdom</div>
    </div>
    <div class="stat-card">
      <span class="stat-number">∞</span>
      <div class="stat-label">Timeless Knowledge</div>
    </div>
  </div>
</div>

<!-- Explore by Category -->
<div class="section">
  <div class="section-header">
    <h2>Explore by Category</h2>
    <p>Comprehensive knowledge organized for easy learning</p>
  </div>

  <div class="category-grid">
    <a href="{{ '/vedic-literature/' | relative_url }}" class="category-card vedic-literature">
      <h3>📚 Vedic Literature</h3>
      <p>The Four Vedas, Upanishads, and foundational texts that form the basis of Hindu philosophy</p>
    </a>

    <a href="{{ '/puranas/' | relative_url }}" class="category-card puranas">
      <h3>📖 Puranic Literature</h3>
      <p>Ramayana, Mahabharata, and 18 Mahapuranas with stories and teachings</p>
    </a>

    <a href="{{ '/philosophy/' | relative_url }}" class="category-card philosophy">
      <h3>🧘 Philosophy</h3>
      <p>Bhagavad Gita, Six Darshanas, Yoga Sutras, and deep philosophical insights</p>
    </a>

    <a href="{{ '/vedic-sciences/' | relative_url }}" class="category-card vedic-sciences">
      <h3>🔬 Vedic Sciences</h3>
      <p>Ayurveda, Astronomy, Mathematics, Yoga - ancient Indian scientific achievements</p>
    </a>

    <a href="{{ '/rituals/' | relative_url }}" class="category-card rituals">
      <h3>🕉️ Rituals & Practices</h3>
      <p>Puja, Festivals, Mantras, Samskaras - living traditions explained</p>
    </a>

    <a href="{{ '/values/' | relative_url }}" class="category-card values">
      <h3>💎 Values & Ethics</h3>
      <p>Dharma, Karma, Purusharthas - ethical living and moral principles</p>
    </a>

    <a href="{{ '/stories/' | relative_url }}" class="category-card stories">
      <h3>📚 Stories</h3>
      <p>Epic tales of Rama, Krishna, Mahabharata with life lessons</p>
    </a>

    <a href="{{ '/history/' | relative_url }}" class="category-card history">
      <h3>🏛️ Hindu History</h3>
      <p>Evolution of Hindu civilization - achievements, challenges, and resilience</p>
    </a>

    <a href="{{ '/modern-applications/' | relative_url }}" class="category-card modern">
      <h3>🌟 Modern Applications</h3>
      <p>Applying Vedic wisdom to daily life, work, and relationships</p>
    </a>
  </div>
</div>

<!-- Quiz Banner -->
<div class="quiz-banner">
  <h2>🎯 Test Your Knowledge!</h2>
  <p>Challenge yourself with interactive quizzes on stories, philosophy, and science</p>
  <div>
    <a href="{{ '/quizzes/ramayana-quiz/' | relative_url }}" class="quiz-link">Ramayana Quiz</a>
    <a href="{{ '/quizzes/krishna-quiz/' | relative_url }}" class="quiz-link">Krishna Quiz</a>
    <a href="{{ '/quizzes/vedic-science-quiz/' | relative_url }}" class="quiz-link">Science Quiz</a>
    <a href="{{ '/quizzes/bhagavad-gita-quiz/' | relative_url }}" class="quiz-link">Gita Quiz</a>
    <a href="{{ '/quizzes/dharma-karma-quiz/' | relative_url }}" class="quiz-link">Dharma Quiz</a>
  </div>
</div>

<!-- Feature Cards -->
<div class="section">
  <div class="section-header">
    <h2>Why Learn Vedic Knowledge?</h2>
    <p>Timeless wisdom for modern challenges</p>
  </div>

  <div class="feature-grid">
    <div class="feature-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
      <div class="icon">🎯</div>
      <h3>Purpose & Meaning</h3>
      <p>Understand life's deeper questions and find your unique path</p>
    </div>

    <div class="feature-card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
      <div class="icon">💎</div>
      <h3>Values & Ethics</h3>
      <p>Live with integrity guided by dharma and karma</p>
    </div>

    <div class="feature-card" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
      <div class="icon">🧘</div>
      <h3>Health & Wellness</h3>
      <p>Ayurveda and Yoga for holistic wellbeing</p>
    </div>

    <div class="feature-card" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
      <div class="icon">🔬</div>
      <h3>Scientific Heritage</h3>
      <p>Ancient astronomy, mathematics, and achievements</p>
    </div>

    <div class="feature-card" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">
      <div class="icon">📖</div>
      <h3>Inspiring Stories</h3>
      <p>Epics and Puranas with timeless life lessons</p>
    </div>

    <div class="feature-card" style="background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);">
      <div class="icon">🌟</div>
      <h3>Spiritual Growth</h3>
      <p>Paths to self-realization and inner peace</p>
    </div>
  </div>
</div>

<!-- Highlighted Content -->
<div class="section">
  <div class="section-header">
    <h2>Featured Articles</h2>
    <p>Start your journey with these comprehensive guides</p>
  </div>

  <div class="category-grid">
    <a href="{{ site.baseurl }}{% link _vedic_sciences/vedic-astronomy-and-mathematics.md %}" class="image-card">
      <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=500&fit=crop" alt="Ancient Indian Science" style="filter: brightness(0.7);">
      <div class="image-card-overlay">
        <h3>Vedic Astronomy & Mathematics</h3>
        <p>Moon's distance, Earth's circumference, zero, Pi - ancient achievements</p>
      </div>
    </a>

    <a href="{{ site.baseurl }}{% link _stories/rama-story-part1.md %}" class="image-card">
      <img src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&h=500&fit=crop" alt="Ramayana" style="filter: brightness(0.7);">
      <div class="image-card-overlay">
        <h3>The Story of Rama</h3>
        <p>The epic of dharma, devotion, and righteousness</p>
      </div>
    </a>

    <a href="{{ site.baseurl }}{% link _philosophy/introduction-to-bhagavad-gita.md %}" class="image-card">
      <img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&h=500&fit=crop" alt="Bhagavad Gita" style="filter: brightness(0.7);">
      <div class="image-card-overlay">
        <h3>Introduction to Bhagavad Gita</h3>
        <p>One of the world's most profound spiritual texts</p>
      </div>
    </a>

    <a href="{{ site.baseurl }}{% link _history/hindu-civilization-through-ages.md %}" class="image-card">
      <img src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=500&fit=crop" alt="Hindu History" style="filter: brightness(0.7);">
      <div class="image-card-overlay">
        <h3>Hindu Civilization History</h3>
        <p>From ancient glory to modern revival - a story of resilience</p>
      </div>
    </a>

    <a href="{{ site.baseurl }}{% link _stories/krishna-childhood-stories.md %}" class="image-card">
      <img src="https://images.unsplash.com/photo-1604608672516-f1b9b1cfce7b?w=800&h=500&fit=crop" alt="Krishna Stories" style="filter: brightness(0.7);">
      <div class="image-card-overlay">
        <h3>Krishna's Childhood Stories</h3>
        <p>Divine play, butter thief, and lifting Govardhana</p>
      </div>
    </a>

    <a href="{{ site.baseurl }}{% link _stories/mahabharata-introduction.md %}" class="image-card">
      <img src="https://images.unsplash.com/photo-1609136176146-eb5d4cf4293d?w=800&h=500&fit=crop" alt="Mahabharata" style="filter: brightness(0.7);">
      <div class="image-card-overlay">
        <h3>Mahabharata: The Greatest Epic</h3>
        <p>World's longest epic with profound teachings on dharma</p>
      </div>
    </a>
  </div>
</div>

<!-- Call to Action -->
<div class="section" style="text-align: center; padding: 3rem 0;">
  <h2 style="font-size: 2rem; margin-bottom: 1rem; color: #333;">Ready to Begin Your Journey?</h2>
  <p style="font-size: 1.2rem; color: #666; max-width: 600px; margin: 0 auto 2rem;">Explore authentic Vedic wisdom at your own pace. Every article is crafted with care for family learning.</p>
  <a href="{{ '/quizzes/' | relative_url }}" class="hero-cta">Take a Quiz</a>
  <a href="{{ '/stories/' | relative_url }}" class="hero-cta" style="margin-left: 1rem; background: linear-gradient(135deg, #667eea, #764ba2); color: white;">Read Stories</a>
</div>

<!-- Footer Message -->
<div style="text-align: center; padding: 2rem; background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05)); border-radius: 12px; margin-top: 3rem;">
  <p style="font-size: 1.1rem; color: #666; font-style: italic; margin-bottom: 1rem;">"Begin your journey into Vedic wisdom. Explore at your own pace, question freely, and discover timeless truths."</p>
  <div style="font-size: 2rem;">🙏</div>
</div>
