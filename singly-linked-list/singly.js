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
        }
        let current=this.head;
        this.head=newnode;
        this.head.next=current;
        this.length++;
        console.log('the new head is the ',this.head,'and the neaxt of the head is the ',this.head.next)
    }

    
}
let first=new singlylinkedlist();
first.push("dhanush");
first.push("Devansh");
first.push("Dhruva")
first.unshift("Divya");


