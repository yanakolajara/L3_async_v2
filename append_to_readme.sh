#!/bin/bash

# Find all readme.md files in the subdirectories of the current folder
find . -type f -iname 'readme.md' | while read -r file; do
    # Append the text to each file
    echo -e "\n## Additional Resources" >> "$file"
done
