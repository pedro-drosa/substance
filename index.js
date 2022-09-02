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

function delete_article(idArticle) {
  articles.splice(idArticle, 1);
  clearSection();
  fetch_all();
}

function edit_article(idArticle) {
  let article = articles[idArticle];
  let form_dom = document.forms.new_article;
  let create_button = document.querySelector('[data-button="create"]')
  let edit_button = document.querySelector('[data-button="edit"]')
  form_dom.elements.title.value = article.title;
  form_dom.elements.content.value = article.content;
  form_dom.elements.status.value = article.status;
  form_dom.elements.authors.value = article.authors.join(";");
  form_dom.elements.knowledge_area.value = article.knowledge_area;
  edit_button.style.display = "block";
  create_button.style.display = "none";
  edit_button.setAttribute("data-button-update", idArticle);
}

function fetch_all() {
  articles.forEach((elem, index) => {
    let section = document.querySelector("[data-section]");
    let article_dom = document.createElement("article");
    let title_dom = document.createElement("h2");
    let content_dom = document.createElement("p");
    let date_dom = document.createElement("span");
    let edit_button = document.createElement("button");
    let delete_button = document.createElement("button");

    title_dom.innerHTML = elem.title;
    content_dom.innerHTML = elem.content;
    date_dom.innerHTML =
      elem.updated_at == null ? elem.created_at : elem.updated_at;
    edit_button.innerHTML = "Edit";
    delete_button.innerHTML = "Delete";

    article_dom.appendChild(title_dom);
    article_dom.appendChild(content_dom);
    article_dom.appendChild(date_dom);
    article_dom.appendChild(edit_button);
    article_dom.appendChild(delete_button);

    article_dom.setAttribute("class", "articles__article");
    article_dom.setAttribute("data-article", index);
    edit_button.setAttribute("class", "button__form button__form--default");
    edit_button.setAttribute("data-button-edit", index);
    edit_button.addEventListener("click", handleEdit);
    delete_button.setAttribute("class", "button__form button__form--danger");
    delete_button.setAttribute("data-button-delete", `${index}`);
    delete_button.addEventListener("click", handleDelete);
    section.appendChild(article_dom);
  });
}

function clearSection() {
  let section = document.querySelector("[data-section]");
  section.innerHTML = "";
}

function clearForm() {
  let form_dom = document.forms.new_article;
  form_dom.elements.title.value = "";
  form_dom.elements.content.value = "";
  form_dom.elements.status.value = "";
  form_dom.elements.authors.value = "";
  form_dom.elements.knowledge_area.value = "";

}

function publicUpdates(idArticle) {
  let form_dom = document.forms.new_article;
  let title = form_dom.elements.title.value;
  let content = form_dom.elements.content.value;
  let status = form_dom.elements.status.value;
  let authors = form_dom.elements.authors.value;
  let knowledge_area = form_dom.elements.knowledge_area.value;
  articles[idArticle].title = title;
  articles[idArticle].content = content;
  articles[idArticle].status = status;
  articles[idArticle].authors = authors.split(";");
  articles[idArticle].knowledge_area = knowledge_area;
  articles[idArticle].updated_at = new Date().toLocaleDateString("pt-br");
  document.querySelector(`[data-article="0"]>h2`).textContent = title;
  document.querySelector(`[data-article="0"]>p`).textContent = content;
  edit_button.style.display = "none";
  create_button.style.display = "block";
}

function handleCreate(event) {
  event.preventDefault();
  create_article();
  clearSection();
  fetch_all();
}

function handleDelete(event) {
  let idArticle = event.target.getAttribute("data-button-delete");
  delete_article(idArticle);
}

function handleEdit(event) {
  event.preventDefault();
  let idArticle = event.target.getAttribute("data-button-edit");
  edit_article(idArticle);
}

function handleUpdate(event) {
  event.preventDefault();
  let idArticle = event.target.getAttribute("data-button-update");
  publicUpdates(idArticle);
  clearForm();
  clearSection();
  fetch_all();
}
const edit_button = document.querySelector("[data-button='edit']");
edit_button.addEventListener("click", handleUpdate);

const create_button = document.querySelector('[data-button="create"]');
create_button.addEventListener("click", handleCreate);
