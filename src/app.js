const app = new Vue({
    el: "#app",
    data:{
        navbarLinks:['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],

        languages: [
            {
                language: 'english',
                flag: 'en',
            },
            {
                language: 'français',
                flag: 'fr',
            },
            {
                language: 'deutsche',
                flag: 'de',
            }
        ],
        activeLanguage: 0,

        approachData:[
            {
                img: '1',
                title:'One to One',
                text: 'Getting the necessaty clarity about the current state to help you to improve your game.',
            },
            {
                img: '2',
                title: 'Anywhere',
                text: 'Access to valuable and portable program which allow you to setup and live anywhere you want.',
            },
            {
                img: '3',
                title: 'On Time',
                text: 'Puncuality is our top priority because it\'s an essential criteria to assess a program quality.',
            },
            {
                img: '4',
                title: 'Online Coures',
                text: 'Online business coaching now offers you a very powerful way to empower your business into success.',
            },
            {
                img: '5',
                title: 'Consulting',
                text: 'You will get a clear senso of direction for your business, throught assessment and faster results.',
            },
            {
                img: '6',
                title: 'Self Development',
                text: 'Business Coaching often keep you focus and develop you both in a professional and personal way.',
            },
        ],

        exploreData: [
            {
                img:'./dist/img/home-business-service-slide-01-480x298.jpg',
                title:'Consultative Training',
                text: 'With a coach addessing multiple issues that are off balance, affecting your business in various unconsidered ways.',
            },
            {
                img: './dist/img/home-business-service-slide-02-480x298.jpg',
                title: 'Real Deal Coaching',
                text: 'Brings an exeptionally powerful opportunity. Being able to accept, to work with that opportunity.',
            },
            {
                img: './dist/img/home-business-service-slide-03-480x298.jpg',
                title: 'Advisor training Program',
                text: 'Getting high quality, entrepreneur mindset driven online business coaching, is what is needed.',
            },
        ],

        coursesData: [
            {
                img: './dist/img/course-01.jpg',
                title: 'Learning to Write as a Professional Author',
                price: '40',
            },
            {
                img: './dist/img/course-02.jpg',
                title: 'Customer-centric Info-Tech Strategies',
                price: 'Free',
            },
            {
                img: './dist/img/course-03.jpg',
                title: 'Open Programming Courses for Everyone: Python',
                price: '19',
            },
            {
                img: './dist/img/course-04.jpg',
                title: 'Academic Listening and Note-taking',
                price: '26',
            },
        ],

        FAQ: [
            {
                question: 'How can we help?',
                answer: 'How many courses you\' been on, using however many techniques and methods. Unless you\'ve come to realize the value of mindset, then you\'ve yet to understand how succes comes. With every else\'s mindset involved impacting too. Hence why business coaching is so crucial for success. ',
                active: true,
            },
            {
                question: 'Why would I need a business COACH?',
                answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus placeat blanditiis sequi reiciendis maiores odio dolorem! Aut unde magnam vitae atque, iusto ipsa illum nemo quod accusantium rem dicta reiciendis natus necessitatibus est optio quam culpa officiis deserunt delectus. Id ullam in ratione accusamus blanditiis omnis veritatis velit quas.',
                active: false,
            },
            {
                question: 'What is one-on-one coaching?',
                answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus placeat blanditiis sequi reiciendis maiores odio dolorem! Aut unde magnam vitae atque, iusto ipsa illum nemo quod accusantium rem dicta reiciendis natus necessitatibus est optio quam culpa officiis deserunt delectus. Id ullam in ratione accusamus blanditiis omnis veritatis velit quas.',
                active: false,
            },
        ],

        events: [
            {
                name: 'Storytelling Workshop',
                place: 'Texas, US',
                date: '11-22-2020',
                get day() {return dayjs(this.date).format("DD")},
                get month() { return dayjs(this.date).format("MMM")}
            },
            {
                name: 'Painting Art Contest 2020',
                place: 'New York, US',
                date: '10-10-2020',
                get day() { return dayjs(this.date).format("DD") },
                get month() { return dayjs(this.date).format("MMM") }
            },
            {
                name: 'International Art Fair 2020',
                place: 'Hamburg, Germany',
                date: '11-23-2020',
                get day() { return dayjs(this.date).format("DD") },
                get month() { return dayjs(this.date).format("MMM") }
            },
            {
                name: 'Street Performance: Call for Artists',
                place: 'Illinois, US',
                date: '12-15-2020',
                get day() { return dayjs(this.date).format("DD") },
                get month() { return dayjs(this.date).format("MMM") }
            },
            {
                name: 'Consumer Food Safety Education Conference',
                place: 'Illinois, US',
                date: '07-22-2020',
                get day() { return dayjs(this.date).format("DD") },
                get month() { return dayjs(this.date).format("MMM") }
            },
            {
                name: 'How meditation improve your mental health?',
                place: 'Dubai',
                date: '08-12-2020',
                get day() { return dayjs(this.date).format("DD") },
                get month() { return dayjs(this.date).format("MMM") }
            },
            
        ],

        reviews: [
            {
                firstName:'Mina',
                lastName: 'Hollace',
                profession:'Freelencer',
                title: 'High level of efficiency and scientific teaching methods',
                text: 'I\'m free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me. ',
                image: './dist/img/testimonial-avata-02.jpg',
            },
            {
                firstName: 'Madley',
                lastName: 'Pondor',
                profession: 'IT Specialist',
                title: 'Professional team of specialists and passionate mentors ad reach',
                text: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                image: './dist/img/testimonial-avata-04.jpg',
            },
            {
                firstName: 'Florence',
                lastName: 'Themes',
                profession: 'Multimedia Admin',
                title: 'It\'s a choice of quality for people with special needs',
                text: 'I\'m very strict person so I require everything to be organized and neat. Then, I\'ll be able to make things rigth and shine. MaxCoach guys just got me.',
                image: './dist/img/testimonial-avata-03.jpg',
            },
            {
                name: 'James Bullet',
                profession: 'Freelencer',
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, impedit.',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptate culpa, qui numquam unde a, ipsa doloribus labore accusamus saepe eum quas obcaecati sit ex.',
                image: './dist/img/testimonial-avata-01.jpg',
            },
        ],
    },
    methods:{
        showFAQ(index){
            this.FAQ.forEach((data, i) => {
                if(index == i && !data.active){
                    data.active = true;
                } else {
                    data.active = false;
                }
            });
        },

        showLanguage(index){
           this.activeLanguage = index;
        }
    },
    mounted(){}
})