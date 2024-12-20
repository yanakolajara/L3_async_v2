#!/bin/bash

# Define an array of folder names
declare -a folders=(
"lesson06-arrays"
"lesson07-big-o-notation"
"lesson08-hash-tables"
"lesson09-hash-tables"
"lesson10-big-o-notation"
"lesson11-stacks"
"lesson12-stacks"
"lesson13-queues"
"lesson14-conditional-logic"
"lesson15-conditional-logic"
"lesson16-test-day"
"lesson17-big-o-notation"
"lesson18-two-pointer"
"lesson19-two-pointer"
"lesson20-binary-search"
"lesson21-binary-search"
"lesson22-sliding-window"
"lesson23-sliding-window"
"lesson24-nodes-adt-classes"
"lesson25-linked-lists"
"lesson26-linked-lists"
"lesson27-build-a-queue"
"lesson28-arrays-med"
"lesson29-arrays-med"
"lesson30-recursion"
"lesson31-recursion"
"lesson32-bst"
"lesson33-bst"
)

# Loop through the folder names
for folder in "${folders[@]}"; do
  # Copy the template folder to a new folder named after the current item in the array
  cp -r lesson-template "$folder"
done
