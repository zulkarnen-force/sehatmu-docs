#!/bin/bash

# Development/Staging build and deployment script for SehatMu Documentation

echo "🔧 Building SehatMu Documentation for Development/Staging..."

# Set environment variables for development
export NODE_ENV=development
export DOCUSAURUS_CONFIG=docusaurus.config.dev.js

# Clean previous builds
echo "🧹 Cleaning previous builds..."
npm run clear

# Generate API documentation (including candidate APIs for staging)
echo "📚 Generating API documentation..."
npm run clean-api-docs all
npm run gen-api-docs all

# Build for development/staging
echo "🔨 Building for development/staging..."
npm run build:dev

if [ $? -eq 0 ]; then
    echo "✅ Development build completed successfully!"
    echo "📦 Build output is available in the 'build' directory"
    echo "🌐 Ready to deploy to: https://staging.sehat.muhammadiyah.or.id/"
    
    # Optional: Auto-deploy if deploy target is configured
    read -p "Do you want to deploy to staging now? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "🚀 Deploying to staging..."
        # Original deployment command for staging
        rsync -arvz -e  'ssh -p 10123' --progress --delete  ./build/ vm001labmu@103.19.182.20:/app/sehatmu-developer/build
    fi
else
    echo "❌ Development build failed!"
    exit 1
fi