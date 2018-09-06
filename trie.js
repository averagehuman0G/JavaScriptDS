function TrieNode(char) {
    this.char = char;
    this.isWord = false;
    this.children = new Map();
}

var Trie = function() {
    this.root = new TrieNode('');    
};

/**
 * Inserts a word into the trie. 
 */

Trie.prototype._search = function (string) {
    let curr = this.root;
    for(let i = 0; i < string.length; i++) {
        let char = string[i];
        if(!curr.children.get(char)) return false;
        curr = curr.children.get(char);
    }
    return curr;
}

Trie.prototype.insert = function(word) {
   let curr = this.root;
   for(let i = 0; i < word.length; i++) {
       let char = word[i];
       if(!curr.children.get(char)) {
            curr.children.set(char, new TrieNode(char));   
            curr = curr.children.get(char);
       } else {
           curr = curr.children.get(char);
       } 
   } 
    curr.isWord = true;
};

/*
 * Returns true if the word is in the trie, false otherwise. 
 */

Trie.prototype.search = function(word) {
    let curr = this._search(word);  
    if(curr && curr.isWord) {
        return true;        
    }
    return false;
};

/*
 * Returns true if there is a word in the trie with the given prefix or the prefix is a word. 
 */

Trie.prototype.startsWith = function(prefix) {
    let curr = this._search(prefix);
    if(curr && (curr.isWord || curr.children.size > 0)) {
        return true;
    }
    return false;
};
