export function getTeam() {

    // return fetch("http://localhost:7070/api/products")
    //         .then(response => {
    //             return response.json();
    // });

    return fetch("http://localhost:7070/api/team")
        .then(response => {
        return response.json();
    })        
           
}