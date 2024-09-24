
//common function -1
function inputvalu(id){
 const input =  document.getElementById(id).value 
 return input
}

//hidden function
function hibbenById(id){
    document.getElementById('card-section').classList.add('hidden')
    
    document.getElementById('history-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')

}

function buttonCluor(id){
    document.getElementById('btn-1').classList.remove('bg-[#b4f461]')
    document.getElementById('btn-2').classList.remove('bg-[#b4f461]')

    document.getElementById(id).classList.add('bg-[#b4f461]')


}



 document.getElementById('card-btn-1').onclick = function (){
     
    }
 document.getElementById('card-btn-2').onclick = function (){
}
 document.getElementById('card-btn-3').onclick = function (){
}

