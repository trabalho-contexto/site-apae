export class Transtorno {
    titulo: string
    descricao: string
    link: string
    caracteresAOcultar: number

    constructor (
        titulo: string = '',
        descricao: string = '',
        link: string = '',
        caracteresAOcultar: number = 100
    ) {
        this.titulo = titulo       
        this.descricao = descricao       
        this.link = link       
        this.caracteresAOcultar = caracteresAOcultar
    }
}