<template>
  <article class="content cards-page">
    <section class="section">
      <div class="cards-page">
        <div class="title-block">
          <h3 class="title">Билеты</h3>
          <p class="title-description">Администрирование билетов мероприятия</p>
        </div>
        <div class="card">
          <div class="card-block">
            <section class="example">
              <div class="table-responsive">
                <div id="toolbar">
                  <div class="btn btn-primary ticket-add">
                    <i class="glyphicon glyphicon-plus"></i> Новый билет
                  </div>
                  <div class="btn btn-primary ticket-load">
                    <i class="glyphicon glyphicon-plus"></i> Загрузка из XML
                  </div>
                  <div class="btn btn-primary ticket-load-excel">
                    <i class="glyphicon glyphicon-plus"></i> Загрузка из Excel
                  </div>
                </div>
                <table
                  id="table-tickets"
                  data-toolbar="#toolbar"
                  data-sort-name="login"
                  data-sort-order="asc"
                  class="table table-sm"
                  data-click-to-select="true"
                  data-single-select="true"
                ></table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
    <div class="g-hidden">
      <div class="box-modal card card-default" id="modal-ticket">
        <div class="card-header">
          <div class="header-block">
            <div class="title" id="modal-template-title">Изменить билет</div>
            <div class="box-modal_close arcticmodal-close">
              <i class="fa fa-times fa-2x"></i>
            </div>
          </div>
        </div>
        <form id="ticket-form">
          <div class="card-block">
            <div class="alert alert-danger" id="ticket-form-error"></div>
            <div class="row">
              <div class="form-group col-md-4">
                <label for="ticket-first-name" class="small">Имя</label>
                <input
                  type="text"
                  class="form-control boxed"
                  id="ticket-first-name"
                  placeholder="Имя"
                  name="ticket-first-name"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="ticket-middle-name" class="small">Отчество</label>
                <input
                  type="text"
                  class="form-control boxed"
                  id="ticket-middle-name"
                  placeholder="Отчество"
                  name="ticket-middle-name"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="ticket-last-name" class="small">Фамилия</label>
                <input
                  type="text"
                  class="form-control boxed"
                  id="ticket-last-name"
                  placeholder="Фамилия"
                  name="ticket-last-name"
                />
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="ticket-email" class="small">Email</label>
                <input
                  type="email"
                  class="form-control boxed"
                  id="ticket-email"
                  placeholder="Email"
                  name="ticket-email"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="ticket-phone" class="small">Телефон</label>
                <input
                  type="text"
                  class="form-control boxed"
                  id="ticket-phone"
                  placeholder="Телефон"
                  name="ticket-phone"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="ticket-organization" class="small">Организация</label>
              <input
                type="text"
                class="form-control"
                id="ticket-organization"
                placeholder="Организация"
                name="ticket-organization"
              />
            </div>
            <div class="form-group">
              <label for="ticket-rank" class="small">Должность</label>
              <input
                type="text"
                class="form-control"
                id="ticket-rank"
                placeholder="Должность"
                name="ticket-rank"
              />
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="ticket-status" class="small">Статус</label>
                <input
                  type="text"
                  class="form-control"
                  id="ticket-status"
                  placeholder="Статус"
                  name="ticket-status"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="ticket-type" class="small">Тип билета</label>
                <input
                  type="text"
                  class="form-control"
                  id="ticket-type"
                  placeholder="Тип билета"
                  name="ticket-type"
                />
              </div>
            </div>
            <div class="form-group">
              <div>
                <label>
                  <input
                    class="checkbox"
                    type="checkbox"
                    id="ticket-printed"
                    placeholder="Распечатан"
                    name="ticket-printed"
                    value="1"
                  />
                  <span>Распечатан</span>
                </label>
              </div>
            </div>
            <div class="form-group">
              <label for="ticket-phone" class="small">Заметки</label>
              <textarea
                class="form-control"
                id="ticket-note"
                placeholder="Заметки"
                name="ticket-note"
                rows="3"
              ></textarea>
            </div>
            <input type="hidden" id="ticket-id" value="0" name="ticket-id" />
            <input type="hidden" name="csrf" class="csrf" value="aaafd4c832e9a6964a63d0a5de69f215" />
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-default arcticmodal-close">Закрыть</button>
            <button
              type="button"
              class="btn btn-success pull-right btn_edit"
              id="ticket-submit"
            >Сохранить</button>
          </div>
        </form>
      </div>
    </div>

    <div class="g-hidden">
      <div class="box-modal card card-default" id="modal-masterclasses">
        <div class="card-header">
          <div class="header-block">
            <div class="title" id="modal-template-title">Мастерклассы</div>
            <div class="box-modal_close arcticmodal-close">
              <i class="fa fa-times fa-2x"></i>
            </div>
          </div>
        </div>
        <form id="masterclass-form">
          <div class="card-block">
            <div class="alert alert-danger" id="masterclasses-form-error"></div>

            <div class="form-group">
              <select
                class="form-control boxed"
                name="masterclass[]"
                id="masterclasses"
                multiple="multiple"
              >
                <option
                  value="33"
                >[2018-05-22] ТЕМА: Успешная Винная Карта: как сделать так, чтобы вино в ресторане продавалось.</option>
              </select>
            </div>

            <input type="hidden" id="masterclass-ticket-id" value="0" name="ticket-id" />
          </div>
          <input type="hidden" name="csrf" class="csrf" value="3f70b61caa63bb8ce92a6672ea3750f3" />
          <div class="card-footer">
            <button type="button" class="btn btn-default arcticmodal-close">Закрыть</button>
            <button
              type="button"
              class="btn btn-success pull-right btn_masterclass"
              id="masterclasses-submit"
            >Сохранить</button>
          </div>
        </form>
      </div>
    </div>

    <div class="g-hidden">
      <div class="box-modal card card-default" id="modal-tickets-file">
        <div class="card-header">
          <div class="header-block">
            <div class="title" id="modal-template-title">Файл загрузки билетов (XML)</div>
            <div class="box-modal_close arcticmodal-close">
              <i class="fa fa-times fa-2x"></i>
            </div>
          </div>
        </div>
        <form id="event-load-form">
          <div class="card-block">
            <div class="alert alert-danger" id="tickets-file-form-error"></div>
            <div class="form-group">
              <label class="btn btn-primary" for="event-load-file">
                <input
                  id="event-load-file"
                  type="file"
                  style="display:none"
                  onchange="$('#file-select').text(this.files[0].name)"
                />
                <div id="file-select">Выбор файла</div>
              </label>
            </div>
            <input type="hidden" name="csrf" class="csrf" value="db4bcb77646290fc38bf6e8530e3895d" />
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-default arcticmodal-close">Закрыть</button>
            <button
              type="button"
              class="btn btn-success pull-right btn_file"
              id="tickets-file-submit"
            >Загрузить</button>
          </div>
        </form>
      </div>
    </div>

    <div class="g-hidden">
      <div class="box-modal card card-default" id="modal-tickets-file-excel">
        <div class="card-header">
          <div class="header-block">
            <div class="title" id="modal-template-title">Файл загрузки билетов (Excel)</div>
            <div class="box-modal_close arcticmodal-close">
              <i class="fa fa-times fa-2x"></i>
            </div>
          </div>
        </div>
        <form id="event-load-form-excel" method="post" enctype="multipart/form-data">
          <div class="card-block">
            <div class="alert alert-danger" id="tickets-file-form-error-excel"></div>
            <div class="form-group">
              <label class="btn btn-primary" for="event-load-file-excel">
                <input
                  name="tickets"
                  id="event-load-file-excel"
                  type="file"
                  style="display:none"
                  accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  onchange="$('#file-select-excel').text(this.files[0].name)"
                />
                <div id="file-select-excel">Выбор файла</div>
              </label>
            </div>
            <input type="hidden" name="csrf" class="csrf" value="4ace68cb9033639e5e11fd64f6a383ff" />
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-default arcticmodal-close">Закрыть</button>
            <button
              type="button"
              class="btn btn-success pull-right btn_file_excel"
              id="tickets-file-submit-excel"
            >Загрузить</button>
          </div>
        </form>
      </div>
    </div>

    <div class="g-hidden">
      <div class="box-modal card card-default" id="modal-ticket-qr-code">
        <div class="card-header">
          <div class="header-block">
            <div class="title" id="modal-template-title">QR-код билета</div>
            <div class="box-modal_close arcticmodal-close">
              <i class="fa fa-times fa-2x"></i>
            </div>
          </div>
        </div>
        <div class="card-block">
          <p class="text-xs-center">
            Дата:
            <b id="copy-event-date">22/05/2018</b>
          </p>
          <img
            id="copy-qr-image"
            class="img-thumbnail img-responsive center-block"
            src
            style="width:190px; height:190px;"
            alt="QR-код"
          />
          <br />
          <p class="text-xs-center">
            Владелец:
            <b id="copy-ticket-owner">123</b>
          </p>
          <br />
          <div class="row" style="padding: 10px;">
            <textarea id="copy-text" class="col-xs-12" rows="3"></textarea>
          </div>
        </div>
        <div class="card-footer">
          <button type="button" class="btn btn-default arcticmodal-close">Закрыть</button>
          <button
            onclick="ticketCopy()"
            type="button"
            class="btn btn-success pull-right qr-code-copy"
            id="qr-code-copy"
          >Копировать</button>
        </div>
      </div>
    </div>
  </article>
</template>
