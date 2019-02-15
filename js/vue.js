
new Vue({
    el:"#app",
    data:{
        questions:[],

        // isShown: false
        count: 0,
        email: 'email',
        subject:null,
        question:'question',
    },
    
    created(){
        axios.get("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.sandbox.auth0-extend.com/faqserver/")
        .then(response =>{
            this.questions=response.data;
            this.questions.forEach(q =>{
                Vue.set(q, 'isShown', false); //voir doc de vue, pour pouvoir vour le box 'reponse'
            })
        })
    },

    methods:{
        toggle(q){
        q.isShown = !q.isShown;  
        },

        incrementCount (){
            this.count++;
          if(this.count > 5){
            // this.highValue = true;
            // q.answer
          }
       },

       send(){
        axios.post("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.sandbox.auth0-extend.com/faqserver/", this.email)
        .then(response => {
            console.log(response.data)
        })
        },
    }


})