<template>
  <article class="content cards-page">
    <div class="cards-page">
      <div class="title-block">
        <h3 class="title">Быстрый старт</h3>
        <p class="title-description">Описание принципов работы АПИ</p>
      </div>
      <section class="section">
        <p class="lead">Система поддерживает следующие запросы:</p>
        <ul>
          <li>
            <a href="/docs/auth">Авторизация</a>
            <small>
              <p>Получение токена для использования в запросах</p>
            </small>
          </li>
          <li>
            <a href="/docs/search">Поиск билетов</a>
            <small>
              <p>Получение списка билетов по строке поиска</p>
            </small>
          </li>
          <li>
            <a href="/docs/get">Выбор билета</a>
          </li>
          <small>
            <p>Получение билета по сигнатуре (QR-коду)</p>
          </small>
          <li>
            <a href="/docs/masterclasses">Список мастерклассов</a>
            <small>
              <p>Получение списка мастерклассов с пометкой &quot;контроль&quot;</p>
            </small>
          </li>
          <li>
            <a href="/docs/pass-attempt">Проверка и отметка</a>
            <small>
              <p>Проверка возможности прохода на мастеркласс и отметка о посещении</p>
            </small>
          </li>
          <li>
            <a href="/docs/ticket-save">Сохранение билета</a>
            <small>
              <p>Создание или изменение билета</p>
            </small>
          </li>
          <li>
            <a href="/docs/ticket-delete">Удаление билета</a>
            <small>
              <p>Удалить билет из системы</p>
            </small>
          </li>

          <li>
            <a href="/docs/masterclass-save">Сохранение мастеркласса</a>
            <small>
              <p>Создание или изменение мастеркласса</p>
            </small>
          </li>
          <li>
            <a href="/docs/masterclass-delete">Удаление мастеркласса</a>
            <small>
              <p>Удалить мастеркласс из системы</p>
            </small>
          </li>

          <li>
            <a href="/docs/volunteers">Список волонтеров</a>
            <small>
              <p>Получение списка волонтеров</p>
            </small>
          </li>

          <li>
            <a href="/docs/ticket-dispatch">Список билетов для рассылки</a>
            <small>
              <p>Получение список билетов с сылками на pdf билет для рассылки</p>
            </small>
          </li>

          <li>
            <a href="/docs/reg_widget">Виджет регистрации билета</a>
            <small>
              <p>Описание виджета регистрации</p>
            </small>
          </li>

          <li>
            <a href="/docs/stat">Статистика</a>
            <small>
              <p>Получение информации и статистики по мероприятию</p>
            </small>
          </li>
        </ul>
        <p class="lead">Алгоритм работы:</p>
        <ol>
          <li>
            Авторизация и получение токена
            <div>
              <ul type="a">
                <li>
                  <small>Получение токена для использования в запросах</small>
                </li>
                <li>
                  <small>Время действия токена ограничено 15 минутами</small>
                </li>
              </ul>
            </div>
          </li>
          <li>Выполнение запроса с исползованием полученного токена</li>
          <li>
            Проверка ответа от сервера
            <ol type="a">
              <li>
                <p class="code">
                  <small class="text-muted">Токен не найден (начинаем с пункта 1)</small>
                  <br />
                  <code>
                    <strong>
                      <span class="badge">401 Unauthorized</span>
                    </strong>
                    <br />{
                    <br />&nbsp;&nbsp;"error": true,
                    <br />&nbsp;&nbsp;"description": "Token Not Found"
                    <br />}
                  </code>
                </p>
              </li>
              <li>
                <p class="code">
                  <small class="text-muted">Ошибка (вывод сообщения и завершение алгоритма)</small>
                  <br />
                  <code>
                    <strong>
                      <span class="badge">406 Not Acceptable</span>
                    </strong>
                    <br />{
                    <br />&nbsp;&nbsp;"error": true,
                    <br />&nbsp;&nbsp;"description": "Error description"
                    <br />}
                  </code>
                </p>
              </li>
            </ol>
          </li>
          <li>Обработка результата запроса</li>
        </ol>
      </section>
    </div>
  </article>
</template>
