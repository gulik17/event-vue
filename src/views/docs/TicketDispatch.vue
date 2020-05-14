<template>
  <article class="content cards-page">
    <div class="cards-page">
      <div class="title-block">
        <h3 class="title">Список билетов для рассылки</h3>
        <p class="title-description">http://metroconf.tmweb.ru/api/v1/tickets/dispatch</p>
      </div>
      <section class="section">
        <em>Метод</em>
        <p class="code">
          <strong>
            <span class="badge">[GET, POST]</span>
          </strong>
          <code>http://metroconf.tmweb.ru/api/v1/tickets/dispatch</code>
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
            <br />&nbsp;&nbsp;"tickets": [
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"signature": "271869301191819779974452794703556378624",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"first_name": "Иван",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"middle_name": "Иванович",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last_name": "Иванов",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email": "test@email.com"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "11-11-11"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"organization": "Test organization"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"rank": "Test rank"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status": "Test status"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ticket_type": "Test ticket_type"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"printed": "Test ticket_type"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"printed_date": "Test ticket_type"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="text-muted">// ссылка на билет в pdf формате</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ticket_url": "http://metroconf.tmweb.ru/ticket.pdf/8kjau/271869301191819779974452794703556378624"
            <br />&nbsp;&nbsp;&nbsp;&nbsp;}
            <br />&nbsp;&nbsp;]
            <br />}
          </code>
        </p>
      </section>
    </div>
  </article>
</template>
