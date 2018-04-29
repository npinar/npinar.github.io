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

> git checkout master;

> git pull;

> git checkout branch

> git merge --no-ff master
 
### list all remote branches

- git branch -r

### stash and unstash changes

- git stash
 
- git stash pop

### to revert a commit

<b>
git reset --soft HEAD~
</b>

to unstage a staged file

<b>
git reset HEAD filename
</b>

search tags with regex

<b>
git tag --list 'Release2018*'
 </b>
 
checkout multiple files

<b>
git checkout -- '*.xml'
 </b>

show diff between two tags

<b>
git diff tag1 tag2 --stat
 </b>
 
checkout existing tag into new branch Release0110

<b>
git checkout tags/Release20180110 -b Release0110
 </b>
 
revert changes to your working copy

<b>
git checkout .
 </b>
 
revert a change that you have committed

<b>
git revert <commit 1> <commit 2>
 </b>
 
delete local branch

<b>
git branch -d branchname
 </b>
 
delete remote branch

<b>
git push origin --delete branchname
</b>
