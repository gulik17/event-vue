<template>
  <article class="content cards-page">
    <div class="cards-page">
      <div class="title-block">
        <h3 class="title">Сохранение билета</h3>
        <p class="title-description">/api/v1/tickets/save</p>
      </div>
      <section class="section">
        <em>Метод</em>
        <p class="code">
          <strong>
            <span class="badge">[POST]</span>
          </strong>
          <code>/api/v1/tickets/save</code>
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
          <small class="text-muted">// Сигнатура билета (если не указана или '' - будет создан новый билет)</small>
          <br />
          <code>(string) first-name</code>
          <small class="text-muted">// Имя</small>
          <br />
          <code>(string) middle-name</code>
          <small class="text-muted">// Отчество</small>
          <br />
          <code>(string) last-name</code>
          <small class="text-muted">// Фамилия</small>
          <br />
          <code>(string) email</code>
          <small class="text-muted">// Email</small>
          <br />
          <code>(string) phone</code>
          <small class="text-muted">// Телефон</small>
          <br />
          <code>(string) organization</code>
          <small class="text-muted">// Организация</small>
          <br />
          <code>(string) rank</code>
          <small class="text-muted">// Должность</small>
          <br />
          <code>(string) status</code>
          <small class="text-muted">// Статус билета</small>
          <br />
          <code>(string) ticket-type</code>
          <small class="text-muted">// Тип билета</small>
          <br />
          <code>(bool) printed</code>
          <small class="text-muted">// Признак печати бейджа</small>
          <br />
          <code>(string) note</code>
          <small class="text-muted">// Заметки</small>
          <br />
          <code>(int array) masterclass</code>
          <small class="text-muted">// Массив кодов доступных мастерклассов</small>
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
            <br />&nbsp;&nbsp;"signature": "12345678901234567891"
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
            <br />&nbsp;&nbsp;"description": "Билет не найден",
            <br />&nbsp;&nbsp;"signature": "12345678901234567891"
            <br />}
          </code>
        </p>
      </section>
    </div>
  </article>
</template>
