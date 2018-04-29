---
layout: post
title: "Most Useful Git Commands "
date: 2018-04-28
---

## Here are some git commands that are used most often

### add all the files or certain files

- git add --all
 
- git add **/pom.xml

### open graphical repository browser

- gitk

### commands to view, commit and push changes

- git status 
 
- git commit -a -m "add some comment"

- git push origin feature/branch_name

### steps to update  your branch with master

- git checkout master;

- git pull;

- git checkout branch

- git merge --no-ff master
 
### list all remote branches

- git branch -r

### stash and unstash changes

- git stash
 
- git stash pop

### to revert a commit

- git reset --soft HEAD~ 

### to unstage a staged file

- git reset HEAD filename

### search tags with regex

-  git tag --list 'Release2018*'
 
### checkout multiple files

-  git checkout -- '*.xml' 

### show diff between two tags

- git diff tag1 tag2 --stat 
 
### checkout existing tag into new branch Release0110

- git checkout tags/Release20180110 -b Release0110
 
### revert changes to your working copy

- git checkout .
 
### revert a change that you have committed

- git revert <commit 1> <commit 2>
 
### delete local branch

- git branch -d branchname
 
### delete remote branch

- git push origin --delete branchname
