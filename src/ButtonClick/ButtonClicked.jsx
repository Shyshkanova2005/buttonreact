import './ButtonClicked.css'

export default function ButtonClicked({children, buttonClicked}) {

    return (
      <button
        className="buttonclicked" onClick={buttonClicked} >{children}
      </button>
    )
  }
  