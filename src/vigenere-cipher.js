const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this.process(message, key, 'encrypt');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this.process(encryptedMessage, key, 'decrypt');
  }
  process(message, key, mode) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    const result = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (alphabet.includes(char)) {
        const messageIndex = alphabet.indexOf(char);
        const keyChar = key[keyIndex % key.length];
        const keyIndexValue = alphabet.indexOf(keyChar);
        if (mode === 'encrypt') {
          const encryptedIndex = (messageIndex + keyIndexValue) % alphabet.length;
          result.push(alphabet[encryptedIndex]);
        } else if (mode === 'decrypt') {
          const decryptedIndex = (messageIndex - keyIndexValue + alphabet.length) % alphabet.length;
          result.push(alphabet[decryptedIndex]);
        }
        keyIndex++;
      } else {
        result.push(char);
      }
    }
    const finalResult = result.join('');
    return this.isDirect ? finalResult : finalResult.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
