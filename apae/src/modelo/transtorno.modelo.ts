export class Transtorno {
    titulo: string
    descricao: string
    link: string

    constructor (
        titulo: string = '',
        descricao: string = '',
        link: string = '',
    ) {
        this.titulo = titulo       
        this.descricao = descricao       
        this.link = link       
    }
}