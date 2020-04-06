import Vue from 'vue'
import './style.css';

const vm = new Vue({
  el: '#app',
  data: {
    hautGauche: false,
    hautDroite: false,
    basGauche: false,
    basDroite: false,
    sequence: [],
    squareMapping: ['hautGauche', 'hautDroite', 'basGauche', 'basDroite']
  },
  methods: {
    newGame(){
      this.sequence = [];
      this.addNewElemToSequence();
      this[this.sequence[0]] = true;
      setTimeout(function(){
        vm.allGray();
      }, 1000);
    },
    selectSquare(instruction){
      console.log(instruction);
    },
    addNewElemToSequence(){
      this.sequence.push(this.squareMapping[Math.floor(Math.random()*4)]);
    },
    allGray(){
      this.hautGauche = false,
      this.hautDroite = false,
      this.basGauche = false,
      this.basDroite = false
    }
  }
})