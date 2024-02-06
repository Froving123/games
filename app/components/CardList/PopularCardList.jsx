export const PopularCardList = () => {
    return(
        <section class="list-section">
        <h2 class="list-section__title" id="popular">
          Популярное
        </h2>
        <ul class="cards-list">
          <li class="cards-list__item">
            <a href="/game-id.html" class="card-list__link">
              <article class="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png"
                  alt=""
                  class="card__image"
                />
                <div class="card__content-block">
                  <h3 class="card__title">Crystal Kepper</h3>
                  <p class="card__description">
                    Управляй боевым дроном, чтобы любой ценой защитить кристалл от враждебных космо-слизней.
                  </p>
                  <div class="card__info-container">
                    <p class="card__author">
                      Автор: <span class="card__accent">Lonely Baobab</span>
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
                  src="https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png"
                  alt=""
                  class="card__image"
                />
                <div class="card__content-block">
                  <h3 class="card__title">Dangeons'n'Caves. Prologue</h3>
                  <p class="card__description">
                    Безымянный герой исследует пещеры и подземелья, чтобы найти больше информации о себе.
                  </p>
                  <div class="card__info-container">
                    <p class="card__author">
                      Автор: <span class="card__accent">F-Style</span>
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
                  src="https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png"
                  alt=""
                  class="card__image"
                />
                <div class="card__content-block">
                  <h3 class="card__title">Defence of Crystal</h3>
                  <p class="card__description">
                    Защищай магический кристалл от монстров и уничтожай кладбища, чтобы спасти Землю, которую поглотил мрак.
                  </p>
                  <div class="card__info-container">
                    <p class="card__author">
                      Автор: <span class="card__accent">MastWe</span>
                    </p>
                    <p class="card__votes">
                      Голосов на сайте: <span class="card__accent">20</span>
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