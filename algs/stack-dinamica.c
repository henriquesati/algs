#include <stdlib.h>
#include <stdio.h>

typedef struct{
    char *letras;
    int n_itens;
    int capacity;
} stack;

void init(stack *stack){
    stack->letras = malloc(sizeof(char));
    stack->n_itens = 0;
    stack->capacity = 1;
}

void push(stack *stack, char letra){
    stack->letras[stack->n_itens++] = letra;
}

char pop(stack *stack){
    char tmp = stack->letras[--stack->n_itens];
    return tmp;
}
void show(stack *stack){
    for (int i=0; i<stack->n_itens; i++){
        printf("%c\n", stack->letras[i]);
    }
}
int main(){
    stack stack;
    init(&stack);
    push(&stack, 'a');
    push(&stack, 'b');
    printf("pop %c", pop(&stack));
     printf("pop %c", pop(&stack));

}