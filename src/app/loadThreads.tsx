import axios from "axios"

export async function getThreadList() {
    const res = await axios.get('https://dados.ifmt.edu.br/dataset/6b7c7c38-587a-436b-a7b2-4e3ca59d1ca8/resource/29a42776-0693-4d33-9e58-a167ec5335b6/download/aluno.json')
    return res
}
