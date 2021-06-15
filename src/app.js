const app = new Vue({
    el: "#app",
    data:{

        navbarLinks:['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
        languages: [
            {
                language: 'english',
                flag: 'gb',
            },
            {
                language: 'italiano',
                flag: 'it',
            },
            {
                language: 'español',
                flag: 'es',
            },
            {
                language: 'français',
                flag: 'fr',
            }
        ],
    },
    methods:{},
    mounted(){}
})