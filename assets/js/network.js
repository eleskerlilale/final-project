const network = {
    // url : 'https://northwind.vercel.app/api/products/',
    // url : "https://api.themoviedb.org/3/movie/now_playing?api_key=233029fa6ff0c910354e5553874c41e9",
    url1: "http://localhost:3000/main/",
    url2: "http://localhost:3000/account/",
    url3: "http://localhost:3000/ticket/",
    url4: "http://localhost:3000/blog/",
    url5: "http://localhost:3000/mainaccount/",
    getfetch: async function () {
        let res = await fetch(this.url1);
        return res.json();
    },
    getfetchById: async function (id) {
        let res = await fetch(this.url1 + id);
        return res.json();
    },
    getFetchDelete: async function (id) {
        let res = await fetch(this.url1 + id, {
            method: 'DELETE',
        })
        return res.json();
    },
    getmainpost: async function (data) {
        let res = await fetch(this.url1, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return res.json();
    },
    getfetchput: async function (id, data) {
        let res = await fetch(this.url1 + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        });
        return res.json();
    },
    getmainPath : async function(id , data){
        let res = await fetch(this.url1 + id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        })
        return res.json();
    }
    ,
    getfetchaccount: async function () {
        let res = await fetch(this.url2);
        return res.json();
    },
    getaccountDelete: async function (id) {
        let res = await fetch(this.url2 + id, {
            method: 'DELETE',
        })
        return res.json();
    },
    getaccountpath : async function(id, data){
        let res = await fetch(this.url2 + id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        });
        return res.json();
    },
    getpostaccount: async function (data) {
        let res = await fetch(this.url2, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return res.json();
    },

    getfetchticket : async function (){
        let res =await fetch(this.url3);
        return res.json()
    },
    getTicketPath : async function(id , data){
        let res = await fetch(this.url3 + id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        })
        return res.json();
    }
    ,
   
    getblog : async function(){
        let res = await fetch(this.url4)
        return res.json();
    },
    getblogById: async function (id) {
        let res = await fetch(this.url4 + id);
        return res.json();
    },
    getMainaccount: async function () {
        let res = await fetch(this.url5);
        return res.json();
    },
    getmainaccountpath : async function(id, data){
        let res = await fetch(this.url5 + id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        });
        return res.json();
    },
    getpostmainaccount: async function (data) {
        let res = await fetch(this.url5, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return res.json();
    },
}

