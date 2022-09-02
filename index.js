var articles = [];

function create_article() {
  let form_dom = document.forms.new_article;
  let title = form_dom.elements.title.value;
  let content = form_dom.elements.content.value;
  let status = form_dom.elements.status.value;
  let authors = form_dom.elements.authors.value;
  let knowledge_area = form_dom.elements.knowledge_area.value;
  let current_date = new Date();

  let article = {
    id: articles.length,
    title: title,
    status: status,
    content: content,
    created_at: current_date.toLocaleDateString("pt-br"),
    updated_at: null,
    authors: authors.split(";"),
    knowledge_area: knowledge_area,
  };

  articles.push(article);
}
