#!/bin/bash

# Production build and deployment script for SehatMu Documentation

echo "🚀 Building SehatMu Documentation for Production..."

# Set environment variables for production
export NODE_ENV=production
export DOCUSAURUS_CONFIG=docusaurus.config.prod.js

# Clean previous builds
echo "🧹 Cleaning previous builds..."
npm run clear

# Generate API documentation
echo "📚 Generating API documentation..."
npm run clean-api-docs all
npm run gen-api-docs all

# Build for production
echo "🔨 Building for production..."
npm run build:prod

if [ $? -eq 0 ]; then
    echo "✅ Production build completed successfully!"
    echo "📦 Build output is available in the 'build' directory"
    echo "🌐 Ready to deploy to: https://sehat.muhammadiyah.or.id/docs/"
    
    # Optional: Auto-deploy if deploy target is configured
    read -p "Do you want to deploy now? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "🚀 Deploying to production..."
        # Original deployment command
     #    rsync -arvz -e 'ssh -p 10000' --progress --delete  ./build/ vm006@103.19.182.25:/app/static/docusaurus/
    fi
else
    echo "❌ Production build failed!"
    exit 1
fi