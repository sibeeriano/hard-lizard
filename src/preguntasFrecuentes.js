const fs = require('fs')
let faqs = {
    db: './data/faqs.json',
    titulo: "           ***PREGUNTAS FRECUENTES***",
    leerJson: function(){
        let faqJson= fs.readFileSync(this.db, 'utf-8');
        let faq = JSON.parse(faqJson);
        return faq},

    cantidad: function(){
        return this.leerJson().total_faqs
    },
    
    
}

module.exports = faqs