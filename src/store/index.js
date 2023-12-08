import {createStore} from 'vuex'

export default createStore ({
    strict:true,
    state:{
        postList:[
            {
                "postId": 1,
                "date": "20.10.2023",
                "pictureURI": "https://www.ikea.com/au/en/images/products/kopparfall-picture-moonscape__0997459_pe822680_s5.jpg",
                "text": "The efficiency we have at removing trash has made creating trash more acceptable.",
                "likeCount": 0
              },
              {
                "postId": 2,
                "date": "21.10.2023",
                "pictureURI": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZy-JvmFg4UkhpwbpQqZO0XdyRmwVYtw1Abg&usqp=CAU",
                "text": "The truth is that you pay for your lifestyle in hours.",
                "likeCount": 0
              },
              {
                "postId": 3,
                "date": "22.10.2023",
                "pictureURI": "",
                "text": "Flash photography is best used in full sunlight.",
                "likeCount": 0
              },
              {
                "postId": 4,
                "date": "22.10.2023",
                "pictureURI": "https://hips.hearstapps.com/hmg-prod/images/indexx-1660228785.jpg?crop=0.622xw:1.00xh;0.204xw,0&resize=980:*",
                "text": "He fumbled in the darkness looking for the light switch, but when he finally found it there was someone already there.",
                "likeCount": 0
              },
              {
                "postId": 5,
                "date": "22.10.2023",
                "pictureURI": "",
                "text": "Nobody loves a pig wearing lipstick.",
                "likeCount": 0
              },
              {
                "postId": 6,
                "date": "23.10.2023",
                "pictureURI": "",
                "text": "My secretary is the only person who truly understands my stamp-collecting obsession.",
                "likeCount": 0
              },
              {
                "postId": 7,
                "date": "23.10.2023",
                "pictureURI": "https://www.wallstreetmojo.com/wp-content/uploads/2019/05/VBA-Random-Numbers.jpg.webp",
                "text": "As the asteroid hurtled toward earth, Becky was upset her dentist appointment had been canceled.",
                "likeCount": 0
              },
              {
                "postId": 8,
                "date": "23.10.2023",
                "pictureURI": "",
                "text": "Malls are great places to shop; I can find everything I need under one roof.",
                "likeCount": 0
              },
              {
                "postId": 9,
                "date": "23.10.2023",
                "pictureURI": "",
                "text": "He wondered if she would appreciate his toenail collection.",
                "likeCount": 0
              },
              {
                "postId": 10,
                "date": "23.10.2023",
                "pictureURI": "",
                "text": "He learned the important lesson that a picnic at the beach on a windy day is a bad idea.",
                "likeCount": 10
              }
        ]
    },
    getters:{

    },
    mutations:{
        likePost(state,{postId}){
            state.postList[postId-1].likeCount+=1
        },
        resetAllLikes(state){
            state.postList.forEach(post => {
                post.likeCount=0 //state.postList[post.postId].likeCount
            });
        }
    },
    actions:{
      likePostAct: function(act,{postId}){
        act.commit('likePost', {
            postId: postId
        });
      },
      resetAllLikesAct: act => {
        act.commit("resetAllLikes")
      }
    }
})