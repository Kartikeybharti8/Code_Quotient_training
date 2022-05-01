void QueueArray::enQueue(int value)
{
    if ((front == 0 && rear == SIZE-1) ||
            (rear == (front-1)%(SIZE-1)))
    {
        return;
    }
    else if (front == -1) /* Insert First Element */
    {
        front = rear = 0;
        queue[rear] = value;
    }
    else if (rear == SIZE-1 && front != 0)
    {
        rear = 0;
        queue[rear] = value;
    }
    else
    {
        rear++;
        queue[rear] = value;
    }
}
// Function to delete element from Circular Queue
int QueueArray::deQueue()
{
    if (front == -1)
    {
        return -1;
    }
    int data = queue[front];
    queue[front] = -1;
    if (front == rear)
    {
        front = -1;
        rear = -1;
    }
    else if (front == SIZE-1)
        front = 0;
    else
        front++;
    return data;
}
