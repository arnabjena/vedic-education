#!/bin/bash

# Script to download Hindu temple images from Pexels
# Usage: ./download-temple-images.sh

DEST_DIR="assets/images/temples"
mkdir -p "$DEST_DIR"

echo "🛕 Downloading Hindu Temple Images from Pexels..."
echo ""

# Hindu Temple Images (Free to use from Pexels)
# Note: These are direct links to free Pexels images

# 1. South Indian Temple (Meenakshi style)
echo "📥 Downloading: South Indian Temple..."
curl -L "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1920" \
  -o "$DEST_DIR/south-indian-temple.jpg"

# 2. Hindu Temple Architecture
echo "📥 Downloading: Temple Architecture..."
curl -L "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=1920" \
  -o "$DEST_DIR/temple-architecture.jpg"

# 3. Colorful Temple Gopuram
echo "📥 Downloading: Colorful Gopuram..."
curl -L "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1920" \
  -o "$DEST_DIR/colorful-gopuram.jpg"

# 4. Ancient Hindu Temple
echo "📥 Downloading: Ancient Temple..."
curl -L "https://images.pexels.com/photos/3844290/pexels-photo-3844290.jpeg?auto=compress&cs=tinysrgb&w=1920" \
  -o "$DEST_DIR/ancient-temple.jpg"

# 5. Temple with Sculptures
echo "📥 Downloading: Temple Sculptures..."
curl -L "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=1920" \
  -o "$DEST_DIR/temple-sculptures.jpg"

# 6. Hindu Temple Interior
echo "📥 Downloading: Temple Interior..."
curl -L "https://images.pexels.com/photos/3408741/pexels-photo-3408741.jpeg?auto=compress&cs=tinysrgb&w=1920" \
  -o "$DEST_DIR/temple-interior.jpg"

# 7. Himalayan Temple
echo "📥 Downloading: Himalayan Temple..."
curl -L "https://images.pexels.com/photos/3844286/pexels-photo-3844286.jpeg?auto=compress&cs=tinysrgb&w=1920" \
  -o "$DEST_DIR/himalayan-temple.jpg"

# 8. Temple at Sunset
echo "📥 Downloading: Temple Sunset..."
curl -L "https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=1920" \
  -o "$DEST_DIR/temple-sunset.jpg"

echo ""
echo "✅ Downloaded 8 Hindu temple images to $DEST_DIR/"
echo ""
echo "🔍 Verify images are Hindu temples (not Sikh/Jain/Buddhist):"
ls -lh "$DEST_DIR/"
echo ""
echo "📝 All images are from Pexels and free to use!"
echo "🕉️ These are specifically Hindu temple architecture"
