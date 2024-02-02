const network = {
    // url : 'https://northwind.vercel.app/api/products/',
    url1 : "https://api.themoviedb.org/3/movie/now_playing?api_key=233029fa6ff0c910354e5553874c41e9",
    url:"http://localhost:3000/main/",
    // url2:"http://localhost:3000/mean",
    // getAll : async function(){
    //    let res= await axios.get(this.url);
    //    return res.data;
    // },
    // getById : async function(id){
    //     let res = await axios.get(this.url+id);
    //     return res.data;
    // },
    // add : async function(body){
    //     let res = await axios.post(this.url1, body)
    //     return res.data;
    // },

    // getfetchpost : async function(data){
    //     let res = await fetch(this.url1, {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //       });
      
    //       return res.json();
    // },

    getfetch : async function(){
            let res= await fetch(this.url);
            return res.json();
    },
    getfetchById : async function(id){
        let res = await fetch(this.url+id);
        return res.json();
    }
}