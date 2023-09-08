// 문서 준비 이벤트
$(function() {
    // 이벤트 처리 메소드
    // - on('이벤트 타입', 이벤트 핸들러(콜백함수) { })
    // * 이벤트 타입    : click, keyup, change ...
    // * 이벤트 핸들러  : 이벤트 발생 시, 실행될 콜백 함수

    // 콜백함수
    // - function() : $(this) 사용 가능
    // - () => {}   : $(this) 사용 불가


    $('#item1').on('click', function() {
        $('#item1').css('color', 'hotpink')
    })



    // this : 현재 속한 블록의 객체
    //        현재 선택한 요소를 가리키는 키워드
    $('#item2').on('click', function() {
        $(this).css('color', 'pink')
        // 9ln처럼 직접 item1 이렇게 작성 안해도 this로 이 객체 자기 자신을 가리킬 수 있따.
    })



    // mouseover    : 마우스 올렸을 때 이벤트
    $('#item3').on('mouseover', function() {
        $(this).css('color', 'darkgreen')
        $(this).css('background-color', 'black')
    })
    // mouseout     : 마우스 벗어날 때 이벤트
    $('#item3').on('mouseout', function() {
        $(this).css('color', 'white')
        $(this).css('background-color', 'rgb(43, 170, 187)')
    })



    // 메소드 체인
    // : 하나의 jQuerry 객체에 여러 메소드를 연결하는 기법
    $('#item4')
        .on('mouseover', function() {
            $(this).css('color', 'darkgreen')
            $(this).css('background-color', 'black')
        })
        .on('mouseout', function() {
            $(this).css('color', 'white')
            $(this).css('background-color', 'rgb(43, 170, 187)')
        })



    $('#item5')
    .on('mouseover', function() {
        $(this).css('color', 'red')
        $(this).css('background-color', 'cornflowerblue')
    })
    .on('mouseout', function() {
        $(this).css('color', 'white')
        $(this).css('background-color', 'royalblue')
    })
    .on('click', function() {
        $(this).css('color', 'springgreen')
    })
    .on('dblclick', function() {
        $(this).css({
            'border'            : '10px solid hotpink',
            'background-color'  : 'black'
        })
    })
})