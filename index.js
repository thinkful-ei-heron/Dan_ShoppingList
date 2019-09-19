function eventHandler() {
  //Handle form submission
  $('#js-shopping-list-form').submit(event => {
    // this stops the default form submission behavior
    event.preventDefault();
    const text = $(event.currentTarget).find('#shopping-list-entry');
    let newItem = text.val();
    text.val('');
    addItem(newItem);
  });

  //Handle list check
  $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
    let span = $(this)
      .parent()
      .prev();
    span.toggleClass('shopping-item__checked');
    console.log(span);
  });

  //Handle delete item
  $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
    let li = $(this)
      .parent()
      .parent();
    console.log(li);
    li.remove();
  });
}

function addItem(item) {
  let ul = $('.shopping-list');
  ul.append(generateListItem(item));
}

function generateListItem(item) {
  return `
  <li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>
  `;
}

$(eventHandler);
