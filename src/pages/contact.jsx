import contactBG from "../assets/contact-bg.jpg"

function Contact () {
    return(
        <>
<br></br>
        <br></br>
        <div className="row contact">
        

<div className="row">
    <div className="col">
      <div className="card">
        <div className="card-image">
          <img src={contactBG} />
        </div>
        <div className="card-content">
          <p>ул. Калинина, 7, стр. 1, Химки</p>
        </div>
        <div className="card-action">
          <a href="https://yandex.ru/maps/" className="brown-text">Маршрут</a>
          <a href="https://yandex.ru/maps/" className="right brown-text"><i className="material-icons small">map</i></a>
        </div>
      </div>
    </div>
  </div>



        <br></br>
        <br></br>
         <div className="row">
            <h5 className="brown-text">Форма для обратной связи</h5>
           
    <form className="col">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Имя" id="first_name" type="text" className="validate" />
          <label for="first_name"></label>
        </div>
        <div className="input-field col s6">
          <input placeholder="Фамилия" id="last_name" type="text" className="validate" />
          <label for="last_name"></label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12" >
          <input  placeholder="Email" id="email" type="email" className="validate" />
          <label for="email"></label>
        </div>
      </div>
      <button class="btn waves-effect waves-light brown" type="submit" name="action">Отправить<i class="material-icons right">send</i>
  </button>

    </form>
  </div>
  </div>
       
        </>
    );
        

}

export {Contact};