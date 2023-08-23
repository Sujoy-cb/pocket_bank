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


// Add button //

let addRecord = document.querySelector('.add_record')

let addrecordModal = document.querySelector('.addrecord_modal')
let hideModal = document.querySelector('.hide_modal')

addRecord.addEventListener('click',()=>{
    addrecordModal.classList.add('modalshow')
    addrecordModal.classList.remove('hidden')
})

hideModal.addEventListener('click',()=>{
    addrecordModal.classList.add('hidden')
    addrecordModal.classList.remove('modalshow')
})


// Sidebar Menu //

let outer_menu = document.querySelectorAll('.outer_menu')
let inner_menu = document.querySelector('.inner_menu')

outer_menu.forEach((item)=>{
    item.addEventListener('click',()=>{
        inner_menu.classList.toggle('innershowmenu')
    })
})
