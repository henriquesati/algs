interface MyNode {
    content: any,
    next: MyNode | null
}

class LinkedListNode implements MyNode {
    content: object;
    next: MyNode | null;

    constructor(content: object) {
        this.content = Object,
        this.next = null;
    }
}

class LinkedList {
    private head: MyNode | null;
    private headnull: boolean

    constructor(content?: MyNode) {
        this.head = content || null;
        this.headnull = this.head === null? true : false;
    }

    push(...nodes: MyNode[]): void{
        if (nodes.length == 0) { return ;}
        let tail: MyNode;

         if (this.headnull) { //na primeira iteração do push no objeto, o primeiro item passado como argumento e registrado como head
            this.head = nodes[0]; 
            this.headnull = false; 
            tail = nodes[0]
        } else
        {
            tail = this.get_tail() ?? nodes[0]
        }
        
        nodes.forEach((node: MyNode, index=this.choose_index(), array) => {
            tail.next = array[index];
            tail = array[index]
        })
    }


    get_tail(node?: MyNode): MyNode | null {
        if (this.headnull) {return  null;}
        let current = this.head;
        if (current === null) {
            throw new Error("Tail não pode ser null em push!");
        }
        while (current.next !== null) {
            current = current.next;
        }
        return current;
    }
    choose_index(): number {
        return this.headnull == true? 1: 0;
    }
    

}


console.log("Hiii")
const list = new LinkedList();
console.log("1", list["headnull"])
const node1: MyNode = { content: 5, next: null };
const node2: MyNode = { content: 6, next: null };
const node3: MyNode = { content: 7, next: null };
const node4: MyNode = { content: 8, next: null };
list.push(node1,node2,node3, node4)
console.log(list)
console.log(list["headnull"])


const n1 = { content: 9, next: null };
list.push(n1)

let curr = list["head"];
while (curr !== null) {
    console.log(curr.content); // Imprime apenas o conteúdo do nó
    curr = curr.next;
}