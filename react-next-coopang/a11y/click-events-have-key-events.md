# click-events-have-key-events

onClick을 사용할 때는 아래 세 가지 onKey* 핸들러 중에 하나를 같이 사용하면 됩니다.


onKeyDown, onKeyUp, onKeyPress

<div onClick={fn} onKeyDown={handleKeyDown} />
<div onClick={fn} onKeyUp={handleKeyUp} />


<div onClick={fn} />