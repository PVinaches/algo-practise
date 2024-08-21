// Functions
var Node = function(value, end) {
  this.value = value ? value : undefined;
  this.endWord = end;
  this.map = new Map();
}

var Trie = function() {
  this.trie = new Node(-1, false);
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.trie;

  // Has letters in common
  let pos = 0;
  let letter = word.charAt(pos);

  // Has letters in common
  while (node.map.has(letter)) {
    node = node.map.get(letter);
    pos++;
    if (pos >= word.length) break;
    letter = word.charAt(pos);
  }

  if (pos >= word.length) {
    node.endWord = true;
    return;
  }

  // Insert letters creating new nodes
  while (pos < word.length) {
    const endWord = pos == word.length - 1 ? true : false;
    node.map.set(letter, new Node(letter, endWord));
    node = node.map.get(letter);
    pos++;
    letter = word.charAt(pos);
  }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  if (this.trie.map.size == 0) return false;

  let node = this.trie;
  let pos = 0;
  let letter = word.charAt(pos);

  // Has letters in common
  while (node.map.has(letter)) {
    node = node.map.get(letter);
    pos++;
    if (pos >= word.length && node.endWord) return true;
    letter = word.charAt(pos);
  }
  return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  if (this.trie.map.size == 0) return false;

  let node = this.trie;
  let pos = 0;
  let letter = prefix.charAt(pos);

  // Has letters in common
  while (node.map.has(letter)) {
    node = node.map.get(letter);
    pos++;
    if (pos >= prefix.length) return true;
    letter = prefix.charAt(pos);
  }
  return false;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// Testing
["Trie","insert","search","search","startsWith","insert","search"]
[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]

Trie trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // return True
console.log(trie.search("app"));     // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app"));     // return True

