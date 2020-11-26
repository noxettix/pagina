const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const constenedorlight = document.querySelector('.imagen-light')
const hamburguesa1 = document.querySelector(".hamburguesa")


 imagenes.forEach(imagen =>{
     imagen.addEventListener('click', ()=>{
             aparecerimagen(imagen.getAttribute('src'))
         })
 })

constenedorlight.addEventListener('click', (e)=>{
    if(e.target !== imageneslight){
        constenedorlight.classList.toggle('show')
        imageneslight.classList.toggle('showimagen')
    }
})


const aparecerimagen = (imagen)=> {
    imageneslight.src = imagen
    constenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showimagen')
   hamburguesa1.style.opacity = '1'


}