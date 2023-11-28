#include <stdlib.h>
#include <stdio.h>
#define show print_list(head);

typedef struct node{
    char letra;
    struct node* next;
    struct node* prev;
} node;

node* init(char letra){
    node *tmp = malloc(sizeof(node));
    tmp->letra = letra;
    tmp->next = NULL;
    tmp->prev = NULL;
    return tmp;
}

void push_end(node *head, char letra){
    node *tmp = init(letra);
    node *cur = head;
        while (cur->next != NULL){
            cur = cur->next;
        }
        cur->next = tmp;
        tmp->prev = cur;
}

void push_front(node *head, char letra){
    node *tmp = init(letra);
    node *cur = head;
        while (cur->next != NULL)
            cur=cur->next;
        cur->next = tmp;
        tmp->prev = cur;
}


void print_list(node* head){
    for (node *p = head; p!=NULL; p=p->next)
        printf("-->%c", p->letra);
    puts(" ");
}

void print_backwards(node* head){
    puts("label backwards");
    node *cur = head;
        while (cur->next != NULL)
            cur = cur->next;
        for(node *p = cur; p!= NULL; p = p->prev)
            printf("-->%c", p->letra);
}

int main(){
    node *head = init('a');
    show;
    push_end(head, 'b');
    show;
    push_end(head, 'd');
    show;
    printf("%c", head->next->next->letra);
    print_backwards(head);
}