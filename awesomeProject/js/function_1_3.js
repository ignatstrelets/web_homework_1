//const node_for_click_all = document.getElementById("for_click_all")
//
//function find_edit_all(){
//
//
//  document.getElementsByClassName('block4').innerText='Ignat'
//  document.getElementsByClassName('block5').innerText='Strelets'
//  document.getElementsByClassName('block8').innerHTML='08/26/2003'
//
//
//}
//node_for_click_all.addEventListener("click",find_edit_all)
const node_for_click_all = document.getElementById("for_click_all");



  function find_edit_all() {
    document.getElementsByTagName('p')[0].innerText = 'Strelets'
    document.getElementsByTagName('p')[1].innerText = '     Ignat'
    document.getElementsByTagName('p')[2].innerText = ' '
    document.getElementsByTagName('p')[3].innerText = '08/26/2003'
  }
node_for_click_all.addEventListener("click",find_edit_all)



