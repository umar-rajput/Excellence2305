//using vuejs from cdn
// const app=Vue.createApp({
//     template:"<h1>Hello from Vuejs</h1>",
// })
//------------------------------------------

const app = Vue.createApp({
    data() {
        return {
            count: 0,
            msg: "kuch bhi",
            rawHtml: `<span style="color: red">This should be red.</span>`,

            objectOfAttrs: {
                id: 'container',
                class: 'wrapper'
            },

            seen:true,
            url:"www.google.com",
            isActive:true,
            buttonText:"Click",

        }
    },
    methods:{ 
        doSomething(){
            document.getElementById("changeColor").style.color="red";
            this.buttonText="Clicked";
        },
        greet(event) {
            alert(`Hello ${this.name}!`)

            if (event) {
              alert(event.target.tagName)
            }
          }
    }


})

app.mount('#app');