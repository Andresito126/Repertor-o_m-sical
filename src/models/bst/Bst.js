import Node from "./Node.js"
class BST {

    #root

    constructor(root){
        this.root = null; 
    }

    //funcion añadir
    add(value){
        if (this.#root == null)
            this.#root = new Node(value)
        else
        this.insertNode(this.#root, value)
    }

    insertNode(node, value){

        if(value.title < node.value.title){
            if(node.left == null)
                node.left = new Node (value)
            
            else
                this.insertNode(node.left, value)
        }
        else{
            if(node.right == null)
                node.right = new Node (value)
            
            else
            this.insertNode(node.right, value)
        }
    }


    //funcion buscar

    search(value) {
        return this.searchNode(this.#root, value);
    }

    searchNode(node, value) {
        if (node == null) {
            return null;
        }
        if (node.value.title == value) {
            return node.value;
        }
        if (value < node.value.title) {
            return this.searchNode(node.left, value);
        } else {
            return this.searchNode(node.right, value);
        }
    }


    //funcion buscar Min

    min(){
        return this.searchMin(this.#root)
    }

    searchMin(node) {
        if (node == null) {
            return node.value //node
        }
        else{
        if (node.left == null) {
            return node.value
        } else {
            return this.searchMin(node.left);
            }
        }
    }
    
    //funcion buscar Max

    max(){
        return this.searchMax(this.#root)
    }

    searchMax(node) {
        if (node == null) {
            return node.value;
        }else{

        
        if (node.right == null) {
            return node.value;
        } else {
            return this.searchMax(node.right);
            }
        }
    }


    //funcion mostar todos los datos

    inOrder(callback) {
        this.inOrderHelper(this.#root, callback);
    }

    inOrderHelper(currentNode, callback) {
        if (currentNode !== null) {
            this.inOrderHelper(currentNode.left, callback);
            callback(currentNode.value);
            this.inOrderHelper(currentNode.right, callback);
        }
    }


}

export default BST;