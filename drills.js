const BinarySearchTree = require('./BinarySearchTree');

function main() {
  const BST = new BinarySearchTree();
  const inserts = [3, 1, 4, 6, 9, 2, 5, 7];
  //   const strings = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];
  inserts.forEach(element => BST.insert(element));
  //   strings.forEach(element => BST.insert(element));
  return BST;
}
// console.log(main());

/* 

4. What does this program do?

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

This function sums all of the values in a tree.

*/

// const sumTree = main();
// 3, 1, 4, 6, 9, 2, 5, 7 => expect 37

// changed 'value' to 'key' because all of our values were null
function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.key + tree(t.right);
}

// console.log(sumTree);
// console.log(`

// `);
// console.log(tree(sumTree));

////////////////////////////////////////////////////////
