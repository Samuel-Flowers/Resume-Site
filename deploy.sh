#!/bin/bash

# Add all changes to git
git add .

# Prompt for commit message
read -p "Commit message: " commitMessage

# Commit changes with the provided message
git commit -m "$commitMessage"

# Push changes to the main branch
git push origin main

# Deploy to GitHub Pages
gh-pages -d dist
