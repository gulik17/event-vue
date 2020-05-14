<template>
  <article class="content cards-page">
    <div class="cards-page">
      <div class="title-block">
        <h3 class="title">Установка признака печати бейджа</h3>
        <p class="title-description">http://metroconf.tmweb.ru/api/v1/tickets/set/printed</p>
      </div>
      <section class="section">
        <em>Метод</em>
        <p class="code">
          <strong>
            <span class="badge">[POST]</span>
          </strong>
          <code>http://metroconf.tmweb.ru/api/v1/tickets/set/printed</code>
        </p>
        <hr />
        <em>Параметры</em>
        <p class="code">
          <code>(string) token</code>
          <small class="text-muted">
            // Токен авторизации, полученный методом
            <a href="/docs/auth">http://metroconf.tmweb.ru/auth/jwt/token</a>
          </small>
          <br />
          <code>(string) signature</code>
          <small class="text-muted">// сигнатура билета</small>
        </p>
        <hr />
        <em>Возвращает JSON</em>
        <p class="code">
          <small class="text-muted">В случае успеха</small>
          <br />
          <code>
            <strong>
              <span class="badge">200 OK</span>
            </strong>
            <br />{
            <br />&nbsp;&nbsp;"error": false,
            <br />&nbsp;&nbsp;"description": "",
            <br />&nbsp;&nbsp;"signature": 100148788613720567705672851357278666752,
            <br />}
          </code>
        </p>
        <p class="code">
          <small class="text-muted">Билет не найден</small>
          <br />
          <code>
            <strong>
              <span class="badge">406 Not Acceptable</span>
            </strong>
            <br />{
            <br />&nbsp;&nbsp;"error": true,
            <br />&nbsp;&nbsp;"description": "Билет не найден",
            <br />&nbsp;&nbsp;"signature": 100148788613720567705672851357278666752,
            <br />}
          </code>
        </p>
        <p class="code">
          <small class="text-muted">Сигнатура не заполнена</small>
          <br />
          <code>
            <strong>
              <span class="badge">406 Not Acceptable</span>
            </strong>
            <br />{
            <br />&nbsp;&nbsp;"error": true,
            <br />&nbsp;&nbsp;"description": "Билет не указан",
            <br />}
          </code>
        </p>
      </section>
    </div>
  </article>
</template>
