function throttle(func,delay){
    let that=this
    let args=arguments
    let timer;
    return function(){
        if(timer)  return
        // afasf
        console.log('tim3232er',timer);
        // func.call(that,...args)
        timer= setTimeout(()=>{
            func.call(that,...args)
            timer=null
        },delay)
    }
}
export default throttle