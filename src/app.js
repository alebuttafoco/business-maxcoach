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
        approachData:[
            {
                img:null,
                title:'One to One',
                text: 'Getting the necessaty clarity about the current state to help you to improve your game.',
            },
            {
                img: null,
                title: 'Anywhere',
                text: 'Access to valuable and portable program which allow you to setup and live anywhere you want.',
            },
            {
                img: null,
                title: 'On Time',
                text: 'Puncuality is our top priority because it\'s an essential criteria to assess a program quality.',
            },
            {
                img: null,
                title: 'Online Coures',
                text: 'Online business coaching now offers you a very powerful way to empower your business into success.',
            },
            {
                img: null,
                title: 'Consulting',
                text: 'You will get a clear senso of direction for your business, throught assessment and faster results.',
            },
            {
                img: null,
                title: 'Self Development',
                text: 'Business Coaching often keep you focus and develop you both in a professional and personal way.',
            },
        ]
    },
    methods:{},
    mounted(){}
})