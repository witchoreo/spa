import { Link } from "react-router-dom";


function About () {
    return (
    <>

<div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
    <div className="parallax">
    <div className="gradient"></div>
    </div>
    
      <div className="container">
        <br></br>
        <br></br>
        <br></br>
        <h1 className="header center white-text">Спа-салон "Вкусняшки"</h1>
        <div className="row center">
          <h5 className="header col s12 light white-text">Самый лучший расслабон - это плотный закусон!</h5>
        </div>
        <div className="row center">
        <Link to="/"><a className="btn btn-large waves-effect waves-light brown">За вкусняшками!</a></Link>
        </div>
        <br></br>
      </div>
      
    </div>
  </div>
    


         <div className="container">
    <div className="section">
      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center  brown-text"><i className="material-icons medium">lunch_dining</i></h2>
            <h5 className="center">Вкусно</h5>

            <p className="light">Мы готовим самые вкусные закуски из самых свежих ингредиентов! Иногда настолько свежих, что даже живых.</p>
            <br></br>
            <span className="new badge  brown left white-text"><p>Акция "Приведи друга"</p></span>
            <br></br>
        
            <p className="light left">Cкидка 20%, если вы приносите с собой свою начинку.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons medium">payments</i></h2>
            <h5 className="center">Дешево</h5>

            <p className="light">В нашем ресторане цены совсем не кусаются! Кусаться могут только начинки.</p>
            <p className="light">Покусай начинку в ответ - докажи, что клиент всегда прав!</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center  brown-text"><i className="material-icons medium">accessible</i></h2>
            <h5 className="center">Быстро</h5>

            <p className="light">Наши доставки самые быстрые в мире! Если ваш заказ не был доставлен в течение 5 минут - вы можете на ваше усмотрение выбрать наказание для курьера! </p>
            <br></br>
            <p className="light" style={{fontSize: "10px"}}>PS: Мы не можем гарантировать, что курьер не будет сопротивляться.</p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <br></br>
  <br></br>
  <br></br>
    </>

    )
}

export {About};