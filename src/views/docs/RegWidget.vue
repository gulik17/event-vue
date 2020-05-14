<template>
  <article class="content cards-page">
    <div class="cards-page">
      <div class="title-block">
        <h3 class="title">Виджет регистрации билета</h3>
        <p class="title-description">/widget/{event code}</p>
      </div>
      <section class="section">
        <em>Метод</em>
        <p class="code">
          <strong>
            <span class="badge">[GET]</span>
          </strong>
          <code>/widget/{event code}</code>
        </p>
        <hr />
        <em>Параметры</em>
        <p class="code">
          <code>(string) {event code}</code>
          <small class="text-muted">// Код мероприятия из личеого кабинета</small>
        </p>
        <hr />
        <em>Возвращает HTML страницу регистрации билета</em>
        <hr />
        <p>Если виджет не отображается - обратитесь к администратору, чтобы разрешить регистрацию!</p>
        <p>Капча на форме действительна в течение часа - поэтому, вывод виджета, желательнор делать по действию пользователя.</p>
      </section>
    </div>
  </article>
</template>
