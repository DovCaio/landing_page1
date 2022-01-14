const cabecalho =  document.querySelector(".imagen-introducao")
const caixa_azul = document.querySelector(".blue-box")
const no_fundo = document.querySelector(".no-fundo")
const h2 = document.querySelector(".titu h2")
const prime_para = document.querySelector(".prime-cont p")
const mulh_img = document.querySelector(".apresentacao img")
const check_list = document.querySelector(".check-list")
const footer = document.querySelector(".default")

console.log(cabecalho.scrollTop)

function aumentarOpacidade(elemento){
	let opacidade = 0
	elemento.style.display = "block"
	var intervaloopacity = setInterval(_ => {
		elemento.style.opacity = `${opacidade}`
		if (opacidade >= 1){
			clearInterval(intervaloopacity)
		}else{
			opacidade += 0.1
		}
	}, 50)
}
const cordenadas_opacidade = [0, 212, 513, 754, 754, 1390]
const elemento_equivalente = [caixa_azul, no_fundo, h2, prime_para, mulh_img, check_list]
var equivalente = 0
const ate_final = setInterval(a => {
	var rolagem = window.pageYOffset
	console.log(rolagem)
	console.log(elemento_equivalente[equivalente], cordenadas_opacidade[equivalente])
	if (rolagem >= cordenadas_opacidade[equivalente]){
		aumentarOpacidade(elemento_equivalente[equivalente])
		equivalente += 1
	}
}, 500)
