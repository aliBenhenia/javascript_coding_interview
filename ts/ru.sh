#!/bin/bash

# Check if a TypeScript file is provided as an argument
if [ -z "$1" ]; then
  echo "Usage: ./compile.sh <path-to-ts-file>"
  exit 1
fi

# Define the TypeScript file path
TS_FILE="$1"

# Compile the TypeScript file
tsc $TS_FILE

# Check if TypeScript compiled successfully (i.e., no errors)
if [ $? -eq 0 ]; then
  # Extract the filename without extension (e.g., 'app' from 'app.ts')
  JS_FILE=$(basename "$TS_FILE" .ts).js
  
  # Run the resulting JavaScript file
  node "$JS_FILE"

  # Move the generated JS file to the 'product' folder
  mv "$JS_FILE" ./product/

#   echo "Compilation and execution successful. JavaScript file is in the 'product' folder."
else
  echo "Compilation failed."
  exit 1
fi
