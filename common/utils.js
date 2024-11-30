function generateSecurePassword(length = 12) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specials = '!@#$%^&*()_+[]{}|;:,.<>?';
    const allCharacters = upper + lower + numbers + specials;
  
    let password = '';
    
    // Ensure at least one character of each type
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specials[Math.floor(Math.random() * specials.length)];
  
    // Fill the rest of the password length
    for (let i = 4; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }
  
    // Shuffle the password for randomness
    password = password.split('').sort(() => 0.5 - Math.random()).join('');
  
    return password;
  }
  
  module.exports = { generateSecurePassword };