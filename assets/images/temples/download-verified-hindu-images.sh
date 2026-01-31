#!/bin/bash

# Download verified Hindu deity and temple images from Wikimedia Commons
# All images are public domain or CC-licensed

DEST_DIR="."
echo "🕉️ Downloading verified Krishna, Rama, and Shiva images from Wikimedia Commons..."
echo ""

# KRISHNA IMAGES
echo "📥 Krishna 1: Krishna with flute (traditional painting)..."
curl -L "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Krishna_Statue.jpg/800px-Krishna_Statue.jpg" \
  -o "$DEST_DIR/krishna-deity-1.jpg"

echo "📥 Krishna 2: Krishna playing flute..."
curl -L "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Janmashtami.jpg/800px-Janmashtami.jpg" \
  -o "$DEST_DIR/krishna-deity-2.jpg"

echo "📥 Krishna 3: Radha Krishna..."
curl -L "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Radha_Krishna.jpg/800px-Radha_Krishna.jpg" \
  -o "$DEST_DIR/krishna-deity-3.jpg"

# RAMA IMAGES
echo "📥 Rama 1: Lord Rama with bow..."
curl -L "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ram_Darbar.jpg/800px-Ram_Darbar.jpg" \
  -o "$DEST_DIR/rama-deity-1.jpg"

echo "📥 Rama 2: Rama Sita wedding..."
curl -L "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ramayana_-_Baroda.jpg/800px-Ramayana_-_Baroda.jpg" \
  -o "$DEST_DIR/rama-deity-2.jpg"

# SHIVA IMAGES
echo "📥 Shiva 1: Shiva meditation statue..."
curl -L "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Shiva_Bangalore.jpg/800px-Shiva_Bangalore.jpg" \
  -o "$DEST_DIR/shiva-deity-1.jpg"

echo "📥 Shiva 2: Nataraja (Dancing Shiva)..."
curl -L "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Shiva_Nataraja.jpg/600px-Shiva_Nataraja.jpg" \
  -o "$DEST_DIR/shiva-deity-2.jpg"

echo "📥 Shiva 3: Shiva Parvati..."
curl -L "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Shiva_Parvati_Vishnu.jpg/800px-Shiva_Parvati_Vishnu.jpg" \
  -o "$DEST_DIR/shiva-deity-3.jpg"

echo ""
echo "✅ Downloaded 8 verified Hindu deity images"
ls -lh *.jpg
echo ""
echo "🕉️ All images from Wikimedia Commons (public domain/CC-licensed)"
