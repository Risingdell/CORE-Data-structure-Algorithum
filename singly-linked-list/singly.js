class Node{
    constructor(val){
        this.value=val;
        this.next=null;
    }
}
class singlylinkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        let newNode= new Node(val);
        if(this.head==null){
            this.head= newNode;
            this.tail= newNode;
            

        }else{
            this.tail.next= newNode;
            this.tail= newNode;
            
           
        }
        this.length++;
        return this;
    }
    // pop(){
    //     if(this.head===null && this.length==0){
    //         return 0;
    //     }
        
    //     let current=this.head;
    //     let temp=current;
    //     while(current.next

    //     ){
    //         temp=current;
    //         current=current.next;
    //     }
    //     console.log(`the deleted item is`,temp.next)
        

    //     this.tail=temp;
    //     this.tail.next=null
    //     this.length--;
    //     console.log(this.tail);
    // }
    pop(){
        if(this.head===null){
            return null;
        }
        let current=this.head;
        let temp=this.head;
        while(current.next){
            temp=current;
            current=current.next;
        }
        
        this.length--;
        this.tail=temp;
        this.tail.next=null;
        
        console.log('the length of the sll is',this.length);
        return current;
    }
    shift(){
        if(this.head===null){
            return undefined;
        }

        let current=this.head;
        this.head=current.next;
        this.length--;
        if(this.length===0){
            this.tail=null;
        }
        console.log("the length of the sl is ",this.length)
        console.log('the deleted element is',current);
        console.log('the new head  is',this.head,'the tail is',this.tail);
        
    }
    unshift(val){
        let newnode= new Node(val);
        if(!this.head){
            this.head=newnode;
            this.tail=newnode;
        }else{                                                                                  
        let current=this.head;
        this.head=newnode;
        this.head.next=current;
        }
        this.length++;
        console.log('the new head is the ',this.head,'and the neaxt of the head is the ',this.head.next);
        return this;
    }
    get(index){
        
        if(index<0 || index>=this.length){
            return null
        }
        let count=0;
        let current=this.head;
        while(count!==index){
            current=current.next;
            count++;

        }
        return current;
    }
    set(index,value){
        let replace=this.get(index);
        if(!replace){
            return false;
        }else{
            replace.value=value;
        };
        return replace.val;
    }
    insert(index,value){
        if(index<0 || index>this.length){
            return false;
        }else if(index==this.length){
            this.push(value);

        }else if(index==0){
            this.unshift(value);

        }
        let newnode=new Node(value);
        let previousNode=this.get(index-1);

        newnode.next=previousNode.next;
        previousNode.next=newnode;
        this.length++;
        return true;

    }

    display(){
        let len=0;
        let current=this.head;
    if(len=0){
        return null;
    }else{
        while(len<this.length){
            console.log(current.value);
            current=current.next;
            len++;


        }
    }
}
// remove(index){
//     if(index<0 || index>=this.length){
//         return false;
//     }else if(index===0){
//         return this.shift();
//     }else if(index===this.length-1){
//         return this.pop();
//     }
//     let ele= this.get(index-1);
//     let pastEle=this.get(index+1);
//     let pastEle1=this.get(index);
//     console.log(ele);
//     console.log(pastEle);
//     console.log(pastEle1);
//     ele.next=pastEle;
//     this.length--;

// }
remove(index){
    if(index<0 || index>=this.length){
        return false;
    }else if(index===0){
        return this.shift();
    }else if(index===this.length-1){
        return this.pop();
    }
    let previousNode=this.get (index-1);
    let removed= previousNode.next;
    previousNode.next=removed.next;
    this.length--;
    return removed.value;

}
reverse(){
    let node =this.head;
    this.head=this.tail;
    this.tail=node;
    let prev=0;
    let next;
    for(let i=0;i<this.length;i++){
        next=node.next;
        node.next=prev;
        prev=node ;
        node=next
    }
}
}
let first=new singlylinkedlist();
first.push("dhanush");
first.push("Devansh");
first.push("Dhruva");
first.push("Divya");
first.push("priya");
first.push("amma");

// console.log(first.get(2));
// first.set(0,"devanush");4
// // console.log(first.insert(2,"Devnsh"));
// console.log(first.remove(3))
first.reverse();
// first.insert(2,"Devnsh");
first.display();

