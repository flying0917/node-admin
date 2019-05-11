var newEUR=''; //存储EUR数据
var newGBP=''; //存储GBP数据
var newJPY=''; //存储EUR数据
var newUSD=''; //存储EUR数据

//获取当前时间
var time=new Date();
function commonTime(){
    let year=time.getFullYear();
    let month=time.getMonth()+1;
    var clock = year + "-";
    if(month<10){
        clock+="0";
    } 
    clock += month + "-";
       
    return clock;
}
function dayTime(){
    var daytime="";
    let day=time.getDate();
    if(day<10){
        daytime+="0";
    }
    daytime+=day;
    return daytime;
}
var nowTime=commonTime()+dayTime();//今天日期
var yesterday=commonTime()+(dayTime()-1);//昨天日期
console.log(nowTime);
console.log(yesterday);

// ajax请求
//EURUSD
$.ajax({
    type:'Get',
    url: 'https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=5PKPJ1FH08PPHK3L',
    dataType: 'json',
    success:function(data){
        newEUR=data['Time Series FX (Daily)'];
        console.log(newEUR[nowTime]['1. open']);
        $('#EURvalue')[0].innerHTML=newEUR[nowTime]['1. open'];
        let num=newEUR[nowTime]['1. open']-newEUR[yesterday]['4. close'];
        console.log(num);
        if(num){
            $('#EURcount').addClass('text-success');
            $('#EURcount i').addClass('mdi-arrow-up-bold');
            $('#EURcount')[0].innerText=((Math.abs(num/newEUR[yesterday]['4. close'])*100).toFixed(4)+'%');
        }
        else{
            $('#EURcount').removeClass('text-success');
            $('#EURcount').addClass('text-danger');
            $('#EURcount i').removeClass('mdi-arrow-up-bold');
            $('#EURcount i').addClass('mdi-arrow-down-bold');
            $('#EURcount')[0].innerText=((Math.abs(num/newEUR[yesterday]['4. close'])*100).toFixed(4)+'%');
        }

    },
    error:function(){
        console.log('errorEUR');
    }
});
// GBPUSD
$.ajax({
    type:'Get',
    url: 'https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=USD&to_symbol=GBP&interval=5min&apikey=5PKPJ1FH08PPHK3L',
    dataType: 'json',
    success:function(data){
        newGBP=data['Time Series FX (Daily)'];
        console.log(newGBP[nowTime]['1. open']);
        $('#GBPvalue')[0].innerHTML=newGBP[nowTime]['1. open'];
        let num=newGBP[nowTime]['1. open']-newGBP[yesterday]['4. close'];
        console.log(num);
        if(num){
            $('#GBPcount').addClass('text-success');
            $('#GBPcount i').addClass('mdi-arrow-up-bold');
            $('#GBPcount')[0].innerText=((Math.abs(num/newGBP[yesterday]['4. close'])*100).toFixed(4)+'%');
        }
        else{
            $('#GBPcount').removeClass('text-success');
            $('#GBPcount').addClass('text-danger');
            $('#GBPcount i').removeClass('mdi-arrow-up-bold');
            $('#GBPcount i').addClass('mdi-arrow-down-bold');
            $('#GBPcount')[0].innerText=((Math.abs(num/newEUR[yesterday]['4. close'])*100).toFixed(4)+'%');
        }

    },
    error:function(){
        console.log('errorGBP');
    }
});
// JPYUSD
$.ajax({
    type:'Get',
    url: 'https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=USD&to_symbol=JPY&interval=5min&apikey=5PKPJ1FH08PPHK3L',
    dataType: 'json',
    success:function(data){
        newJPY=data['Time Series FX (Daily)'];
        console.log(newJPY[nowTime]['1. open']);
        $('#JPYvalue')[0].innerHTML=newJPY[nowTime]['1. open'];
        let num=newJPY[nowTime]['1. open']-newJPY[yesterday]['4. close'];
        console.log(num);
        if(num){
            $('#JPYcount').addClass('text-success');
            $('#JPYcount i').addClass('mdi-arrow-up-bold');
            $('#JPYcount')[0].innerText=((Math.abs(num/newJPY[yesterday]['4. close'])*100).toFixed(4)+'%');
        }
        else{
            $('#JPYcount').removeClass('text-success');
            $('#JPYcount').addClass('text-danger');
            $('#JPYcount i').removeClass('mdi-arrow-up-bold');
            $('#JPYcount i').addClass('mdi-arrow-down-bold');
            $('#JPYcount')[0].innerText=((Math.abs(num/newEUR[yesterday]['4. close'])*100).toFixed(4)+'%');
        }

    },
    error:function(){
        console.log('errorJPY');
    }
});
//USDAUD
$.ajax({
    type:'Get',
    url: 'https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=USD&to_symbol=AUD&interval=5min&apikey=5PKPJ1FH08PPHK3L',
    dataType: 'json',
    success:function(data){
        newUSD=data['Time Series FX (Daily)'];
        console.log(newUSD[nowTime]['1. open']);
        $('#USDvalue')[0].innerHTML=newUSD[nowTime]['1. open'];
        let num=newUSD[nowTime]['1. open']-newUSD[yesterday]['4. close'];
        console.log(num);
        if(num){
            $('#USDcount').addClass('text-success');
            $('#USDcount i').addClass('mdi-arrow-up-bold');
            $('#USDcount')[0].innerText=((Math.abs(num/newUSD[yesterday]['4. close'])*100).toFixed(4)+'%');
        }
        else{
            $('#USDcount').removeClass('text-success');
            $('#USDcount').addClass('text-danger');
            $('#USDcount i').removeClass('mdi-arrow-up-bold');
            $('#USDcount i').addClass('mdi-arrow-down-bold');
            $('#USDcount')[0].innerText=((Math.abs(num/newEUR[yesterday]['4. close'])*100).toFixed(4)+'%');
        }

    },
    error:function(){
        console.log('errorUSD');
    }
});