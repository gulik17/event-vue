<template>
  <article class="content cards-page">
    <div class="dashboard-page">
      <section class="section">
        <div class="title-block">
          <h3 class="title">Информация по мероприятию</h3>
          <p class="title-description">Статистика по регистрациям и посещениям</p>
        </div>

        <div class="card" data-exclude="xs">
          <div class="card-block">
            <div class="stats">
              <div class="row row-sm stats-container">
                <div class="col-xs-12 col-sm-6 stat-col">
                  <div class="stat-icon">
                    <i class="fa fa-ticket fa-2x"></i>
                  </div>
                  <div class="stat">
                    <div class="value">
                      <strong class="h3">3004</strong>
                    </div>
                    <div class="name">
                      <span class="lead">Билетов</span>
                    </div>
                  </div>
                  <!--progress class="progress stat-progress" value="75" max="100">
                            <div class="progress"> <span class="progress-bar" style="width: 75%;"></span></div>
                  </progress-->
                </div>
                <div class="col-xs-12 col-sm-6 stat-col">
                  <div class="stat-icon">
                    <i class="fa fa-tags fa-2x"></i>
                  </div>
                  <div class="stat">
                    <div class="value">
                      <strong class="h3">111</strong>
                    </div>
                    <div class="name">
                      <span class="lead">Мастерклассов (с контролем)</span>
                    </div>
                  </div>
                  <!--progress class="progress stat-progress" value="25" max="100">
                                <div class="progress"> <span class="progress-bar" style="width: 25%;"></span> </div>
                  </progress-->
                </div>
                <div class="col-xs-12 col-sm-6 stat-col">
                  <div class="stat-icon">
                    <i class="fa fa-print fa-2x"></i>
                  </div>
                  <div class="stat">
                    <div class="value">
                      <strong class="h3">15</strong>
                    </div>
                    <div class="name">
                      <span class="lead">Распечатано билетов</span>
                    </div>
                  </div>
                  <progress class="progress stat-progress" value="0" max="100">
                    <div class="progress">
                      <span class="progress-bar" style="width: 0%;"></span>
                    </div>
                  </progress>
                </div>
                <div class="col-xs-12 col-sm-6 stat-col">
                  <div class="stat-icon">
                    <i class="fa fa-sign-out fa-2x"></i>
                  </div>
                  <div class="stat">
                    <div class="value">
                      <strong class="h3">10</strong>
                    </div>
                    <div class="name">
                      <span class="lead">Посещено мастерклассов</span>
                    </div>
                  </div>
                  <progress class="progress stat-progress" value="9" max="100">
                    <div class="progress">
                      <span class="progress-bar" style="width: 9%;"></span>
                    </div>
                  </progress>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-block">
            <div class="row row-sm">
              <div class="col-md-4">
                <a type="button" class="btn btn-primary btn-block" href="/reports/tickets.xls" download="tickets.xls">
                  <span class="fa fa-book"></span>
                  <span>Отчет по билетам</span>
                </a>
              </div>
              <div class="col-md-4">
                <a
                  type="button"
                  class="btn btn-primary btn-block"
                  href="/reports/visits.xls"
                  style="width=100%"
                  download="visits.xls"
                >
                  <span class="fa fa-book"></span>
                  <span>Отчет по посещениям</span>
                </a>
              </div>
              <div class="col-md-4">
                <a
                  type="button"
                  class="btn btn-primary btn-block"
                  href="/reports/ticketvisits.xls"
                  style="width=100%"
                  download="ticketvisits.xls"
                >
                  <span class="fa fa-book"></span>
                  <span>Посещения по билетам</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </article>
</template>
