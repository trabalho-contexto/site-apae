export default class Post {
    imgLink: string
    titulo: string
    descricao: string
    data: string

    constructor (
        imgLink: string = '',
        titulo: string = '',
        descricao: string = '',
        data: string = '',
    ) {
        this.imgLink = imgLink       
        this.titulo = titulo       
        this.descricao = descricao       
        this.data = data       
    }
}