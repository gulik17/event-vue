<template>
  <article class="content cards-page">
    <section class="section">
      <div class="title-block">
        <h3 class="title">Параметры Еmail</h3>
        <p class="title-description">Настройка почты для рассылки</p>
      </div>
      <section class="example">
        <div class="card">
          <div class="card-block">
            <form id="masterclass-form" method="post" action="/mailsettings">
              <div class="row">
                <div class="form-group col-md-8">
                  <label for="host" class="small">Хост</label>
                  <input
                    type="text"
                    class="form-control boxed"
                    id="host"
                    placeholder="Хост"
                    name="host"
                    value
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="port" class="small">Порт</label>
                  <input
                    type="text"
                    class="form-control boxed"
                    id="port"
                    placeholder="Порт"
                    name="port"
                    value
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="smtpsecure" class="small">Шифрование</label>
                  <select
                    class="form-control boxed"
                    name="smtpsecure"
                    id="smtpsecure"
                    placeholder="Шифрование"
                  >
                    <option value selected>Нет</option>
                    <option value="ssl">Ssl</option>
                    <option value="tls">Tls</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <div>
                    <label>
                      <small>SMTP Авторизация</small>
                      <br />
                      <input
                        class="checkbox"
                        type="checkbox"
                        id="smtp_auth"
                        placeholder="Использовать"
                        name="smtp_auth"
                        value="1"
                      />
                      <span>Использовать</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="username" class="small">Пользователь</label>
                  <input
                    type="text"
                    class="form-control boxed"
                    id="username"
                    placeholder="Пользователь"
                    name="username"
                    value
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="username" class="small">Пароль</label>
                  <input
                    type="password"
                    class="form-control boxed"
                    id="password"
                    placeholder="Пароль"
                    name="password"
                    value
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="email_from" class="small">Email отправителя</label>
                  <input
                    type="text"
                    class="form-control boxed"
                    id="email_from"
                    placeholder="Email отправителя"
                    name="email_from"
                    value
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="from_name" class="small">От имени</label>
                  <input
                    type="text"
                    class="form-control boxed"
                    id="from_name"
                    placeholder="От имени"
                    name="from_name"
                    value
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="email_from" class="small">Email для ответа</label>
                  <input
                    type="text"
                    class="form-control boxed"
                    id="email_from"
                    placeholder="Email для ответа"
                    name="email_from"
                    value
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="reply_name" class="small">Имя для ответа</label>
                  <input
                    type="text"
                    class="form-control boxed"
                    id="reply_name"
                    placeholder="Имя для ответа"
                    name="reply_name"
                    value
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="subject" class="small">Тема</label>
                <input
                  type="text"
                  class="form-control boxed"
                  id="subject"
                  placeholder="Тема"
                  name="subject"
                  value
                />
              </div>

              <div class="form-group">
                <a class="btn btn-info" id="test-email">Проверка</a>
                <button type="submit" class="btn btn-success pull-right" id="event-submit">Сохранить</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  </article>
</template>
