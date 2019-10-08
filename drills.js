
const BinarySearchTree = require('./BinarySearchTree')

function main () {
    const BST = new BinarySearchTree();
    const inserts = [3,1,4,6,9,2,5,7]
    const strings = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E' ,'S', 'T', 'I', 'O' ,'N']
    strings.forEach ( element =>   BST.insert(element))
    return BST;
}
console.log(main());

