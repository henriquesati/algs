#include <stdio.h>
#include <stdlib.h>
#define show print_list(head);

typedef struct node{
    char letra;
    struct node* next;
    struct node* tail;
} node;

node* init_node(char letra){
    node *tmp = malloc(sizeof(node));
    tmp->letra = letra;
    tmp->next = NULL;
    tmp->tail = NULL;
    return tmp;
}

void append(node *head, node *node){
    if (head->next == NULL){
        head->next = node;
        head->tail = head->next;
    }
    head->tail->next = node;
    head->tail = head->tail->next;
}
void push(node *head, char letra){
    append(head, init_node(letra));
}
void print_list(node* head){
    for (node *p = head; p!=NULL; p=p->next){

        printf("-->%c", p->letra);
    }
    puts(" ");
}

int main(){
    node *head = init_node('a');
    show;
    push(head, 'b');
    push(head, 'c');
    show;
}