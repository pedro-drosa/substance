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

function fetch_all() {
  articles.forEach((elem) => {
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
    edit_button.setAttribute("class", "button__form button__form--default");
    delete_button.setAttribute("class", "button__form button__form--danger");
    section.appendChild(article_dom);
  });
}

function clearSection() {
  let section = document.querySelector("[data-section]");
  section.innerHTML = "";
}

function handleCreate(event) {
  event.preventDefault();
  create_article();
  clearSection();
  fetch_all();
}

const create_button = document.querySelector('[data-button="create"]');
create_button.addEventListener("click", handleCreate);
