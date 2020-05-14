<template>
  <article class="content cards-page">
    <section class="section">
      <div class="title-block">
        <h3 class="title">Шаблоны печати бейджей</h3>
        <p class="title-description">Администрирование шаблонов</p>
      </div>
      <div class="card">
        <div class="card-block">
          <section class="example">
            <div class="table-responsive">
              <div id="toolbar">
                <div class="btn btn-primary template-add">
                  <i class="glyphicon glyphicon-plus"></i> Новый шаблон
                </div>
              </div>
              <table
                id="table-templates"
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
    </section>
    <div class="g-hidden">
      <div class="box-modal card card-default" id="modal-template">
        <div class="card-header">
          <div class="header-block">
            <div class="title" id="modal-template-title">Изменить шаблон</div>
            <div class="box-modal_close arcticmodal-close">
              <i class="fa fa-times fa-2x"></i>
            </div>
          </div>
        </div>
        <form id="template-form">
          <div class="card-block">
            <div class="alert alert-danger" id="template-form-error"></div>
            <div class="form-group">
              <label for="template-name" class="small">Имя шаблона</label>
              <input
                type="text"
                class="form-control boxed"
                id="template-name"
                placeholder="Имя шаблона"
                name="template-name"
              />
            </div>
            <div class="form-group">
              <label for="template-source" class="small">Шаблон</label>
              <div id="editor" class="form-control boxed"></div>
              <textarea
                id="template-source"
                placeholder="Шаблон"
                name="template-source"
                rows="5"
                type="hidden"
                style="display:none;"
              ></textarea>
            </div>
            <div class="form-group row-fluid">
              <a href="#" class="tags btn btn-sm btn-info-outline" data-tag="{first_name}">Имя</a>
              <a href="#" class="tags btn btn-sm btn-info-outline" data-tag="{middle_name}">Отчество</a>
              <a href="#" class="tags btn btn-sm btn-info-outline" data-tag="{last_name}">Фамилия</a>
              <a href="#" class="tags btn btn-sm btn-info-outline" data-tag="{fio}">ФИО</a>
              <a href="#" class="tags btn btn-sm btn-info-outline" data-tag="{email}">Email</a>
              <a href="#" class="tags btn btn-sm btn-info-outline" data-tag="{phone}">Телефон</a>
              <a
                href="#"
                class="tags btn btn-sm btn-info-outline"
                data-tag="{organization}"
              >Организация</a>
              <a href="#" class="tags btn btn-sm btn-info-outline" data-tag="{rank}">Должность</a>
              <a href="#" class="tags btn btn-sm btn-info-outline" data-tag="{status}">Статус</a>
              <a href="#" class="tags btn btn-sm btn-info-outline" data-tag="{type}">Тип</a>
              <a href="#" class="tags btn btn-sm btn-info-outline" data-tag="{event}">Мероприятие</a>
              <a
                href="#"
                class="tags btn btn-sm btn-info-outline"
                data-tag="{period}"
              >Время проведения</a>
            </div>
            <div class="form-group">
              <div>
                <label>
                  <input
                    class="checkbox"
                    type="checkbox"
                    id="template-visible"
                    name="template-visible"
                    value="1"
                  />
                  <span>Сделать видимым</span>
                </label>
              </div>
            </div>
            <input type="hidden" id="template-id" value="0" name="template-id" />
            <input type="hidden" name="csrf" class="csrf" value="d938347944e6b100af9eae9f378b4176" />
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-default arcticmodal-close">Закрыть</button>
            <button
              type="button"
              class="btn btn-success pull-right btn_edit"
              id="template-submit"
            >Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  </article>
</template>
