<template>
  <article class="content cards-page">
    <div class="cards-page">
      <div class="title-block">
        <h3 class="title">Поиск билета по сигнатуре</h3>
        <p class="title-description">/api/v1/tickets/get</p>
      </div>
      <section class="section">
        <em>Метод</em>
        <p class="code">
          <strong>
            <span class="badge">[GET, POST]</span>
          </strong>
          <code>/api/v1/tickets/get</code>
        </p>
        <hr />
        <em>Параметры</em>
        <p class="code">
          <code>(string) token</code>
          <small class="text-muted">
            // Токен авторизации, полученный методом
            <a href="/docs/auth">/auth/jwt/token</a>
          </small>
          <br />
          <code>(string) signature</code>
          <small class="text-muted">// Сигнатура билета (QR-код)</small>
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
            <br />&nbsp;&nbsp;"ticket": {
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"signature": "326362061201158581588808910122573103104",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"first_name": "Иван",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"middle_name": "Иванович",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"last_name": "Иванов",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"email": "test@test.test",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"phone": "123456",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"organization": "Организация",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"rank": "Директор",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"status": "Спикер",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"ticket_type": "",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"printed": 0,
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"note": ""
            <br />&nbsp;&nbsp;},
            <br />&nbsp;&nbsp;"event": {
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"name": "Пробное мероприятие",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"address": "Адрес проведения",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"organizer": "Организатор",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"start_date": "0000-00-00 00:00:00",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"finish_date": "0000-00-00 00:00:00",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"email": "test@test.test",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"phone": "123456"
            <br />&nbsp;&nbsp;},
            <br />&nbsp;&nbsp;"templates": [
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 1,
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "60x60",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"source": "Текст шаблона #1"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;},
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 2,
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "50x50",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"source": "Текст шаблона #2"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;}
            <br />&nbsp;&nbsp;],
            <br />}
          </code>
        </p>
        <p class="code">
          <small class="text-muted">В случае неправильной сигнатуры</small>
          <br />
          <code>
            <strong>
              <span class="badge">406 Not Acceptable</span>
            </strong>
            <br />{
            <br />&nbsp;&nbsp;"error": false,
            <br />&nbsp;&nbsp;"description": "Билет не найден",
            <br />}
          </code>
        </p>
      </section>
    </div>
  </article>
</template>
