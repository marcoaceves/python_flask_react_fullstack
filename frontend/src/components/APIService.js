

export default class APIService{
    static UpdateArticle(id,body){
        return fetch(`http://127.0.0.1:5000/update/${id}/`, {
            'method':'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(resp => resp.json())
    }
}
