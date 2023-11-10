#!/bin/sh

# # Get the current branch name
current_branch=$(git symbolic-ref --short HEAD)

# Get the latest commit message on the current branch
latest_commit_message=$(git log -1 --pretty=%B "$current_branch")

# Stage all changes
git add .

# Commit changes with a message that includes the latest commit message
git commit -m "deploy: $latest_commit_message"

# Push the current branch
git push origin "$current_branch"

echo "Deployed to Firebase with commit message: $latest_commit_message"
