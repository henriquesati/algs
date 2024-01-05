#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node{
    char letra;
    struct Node *next;
} Node;

Node* init(char letra){
    Node *node = malloc(sizeof(Node));
    node->letra = letra;
    node->next = NULL;
    return node;
}

void append(Node *head, char letra){
    Node *tmp = init(letra);
    Node *cur = head;
    while (cur->next != NULL)
            cur = cur->next;
    cur->next = tmp;
}


int main(){
    Node *head = init('p');
    append(head, 'b');
    append(head, 'c');

     for (Node *p = head; p!= NULL; p = p->next)
            printf("-->%c", p->letra);
}