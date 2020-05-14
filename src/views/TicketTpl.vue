<template>
  <article class="content cards-page">
    <section class="section">
      <div class="title-block">
        <h3 class="title">Шаблон билета</h3>
        <p class="title-description">Шаблон email письма с электронным билетом</p>
      </div>
      <form id="masterclass-form" method="post" action="/ticket-tpl">
        <section class="section">
          <div class="card">
            <div class="card-block">
              <div class="form-group">
                <div id="editor" class="form-control boxed"></div>
                <textarea name="ticket-tpl" style="display: none;" type="hidden"></textarea>
              </div>
              <div class="card card-default">
                <div class="card-header">
                  <div class="header-block">
                    <p class="title">Переменные билета</p>
                  </div>
                </div>
                <div class="card-block small-card">
                  <div class="form-group row-fluid">
                    <a
                      href="#"
                      class="tags btn btn-sm btn-info-outline"
                      data-tag=" &lt;img src=&quot;data:image/png;base64,[qrcode]&quot; style=&quot;width:180px; height:auto;&quot; alt=&quot;QR-код&quot;/&gt;"
                    >QR-код (data)</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-info-outline"
                      data-tag=" &lt;img src=&quot;http://metroconf.tmweb.ru/ext/qrcode/180/[qrcode]&quot; style=&quot;width:180px; height:auto;&quot; alt=&quot;QR-код&quot;/&gt;"
                    >QR-код (url)</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-info-outline"
                      data-tag="[ticket.first_name]"
                    >Имя</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-info-outline"
                      data-tag="[ticket.middle_name]"
                    >Отчество</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-info-outline"
                      data-tag="[ticket.last_name]"
                    >Фамилия</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-info-outline"
                      data-tag="[ticket.email]"
                    >Email</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-info-outline"
                      data-tag="[ticket.phone]"
                    >Телефон</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-info-outline"
                      data-tag="[ticket.organization]"
                    >Организация</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-info-outline"
                      data-tag="[ticket.rank]"
                    >Должность</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-info-outline"
                      data-tag="[ticket.status]"
                    >Статус</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-info-outline"
                      data-tag="[ticket.ticket_type]"
                    >Тип</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-info-outline"
                      data-tag="[event]"
                    >Мероприятие</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-info-outline"
                      data-tag="[period]"
                    >Время проведения</a>
                  </div>
                </div>
              </div>
              <div class="card card-default">
                <div class="card-header">
                  <div class="header-block">
                    <p class="title">Переменные мероприятия</p>
                  </div>
                </div>
                <div class="card-block small-card">
                  <div class="form-group row-fluid">
                    <a
                      href="#"
                      class="tags btn btn-sm btn-success-outline"
                      data-tag="[event.name]"
                    >Наименование мероприятия</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-success-outline"
                      data-tag="[event.address]"
                    >Адрес</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-success-outline"
                      data-tag="[event.organizer]"
                    >Организатор</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-success-outline"
                      data-tag="[event.start_date]"
                    >Дата начала</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-success-outline"
                      data-tag="[event.finish_date]"
                    >Дата завершения</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-success-outline"
                      data-tag="[event.email]"
                    >Email организатора</a>
                    <a
                      href="#"
                      class="tags btn btn-sm btn-success-outline"
                      data-tag="[event.phone]"
                    >Телефон организатора</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col-md-12">
                  <button
                    type="submit"
                    class="btn btn-success pull-right"
                    id="ticket-tpl-submit"
                  >Сохранить</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </section>
  </article>
</template>
