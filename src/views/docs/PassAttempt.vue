<template>
  <article class="content cards-page">
    <div class="cards-page">
      <div class="title-block">
        <h3 class="title">Проверка и отметка</h3>
        <p class="title-description">http://metroconf.tmweb.ru/api/v1/pass/attempt</p>
      </div>
      <section class="section">
        <em>Метод</em>
        <p class="code">
          <strong>
            <span class="badge">[POST]</span>
          </strong>
          <code>http://metroconf.tmweb.ru/api/v1/pass/attempt</code>
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
          <small class="text-muted">// Сигнатура билета (QR-код)</small>
          <br />
          <code>(int) masterclass-id</code>
          <small class="text-muted">// Код мастеркласса на который пытается пройти владелец билета</small>
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
            <br />&nbsp;&nbsp;"description": "Проход разрешен",
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
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"note": "",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"masterclasses": [
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 3,
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Тема мастеркласса",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"time_spending": "0000-00-00 00:00:00",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"withcontrol": "1"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;],
            <br />&nbsp;&nbsp;}
            <br />}
          </code>
        </p>
        <p class="code">
          <small class="text-muted">В случае запрета прохода</small>
          <br />
          <code>
            <strong>
              <span class="badge">406 Not Acceptable</span>
            </strong>
            <br />{
            <br />&nbsp;&nbsp;"error": true,
            <br />&nbsp;&nbsp;"description": "Проход запрещен",
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
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"note": "",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;"masterclasses": [
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 3,
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Тема мастеркласса",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"time_spending": "0000-00-00 00:00:00",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"withcontrol": "1"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;],
            <br />&nbsp;&nbsp;}
            <br />}
          </code>
        </p>
      </section>
    </div>
  </article>
</template>
