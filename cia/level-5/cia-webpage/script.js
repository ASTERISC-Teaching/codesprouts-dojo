console.log("Script Loaded");

// Matrix Digital Rain Effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size to window size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Characters to use in the rain
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

// Initialize drops
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Draw the digital rain
function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);

/////////////////////////// Code for Level 4 //////////////////////////////////

// // Letter mappings with Proxy for reactivity
// const letterMappings = new Proxy({}, {
//   set(target, key, value) {
//     target[key] = value;
//     const inputField = document.getElementById(`map${key}`);
//     if (inputField) {
//       inputField.value = value;
//     }
//     return true;
//   }
// });

// // Word frequencies with Proxy for reactivity
// const wordFrequencies = new Proxy({}, {
//   set(target, key, value) {
//     target[key] = value;
//     updateFrequencyTable();
//     return true;
//   }
// });

// // Generate letter mapping table
// function generateLetterMappings() {
//   const tbody = document.querySelector('#letterMappings tbody');
//   tbody.innerHTML = '';

//   // CHANGE #2: Instead of random letters, start all mappings blank
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

//   // Create a single row for all letters
//   const row = document.createElement('tr');
  
//   for (let i = 0; i < 26; i++) {
//     const letter = alphabet[i];
    
//     const cell = document.createElement('td');
//     cell.classList.add('letter-mapping-cell');
    
//     const letterDisplay = document.createElement('div');
//     letterDisplay.classList.add('letter-display');
//     letterDisplay.textContent = letter;
    
//     const input = document.createElement('input');
//     input.classList.add('letter-mapping');
//     input.id = `map${letter}`;
//     input.maxLength = 1;
//     input.addEventListener('input', function () {
//       letterMappings[letter] = input.value.toUpperCase();
//     });
    
//     cell.appendChild(letterDisplay);
//     cell.appendChild(input);
//     row.appendChild(cell);

//     // NO default mapping: set to blank
//     letterMappings[letter] = "";
//     input.value = "";
//   }
  
//   tbody.appendChild(row);
// }

// // Update word frequency table
// function updateFrequencyTable() {
//   const tbody = document.querySelector("#wordFrequency tbody");
//   tbody.innerHTML = '';

//   const sortedEntries = Object.entries(wordFrequencies).sort((a, b) => b[1] - a[1]);
//   sortedEntries.forEach(([word, count]) => {
//     if(count > 3) {
//       const row = document.createElement("tr");
//       const wordCell = document.createElement("td");
//       wordCell.textContent = word;
//       wordCell.classList.add("clickable");
//       wordCell.onclick = () => highlightWord(word);
      
//       const countCell = document.createElement("td");
//       countCell.textContent = count;
      
//       row.appendChild(wordCell);
//       row.appendChild(countCell);
//       tbody.appendChild(row);
//     }
//   });
// }

// // Highlight word occurrences in the challenge text
// function highlightWord(word) {
//   const challengeText = document.getElementById('challengeText');
//   const text = challengeText.textContent;
  
//   challengeText.innerHTML = text;
//   const regex = new RegExp(`\\b${word}\\b`, 'gi');
//   challengeText.innerHTML = text.replace(regex, match => `<span class="highlight">${match}</span>`);
// }

// // Encrypt text using current mappings
// function encrypt() {
//   const textArea = document.getElementById("inputText");
//   let input = textArea.value.toUpperCase();
//   let output = "";
//   let changedIndices = [];
  
//   for (let i = 0; i < input.length; i++) {
//     const char = input[i];
//     if (isLetter(char)) {
//       const mapped = letterMappings[char] || char;
//       output += mapped;
//       if (mapped !== char) {
//         changedIndices.push(i);
//       }
//     } else {
//       output += char;
//     }
//   }
  
//   // Create HTML with highlighted changed characters
//   let highlightedOutput = "";
//   for (let i = 0; i < output.length; i++) {
//     if (changedIndices.includes(i)) {
//       highlightedOutput += `<span class="highlight">${output[i]}</span>`;
//     } else {
//       highlightedOutput += output[i];
//     }
//   }
  
//   document.getElementById("outputText").innerHTML = highlightedOutput;
//   analyzeFrequency(output);
// }

// // Decrypt text using current mappings
// function decrypt() {
//   const textArea = document.getElementById("inputText");
//   let input = textArea.value.toUpperCase();
//   let output = "";

//   const reverseMapping = {};
//   for (const [key, value] of Object.entries(letterMappings)) {
//     reverseMapping[value] = key;
//   }
  
//   for (let i = 0; i < input.length; i++) {
//     const char = input[i];
//     if (isLetter(char)) {
//       const mapped = reverseMapping[char] || char;
//       output += mapped;
//     } else {
//       output += char;
//     }
//   }
  
//   document.getElementById("outputText").textContent = output;
//   analyzeFrequency(output);
// }

// // Analyze word frequency in text
// function analyzeFrequency(text = document.getElementById("inputText").value) {
//   for (const key in wordFrequencies) {
//     delete wordFrequencies[key];
//   }
  
//   const words = text.toLowerCase().match(/\b\w+\b/g) || [];
//   words.forEach(word => {
//     if (word.length > 0) {
//       wordFrequencies[word] = (wordFrequencies[word] || 0) + 1;
//     }
//   });
  
//   updateFrequencyTable();
// }


//////////////////////////////// Code for Level 5 //////////////////////////////////////////

// // Helper functions
function isUpperCase(letter) {
  const code = letter.charCodeAt(0);
  return code >= 65 && code <= 90;
}

function isLetter(letter) {
  const code = letter.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

// Hash function implementation
function simpleHash(input) {
  // Convert to lowercase for case-insensitive counting
  const str = input.toUpperCase();
  const charCount = {};
  
  // Count each character
  for (let char of str) {
    if (isLetter(char)) {
      if(charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  }
  
  // Sort characters alphabetically
  const sortedChars = Object.keys(charCount).sort();
  
  // Build the hash string
  let hash = '';
  for (let char of sortedChars) {
    hash += char + charCount[char];
  }
  
  return hash;
}

// Target hash for collision game
const TARGET_HASH = 'A59B17C34D23E125F20G24H54I89J2K10L65M24N45O89P20R62S62T110U34V7W39Y24';

// Check hash collision
async function checkHashCollision() {
  const input = document.getElementById('hashInput').value;
  const hash = simpleHash(input);
  document.getElementById('hashOutput').textContent = hash;
  
  const resultElement = document.getElementById('hashResult');
  if (hash === TARGET_HASH) {
    resultElement.textContent = 'Congratulations! You found a hash collision!';
    resultElement.style.color = '#33ff33';

    // Force full DOM render before blocking alert
    await new Promise(requestAnimationFrame);
    await new Promise(resolve => setTimeout(resolve, 0));
    
    const flag = await getFlag();
    alert(flag);
  } else {
    resultElement.textContent = 'Not a collision. Try again!';
    resultElement.style.color = '#ff3333';
  }
}

// Check hash collision
function updateHash() {
  const input = document.getElementById('hashInput').value;
  const hash = simpleHash(input);
  document.getElementById('hashOutput').textContent = hash;
}

// // Toggle instructions modal
// function toggleInstructions() {
//   const modal = document.getElementById("instructionsModal");
//   modal.style.display = (modal.style.display === "block") ? "none" : "block";
// }

// // Close modal when clicking outside
// window.onclick = function(event) {
//   const modal = document.getElementById("instructionsModal");
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// };

// // Initialize game
// document.addEventListener('DOMContentLoaded', initGame);


///////////////////////// Code for Level 6 /////////////////////////////
// // Initialize Pyodide
// let pyodide = null;
// let isInitialized = false;

// async function initPyodide() {
//   if (isInitialized) return;
  
//   const sandbox = document.querySelector('.python-sandbox');
//   const loadingIndicator = document.createElement('div');
//   loadingIndicator.className = 'loading-indicator';
//   loadingIndicator.textContent = 'Initializing Python environment...';
//   sandbox.appendChild(loadingIndicator);
  
//   try {
//     pyodide = await loadPyodide();
//     await pyodide.loadPackage("micropip");
    
//     // Define a helper function to make HTTP calls
//     // Example usage: 
//     // res = await send_http_request("http://localhost/api")
//     await pyodide.runPythonAsync(`
//       from pyodide.http import pyfetch

//       async def send_http_request(url):
//           response = await pyfetch(url)  # Await pyfetch directly
//           return await response.string()  # Return the string content of the response
//     `);
//     isInitialized = true;
//     loadingIndicator.remove();
//   } catch (error) {
//     loadingIndicator.textContent = `Error: ${error.message}`;
//     loadingIndicator.className = 'error-message';
//   }
// }

// // Run Python code
// async function runPythonCode() {
//   if (!isInitialized) {
//     await initPyodide();
//   }
  
//   const code = document.getElementById('pythonCode').value;
//   const outputDiv = document.getElementById('pythonOutput');
  
//   if (!isInitialized) {
//     outputDiv.textContent = 'Python environment is still initializing...';
//     return;
//   }
  
//   try {
//     // Redirect stdout to our output div
//     pyodide.runPython(`
//       import sys
//       from io import StringIO
//       sys.stdout = StringIO()
//     `);
    
//     // Run the user's code
//     await pyodide.runPythonAsync(code);
    
//     // Get the output
//     const output = pyodide.runPython('sys.stdout.getvalue()');
//     outputDiv.textContent = output;
//   } catch (error) {
//     outputDiv.textContent = `Error: ${error.message}`;
//   }
// }

// // Clear Python output
// function clearPythonOutput() {
//   document.getElementById('pythonOutput').textContent = '';
// }

// Initialize Pyodide when the sandbox is first interacted with
// document.getElementById('pythonCode').addEventListener('focus', initPyodide);
// document.querySelector('.sandbox-controls button').addEventListener('click', initPyodide); 


////////////////////////////// Code to read the flag ///////////////////////////////////
async function getFlag() {
  try {
    const fileUrl = 'http://localhost:8000/flag';
    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Error fetching file:', error);
    return null;
  }
}

function removeWhitespace(str) {
  return str.replace(/\s+/g, '');
}