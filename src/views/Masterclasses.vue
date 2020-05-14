<template>
  <article class="content cards-page">
    <section class="section">
      <div class="title-block">
        <h3 class="title">Мастерклассы</h3>
        <p class="title-description">Администрирование списка мастерклассов мероприятия</p>
      </div>
      <div class="card">
        <div class="card-block">
          <section class="example">
            <div class="table-responsive">
              <div id="toolbar">
                <div class="btn btn-primary masterclass-add">
                  <i class="glyphicon glyphicon-plus"></i> Новый мастеркласс
                </div>
              </div>
              <table
                id="table-masterclass"
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
      <div class="box-modal card card-default" id="modal-masterclass">
        <div class="card-header">
          <div class="header-block">
            <div class="title" id="modal-masterclass-title">Изменить мастеркласс</div>
            <div class="box-modal_close arcticmodal-close">
              <i class="fa fa-times fa-2x"></i>
            </div>
          </div>
        </div>
        <form id="masterclass-form">
          <div class="card-block">
            <div class="alert alert-danger" id="masterclass-form-error"></div>
            <div class="masterclass-login-group form-group">
              <label for="masterclass-name" class="small">Наименование</label>
              <input
                type="text"
                class="form-control boxed"
                id="masterclass-name"
                placeholder="Наименование"
                name="masterclass-name"
              />
            </div>
            <div class="form-group">
              <label for="event-start-date" class="small">Дата проведения</label>
              <div class="input-group date" id="time-spending-date-picker">
                <input
                  type="text"
                  class="form-control boxed"
                  id="masterclass-time-spending"
                  placeholder="Дата проведения"
                  name="masterclass-time-spending"
                />
                <span class="input-group-addon">
                  <span class="fa fa-calendar"></span>
                </span>
              </div>
            </div>
            <div class="form-group">
              <div>
                <label>
                  <input
                    class="checkbox"
                    type="checkbox"
                    id="masterclass-withcontrol"
                    placeholder="Контроль входа"
                    name="masterclass-withcontrol"
                    value="1"
                  />
                  <span>Контроль входа</span>
                </label>
              </div>
            </div>
            <input type="hidden" id="masterclass-id" value="0" name="masterclass-id" />
            <input type="hidden" name="csrf" class="csrf" value="41db3a7ed1ca9bbe37021d912fbcd583" />
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-default arcticmodal-close">Закрыть</button>
            <button type="button" class="btn btn-success pull-right btn_edit" id="masterclass-submit">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  </article>
</template>
