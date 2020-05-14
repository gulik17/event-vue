<template>
  <article class="content cards-page">
    <div class="cards-page">
      <div class="title-block">
        <h3 class="title">Список волонтеров</h3>
        <p class="title-description">http://metroconf.tmweb.ru/api/v1/volunteers/get</p>
      </div>
      <section class="section">
        <em>Метод</em>
        <p class="code">
          <strong>
            <span class="badge">[GET, POST]</span>
          </strong>
          <code>http://metroconf.tmweb.ru/api/v1/volunteers/get</code>
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
            <br />&nbsp;&nbsp;"volunteers": [
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "vol1",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"login": "12345_vol1",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"volpass": "password1"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;},
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "vol2",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"login": "12345_vol2",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"volpass": "password2"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;}
            <br />&nbsp;&nbsp;]
            <br />}
          </code>
        </p>
      </section>
    </div>
  </article>
</template>
