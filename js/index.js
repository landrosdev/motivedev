// Selectionner
const citation_content = document.getElementById("citation_content")
const citation_img = document.getElementById("citation-img")
const autor = document.getElementById("autor")
const citaion_btn = document.getElementById("citaion_btn")



// fucntion pour avoir citaion aleatoire
function getCitationAleatoire() {
    const index = Math.floor(Math.random() * citations.length)
    return citations[index]
}

// Afficher les citaions
function afficherNouvelleCitation() {
    const citation = getCitationAleatoire()
    citation_content.textContent = `"${citation.texte}"`
    autor.textContent = `— ${citation.auteur}`
    citation_img.src = citation.image
}

// Citaion par defaut
citaion_btn.addEventListener("click", afficherNouvelleCitation)
window.addEventListener("load", afficherNouvelleCitation)