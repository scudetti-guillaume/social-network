<template>
    <div class="overlay-delete">
        <v-col class=" d-flex  justify-center align-center">

            <v-card class="popup-sort-post ">
                <p class="logo-disconnect-delete"><img class="logo-white" src="../static/logo/logo.png" />
                    <span id="span-delete-modale">Social Network</span>
                </p>
                <p id="span-del-bio">Trier les publications par : </p>
                <div class="btn-sortby">
                <li ><button class="mypost-btn" @click="$emit('close-modale-sort-mypost')" >Mes posts</button></li>
                <li ><button class="friend-btn" @click="$emit('close-modale-sort-following')" >Mes Abonements</button></li>
                <li ><button class="friend-btn" @click="$emit('close-modale-sort-follower')" >Mes Abonné(e)s</button></li>
                <li ><button class="postlike-btn" @click="$emit('close-modale-sort-like')" >Mes Likes</button></li>
                <li ><button class="postall-btn" @click="$emit('close-modale-sort-all')" >Toutes les publications</button></li>
                <li v-if="admin"><button class="postadmin-btn" @click="$emit('close-modale-sort-signal')" >Signalement</button></li>

               </div>
                <p class="comfirm-span-delete"></p>
                <v-btn @click="$emit('close-modale-sort')" id="btn-delete-comfirm"><span>Retour</span>
                </v-btn>
              

            </v-card>
        </v-col>
    </div>
</template>
    
    
<script>
import axios from "axios";
export default {
   
    data() {
        return {
            userjwtid: '',
            role:'',
            userid:'',
            admin: false
        }
    },
   async mounted() {
           axios.defaults.withCredentials = true;
             await this.$axios.get(`/jwtid`)
        //    await axios.get(`http://localhost:5000/jwtid`)
             .then((res) => {
               this.userjwtid = res.data;
           
               // TODO => Insert loader \\
             })
             .catch((error) => {
               console.log(error);
             });
              await this.$axios.get(`/api/user/${this.userjwtid}`)
        //    await axios.get(`http://localhost:5000/api/user/${this.userjwtid}`)
             .then((docs) => {
               this.role = docs.data.role;
               this.userid = docs.data._id;
                  if (docs.data.role != undefined) {
                    setTimeout(() => {
                        this.admin = true
                    }, 0.5);
                }
             })
             .catch((error) => {
               console.log(error);
             });
         },
}


</script>
    
<style lang="scss">
.overlay-delete {
    
    width: 100%;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    visibility: visible;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.7);
    transition: opacity 0.4s;
    z-index: 1000;
}

.friend-btn:hover{
    background-color: $secondary;
    color:$tertiary;
    border-radius: 10%;
}
.mypost-btn:hover{
    background-color: $secondary;
    color:$tertiary;
    border-radius: 10%;
}

.postlike-btn:hover{
    background-color: $secondary;
    color:$tertiary;
    border-radius: 10%;
}
.postall-btn:hover{
    background-color: $secondary;
    color:$tertiary;
    border-radius: 10%;
}
.postadmin-btn:hover{
    background-color: $secondary;
    color:$tertiary;
    border-radius: 10%;
}

.popup-sort-post {
    padding-bottom: 1%;
    padding-top: 1%;
    background-color: $secondary;
    margin-top: 250px;
    width: 320px;
    display: flex;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.popup {
    padding-bottom: 1%;
    padding-top: 1%;
    background-color: $secondary;
    max-width: 350px;
    min-width: 350px;
    width: 350px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#span-delete-modale{
    display: flex;
    margin-top: 1%;
font-style: italic;
color: $primary;
}

#span-del-bio {
    width: 280px;
    text-align: center;
}

.comfirm-span-delete {
    padding-top: 3%;
}

#btn-notdelete-comfirm {
    background-color: $secondary;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: green;
    &:hover {
        background-color: green;
        color: $secondary;
    }
}

#btn-delete-comfirm {
    color: red;
    background-color: $secondary;
    width: 100%;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: $primary;
        color: $secondary;
    }
}
</style>
    