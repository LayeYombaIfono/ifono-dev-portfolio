
function normalizePage() {
    // Fonction pour normaliser un nœud de texte
    function normalizeNodeText(node) {
        // Normaliser le contenu texte en NFC
        node.textContent = node.textContent.normalize('NFC');
    }

    // Parcourir tous les nœuds de texte de la page
    function traverseAndNormalize(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            normalizeNodeText(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Parcourir récursivement les enfants de l'élément
            node.childNodes.forEach(traverseAndNormalize);
        }
    }

    // Appliquer la normalisation à tout le body
    traverseAndNormalize(document.body);

   
}
