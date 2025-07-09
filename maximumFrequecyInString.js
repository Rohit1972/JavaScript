function getMaxFrequencyChar(str) {
  let freq = {};

  // Count frequency of each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (freq[char]) {
      freq[char] += 1;
    } else {
      freq[char] = 1;
    }
  }

  // Find character with maximum frequency
  let maxChar = "";
  let maxCount = 0;

  for (let key in freq) {
    if (freq[key] > maxCount) {
      maxCount = freq[key];
      maxChar = key;
    }
  }

  console.log(`'${maxChar}' occurs ${maxCount} times.`);
}

// Example usage
getMaxFrequencyChar("aabaac");
