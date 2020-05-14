<template>
  <article class="content cards-page">
    <div class="cards-page">
      <div class="title-block">
        <h3 class="title">Статистика мероприятия</h3>
        <p class="title-description">/api/v1/event/stat</p>
      </div>
      <section class="section">
        <em>Метод</em>
        <p class="code">
          <strong>
            <span class="badge">[GET, POST]</span>
          </strong>
          <code>/api/v1/event/stat</code>
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
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"name": "Тестовое мероприятие",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"address": "Адрес",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"organizer": "ООО \"Тестовое\"",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"start_date": "2017-10-12 10:00:00",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"finish_date": "2017-10-12 12:00:00",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"email": "",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"phone": "",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"meeting_point": ""
            <br />&nbsp;&nbsp;},
            <br />&nbsp;&nbsp;"ticket_count": 6,
            <br />&nbsp;&nbsp;"printed_count": 1,
            <br />&nbsp;&nbsp;"printed_list": [
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ticket_type": "VIP",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"printed_count": 1
            <br />&nbsp;&nbsp;&nbsp;&nbsp;}
            <br />&nbsp;&nbsp;],
            <br />}
          </code>
        </p>
      </section>
    </div>
  </article>
</template>
