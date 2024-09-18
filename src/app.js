const cards = document.getElementById('cards')
const favBtn = document.getElementById('favBtn')
const favorites = new Set()

function showAll(){
    cards.innerHTML = ''
    favBtn.innerHTML =  '<button onclick="show()" class="bg-pink-500 px-8 py-2 text-white">Favorites</button>'
    data.map(item => {
        cards.innerHTML += `
            <div id="${item.id}" class="relative min-w-[200px] w-1/5 bg-white mt-11 m-4">
                <img src="${item.img}" alt="${item.name}-img" />
                <i onclick="sech(this, '${item.id}')" class="absolute top-2 right-4 fa-solid fa-heart opacity-70 text-xl hover:text-red-700 hover:opacity-100 hover:scale-150"></i>
                <div class="py-4 px-2">
                    <h2 class="text-lg font-semibold">${item.name}</h2>
                    <p class="text-[.8rem] pt-4">Qiymet: <span>${item.price}</span></p>
                </div>
            </div>
        `
    })
}showAll()

function sech(i, id) {
    if (favorites.has(id)) {
        favorites.delete(id)
        i.classList.remove('text-red-700')
    } else {
        favorites.add(id)
        i.classList.add('text-red-700')
        i.classList.add('opacity-100')
    }
}

function show() {
    favBtn.innerHTML =  '<button onclick="showAll()" class="bg-blue-500 px-8 py-2 text-white">Geriye</button>'
    cards.innerHTML = ''
    data.map(item => {
        if (favorites.has(item.id)) {
            cards.innerHTML += `
                <div id="${item.id}" class="relative min-w-[200px] w-1/5 bg-white mt-11 m-4">
                    <img src="${item.img}" alt="${item.name}-img" />
                    <i onclick='sil("${item.id}")' class="absolute top-2 right-4 fa-solid fa-heart text-red-700 hover:opacity-60 text-xl"></i>
                    <div class="py-4 px-2">
                        <h2 class="text-lg font-semibold">${item.name}</h2>
                        <p class="text-[.8rem] pt-4">Qiymet: <span>${item.price}</span></p>
                    </div>
                </div>
            `
        }
    })
}
function sil(id){
    favorites.delete(id)
    show()
}
