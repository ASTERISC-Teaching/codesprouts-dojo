#!/bin/bash

# Path to the directory containing files to be searched
search_dir="/package/data"

# Path to the file containing the replacement value
flag_file="/flag"

# Read the value to replace "HERE" with
replacement_value=$(cat "$flag_file")

# Export replacement value to be accessible in sed command called by find
export replacement_value

# Find all files in the specified directory and subdirectories
# and replace "HERE" with the content of /flag
find "$search_dir" -type f -exec grep -l 'HERE' {} \; | while read -r file; do
	sed -i "s/HERE/$replacement_value/g" "$file"
done

echo "Replacement complete."
