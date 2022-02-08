export default class Post {
    imgLink: string
    titulo: string
    descricao: string
    data: string
    caracteresAOcultar: number

    constructor (
        imgLink: string = '',
        titulo: string = '',
        descricao: string = '',
        data: string = '',
        caracteresAOcultar: number = 150
    ) {
        this.imgLink = imgLink       
        this.titulo = titulo       
        this.descricao = descricao       
        this.data = data       
        this.caracteresAOcultar = caracteresAOcultar
    }
}