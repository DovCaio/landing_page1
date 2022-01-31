const cabecalho =  document.querySelector(".imagen-introducao")
const caixa_azul = document.querySelector(".blue-box")
const no_fundo = document.querySelector(".no-fundo")
const h2 = document.querySelector(".titu h2")
const prime_para = document.querySelector(".prime-cont p")
const mulh_img = document.querySelector(".apresentacao img")
const check_list = document.querySelector(".check-list")
const footer = document.querySelector(".default")


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
console.log(h2.getBoundingClientRect())
const tamanho_tela = window.screen.width

if (tamanho_tela >= 601){
	var cordenadas_opacidade = [0, no_fundo.getBoundingClientRect().y - 250, h2.getBoundingClientRect().y - 175, prime_para.getBoundingClientRect().y - 250, mulh_img.getBoundingClientRect().y - 250, check_list.getBoundingClientRect().y - 175 ]
	var elemento_equivalente = [caixa_azul, no_fundo, h2, prime_para, mulh_img, check_list]
}else{
	
	var cordenadas_opacidade = [0, no_fundo.getBoundingClientRect().y - 300, mulh_img.getBoundingClientRect().y - 175, h2.getBoundingClientRect().y - 300, prime_para.getBoundingClientRect().y - 300, check_list.getBoundingClientRect().y - 175 ]
	var elemento_equivalente = [caixa_azul, no_fundo, mulh_img, h2, prime_para, check_list]
}
var equivalente = 0
const ate_final = setInterval(a => {
	var rolagem = window.pageYOffset
	if (rolagem >= cordenadas_opacidade[equivalente]){
		aumentarOpacidade(elemento_equivalente[equivalente])
		equivalente += 1
	}
}, 500)
