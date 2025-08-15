#!/bin/bash

input=$(cat)
username=$(whoami)
hostname=$(hostname -s)
current_time=$(date +%H:%M:%S)
current_dir=$(echo "$input" | jq -r '.workspace.current_dir')
model_name=$(echo "$input" | jq -r '.model.display_name')

git_info=""
if git rev-parse --git-dir >/dev/null 2>&1; then
    branch=$(git branch --show-current 2>/dev/null || echo "detached")
    if [ -n "$branch" ]; then
        if ! git diff-index --quiet HEAD -- 2>/dev/null; then
            git_info=" (${branch}*)"
        else
            git_info=" (${branch})"
        fi
    fi
fi

printf "\033[2m%s@%s:%s%s | %s | %s\033[0m" "$username" "$hostname" "$current_dir" "$git_info" "$model_name" "$current_time"