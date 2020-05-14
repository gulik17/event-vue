<template>
  <article class="content cards-page">
    <div class="cards-page">
      <div class="title-block">
        <h3 class="title">Список шаблонов бейджа</h3>
        <p class="title-description">http://metroconf.tmweb.ru/api/v1/templates/get</p>
      </div>
      <section class="section">
        <em>Метод</em>
        <p class="code">
          <strong>
            <span class="badge">[GET, POST]</span>
          </strong>
          <code>http://metroconf.tmweb.ru/api/v1/templates/get</code>
        </p>
        <hr />
        <em>Параметры</em>
        <p class="code">
          <code>(string) token</code>
          <small class="text-muted">
            // Токен авторизации, полученный методом
            <a href="/docs/auth">http://metroconf.tmweb.ru/auth/jwt/token</a>
          </small>
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
            <br />&nbsp;&nbsp;"templates": [
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 1,
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Шаблон #1",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"source": "Текст шаблона #1"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;},
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 3,
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Мастеркласс #2",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"source": "Текст шаблона #2"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;}
            <br />&nbsp;&nbsp;]
            <br />}
          </code>
        </p>
      </section>
    </div>
  </article>
</template>
