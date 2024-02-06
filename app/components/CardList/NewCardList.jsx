export const NewCardList = () => {
    return(
        <section class="list-section">
        <h2 class="list-section__title" id="new">
          Новинки
        </h2>
        <ul class="cards-list">
          <li class="cards-list__item">
            <a href="/game-id.html" class="card-list__link">
              <article class="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg"
                  alt=""
                  class="card__image"
                />
                <div class="card__content-block">
                  <h3 class="card__title">Go Away</h3>
                  <p class="card__description">
                    Управляй автомобилем, избегая аварий и перепрыгивая препятствия на пути к следующему уровню.
                  </p>
                  <div class="card__info-container">
                    <p class="card__author">
                      Автор: <span class="card__accent">Mahisto</span>
                    </p>
                    <p class="card__votes">
                      Голосов на сайте: <span class="card__accent">20</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
          <li class="cards-list__item">
            <a href="/game-id.html" class="card-list__link">
              <article class="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png"
                  alt=""
                  class="card__image"
                />
                <div class="card__content-block">
                  <h3 class="card__title">G.U.N.N.E.R.</h3>
                  <p class="card__description">
                    Продержись как можно дольше, отбиваясь от врагов, которых будет становиться всё больше.
                  </p>
                  <div class="card__info-container">
                    <p class="card__author">
                      Автор: <span class="card__accent">IDKWIAm</span>
                    </p>
                    <p class="card__votes">
                      Голосов на сайте: <span class="card__accent">10</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
          <li class="cards-list__item">
            <a href="/game-id.html" class="card-list__link">
              <article class="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png"
                  alt=""
                  class="card__image"
                />
                <div class="card__content-block">
                  <h3 class="card__title">Space Terror</h3>
                  <p class="card__description">
                    Лети как можно дальше в космическом пространстве, уничтожая всё на своём пути.
                  </p>
                  <div class="card__info-container">
                    <p class="card__author">
                      Автор: <span class="card__accent">IDKWIAm</span>
                    </p>
                    <p class="card__votes">
                      Голосов на сайте: <span class="card__accent">20</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
          <li class="cards-list__item">
            <a href="/game-id.html" class="card-list__link">
              <article class="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png"
                  alt=""
                  class="card__image"
                />
                <div class="card__content-block">
                  <h3 class="card__title">Square Slayer</h3>
                  <p class="card__description">
                    Уворачивайся и отстреливайся от озлобленных квадратов и собирай жизни для перехода на следующий уровень.
                  </p>
                  <div class="card__info-container">
                    <p class="card__author">
                      Автор: <span class="card__accent">niclan</span>
                    </p>
                    <p class="card__votes">
                      Голосов на сайте: <span class="card__accent">10</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
        </ul>
      </section>
    )
}