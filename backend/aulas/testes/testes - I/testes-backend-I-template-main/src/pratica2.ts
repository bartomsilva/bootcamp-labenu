export const pratica2 = (n: number): boolean | null => {
    
    // se não for um number retorna null
    if (typeof n !== "number") {
        return null
    }

    //se não for um número inteiro retorna null
    if (!Number.isInteger(n)) {
        return null
    }

    // retorna true para número par e false para número impar
    return n % 2 == 0
}