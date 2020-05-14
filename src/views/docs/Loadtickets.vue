<template>
  <article class="content cards-page">
    <div class="cards-page">
      <div class="title-block">
        <h3 class="title">Файл загрузки</h3>
        <p class="title-description">Формат файла загрузки билетов</p>
      </div>
      <section class="section">
        <small>
          Файл можно загрузить на странице
          <a href="/tickets">Билеты</a>
        </small>
        <p class="code">
          <code>
            &lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
            <br />&lt;tickets&gt;
            <br />&nbsp;&nbsp;...
            <br />&nbsp;&nbsp;&lt;ticket&gt;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;signature&gt;&lt;/signature&gt;
            <span
              class="text-muted"
            >&lt;!-- Уникальный код (если не задан создается автоматически; если задан, то присваивается билету или используется для поиска и изменения билета) --&gt;</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;last_name&gt;&lt;/last_name&gt;
            <span class="text-muted">&lt;!-- Фамилия --&gt;</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;first_name&gt;&lt;/first_name&gt;
            <span class="text-muted">&lt;!-- Имя --&gt;</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;middle_name&gt;&lt;/first_name&gt;
            <span class="text-muted">&lt;!-- Отчество --&gt;</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;organization&gt;&lt;/organization&gt;
            <span class="text-muted">&lt;!-- Организация --&gt;</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;rank&gt;&lt;/rank&gt;
            <span class="text-muted">&lt;!-- Должность --&gt;</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;phone&gt;&lt;/phone&gt;
            <span class="text-muted">&lt;!-- Телефон для связи --&gt;</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;email&gt;&lt;/email&gt;
            <span class="text-muted">&lt;!-- Email для рассылок --&gt;</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;status&gt;&lt;/status&gt;
            <span class="text-muted">&lt;!-- Статус билета --&gt;</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;ticket_type&gt;&lt;/ticket_type&gt;
            <span class="text-muted">&lt;!-- Тип билета --&gt;</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;note&gt;&lt;/note&gt;
            <span class="text-muted">&lt;!-- Заметки --&gt;</span>
            <br />&nbsp;&nbsp;&lt;/ticket&gt;
            <br />&nbsp;&nbsp;...
            <br />&lt;/tickets&gt;
            <br />
          </code>
        </p>
        <div>
          Билеты можно загрузить через файл Excel
          <br />
          <blockquote>
            Шаблон файла можно скачать
            <a
              href="http://metroconf.tmweb.ru/assets/TicketTemplate.xls"
              download="Шаблон файла билетов.xls"
            >здесь</a>
          </blockquote>
        </div>
      </section>
    </div>
  </article>
</template>
