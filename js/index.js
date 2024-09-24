
//card-1
document.getElementById('card-btn-1').addEventListener('click', function(){
    console.log('work')//donet

    const input1 = inputvalu('input-1')
    const input = parseInt( input1)
    //console.log('typeof', input2)
if(!isNaN(input) && 0 <= input){
   document.getElementById('donet').innerText = input   //input1
  const mainBlance2 = document.getElementById('main-blance').innerText

  const mainBlance3 = parseInt(mainBlance2)

  const totalBlance = mainBlance3 + input
  document.getElementById('main-blance').innerText = totalBlance

  
    my_modal_4.showModal()
        

  my_modal_4.showModal()


 document.getElementById('input-1').value = ''
  //tranjecktion
const div = document.createElement('div')
div.classList.add('bg-[#ffffff]','border-[1px]','border-[#1111111a]','rounded-2xl','max-w-[1140px]','lg:max-h-[136px]','mx-auto','mt-8','p-8')
const h = new Date();
div.innerHTML = `<h2 class="text-[24px] font-bold"> ${input} Taka is Donated for famine-2024 at Feni, Bangladesh</h2> <br>
 Date: ${h}`
document.getElementById('tranjecktion').appendChild(div)

  
 }
else{
  alert('invalid')
}


})


//card-2

document.getElementById('card-btn-2').addEventListener('click', function(){
    const input2 = inputvalu('input-2')
    const input = parseInt(input2)
    if(!isNaN(input) && 0 <= input) { 
    document.getElementById('donet-2').innerText = input
   


  const mainBlance2 = document.getElementById('main-blance').innerText
  //const donet = parseInt(donete)
  const mainBlance3 = parseInt(mainBlance2)

  const totalBlance = mainBlance3 + input
  document.getElementById('main-blance').innerText = totalBlance
  document.getElementById('input-2').value = ''
  my_modal_4.showModal()
   
  //tranjecktion
const div = document.createElement('div')
div.classList.add('bg-[#ffffff]','border-[1px]','border-[#1111111a]','rounded-2xl','max-w-[1140px]','lg:max-h-[136px]','mx-auto','mt-8','p-8')
const h = new Date();
div.innerHTML = `<h2 class="text-[24px] font-bold"> ${input} Taka is Donated for Flood Relief in Feni,Bangladesh </h2> <br>
 Date: ${h}`
document.getElementById('tranjecktion').appendChild(div)
    }
    else{
      alert('invalid')
    }
})
//card-3


document.getElementById('card-btn-3').addEventListener('click', function(){
    const input3 = inputvalu('input-3')
    const input = parseInt(input3)

    if(!isNaN(input) && 0 <= input){
 document.getElementById('donet-3').innerText = input

 my_modal_4.showModal()
 document.getElementById('input-3').value = ''
 const mainBlance3 = document.getElementById('main-blance').innerText

  const mainBlance = parseInt(mainBlance3)

  const totalBlance = mainBlance + input
  document.getElementById('main-blance').innerText = totalBlance
    //tranjecktion
const div = document.createElement('div')
div.classList.add('bg-[#ffffff]','border-[1px]','border-[#1111111a]','rounded-2xl','max-w-[1140px]','lg:max-h-[136px]','mx-auto','mt-8','p-8')
const h = new Date();
div.innerHTML = `<h1 class="text-[24px] font-bold"> ${input} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </h1> <br>
 Date: ${h}`
document.getElementById('tranjecktion').appendChild(div)
    }  
    

    else{
      alert('invalid')
    }

})



document.getElementById('btn-1').addEventListener('click', function(){
     hibbenById('card-section')
     buttonCluor('btn-1')
     
     
})
document.getElementById('btn-2').addEventListener('click', function(){
     hibbenById('history-section')
     buttonCluor('btn-2')
     
})


