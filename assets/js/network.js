const network = {
    url1: "http://localhost:3000/main/",
    url2: "http://localhost:3000/account/",
    url3: "http://localhost:3000/ticket/",
    url4: "http://localhost:3000/blog/",
    url5: "http://localhost:3000/mainaccount/",
    url6: "http://localhost:3000/admin/",
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
        window.location.reload()
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
    getadmin : async function() {
        let res = await fetch(this.url6)
        return res.json();
    },
    getadminpost: async function (data) {
        let res = await fetch(this.url6, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return res.json();
    },
    getadmindelete: async function (id) {
        let res = await fetch(this.url6 + id, {
            method: 'DELETE',
        })
        return res.json();
    }
}

