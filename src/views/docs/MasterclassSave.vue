<template>
  <article class="content cards-page">
    <div class="cards-page">
      <div class="title-block">
        <h3 class="title">Сохранение мастеркласса</h3>
        <p class="title-description">http://metroconf.tmweb.ru/api/v1/masterclasses/save</p>
      </div>
      <section class="section">
        <em>Метод</em>
        <p class="code">
          <strong>
            <span class="badge">[POST]</span>
          </strong>
          <code>http://metroconf.tmweb.ru/api/v1/masterclasses/save</code>
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
          <code>(int) masterclass-id</code>
          <small
            class="text-muted"
          >// Код мастеркласса (если не указан или 0 - будет создан новый мастеркласс)</small>
          <br />
          <code>(string) name</code>
          <small class="text-muted">// Наименование мастеркласса</small>
          <br />
          <code>(string YYYY-MM-DD HH:NN:SS) time-spending</code>
          <small class="text-muted">// Время проведения</small>
          <br />
          <code>(bool) withcontrol</code>
          <small class="text-muted">// Контроль входа</small>
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
            <br />&nbsp;&nbsp;"masterclass-id": 1,
            <br />}
          </code>
        </p>
        <p class="code">
          <small class="text-muted">Ошибка</small>
          <br />
          <code>
            <strong>
              <span class="badge">406 Not Acceptable</span>
            </strong>
            <br />{
            <br />&nbsp;&nbsp;"error": true,
            <br />&nbsp;&nbsp;"description": "Наименование или время не указаны",
            <br />&nbsp;&nbsp;"masterclass-id": 1,
            <br />}
          </code>
        </p>
      </section>
    </div>
  </article>
</template>
