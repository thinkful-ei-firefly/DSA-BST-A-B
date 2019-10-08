const BinarySearchTree = require('./BinarySearchTree');

function main() {
  const BST = new BinarySearchTree();
  const strings = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];
  strings.forEach(element => BST.insert(element));
  //   const inserts = [3, 1, 4, 6, 9, 2, 5, 7];
  //   inserts.forEach(element => BST.insert(element));
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
// function tree(t) {
//   if (!t) {
//     return 0;
//   }
//   return tree(t.left) + t.key + tree(t.right);
// }

// console.log(sumTree);
// console.log(`

// `);
// console.log(tree(sumTree));

////////////////////////////////////////////////////////

// 5. Height of a BST

function findBSTHeight(tree) {
  if (!tree) {
    return 0;
  }
  if (!tree.left && !tree.right) {
    return 1;
  }
  let height = 0;
  if (tree.right) {
    let rightHeight = 1 + findBSTHeight(tree.right);
    if (rightHeight > height) height = rightHeight;
  }
  if (tree.left) {
    let leftHeight = 1 + findBSTHeight(tree.left);
    if (leftHeight > height) height = leftHeight;
  }
  return height;
}

// console.log(findBSTHeight(main()));

function isItBSTree(tree) {
   if (!tree) return false ;

   if (tree.right) {
       if (tree.right.key > tree.key) {
       isItBSTree(tree.right)
       } else {
           return false
       }
   }

   if (tree.left) {
    if (tree.left.key < tree.key) {
    isItBSTree(tree.left)
    } else {
        return false
    }
}

return true

}

// console.log(isItBSTree(main()));




