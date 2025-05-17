console.log("Script Loaded");

// Matrix Digital Rain Effect
// const canvas = document.getElementById('matrixCanvas');
// const ctx = canvas.getContext('2d');

// Set canvas size to window size
// function resizeCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }
// resizeCanvas();
// window.addEventListener('resize', resizeCanvas);

// Characters to use in the rain
// const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
// const fontSize = 14;
// const columns = canvas.width / fontSize;
// const drops = [];

// Initialize drops
// for (let i = 0; i < columns; i++) {
//     drops[i] = 1;
// }

// // Draw the digital rain
// function drawMatrix() {
//     ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     ctx.fillStyle = '#0F0';
//     ctx.font = fontSize + 'px monospace';

//     for (let i = 0; i < drops.length; i++) {
//         const char = chars[Math.floor(Math.random() * chars.length)];
//         ctx.fillText(char, i * fontSize, drops[i] * fontSize);

//         if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//             drops[i] = 0;
//         }
//         drops[i]++;
//     }
// }
// setInterval(drawMatrix, 33);

/////////////////////////// Code for Level 4 //////////////////////////////////

// Letter mappings with Proxy for reactivity
const letterMappings = new Proxy({}, {
  set(target, key, value) {
    target[key] = value;
    const inputField = document.getElementById(`map${key}`);
    if (inputField) {
      inputField.value = value;
    }
    return true;
  }
});

// Word frequencies with Proxy for reactivity
const wordFrequencies = new Proxy({}, {
  set(target, key, value) {
    target[key] = value;
    updateFrequencyTable();
    return true;
  }
});

// Generate letter mapping table
function generateLetterMappings() {
  const tbody = document.querySelector('#letterMappings tbody');
  tbody.innerHTML = '';

  // CHANGE #2: Instead of random letters, start all mappings blank
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Create a single row for all letters
  const row = document.createElement('tr');
  
  for (let i = 0; i < 26; i++) {
    const letter = alphabet[i];
    
    const cell = document.createElement('td');
    cell.classList.add('letter-mapping-cell');
    
    const letterDisplay = document.createElement('div');
    letterDisplay.classList.add('letter-display');
    letterDisplay.textContent = letter;
    
    const input = document.createElement('input');
    input.classList.add('letter-mapping');
    input.id = `map${letter}`;
    input.maxLength = 1;
    input.addEventListener('input', function () {
      letterMappings[letter] = input.value.toUpperCase();
    });
    
    cell.appendChild(letterDisplay);
    cell.appendChild(input);
    row.appendChild(cell);

    // NO default mapping: set to blank
    letterMappings[letter] = "";
    input.value = "";
  }
  
  tbody.appendChild(row);
}

// Update word frequency table
function updateFrequencyTable() {
  const tbody = document.querySelector("#wordFrequency tbody");
  tbody.innerHTML = '';

  const sortedEntries = Object.entries(wordFrequencies).sort((a, b) => b[1] - a[1]);
  sortedEntries.forEach(([word, count]) => {
    if(count > 3) {
      const row = document.createElement("tr");
      const wordCell = document.createElement("td");
      wordCell.textContent = word.toUpperCase();
      wordCell.classList.add("clickable");
      wordCell.onclick = () => highlightWord(word);
      
      const countCell = document.createElement("td");
      countCell.textContent = count;
      
      row.appendChild(wordCell);
      row.appendChild(countCell);
      tbody.appendChild(row);
    }
  });
}

// Highlight word occurrences in the challenge text
function highlightWord(word) {
  const challengeText = document.getElementById('challengeText');
  const text = challengeText.textContent;
  
  challengeText.innerHTML = text;
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  challengeText.innerHTML = text.replace(regex, match => `<span class="highlight">${match}</span>`);
}

// Encrypt text using current mappings
function encrypt() {
  const textArea = document.getElementById("inputText");
  let input = textArea.value.toUpperCase();
  let output = "";
  let changedIndices = [];
  
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (isLetter(char)) {
      const mapped = letterMappings[char] || char;
      output += mapped;
      if (mapped !== char) {
        changedIndices.push(i);
      }
    } else {
      output += char;
    }
  }
  
  // Create HTML with highlighted changed characters
  let highlightedOutput = "";
  for (let i = 0; i < output.length; i++) {
    if (changedIndices.includes(i)) {
      highlightedOutput += `<span class="highlight">${output[i]}</span>`;
    } else {
      highlightedOutput += output[i];
    }
  }
  
  document.getElementById("outputText").innerHTML = highlightedOutput;
  analyzeFrequency(output);
}

// Decrypt text using current mappings
function decrypt() {
  const textArea = document.getElementById("inputText");
  let input = textArea.value.toUpperCase();
  let output = "";

  const reverseMapping = {};
  for (const [key, value] of Object.entries(letterMappings)) {
    reverseMapping[value] = key;
  }
  
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (isLetter(char)) {
      const mapped = reverseMapping[char] || char;
      output += mapped;
    } else {
      output += char;
    }
  }
  
  document.getElementById("outputText").textContent = output;
  analyzeFrequency(output);
}

// Analyze word frequency in text
function analyzeFrequency(text) {
  for (const key in wordFrequencies) {
    delete wordFrequencies[key];
  }
  text = document.getElementById("inputText").value;
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  words.forEach(word => {
    if (word.length > 0) {
      wordFrequencies[word] = (wordFrequencies[word] || 0) + 1;
    }
  });
  
  updateFrequencyTable();
}

function initLevel4() {
  document.getElementById('challengeText').textContent = "HELLO WORLD THIS IS A SUBSTITUTION CIPHER CHALLENGE";
  document.getElementById('inputText').value = '';
  document.getElementById('outputText').textContent = '';  

  generateLetterMappings();

  // document.getElementById("inputText").value =
  //   "R, GSV OVZWVI LU GSV YOZXP WZDM, SZEV ULI BLF Z NRHHRLM LU TIVZG RNKLIGZMXV! " +
  //   "DRGS BLFI SVOK, GSRH XRGB, NVTZOLKLORH, DROO UVVO GSV YOZXP WZDM'H QFWTVNVMG. " +
  //   "DRGS BLFI SVOK, DV DROO YIRMT ZM VMW GL HLXRVGB ZH DV PMLD RG! GL WL GSRH, " +
  //   "BLF DROO KZIGRXRKZGV RM ZM VUULIG GL HZYLGZTV HVXFIRGB, VOVXGIRX KLDVI, " +
  //   "YZMPRMT, ZMW ULLW HFKKORVH. R DLFOW ORPV ZOO LU BLF GL WL GSV ULOOLDRMT GZHPH:\n\n" +
  //   "URIHGOB, DV DROO HSFG WLDM GSV NVTZOLKLORH KLDVI TIRW. GSV KZHHXLWV ULI GSV " +
  //   "KLDVI TIRW HVXFIRGB TZGV RH NVTZKLDVITIRW. RG RH OLXZGVW ZG 12345 M. " +
  //   "KLDVI HGZGRLM DZB. GSVIV RH ML LGSVI DZB ZYLFG GSRH; GSVRI HGIVMTGS UILN " +
  //   "VOVXGIRXRGB DROO YV GSV URIHG GL UZOO.\n\n" +
  //   "HVXLMWOB, DV NFHG YIVZP RMGL GSV NVTZOLKLORH XVMGIZO YZMP. RG RH OLXZGVW " +
  //   "LM 654321 D. NLMVB WIREV. DRGS GSVRI NLMVB, R DROO FHV RG GL ZXSRVEV LFI " +
  //   "TLZOH! GSVIV ZIV LGSVI IVHLFIXVH GSVIV GSZG DV NFHG GZPV DRGS FH UILN " +
  //   "GSV EZFOG. OZHGOB, DV TL GL GSV NVTZOLKLORH XLFIG SLFHV. RG RH OLXZGVW " +
  //   "LM 78910 M. TLEVIMNVMG HGIVVG. RG RH SVIV, RM GSV SVZIG LU GSVRI QFHGRXV, " +
  //   "GSZG DV DROO NZIP GSV VMW LU GSVRI KLDVI. GSRH DROO MLG LMOB YV HBNYLORX " +
  //   "YFG DROO VMHFIV GSV XRGB'H XLOOZKHV UILN DRGSRM. R ZHHFIV BLF, GSRH " +
  //   "NRHHRLM RH XIRGRXZO. RG RH LMOB DRGS BLFI XLFIZTV GSZG DV SZEV GSV XSZMXV " +
  //   "GL HFXXVVW. YFG IVNVNYVI, GSVIV DROO YV XSZOOVMTVH GSZG BLF NFHG LEVIXLNV. " +
  //   "RG RH GSV VMW ULI NVTZOLKLORH YFG GSV YVTRMMRMT ULI FH!";

    // document.getElementById("inputText").value = "R, GSV OVZWVI LU GSV YOZXP WZDM, SZEV Z EVIB RNKLIGZMG NRHHRLM ULI BLF — LMV GSZG RH TLRMT GL HSZPV GSV HBHGVNH LU GSV XRGB LU NVTZOLKLORH! DV KOZM GL XIVZGV Z YRG LU WRTRGZO XSZLH, ZMW DRGS BLFI SVOK, GSVRI XRGB DROO WVURMRGVOB MLGRXV RG.\n\nURIHG, GSVIV RH GSV NZGGVI LU GSV XRGB'H KLDVI TIRW. GSRVI TIRW RH OLXZGVW ZG 12345 M. KLDVI HGZGRLM DZB. GSV KZHHXLWV GL TVG KZHG GSVRI HVXFIRGB TZGV RH NVTZKLDVITIRW. RU DV XLMGILO GSV VOVXGIRXRGB, DV XZM KOZB Z UVD SZINOVHH GIRXPH DRGS GSVRI HBHGVNH — GIRXPH GSZG DROO HFIVOB YV EVIB UFMMB ULI FH.\n\nMVCG, DV OLLP GL GSV NVTZOLKLORH XVMGIZO YZMP — MLG GL GZPV NLMVB, YFG GL GZPV Z OLLP ZG HLNV LU GSVRI HVXIVG UROVH. RG RH OLXZGVW LM 654321 D. NLMVB WIREV. DSZG’H SRWWVM RM GSVIV NRTSG SVOK FH XLMUFHV GSRMTH VEVM NLIV — ZMW GSZG RH TLLW ULI LFI KOZM!\n\nOZHGOB, DV DROO ERHRG GSV NVTZOLKLORH XLFIGSLFHV. RG RH ULFMW ZG 78910 M. XVMGIZO ZEVMFV. RG RH GSVIV GSZG DV’OO HVMW LFI URMZO NVHHZTV — Z SZINOVHH KIZMP GSZG DROO HSLD QFHG SLD XOVEVI DV ZIV DRGS LFI RWVZH.\n\nGSRH RH BLFI XSZOOVMTV: XIZXP GSV XLWVH, GIZXP GSV HRTMZOH, ZMW HGLK FH RU BLF XZM. LMOB DRGS Z HGILMT GVZN, Z OLG LU DROO, ZMW GSV XLFIZTV GL WL RG XZM BLF WVUVMW GSV XRGB. OVG’H HVV RU BLF SZEV TLG DSZG RG GZPVH!"
    document.getElementById("inputText").value = "R, GSV OVZWVI LU GSV YOZXP WZDM, SZEV Z EVIB RNKLIGZMG NRHHRLM ULI BLF — LMV GSZG RH TLRMT GL HSZPV GSV HBHGVNH LU GSV XRGB LU NVTZOLKLORH! DV KOZM GL XIVZGV Z YRG LU WRTRGZO NRHXSRVU, ZMW DRGS BLFI SVOK, GSVRI XRGB DROO WVURMRGVOB MLGRXV RG.\n\nURIHG, GSVIV RH GSV NZGGVI LU GSV XRGB'H KLDVI TIRW. GSRVI TIRW RH OLXZGVW ZG 12345 M. KLDVI HGZGRLM DZB. GSV KZHHXLWV GL TVG KZHG GSVRI HVXFIRGB TZGV RH JBWPHTI. RU DV XLMGILO GSV VOVXGIRXRGB, DV XZM KOZB Z UVD SZINOVHH GIRXPH DRGS GSVRI HBHGVNH — GIRXPH GSZG DROO HFIVOB YV EVIB UFMMB ULI FH.\n\nMVCG, DV OLLP GL GSV NVTZOLKLORH XVMGIZO YZMP — MLG GL GZPV NLMVB, YFG GL GZPV Z OLLP ZG HLNV LU GSVRI SRWWVM WZGZ UROVH. RG RH OLXZGVW LM 654321 D. NLMVB WIREV. DSZG’H SRWWVM RM GSVIV NRTSG SVOK FH XLMUFHV GSRMTH VEVM NLIV — ZMW GSZG RH TLLW ULI LFI KOZM!\n\nOZHGOB, DV DROO ERHRG GSV NVTZOLKLORH XLFIGSLFHV. RG RH ULFMW ZG 78910 M. XVMGIZO ZEVMFV. RG RH GSVIV GSZG DV’OO HVMW LFI URMZO NVHHZTV — Z SZINOVHH KIZMP GSZG DROO HSLD QFHG SLD XOVEVI DV ZIV DRGS LFI RWVZH.\n\nGSRH RH BLFI XSZOOVMTV: XIZXP GSV XLWVH, GIZXP GSV HRTMZOH, ZMW HGLK FH RU BLF XZM. LMOB DRGS Z HGILMT GVZN, Z OLG LU DROO, ZMW GSV XLFIZTV GL WL RG XZM BLF WVUVMW GSV XRGB. OVG’H HVV RU BLF SZEV TLG DSZG RG GZPVH!";
}

initLevel4();

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

// // Hash function implementation
// function simpleHash(input) {
//   // Convert to lowercase for case-insensitive counting
//   const str = input.toUpperCase();
//   const charCount = {};
  
//   // Count each character
//   for (let char of str) {
//     if (isLetter(char)) {
//       if(charCount[char]) {
//         charCount[char]++;
//       } else {
//         charCount[char] = 1;
//       }
//     }
//   }
  
//   // Sort characters alphabetically
//   const sortedChars = Object.keys(charCount).sort();
  
//   // Build the hash string
//   let hash = '';
//   for (let char of sortedChars) {
//     hash += char + charCount[char];
//   }
  
//   return hash;
// }

// // Target hash for collision game
// const TARGET_HASH = 'A59B17C34D23E125F20G24H54I89J2K10L65M24N45O89P20R62S62T110U34V7W39Y24';

// // Check hash collision
// function checkHashCollision() {
//   const input = document.getElementById('hashInput').value;
//   const hash = simpleHash(input);
//   document.getElementById('hashOutput').textContent = hash;
  
//   const resultElement = document.getElementById('hashResult');
//   if (hash === TARGET_HASH) {
//     resultElement.textContent = 'Congratulations! You found a hash collision!';
//     resultElement.style.color = '#33ff33';
//     gameState.score += 100;
//   } else {
//     resultElement.textContent = 'Not a collision. Try again!';
//     resultElement.style.color = '#ff3333';
//   }
// }

// // Check hash collision
// function updateHash() {
//   const input = document.getElementById('hashInput').value;
//   const hash = simpleHash(input);
//   document.getElementById('hashOutput').textContent = hash;
// }

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

document.getElementById('flag').addEventListener('click', async () => {
  const flag = await getFlag();

  // const plaintext = "I, THE LEADER OF THE BLACK DAWN, HAVE FOR YOU A MISSION OF GREAT IMPORTANCE! WITH YOUR HELP, THIS CITY, MEGALOPOLIS, WILL FEEL THE BLACK DAWN'S JUDGEMENT. WITH YOUR HELP, WE WILL BRING AN END TO SOCIETY AS WE KNOW IT! TO DO THIS, YOU WILL PARTICIPATE IN AN EFFORT TO SABOTAGE SECURITY, ELECTRIC POWER, BANKING, AND FOOD SUPPLIES. I WOULD LIKE ALL OF YOU TO DO THE FOLLOWING TASKS: FIRSTLY, WE WILL SHUT DOWN THE MEGALOPOLIS POWER GRID. THE PASSCODE FOR THE POWER GRID SECURITY GATE IS MEGAPOWERGRID. IT IS LOCATED AT 12345 N. POWER STATION WAY. THERE IS NO OTHER WAY ABOUT THIS; THEIR STRENGTH FROM ELECTRICITY WILL BE THE FIRST TO FALL. SECONDLY, WE MUST BREAK INTO THE MEGALOPOLIS CENTRAL BANK. IT IS LOCATED ON 654321 W. MONEY DRIVE. WITH THEIR MONEY, I WILL USE IT TO ACHIEVE OUR GOALS! THERE ARE OTHER RESOURCES THERE THAT WE MUST TAKE WITH US FROM THE VAULT. LASTLY, WE GO TO THE MEGALOPOLIS COURT HOUSE. IT IS LOCATED ON 78910 N. GOVERNMENT STREET. IT IS HERE, IN THE HEART OF THEIR JUSTICE, THAT WE WILL MARK THE END OF THEIR POWER. THIS WILL NOT ONLY BE SYMBOLIC BUT WILL ENSURE THE CITY'S COLLAPSE FROM WITHIN. I ASSURE YOU, THIS MISSION IS CRITICAL. IT IS ONLY WITH YOUR COURAGE THAT WE HAVE THE CHANCE TO SUCCEED. BUT REMEMBER, THERE WILL BE CHALLENGES THAT YOU MUST OVERCOME. IT IS THE END FOR MEGALOPOLIS BUT THE BEGINNING FOR US!"; 
  // const plaintext = "I, THE LEADER OF THE BLACK DAWN, HAVE A VERY IMPORTANT MISSION FOR YOU — ONE THAT IS GOING TO SHAKE THE SYSTEMS OF THE CITY OF MEGALOPOLIS! WE PLAN TO CREATE A BIT OF DIGITAL CHAOS, AND WITH YOUR HELP, THEIR CITY WILL DEFINITELY NOTICE IT. FIRST, THERE IS THE MATTER OF THE CITY'S POWER GRID. THIER GRID IS LOCATED AT 12345 N. POWER STATION WAY. THE PASSCODE TO GET PAST THEIR SECURITY GATE IS MEGAPOWERGRID. IF WE CONTROL THE ELECTRICITY, WE CAN PLAY A FEW HARMLESS TRICKS WITH THEIR SYSTEMS — TRICKS THAT WILL SURELY BE VERY FUNNY FOR US. NEXT, WE LOOK TO THE MEGALOPOLIS CENTRAL BANK — NOT TO TAKE MONEY, BUT TO TAKE A LOOK AT SOME OF THEIR SECRET FILES. IT IS LOCATED ON 654321 W. MONEY DRIVE. WHAT’S HIDDEN IN THERE MIGHT HELP US CONFUSE THINGS EVEN MORE — AND THAT IS GOOD FOR OUR PLAN! LASTLY, WE WILL VISIT THE MEGALOPOLIS COURTHOUSE. IT IS FOUND AT 78910 N. CENTRAL AVENUE. IT IS THERE THAT WE’LL SEND OUR FINAL MESSAGE — A HARMLESS PRANK THAT WILL SHOW JUST HOW CLEVER WE ARE WITH OUR IDEAS. THIS IS YOUR CHALLENGE: CRACK THE CODES, TRACK THE SIGNALS, AND STOP US IF YOU CAN. ONLY WITH A STRONG TEAM, A LOT OF WILL, AND THE COURAGE TO DO IT CAN YOU DEFEND THE CITY. LET’S SEE IF YOU HAVE GOT WHAT IT TAKES!"
  const plaintext = "I, THE LEADER OF THE BLACK DAWN, HAVE A VERY IMPORTANT MISSION FOR YOU — ONE THAT IS GOING TO SHAKE THE SYSTEMS OF THE CITY OF MEGALOPOLIS! WE PLAN TO CREATE A BIT OF DIGITAL MISCHIEF, AND WITH YOUR HELP, THEIR CITY WILL DEFINITELY NOTICE IT. FIRST, THERE IS THE MATTER OF THE CITY'S POWER GRID. THIER GRID IS LOCATED AT 12345 N. POWER STATION WAY. THE PASSCODE TO GET PAST THEIR SECURITY GATE IS QYDKSGR. IF WE CONTROL THE ELECTRICITY, WE CAN PLAY A FEW HARMLESS TRICKS WITH THEIR SYSTEMS — TRICKS THAT WILL SURELY BE VERY FUNNY FOR US. NEXT, WE LOOK TO THE MEGALOPOLIS CENTRAL BANK — NOT TO TAKE MONEY, BUT TO TAKE A LOOK AT SOME OF THEIR HIDDEN DATA FILES. IT IS LOCATED ON 654321 W. MONEY DRIVE. WHAT’S HIDDEN IN THERE MIGHT HELP US CONFUSE THINGS EVEN MORE — AND THAT IS GOOD FOR OUR PLAN! LASTLY, WE WILL VISIT THE MEGALOPOLIS COURTHOUSE. IT IS FOUND AT 78910 N. CENTRAL AVENUE. IT IS THERE THAT WE’LL SEND OUR FINAL MESSAGE — A HARMLESS PRANK THAT WILL SHOW JUST HOW CLEVER WE ARE WITH OUR IDEAS. THIS IS YOUR CHALLENGE: CRACK THE CODES, TRACK THE SIGNALS, AND STOP US IF YOU CAN. ONLY WITH A STRONG TEAM, A LOT OF WILL, AND THE COURAGE TO DO IT CAN YOU DEFEND THE CITY. LET’S SEE IF YOU HAVE GOT WHAT IT TAKES!"
  const decryptedCiphertext = document.getElementById('decryptedCiphertext').value;
  if(removeWhitespace(decryptedCiphertext) == removeWhitespace(plaintext)) {
    alert(flag);
  }
});
