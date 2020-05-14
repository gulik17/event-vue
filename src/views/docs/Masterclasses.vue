<template>
  <article class="content cards-page">
    <div class="cards-page">
      <div class="title-block">
        <h3 class="title">Список мастерклассов</h3>
        <p class="title-description">/api/v1/masterclasses/get</p>
      </div>
      <section class="section">
        <em>Метод</em>
        <p class="code">
          <strong>
            <span class="badge">[GET, POST]</span>
          </strong>
          <code>/api/v1/masterclasses/get</code>
        </p>
        <hr />
        <em>Параметры</em>
        <p class="code">
          <code>(string) token</code>
          <small class="text-muted">
            // Токен авторизации, полученный методом
            <a href="/docs/auth">/auth/jwt/token</a>
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
            <br />&nbsp;&nbsp;"event": {
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"name": "Мероприятие #1",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"start_date": "0000-00-00 00:00:00",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"finish_date": "0000-00-00 00:00:00"
            <br />&nbsp;&nbsp;},
            <br />&nbsp;&nbsp;"masterclasses": [
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 1,
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Мастеркласс #1",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"time_spending": "0000-00-00 00:00:00",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"withcontrol": "1"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;},
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 3,
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Мастеркласс #2",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"time_spending": "0000-00-00 00:00:00",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"withcontrol": "0"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;}
            <br />&nbsp;&nbsp;]
            <br />}
          </code>
        </p>
      </section>
    </div>
  </article>
</template>
