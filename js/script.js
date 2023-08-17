// Porfile Drop Down //
let drop = document.querySelector('.drop')

let dropbtn = document.querySelector('.name')

dropbtn.addEventListener('click',()=>{
    drop.classList.toggle('hidden')
})

// Active Class//

let activeList = document.querySelectorAll('.nav-item')

activeList.forEach((item)=>{
    item.addEventListener('click',()=>{
        activeList.forEach((item)=>{
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})