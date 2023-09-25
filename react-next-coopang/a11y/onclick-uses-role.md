# onclick-uses-role

상호작용 가능한 태그 `input`, `button`
상호작용 가능하지 않은 태그 `div`, `section`, `span`

<!-- O -->

<span onclick={fn} role="button"></span>

<span onclick={fn} aria-hidden="true"></span>

<button onclick={fn}></button>

<!-- X -->

<span onclick={fn} ></span>

<div id="fruit-group">과일</div>
<ul role="group" aria-labelledby="fruit-group">
    <li>
        <input id="apple" type="radio" value="apple" 
         checked="checked">
        <label for="apple">사과</label>
    </li>
    <li>
        <input id="grape" type="radio" value="grape">
        <label for="grape">포도</label>
    </li>
    <li>
        <input id="orange" type="radio" value="orange">
        <label for="orange">오렌지</label>
    </li>
</ul>
