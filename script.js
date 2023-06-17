function generatePassword() {
    var length = document.getElementById("length").value;
    var lowercase = document.getElementById("lowercase").checked;
    var uppercase = document.getElementById("uppercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;
    var excludeDuplicates = document.getElementById("excludeDuplicates").checked;
    var includeSpaces = document.getElementById("includeSpaces").checked;
  
    if (!lowercase && !uppercase && !numbers && !symbols) {
      alert("Please check at least one checkbox!");
      return;
    }
  
    if (length <= 0) {
      alert("Please specify a valid password length!");
      return;
    }
  
    var lowercaseCount = parseInt(document.getElementById("lowercaseCount").value);
    var uppercaseCount = parseInt(document.getElementById("uppercaseCount").value);
    var numbersCount = parseInt(document.getElementById("numbersCount").value);
    var symbolsCount = parseInt(document.getElementById("symbolsCount").value);
  
    var totalChars = lowercaseCount + uppercaseCount + numbersCount + symbolsCount;
  
    if (totalChars > length) {
      alert("Total character count exceeds the password length!");
      return;
    }
  
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbersChars = "0123456789";
    var symbolsChars = "!@#$%^&*()_+=";
    var spaceChar = " ";
  
    var passwordChars = "";
    var password = "";
  
    if (lowercase) passwordChars += lowercaseChars;
    if (uppercase) passwordChars += uppercaseChars;
    if (numbers) passwordChars += numbersChars;
    if (symbols) passwordChars += symbolsChars;
  
    if (includeSpaces && passwordChars.length > 0) {
      passwordChars += spaceChar;
    }
  
    var chars = [];
  
    if (lowercaseCount > 0) {
      for (var i = 0; i < lowercaseCount; i++) {
        chars.push(lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length)));
      }
    }
  
    if (uppercaseCount > 0) {
      for (var i = 0; i < uppercaseCount; i++) {
        chars.push(uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length)));
      }
    }
  
    if (numbersCount > 0) {
      for (var i = 0; i < numbersCount; i++) {
        chars.push(numbersChars.charAt(Math.floor(Math.random() * numbersChars.length)));
      }
    }
  
    if (symbolsCount > 0) {
      for (var i = 0; i < symbolsCount; i++) {
        chars.push(symbolsChars.charAt(Math.floor(Math.random() * symbolsChars.length)));
      }
    }
  
    while (chars.length < length) {
      var randomChar = passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
      if (excludeDuplicates && chars.indexOf(randomChar) !== -1) {
        continue;
      }
      chars.push(randomChar);
    }
  
    password = chars.join('');
  
    document.getElementById("password").value = password;
  }  
  
  function copyPassword() {
    var passwordInput = document.getElementById("password");
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  
  //function regeneratePassword() {
  //  generatePassword();
  //}

  function refreshPage() {
    location.reload();
  }
  
  // Event listener for the length slider
  var lengthSlider = document.getElementById("length");
  var lengthValue = document.getElementById("lengthValue");
  
  lengthSlider.addEventListener("input", function() {
    lengthValue.textContent = lengthSlider.value;
  });
  
  // Event listeners for the count sliders
  var lowercaseCountSlider = document.getElementById("lowercaseCount");
  var uppercaseCountSlider = document.getElementById("uppercaseCount");
  var numbersCountSlider = document.getElementById("numbersCount");
  var symbolsCountSlider = document.getElementById("symbolsCount");
  
  var lowercaseCountValue = document.getElementById("lowercaseCountValue");
  var uppercaseCountValue = document.getElementById("uppercaseCountValue");
  var numbersCountValue = document.getElementById("numbersCountValue");
  var symbolsCountValue = document.getElementById("symbolsCountValue");
  
  lowercaseCountSlider.addEventListener("input", function() {
    lowercaseCountValue.textContent = lowercaseCountSlider.value;
  });
  
  uppercaseCountSlider.addEventListener("input", function() {
    uppercaseCountValue.textContent = uppercaseCountSlider.value;
  });
  
  numbersCountSlider.addEventListener("input", function() {
    numbersCountValue.textContent = numbersCountSlider.value;
  });
  
  symbolsCountSlider.addEventListener("input", function() {
    symbolsCountValue.textContent = symbolsCountSlider.value;
  });
  