<template>
  <article class="content cards-page">
    <section class="section">
      <div class="title-block">
        <h3 class="title">Мероприятие</h3>
        <p class="title-description">Настройка мероприятия</p>
      </div>
      <section class="example">
        <div class="card">
          <div class="card-block">
            <form id="masterclass-form" method="post" action="/event">
              <div class="form-group">
                <label for="event-name" class="small">Наименование мероприятия</label>
                <input
                  type="text"
                  class="form-control boxed"
                  id="event-name"
                  placeholder="Наименование мероприятия"
                  name="event-name"
                  value="Тестовый Гастрит"
                />
              </div>
              <div class="form-group">
                <label for="event-address" class="small">Адрес</label>
                <input
                  type="text"
                  class="form-control boxed"
                  id="event-address"
                  placeholder="Адрес"
                  name="event-address"
                  value="Красная поляна"
                />
              </div>
              <div class="form-group">
                <label for="event-organizer" class="small">Организатор</label>
                <input
                  type="text"
                  class="form-control boxed"
                  id="event-organizer"
                  placeholder="Организатор"
                  name="event-organizer"
                  value="GASTREET Team"
                />
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="event-start-date" class="small">Начало мероприятия</label>
                  <div class="input-group date" id="start-date-picker">
                    <input
                      type="text"
                      class="form-control boxed"
                      id="event-start-date"
                      name="event-start-date"
                      value="2018-05-22 00:00"
                    />
                    <span class="input-group-addon">
                      <span class="fa fa-calendar"></span>
                    </span>
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="event-finish-date" class="small">Завершение мероприятия</label>
                  <div class="input-group date" id="finish-date-picker">
                    <input
                      type="text"
                      class="form-control boxed"
                      id="event-finish-date"
                      name="event-finish-date"
                      value="2018-05-25 23:59"
                    />
                    <span class="input-group-addon">
                      <span class="fa fa-calendar"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="event-email" class="small">Email для связи</label>
                  <input
                    type="text"
                    class="form-control boxed"
                    id="event-email"
                    placeholder="Email для связи"
                    name="event-email"
                    value
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="event-phone" class="small">Телефон для связи</label>
                  <input
                    type="text"
                    class="form-control boxed"
                    id="event-phone"
                    placeholder="Телефон для связи"
                    name="event-phone"
                    value
                  />
                </div>
              </div>
              <div id="collapseOne" class="form-group">
                <label for="event-meeting-point" class="small">Место встречи</label>
                <textarea
                  class="form-control boxed"
                  id="event-meeting-point"
                  placeholder="Место встречи"
                  name="event-meeting-point"
                  rows="3"
                ></textarea>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <button
                    type="submit"
                    class="btn btn-success pull-right"
                    id="event-submit"
                  >Сохранить</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  </article>
</template>
