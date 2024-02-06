export const Banner = () => {
    return(
        <section class="banner">
        <div class="banner__description">
          <h1 class="banner__title">
            Портал инди-игр от&nbsp;студентов Яндекс Практикума
          </h1>
          <div class="banner__text-block">
            <p class="banner__text">
              Студенты курсов разрабатывают свои игры на Unity, здесь мы их
              публикуем. Вы можете играть прямо на сайте. А если у вас есть
              аккаунт пользователя — получаете возможность голосовать за игры.
            </p>
          </div>
          <a href="#popular" class="button banner__link">Смотреть игры</a>
        </div>
        <img
          src="./images/banner-illustration.jpg"
          alt="Рука, утопленная в желтом фоне"
          class="banner__image"
        />
      </section>
    )
}