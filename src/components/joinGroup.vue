<template>
  <div class="join-group">
    <div class="box">
      <b-row align-h="between join-item">
        <b-col cols="4"><h3>Mensalidade</h3></b-col>
        <b-col cols="4" class="right"><h3 id="mensalidade">R$ 15,00</h3></b-col>
      </b-row>
      <hr/>

      <b-row align-h="between join-item">
        <b-col cols="4"><h3>Kotas</h3></b-col>
        <b-col cols="4" class="right">
          <h3><span id="kotas">1</span>
            <button id="increase" class="circle-button">+</button>
            <button id="decrease" class="circle-button">-</button>
          </h3>
        </b-col>
      </b-row>
      <hr/>

      <b-row align-h="between join-item">
        <b-col cols="4"><h3>Caução</h3></b-col>
        <b-col cols="4" class="right"><h3>R$ 15,00</h3></b-col>
      </b-row>
      <hr/>

      <b-row align-h="between join-total">
        <b-col><h3>Total da inscrição</h3></b-col>
        <b-col class="right"><h3 id="total">R$ 30,00</h3></b-col>
      </b-row>
      
      <b-row>
        <div class="radio-progress">
          <b-row>
            <b-col><p>R$ 30,00</p></b-col>
            <b-col><p>R$ 15,00</p></b-col>
            <b-col><p>R$ 0,00</p></b-col>
          </b-row>

          <form>
            <input type="radio" name="radio-progress" value="first" checked="checked">
            <input type="radio" name="radio-progress" value="second">
            <input type="radio" name="radio-progress" value="last">
          </form>

          <b-row>  <b-col><p>Assinatura</p></b-col>
            <b-col><p>Segundo mês</p></b-col>
            <b-col><p>Último mês</p></b-col>
          </b-row>
          
        </div>
      </b-row>

      <button class="blue-button">Participar</button>
    </div>
    <p>Você ainda não será cobrado!</p>
  </div>
</template>

<script>
let decreaseBtn = document.getElementById("decrease");
  let increaseBtn = document.getElementById("increase");
  let kotas = document.getElementById("kotas");

  decreaseBtn.addEventListener('click', ()=>{
    console.log('decrease');
  })
</script>


<script>
export default {
  name: "joinGroup",
  mounted: function() {
    //get values from elements
    let decreaseBtn = document.getElementById("decrease");
    let increaseBtn = document.getElementById("increase");
    let kotas = document.getElementById("kotas");
    let mensalidade = document.getElementById("mensalidade");
    let total = document.getElementById("total");
    let val = 0;
    let count = 0;

    //Decrease button function
    decreaseBtn.addEventListener('click', ()=>{
      count --;
      negative();
      val = 'R$ ' + count*15 + ',00';
      mensalidade.innerHTML = val;
      val = 'R$ ' + (15+count*15) + ',00';
      total.innerHTML = val;
      kotas.innerHTML = count;
    })

    //Increase button function
    increaseBtn.addEventListener('click', ()=>{
      count ++;
      val = 'R$ ' + count*15 + ',00';
      mensalidade.innerHTML = val;
      val = val = 'R$ ' + (15+count*15) + ',00';
      total.innerHTML = val;
      kotas.innerHTML = count;
    })

    //Prevent negative values
    function negative(){
      if (count <= 0){
        count = 0;
      }
    }
  }
};
</script>
