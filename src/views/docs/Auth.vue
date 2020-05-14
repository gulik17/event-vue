<template>
  <article class="content cards-page">
    <div class="cards-page">
      <div class="title-block">
        <h3 class="title">Авторизация и получение токена</h3>
        <p class="title-description">/auth/jwt/token</p>
      </div>
      <section class="section">
        <em>Метод</em>
        <p class="code">
          <strong>
            <span class="badge">[POST]</span>
          </strong>
          <code>/auth/jwt/token</code>
        </p>
        <hr />
        <em>Параметры</em>
        <p class="code">
          <code>(string) login</code>
          <br />
          <code>(string) password</code>
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
            <br />&nbsp;&nbsp;"token": "77189332898551090801242276530952863744"
            <br />}
          </code>
        </p>
        <p class="code">
          <small class="text-muted">В случае ошибочных данных</small>
          <br />
          <code>
            <strong>
              <span class="badge">401 Unauthorized</span>
            </strong>
            <br />{
            <br />&nbsp;&nbsp;"error": true,
            <br />&nbsp;&nbsp;"description": "Authorization failed"
            <br />}
          </code>
        </p>
      </section>
    </div>
  </article>
</template>
