<template>
    <div class="overlay-delete">
      <v-col v-if="checkreport == false" class="d-flex justify-center align-center">
        <v-card class="popup-report-com">
          <p class="logo-disconnect-delete">
            <img class="logo-white" src="../static/logo/logo.png" alt="logo" />
            <span>La team SocNet</span>
          </p>
          <p v-if="!reportconfirm" id="span-report-post">
            <v-icon class="img-flag">mdi-flag</v-icon>
            Signaler la publication
            <v-icon class="img-flag">mdi-flag</v-icon>
          </p>
          <p v-else id="span-report-post-titre">
            <v-icon class="img-flag">mdi-flag</v-icon>
            Signalement reçu
            <v-icon class="img-flag">mdi-flag</v-icon>
          </p>
          <p v-if="!reportconfirm" id="span-report-post-2">
            Ce profil vous offense signaler le
          </p>
          <div v-if="reportconfirm" id="span-report-post-signal">
            <h4>La team SocNet</h4>
            <span id="span-report">
              vous remercie et va étudier le cas au plus vite,
            </span>
            <span id="span-report">
              N'hésitez pas à contacter la direction ou l'administrateur de réseau
              SCUD poste 26 si le cas est grave.
            </span>
          </div>
          <v-btn
            v-if="!reportconfirm"
            id="btn-notreport-comfirm"
            @click="$emit('close-modale-report-user')"
          >
            <span>Retour</span>
          </v-btn>
          <p v-if="!reportconfirm" class="comfirm-span-delete">
            N'hésitez pas !!
          </p>
          <v-btn
            v-if="!reportconfirm"
            @click="(reportconfirm = !reportconfirm),reportPost()"
            id="btn-report-comfirm"
          >
            <span>Signaler</span>
          </v-btn>
    
        </v-card>
      </v-col>
      <v-col v-else class="d-flex justify-center align-center">
        <v-card class="popup-report-com">
          <p class="logo-disconnect-delete">
            <img class="logo-white" src="../static/logo/logo.png" alt="logo" />
            <span>La team SocNet</span>
          </p>
          <p  id="span-report-post-titre">
            <v-icon class="img-flag">mdi-flag</v-icon>
            Signalement reçu
            <v-icon class="img-flag">mdi-flag</v-icon>
          </p>
          <p v-if="!reportconfirm" id="span-report-post-2">
            Vous avez déjà signalé ce profil
          </p>
          <div id="span-report-post-signal">
            <h4>La team SocNet</h4>
            <span id="span-report">
            va étudier le cas au plus vite,
            </span>
            <span id="span-report">
              N'hésitez pas à contacter la direction ou l'administrateur de réseau
              SCUD poste 26 si le cas est grave.
            </span>
          </div>
          <v-btn
            v-if="!reportconfirm"
            id="btn-notreport-comfirm"
            @click="$emit('close-modale-report-user')"
          >
            <span>Retour</span>
          </v-btn>
         
        
        </v-card>
      </v-col>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    // name: 'Delete',
    async mounted(){
        this.signaluser = []
     
      const infoprofil = JSON.parse(localStorage.getItem('info-signal-profil'))
      this.userFromFullnameP = infoprofil.userFfullP
      this.userFromIdP = infoprofil.userFidP
      this.userSignalIdP = infoprofil.userSidP
      this.userSignalFullnameP = infoprofil.userSfullP
       await this.$axios.get(`/api/user/${this.userSignalIdP}`)
    //  await axios.get(`http://localhost:5000/api/user/${this.userSignalIdP}`)
          .then((profil) => {
            localStorage.removeItem('info-signal-profil')
            this.signaluser = profil.data.profilSignalBy
            this.signaluser.forEach((user)=>{
          if (user.signalById.includes(infoprofil.userFidP)) this.checkreport = true })
          }).catch((err) => { console.log(err);});
    },
  
    data() {
      return {
        reportconfirm: false,
        userFromFullnameP: '',
        userFromIdP : '',
        userSignalIdP : '',
        userSignalFullnameP:'',
        checkreport : false,
        signaluser : [],
      }
    },
    methods: {
      reportPost() {
        const sendInfo = {
      userFromFullname: this.userFromFullnameP,
      userFromId: this.userFromIdP,
      userSignalId :this.userSignalIdP,
      userSignalFullname: this.userSignalFullnameP,
        }
         this.$axios.patch(`/api/user/signalUser/${this.userSignalIdP}`,sendInfo)
        // axios.patch(`http://localhost:5000/api/user/signalUser/${this.userSignalIdP}`,sendInfo)
        .then((doc)=>{
            this.signaluser = []
        })
        setTimeout(() => {
          this.$emit('close-modale-report-comfirm-user')
        }, 1500)
      },
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
  
  .popup-report-com {
    padding-bottom: 1%;
    padding-top: 1%;
    background-color: $secondary;
    margin-top: 250px;
    width: 320px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .logo-disconnect-delete {
    display: flex;
    flex-direction: row;
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
  
  .img-flag {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding-right: 5%;
    padding-left: 5%;
    &:before {
      color: $primary;
    }
    &:hover {
      color: $secondary;
    }
  }
  
  #span-report-post {
    width: 100%;
    text-align: center;
  }
  #span-report-post-titre {
    width: 100%;
    text-align: center;
    color: rgb(37, 177, 46);
  }
  #span-report-post-2 {
    width: 100%;
    text-align: center;
    padding: 1%;
    font-style: italic;
  }
  
  #span-report-post-signal {
    width: 100%;
    text-align: center;
    padding: 1%;
    font-style: italic;
    margin-bottom: 0;
  }
  
  #span-report {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 1%;
    padding-right: 1%;
    font-style: italic;
    padding-bottom: 1%;
  }
  
  .comfirm-span-delete {
    padding-top: 3%;
  }
  
  #btn-notreport-comfirm {
    background-color: $secondary;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: green;
    margin-bottom: 1%;
    &:hover {
      background-color: green;
      color: $secondary;
    }
  }
  
  #btn-report-comfirm {
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
  