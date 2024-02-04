const network = {
    // url : 'https://northwind.vercel.app/api/products/',
    // url : "https://api.themoviedb.org/3/movie/now_playing?api_key=233029fa6ff0c910354e5553874c41e9",
    url1:"http://localhost:3000/main/",
    url2:"http://localhost:3000/account/",
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

    getfetch : async function(){
            let res= await fetch(this.url1);
            return res.json();
    },
    getfetchById : async function(id){
        let res = await fetch(this.url1+id);
        return res.json();
    },
    
    getfetchaccount : async function(){
        let res= await fetch(this.url2);
        return res.json();
    },
    getfetchpost : async function(data){
        let res = await fetch(this.url2, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          return res.json();
    },
}