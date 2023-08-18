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


//Records//

let record = document.querySelector('.record')

let record_modal = document.querySelector('.record_modal')
let cross = document.querySelector('.cross')

record.addEventListener('click',()=>{
    record_modal.classList.add('modalshow')
    record_modal.classList.remove('hidden')
})

cross.addEventListener('click',()=>{
    record_modal.classList.add('hidden')
    record_modal.classList.remove('modalshow')
})
