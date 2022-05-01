/* The below class is given for use as Nodes
class Node {
  int data;
  Node next;
  Node(int d) {
    data=d;
  }
} */
class Result {
  static int loopInList(Node head) {
    // Write your code here
    if(head == null)
      return 0;
    else{
      Node fast = head;
      Node slow = head;
      slow = slow.next;
      if(fast != null && fast.next != null){
        fast = fast.next.next;
      while(fast !=null && fast.next != null){
        if(fast == slow)
          break;
        else{
          slow = slow.next;
          fast = fast.next.next;
        }
      }
      if(fast == null || fast.next == null)
        return 0;
      slow = head;
      while(slow != fast){
        slow = slow.next;
        fast = fast.next;
      }
      int count = 0;
      Node temp = slow;
      do{
        count++;
        temp = temp.next;
      }while(temp != slow);
      return count;
      }
    }
    return 0;
  }
}
