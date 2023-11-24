import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: {
        postList:[
            {
                id: 1,
                title:"President",
                date:"Oct 5, 2023",
                author:"John Doe",
                text:"I like this picture!",
                img:"https://pbs.twimg.com/profile_images/1447478151303647232/DB753vqx_400x400.jpg",
                likes: 0
            },
        
            {
                id: 2,
                title:"Dog",
                date:"Oct 6, 2023",
                author:"John Toe",
                text:"How much cheese would my dog buy if he would buy groceries himself?",
                img:"https://nypost.com/wp-content/uploads/sites/2/2022/02/dogs-catching-cheese-03.jpg?quality=75&strip=all&w=744",
                likes: 0
            },
        
            {
                id: 3,
                title:"Live, laugh, love",
                date:"Oct 7, 2023",
                author:"Karen Doe",
                text:"Hello! Today I taled to the store manager, because the pillow was too fluffy!",
                img:"https://hips.hearstapps.com/hbu.h-cdn.co/assets/17/27/1499448280-live-laugh-love-pillow.jpg?resize=980:*",
                likes: 0
            },
        
            {
                id: 4,
                title:"Movie review",
                date:"Oct 8, 2023",
                author:"Karen Doe",
                text:"Hello! Today I watched the movie Ratatouille and asked for a full refund, because the rat was talking, which was really fake!",
                img:"https://play-lh.googleusercontent.com/vXKWu2Mh56J6J43dpCPo6kbq3glWDHHnfN_Ut_mDj1sONOL-fNg7NYovcjj09ncSYvHo",
                likes: 0
            },
        
            {
                id: 5,
                title:"Movie review PART 2",
                date:"Oct 8, 2023",
                author:"Karen Doe",
                text:"Hello! Well apparently I can't get a full refund so I called the cinema's CEO, because this is ABSURD!",
                likes: 0
            },
        
            {
                id: 6,
                title:"Movie review FINALE",
                date:"Oct 8, 2023",
                author:"Karen Doe",
                text:"Hello! Well I got banned from the cinema and I called the police. I can't believe this! This is an absolute violation of my rights! You know, the USA has free speech for everyone, and you can't just silence me.",
                likes: 0
            },
        
            {
                id: 7,
                title:"Cat",
                date:"Oct 10, 2023",
                author:"Melissa Kull",
                text:"Look at this cutie!",
                img:"https://www.womansworld.com/wp-content/uploads/2024/08/cute-cats.jpg?w=953",
                likes: 0
            },
        
            {
                id: 8,
                title:"How to do QuickSort?",
                date:"Oct 10, 2023",
                author:"JJ",
                text:"Hello, here is my step by step guide on how to use QuickSort algorithm",
                img:"https://miro.medium.com/v2/resize:fit:672/0*UhtvKDTP7-srp75V",
                likes: 0
            },
            
            {
                id: 9,
                title:"BSH järgmine skandaal",
                date:"Oct 11, 2023",
                author:"Kroonika",
                text:"Klikka meie uudisel, et näha mida BSH korraldas Võrus!",
                likes: 0
            },
        
            {
                id: 10,
                title:"Tantsukursused",
                date:"Oct 12, 2023",
                author:"Tantsustuudio Ketter",
                text:"Tule osale meie algajate tantsukursustel, mis paneb igas vanuses inimeste puusad nõksuma",
                img:"https://previews.123rf.com/images/jemastock/jemastock1609/jemastock160900168/61996054-girl-boy-cartoon-avatar-dancer-dance-studio-academy-advertising-icon-colorful-design-splash.jpg",
                likes: 0
            }
            ]
    },
    getters: {

    },
    mutations: {
        likePost: (state, postId) => {
            const post = state.postList.find((p) => p.id === postId);
            if (post) {
            post.likes += 1;
      }
    
    },
    removeLikes: state => {
        state.postList.forEach(post => {
            post.likes = 0;
        })
    }
},
    actions: {
        likePostAct: (act, postId) => {
            setTimeout(function() {
                act.commit("likePost", postId)
            }, 100)
    },
    removeLikesAct: act => {
        setTimeout(function() {
            act.commit("removeLikes")
        }, 1000)
    }
}
})