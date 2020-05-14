<template>
  <article class="content cards-page">
    <div class="cards-page">
      <div class="title-block">
        <h3 class="title">Поиск билета по фамилии, email, телефону</h3>
        <p class="title-description">/api/v1/tickets/search</p>
      </div>
      <section class="section">
        <em>Метод</em>
        <p class="code">
          <strong>
            <span class="badge">[GET, POST]</span>
          </strong>
          <code>/api/v1/tickets/search</code>
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
          <code>(string) search</code>
          <small class="text-muted">// Строка поиска</small>
          <br />
          <code>(int) count</code>
          <small
            class="text-muted"
          >// Необязательный, по умолчанию 20. Если количество найденных записей превышает count, то возвращается пустой набор. Если count = 0, то возвращаются все найденные записи.</small>
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
            <br />&nbsp;&nbsp;"total": 1,
            <br />&nbsp;&nbsp;"tickets": [
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"signature": "229666554428315229792621151186287853568",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"first_name": "Иван",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"middle_name": "Иванович",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"last_name": "Иванов",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email": "test@test.test",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone": "(0000) 00 00 00",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"organization": "",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"rank": "Организатор",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status": "Спикер",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ticket_type": "VIP",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"printed": 0,
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"printed_date": "0000-00-00 00:00:00",
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"note": ""
            <br />&nbsp;&nbsp;&nbsp;&nbsp;},
            <br />&nbsp;&nbsp;]
            <br />}
          </code>
        </p>
        <p class="code">
          <small class="text-muted">В случае большой выборки (записей больше count)</small>
          <br />
          <code>
            <strong>
              <span class="badge">200 OK</span>
            </strong>
            <br />{
            <br />&nbsp;&nbsp;"error": false,
            <br />&nbsp;&nbsp;"description": "",
            <br />&nbsp;&nbsp;"count": 22,
            <br />&nbsp;&nbsp;"desctiption": "Выборка содержит больше 20 позиций",
            <br />&nbsp;&nbsp;"tickets": null
            <br />}
          </code>
        </p>
      </section>
    </div>
  </article>
</template>
