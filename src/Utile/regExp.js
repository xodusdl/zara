// 가격 세자리수 ,설정 함수 
const regExp = {
    comma: (value) => {
        if (value) return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}

export default regExp